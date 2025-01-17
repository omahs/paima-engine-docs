---
sidebar_position: 1
---

# Timers & Ticks

Games heavily rely on passive time to trigger events (often based on *ticks*), such as limits on the length of a match or the duration of status effects. Paima supports these through a generic system called `scheduledData` that keeps track of which inputs (that conform to your app's grammar) to trigger at which block height (used instead of timestamps).

Paima will fetch, execute and commit the result of any scheduled data for a block *BEFORE* it considers any regular input inside the block.

There are three common usages of timers in Paima

## 1. Durations

There are two functions for scheduling events
- `createScheduledData(inputData: string, { target: blockHeight: number }, { precompile: string }): SQLUpdate`
- `deleteScheduledData(inputData: string, { blockHeight: number | null }): SQLUpdate`

These can be used to schedule an event that happens in 5 minutes (ex: a potion whose status wears off eventually).

The `precompile` argument in `createScheduledData` needs to be one of the values of the object defined through [paima precompiles](../325-creating-events/300-precompiles/100-introduction.md). The associated precompile address will be used as the `userAddress` when the event is triggered.

:::tip
Scheduled data works off of `blockHeight` and not timestamps. You can learn more about the technical challenges that lead to this design, as well as ways to mitigate this in the [emulated block docs](../300-react-to-events/3-funnel-types/400-stable-tick-rate-funnel.mdx).

When possible, it's best to design your system to not require precise time. For example, instead of calculating rewards every 24hrs exactly, it's easier to schedule timer that triggers *approximately* every 24hrs, and prorate the rewards based on how much time has easily passed.

For example, if you have an schedule that distributed points at 0:00 UTC by guessing how many blocks will happen during that time interval, it's possible the event gets triggered after only 23hrs have passed. In that case, you can just hand out 23hrs worth of rewards and schedule the next payout at the next 0:00 which will be 25hrs away. 

You can read more about ongoing work on this topic [here](https://github.com/PaimaStudios/paima-engine/issues/413)
:::

### Time limits

Some games leverage time limits to perform an action (ex: 5 minutes to make a move, otherwise your turn is skipped)

Handling this kind of use-case typically involve the following steps:
1. When their turn starts, create a timer (`createScheduledData`) that skips their turn in 5 minutes
2. If they make a move, use `deleteScheduledData` to delete their timer (and process their move)
3. If they don't make a move, the timer from (1) will trigger so that your state machine can skip their turn (or any other cleanup required)

We call this kind of state transition a `zombie` (or `zombie round`) as it's usually used to process a move if the player is no longer alive (ex: they left their keyboard so the timer expires and their turn is skipped).

### Globally Recurring events

It is common to require to recurring events with no clear start trigger. For example: 
  * Spawn monsters every 5 minutes
  * Cleanup stats once a day
  * Calculate prizes once a week

To do this we can set up a "recursive" scheduled event
1. Specify the initial trigger as a SQL migration
2. Have every trigger schedule the next trigger

<details>
    <summary>Example</summary>

*Note*: this API is planned to improve in the future. See [here](https://github.com/PaimaStudios/paima-engine/issues/414) for more

1. Register your precompile

You can learn more about precompiles [here](./300-precompiles/100-introduction.md).

2. Add a Migration at `1.SQL`

Create `db/migrations/1.sql` and add an input to execute the first schedule. 

For example, imagine we created a precompile called `reset-leaderboard`

```SQL wordWrap=true
WITH
  new_tick AS (
    INSERT INTO rollup_inputs (from_address, input_data )
    VALUES (
      your_precompile_address_hash,
      your_data_here
    )
    RETURNING id AS new_tick_id
  ),
  future_block AS (
    INSERT INTO rollup_input_future_block (id, future_block_height )
    VALUES (
      (SELECT new_tick_id FROM new_tick),
      -- get the latest block + 1
      coalesce((
        SELECT block_height
        FROM paima_blocks
        ORDER BY block_height DESC
        LIMIT 1
      ), 0) + 2
    )
  )
INSERT INTO rollup_input_origin (id, primitive_name, caip2, tx_hash)
SELECT new_tick_id, NULL, NULL, NULL
FROM new_tick

```

*NOTE*: You can replace the value for the `block_height` if you need to run this at a specific time  
This is possible with blockchains with known block generation time or with [Emulated Blocks mode](../300-react-to-events/3-funnel-types/400-stable-tick-rate-funnel.mdx). 

3. Add a Paima Concise Command
Modify `state-transition/src/stf/v1/parser.ts` (or where you have the Paima Concise Grammar).

Add a command to the list a new command:
```ts
const myGrammar = `
// highlight-next-line
 scheduleHourly          = hour|tick
`;

const parserCommands = {
  // highlight-next-line
    scheduleHourly: {
       tick: PaimaParser.NumberParser(0),
    },
}
```

Add your interface: (Generally located at `state-transition/src/stf/v1/types.ts`) 
```ts
export type ParsedSubmittedInput =
  | ScheduleHourlyInput

export interface ScheduleHourlyInput {
  input: 'scheduleHourly';
  tick: number;
}
```

4. Add an STF Function to process and create the next event

Capture the input in the STF and process it (Generally in `state-transition/src/stf/v1/index.ts`)

```ts
import type { SubmittedChainData } from '@paima/sdk/chain-types';
import type Prando from '@paima/sdk/prando';
import type { Pool } from 'pg';
import type { PreExecutionBlockHeader } from '@paima/sdk/chain-types';

export default async function (
  inputData: STFSubmittedData,
  blockHeader: PreExecutionBlockHeader,
  randomnessGenerator: Prando,
  dbConn: Pool
): Promise<{ stateTransitions: SQLUpdate[]; events: Events }> {

  const input = parse(inputData.inputData);

  // highlight-start
  if (input.input === 'scheduleHourly') {
    // Check if sent by the scheduler. Users might post the same input payload.
    if (inputData.realAddress === SCHEDULED_DATA_ADDRESS) {
  // highlight-end
        const commands: SQLUpdate[] = [];
        console.log('This message appears each hour!');
        console.log('This is tick number', input.tick);
        /* Add your custom logic */
        
        // Calculate the number of blocks in 1 hour. 
        const hourSeconds = 60 * 60;
        const hourBlocks = hourSeconds / ENV.BLOCK_TIME;
        
        // highlight-start
        commands.push(createScheduledData(
                `hour|${input.tick + 1}`,
                 { blockHeight: blockHeader.blockHeight + hourBlocks }
                 { precompile: your_precompile_here }
        ));
        // highlight-end
        
        return { stateTransitions: commands, events: [] };
    }
  }
  ...
}
```

You will see in the console:
```
This message appears each hour!
This is tick number 0
This message appears each hour!
This is tick number 1
This message appears each hour!
This is tick number 2
...
```

IMPORTANT: It is very important that the scheduler does NOT return an SQL statement that might be rejected (e.g., duplicated primary key) if there is any invalid SQL command the entire list of commands is discarded, and the recursive schedule will not be inserted.
</details>


## 2. Synchronizing access to a shared state

See [parallelism](../100-define-machine/200-parallelism.md)

## 3. Primitives

Event found by [primitives](./primitive-catalogue/introduction#accessing-the-collected-data) are scheduled to occur when the rollup's state machine reaches the block height in which they're found.
