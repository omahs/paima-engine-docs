# EVM Block Funnel

Block funnel is the most standard funnel type in Paima. It simply downloads the blocks from the RPC provider for the chain you are deploying to.

## Configuration

```yaml
Hardhat1:
  type: evm-main
  chainUri: 'http://localhost:8545'
  chainId: 31337
  chainCurrencyName: 'Test Hardhat Tokens'
  chainCurrencySymbol: 'TEST'
  chainCurrencyDecimals: 18
  blockTime: 2
  paimaL2ContractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3'
```

## Conceptually

Notably, block funnel will do the following:
1. Get the latest block number using `eth_blockNumber` so we know how far we are from the tip, and cache it to `latestAvailableBlockNumber`
1. Fetch a group of `DEFAULT_FUNNEL_GROUP_SIZE` blocks (or less if we're already at the tip)
1. Fetch any [dynamic primitive](../10-primitive-catalogue/10-evm/200-dynamic-primitives.md) that needs to be registered
1. Fetch all the block numbers needed in parallel using `eth_getBlockByNumber`
1. Fetch all the `PaimaGameInteraction` Solidity events for the block range using `eth_getLogs`
1. Fetch all the [Primitives](../10-primitive-catalogue/1-introduction.md) for the block range using `eth_getLogs`

Here is a visual representation of the flow:

```mermaid
stateDiagram-v2
    [*] --> RequestBlockNumber
    
    RequestBlockNumber: Request latest block number (<i>eth_blockNumber</i>)

    DynamicPrimitives: Get dynamic primitive updates (<i>eth_getLogs</i>)
    RequestBlockNumber --> DynamicPrimitives
    
    fork_state: fetch remote data for the next group of block numbers
    DynamicPrimitives --> fork_state
    state fork_state <<fork>>

    GetBlock: Get block (<i>eth_getBlockByNumber</i>)

    GetLogs: Get logs for primitives (<i>eth_getLogs</i>)

    fork_state --> GetBlock
    fork_state --> GetLogs
    
    join_state: merge data together
    state join_state <<join>>
    
    GetBlock --> join_state
    GetLogs --> join_state
    
    join_state --> ProcessData
    
    ProcessData: Decode block data into rollup data format

    ProcessData --> FeedDataToSM
    
    FeedDataToSM: Feed data to user-specified state machine
    
    FeedDataToSM --> [*]
```


## Fetching more than just logs

Note that all the primitives for this funnel are based on `eth_getLogs`. That is to say, there is no way to access data outside of these events provided by the funnel itself. If you need this functionality, there are a way few ways that it can be achieved:

1. Use `eth_call` in your state machine once your state transition function gets triggered by an event. You can use this to read from contract storage. **Note**: when doing this, be sure to specify the block height for the call to make sure it matches the same block height of your STF call, otherwise this will not be deterministic. Be careful if this event comes from a different chain than your main chain (see [this issue](https://github.com/PaimaStudios/paima-engine/issues/412) for more)
    - **Benefit**: Conceptually simple
    - **Drawback**: `eth_call` only support getting the state of a contract *after* all transactions in that block have been processed. This means that if multiple transactions interact with your dApp in the same block, the data may not longer match the state when the event happened.
2. Use `debug_traceTransaction` in your state machine once your state transition function gets triggered by an event. When run in `prestateTracer` mode, it can tell you the storage modified by a specific transaction. You can use `eth_getStorageAt` to get the initial storage state of the contract, then repeatedly apply `debug_traceTransaction` all the way until you et to the desired transaction hash.
    - **Benefit**: Gets you the exact state when for the transaction where the event was emitted
    - **Drawback**: It's extremely hard to reason about the correctness of this approach (How do you simulate the transaction up to the exact point when the event was emitted if you need that? What if the event gets emitted twice in the same transaction? What if the event or contract occurs multiple times in the transaction (see: internal transactions)). It is also heavy, as it requires not only multiple RPC calls, but also because some of these RPC calls return large data payloads.
3. (if you can modify the contract) simply modify your event to include any information you need
    - **Benefit**: Conceptually simple
    - **Drawback**: It may not be possible if your contract is already live. Additionally, logging more data increases the gas cost.
4. (if you can't modify the contract) sse a separate tool like [Shadow](`https://www.shadow.xyz/`) to simulate modifying the logs emitted by the contract
    - **Benefit**: Allows you to modify the events to get the data you need, even if your contract is already live
    - **Drawback**: Introduces a dependency on an external company
