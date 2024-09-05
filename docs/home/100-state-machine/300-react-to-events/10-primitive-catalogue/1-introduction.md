---
sidebar_position: 2
---

# Primitive Catalogue

When writing an application, you often want to update your application based on common patterns (ex: token transfers). Instead of having to re-implement these patterns from scratch every time, Paima Engine can automatically do the heavy work for you via a feature called the _Primitive Catalogue_.

Primitives allow you to tap into these standards trustlessly from multiple locations (such as various L1/L2s) to either for simple accounting purposes (ex: keep track of token ownership by accounts) or for triggering more update complex logic specified by your application's state machine. The goal is the Primitive Catalogue is to be the Library of Alexandria of primitives necessary to build onchain games.

<div style={{textAlign: 'center'}}>
![](./primitive-catalogue.png)
</div>

The basic approach is simple: you set up a config file where you specify what contracts you want to collect data from, and Paima Engine automatically projects the emitted event data to your game node. In other words, when you then run your game node, it will automatically acquire the data for you along with a simple-to-use interface in the Paima SDK to allow you to access this data.

Paima Engine currently supports many different kinds of primitives that you can find in this section of the documentation.

## Configuration

To specify which Primitives you are using for your game, you need to provide a configuration file. By default, a file named `extensions.yml` in your root directory (same place as the `.env` file) is expected, but you may adjust this path using the `CDE_CONFIG_PATH` environment variable. We recommend using `extensions.$NETWORK.yml` to have different files depending on which network you're deploying your rollup to (ex: `localhost` or `mainnet`)

Here is an example `extensions.yml` that you can copy paste into the root folder of your project:

```yaml
extensions:
  - name: "My NFT Contract"
    type: "erc721"
    contractAddress: "0x01...EF"
    startBlockHeight: 7654321
    scheduledPrefix: "newnft"
```

Note that extensions of different types often require slightly different fields &ndash; this will be described in their respective sections. However, here is a quick overview of the purposes of each field in the above config:

- `name`: This field allows you to refer to this particular extension when using the Paima SDK functions for accessing the data it has collected;
- `type`: This specifies which extension you want to use, currently supporting values corresponding to the types of extensions described in later subsections (such as `erc20`)
- `contractAddress`: The address of the contract to read data from;
- `startBlockHeight`: The starting blockheight from which you want the data to be read, zero by default; You should always set this to the block height that the smart contract was deployed on when in production.
- `scheduledPrefix`: For extensions that trigger scheduled inputs (ERC721 and ERC20Deposit) specifies the prefix used with these scheduled inputs;
- `depositAddress`: This field is only used by the ERC20Deposit extension type to specify the target address of transactions you are interested in tracking.
- `network` (see [here](../3-funnel-types/200-configuration.md) to learn about handling primitives for multiple networks)

If you try to run your game node with an invalid or non-existent Primitive Catalogue config file, Paima Engine will report the problem to you and then carry on as if no Primitives were specified.

## Accessing the collected data

Primitive data is written directly ledger state for your rollup including the underlying database. You can learn more about how to fetch the information aggregated either from your state machine or from the SQL queries by reading the documentation for the corresponding primitive. 

Each extension may provide data to your game in one (or both) of the two ways below:

### *Implicit ledger state*

Some primitives work by collecting the data and saving it into your game database directly without necessarily triggering your STF directly. This is useful if you want to passively aggregate information for future use in your application (ex: keep track of user token balances) without having to write no-op STF handlers for all of them.

In this case, the data can still be access through SQL queries directly for the corresponding database, and you can also access it through Javascript with opinionated APIs through primitive-specific utility functions.

Note that, given these modify implicit ledger state, these will not modify the block hash of your L2 blocks (this is industry standard, in the same way that for other blockchains things like epoch transitions are not reflected in the block hash)

### *Explicit ledger state*

Some primitives work by creating [scheduling inputs](../../325-creating-events/50-timers-ticks.md) when certain events happen, which you can then react to in your [state transition function](../../../read-write-L2-state/read-data#stf-function).

The exact data passed to your STF depends on the extension, and you can read the documentation of each extension to learn more. 

Given these primitive trigger a state transition, they are also each given a transaction hash, and the call triggered by a scheduled input originating from a Primitive can also access:
- `inputData.scheduledTxHash`: the original transaction hash that triggered this primitive
- `inputData.extensionName`: the primitive that triggered the STF (name specified in your config file)
- `caip2`: the [caip2](https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md) id of the chain that triggered the event

The inputs are always scheduled either for the current blockheight (which enables them to be processed immediately, as scheduled inputs are processed before the state transition function is called), or, if they are triggered before the overall `START_BLOCKHEIGHT` of the game node (specified in the `.env` file), in the so-called _pre-sync_ phase, they are scheduled for `START_BLOCKHEIGHT + 1` (which is the first blockheight for which the state transition function is called). The scheduled inputs will always start with the prefix specified in the config as `scheduledPrefix`.

<!-- TODO: this template is deprecated -->
<!-- To learn by example, please consult the NFT LvlUp game template &ndash; `./paima-engine-linux init template nft-lvlup` to learn more. -->

## Relation to funnels

Paima [funnels](../3-funnel-types/1-common-concepts/1-intro.md) are in charge of fetching data from various sources for your game, including data for the Primitive Catalogue which are stored as part of `ChainData`. Depending on where the data you want to access comes from, you may have to add an extra funnel to your game.
