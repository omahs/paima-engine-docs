# Block Funnel

Block funnel is the most standard funnel type in Paima. It simply downloads the blocks from the RPC provider for the chain you are deploying to.

Notably, block funnel will do the following:
1. Get the latest block number using `eth_blockNumber` so we know how far we are from the tip, and cache it to `latestAvailableBlockNumber`
1. Fetch a group of `DEFAULT_FUNNEL_GROUP_SIZE` blocks (or less if we're already at the tip)
1. Fetch all the block numbers needed in parallel using `eth_getBlockByNumber`
1. Fetch all the `PaimaGameInteraction` Solidity events for the block range using `eth_getLogs`
1. Fetch all the [Primitives](../10-primitive-catalogue/1-introduction.md) for the block range using `eth_getLogs`

## Fetching more than just logs

Note that all the primitives for this funnel are based on `eth_getLogs`. That is to say, there is no way to access data outside of these events provided by the funnel itself. If you need this functionality, there are a way few ways that it can be achieved:

1. Use `eth_call` in your state machine once your state transition function gets triggered by an event. You can use this to read from contract storage. **Note**: when doing this, be sure to specify the block height for the call to make sure it matches the same block height of your STF call, otherwise this will not be deterministic. Be careful if this event comes from a different chain than your main chain (see [this issue](https://github.com/PaimaStudios/paima-engine/issues/412) for more)
    - **Benefit**: Conceptually simple
    - **Drawback**: `eth_call` only support getting the state of a contract *after* all transactions in that block have been processed. This means that if multiple transactions interact with your dApp in the same block, the data may not longer match the state when the event happened.
2. Use `debug_traceTransaction` in your state machine once your state transition function gets triggered by an event. When run in `prestateTracer` mode, it can tell you the storage modified by a specific transaction. You can use `eth_getStorageAt` to get the initial storage state of the contract, then repeatedly apply `debug_traceTransaction` all the way until you et to the desired transaction hash.
    - **Benefit**: Gets you the exact state when for the transaction where the event was emitted
    - **Drawback**: It's extremely hard to reason about (what if the event get emitted twice in the same transaction? Possibly during different internal transactions?). It is also heavy as it require not only multiple RPC calls, but also because some of these RPC calls return large data payloads.
3. (if you can modify the contract) simply modify your event to include any information you need
    - **Benefit**: Conceptually simple
    - **Drawback**: It may not be possible if your contract is already live. Additionally, logging more data increases the gas cost.
4. (if you can't modify the contract) sse a separate tool like [Shadow](`https://www.shadow.xyz/`) to simulate modifying the logs emitted by the contract
    - **Benefit**: Allows you to modify the events to get the data you need, even if your contract is already live
    - **Drawback**: Introduces a dependency on an external company
