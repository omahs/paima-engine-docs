"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is Paima Engine?","href":"/","docId":"home/what-is-paima-engine"},{"type":"category","label":"Setting-up Your Environment","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How To Use Paima Engine","href":"/home/setup/how-to-use-paima-engine","docId":"home/setup/how-to-use-paima-engine"},{"type":"link","label":"Deploying The Paima L2 Smart Contract","href":"/home/setup/deploying-l2-smart-contract","docId":"home/setup/deploying-l2-smart-contract"},{"type":"link","label":"Deploying Your Own Stateful NFT Contract","href":"/home/setup/deploying-your-stateful-nft","docId":"home/setup/deploying-your-stateful-nft"},{"type":"link","label":"Environment Configuration Variables","href":"/home/setup/environment-config-values","docId":"home/setup/environment-config-values"},{"type":"link","label":"Paima Batcher","href":"/home/setup/paima-bacher","docId":"home/setup/paima-bacher"}]},{"type":"category","label":"Read & Write L2 State","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Read and Write to L2 state","href":"/home/read-write-L2-state/base-format","docId":"home/read-write-L2-state/base-format"},{"type":"link","label":"Sequential State Identifier","href":"/home/read-write-L2-state/parallelism","docId":"home/read-write-L2-state/parallelism"},{"type":"link","label":"Error Handling","href":"/home/read-write-L2-state/error-handling","docId":"home/read-write-L2-state/error-handling"},{"type":"link","label":"Posting Test Game Inputs To L2 Contract","href":"/home/read-write-L2-state/posting-test-game-inputs","docId":"home/read-write-L2-state/posting-test-game-inputs"},{"type":"link","label":"Batched mode","href":"/home/read-write-L2-state/batched-mode","docId":"home/read-write-L2-state/batched-mode"},{"type":"link","label":"Replay protection","href":"/home/read-write-L2-state/replay-protection","docId":"home/read-write-L2-state/replay-protection"},{"type":"link","label":"Auto-signing for apps","href":"/home/read-write-L2-state/autosign","docId":"home/read-write-L2-state/autosign"}]},{"type":"category","label":"Reacting To Events","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Scheduling Events and Timers","href":"/home/react-to-events/scheduled-events","docId":"home/react-to-events/scheduled-events"},{"type":"category","label":"Chain Data Extensions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Chain Data Extensions (CDEs)","href":"/home/react-to-events/chain-data-extensions/introduction","docId":"home/react-to-events/chain-data-extensions/introduction"},{"type":"link","label":"ERC20 CDEs","href":"/home/react-to-events/chain-data-extensions/ERC20","docId":"home/react-to-events/chain-data-extensions/ERC20"},{"type":"link","label":"ERC721 CDEs","href":"/home/react-to-events/chain-data-extensions/ERC721","docId":"home/react-to-events/chain-data-extensions/ERC721"},{"type":"link","label":"Generic CDE","href":"/home/react-to-events/chain-data-extensions/Generic","docId":"home/react-to-events/chain-data-extensions/Generic"}]},{"type":"link","label":"L2 Quirks","href":"/home/react-to-events/L2-quirks","docId":"home/react-to-events/L2-quirks"},{"type":"category","label":"Funnel Types","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Paima Funnel","href":"/home/react-to-events/funnel-types/intro","docId":"home/react-to-events/funnel-types/intro"},{"type":"link","label":"Block Funnel","href":"/home/react-to-events/funnel-types/block-funnel","docId":"home/react-to-events/funnel-types/block-funnel"},{"type":"link","label":"Stable Tick Rate","href":"/home/react-to-events/funnel-types/stable-tick-rate-funnel","docId":"home/react-to-events/funnel-types/stable-tick-rate-funnel"}]}]},{"type":"link","label":"Randomness","href":"/home/randomness/","docId":"home/randomness/index"},{"type":"category","label":"Database Management","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Database Snapshotting","href":"/home/database-management/snapshotting","docId":"home/database-management/snapshotting"}]},{"type":"category","label":"Releasing a Game","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Game Versioning","href":"/home/releasing-a-game/versioning","docId":"home/releasing-a-game/versioning"}]},{"type":"category","label":"Multichain Support","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Projected NFTs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/home/multichain-support/projected-nfts/introduction","docId":"home/multichain-support/projected-nfts/introduction"},{"type":"category","label":"Cross-chain NFTs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basics","href":"/home/multichain-support/projected-nfts/cross-chain/basics","docId":"home/multichain-support/projected-nfts/cross-chain/basics"},{"type":"link","label":"Cardano","href":"/home/multichain-support/projected-nfts/cross-chain/cardano","docId":"home/multichain-support/projected-nfts/cross-chain/cardano"}]}]},{"type":"link","label":"Wallet Layer","href":"/home/multichain-support/wallet-layer","docId":"home/multichain-support/wallet-layer"}]},{"type":"link","label":"Paima Game Templates","href":"https://github.com/PaimaStudios/paima-game-templates"},{"type":"link","label":"Paima Studios Website","href":"https://paimastudios.com"}]},"docs":{"home/database-management/snapshotting":{"id":"home/database-management/snapshotting","title":"Database Snapshotting","description":"Paima will periodically generate local snapshots of the database. This is useful for two main cases:","sidebar":"tutorialSidebar"},"home/multichain-support/projected-nfts/cross-chain/basics":{"id":"home/multichain-support/projected-nfts/cross-chain/basics","title":"Basics","description":"The goal of cross-chain NFTs is to allow people to play with NFTs from one chain in a game hosted on a different chain without requiring any bridge of centralized solution.","sidebar":"tutorialSidebar"},"home/multichain-support/projected-nfts/cross-chain/cardano":{"id":"home/multichain-support/projected-nfts/cross-chain/cardano","title":"Cardano","description":"Block timing","sidebar":"tutorialSidebar"},"home/multichain-support/projected-nfts/introduction":{"id":"home/multichain-support/projected-nfts/introduction","title":"Introduction","description":"The Projected NFT Whirlpool system allows existing NFTs to be used in games written with Paima without requiring an NFT bridge - even if the NFT lives on a different layer of the same chain, or on a different chain entirely.","sidebar":"tutorialSidebar"},"home/multichain-support/wallet-layer":{"id":"home/multichain-support/wallet-layer","title":"Wallet Layer","description":"Paima, although being EVM based, uses account abstraction to support wallets from multiple different cryptocurrencies. You can learn how to setup the batchers for account abstraction here.","sidebar":"tutorialSidebar"},"home/randomness/index":{"id":"home/randomness/index","title":"Randomness","description":"Randomness is an important part of many games and having a good source of randomness prevents users from abusing statistical trends to their own benefit.","sidebar":"tutorialSidebar"},"home/react-to-events/chain-data-extensions/ERC20":{"id":"home/react-to-events/chain-data-extensions/ERC20","title":"ERC20 CDEs","description":"- ERC20, keeping track of wallet balances for a specified ERC20 contract;","sidebar":"tutorialSidebar"},"home/react-to-events/chain-data-extensions/ERC721":{"id":"home/react-to-events/chain-data-extensions/ERC721","title":"ERC721 CDEs","description":"- ERC721, keeping track of NFT ownership for a specified ERC721 contract at the currently processed blockheight, as well as generating scheduled inputs for newly minted NFTs;","sidebar":"tutorialSidebar"},"home/react-to-events/chain-data-extensions/Generic":{"id":"home/react-to-events/chain-data-extensions/Generic","title":"Generic CDE","description":"- Generic, allowing you to provide an arbitrary contract ABI and the signature of the event to track, allowing you to collect data even from smart contracts not directly supported by the above types.","sidebar":"tutorialSidebar"},"home/react-to-events/chain-data-extensions/introduction":{"id":"home/react-to-events/chain-data-extensions/introduction","title":"Chain Data Extensions (CDEs)","description":"When you are looking to add deep blockchain integration to your game, you will likely be interested in accessing information about ownership of ERC721s (NFTs) or a wallet\'s balance of ERC20 tokens for example. Paima Engine enables this by automatically doing the heavy work for you via a feature called Chain Data Extensions. CDEs allow you to read data trustlessly from multiple locations such as the underlying L1.","sidebar":"tutorialSidebar"},"home/react-to-events/funnel-types/block-funnel":{"id":"home/react-to-events/funnel-types/block-funnel","title":"Block Funnel","description":"Block funnel is the most standard funnel type in Paima. It simply downloads the blocks from the RPC provider for the chain you are deploying to.","sidebar":"tutorialSidebar"},"home/react-to-events/funnel-types/intro":{"id":"home/react-to-events/funnel-types/intro","title":"Paima Funnel","description":"A core library which allows a consumer to initialize a chain funnel object which holds state regarding:","sidebar":"tutorialSidebar"},"home/react-to-events/funnel-types/stable-tick-rate-funnel":{"id":"home/react-to-events/funnel-types/stable-tick-rate-funnel","title":"Stable Tick Rate","description":"Not every blockchain has a predictable block time. This is especially true of L2s like Arbitrum that only create batches when there is at least 1 transaction to post to the L1","sidebar":"tutorialSidebar"},"home/react-to-events/L2-quirks":{"id":"home/react-to-events/L2-quirks","title":"L2 Quirks","description":"L2s often have different definitions for certain fields inside blocks. If you are deploying a game with Paima on top of one of these L2s, you need to understand the meaning of these values to avoid tipfalls. To facilitate these, we\'ve generated a table of the meaning of these values for the most commons L2s.","sidebar":"tutorialSidebar"},"home/react-to-events/scheduled-events":{"id":"home/react-to-events/scheduled-events","title":"Scheduling Events and Timers","description":"Games heavily rely on passive time to trigger events, such as limits on the length of a match or the duration of status effects. Paima supports these through a generic system called scheduledData that keeps track of which inputs (that conform to your app\'s grammar) to trigger at which block height (used instead of timestamps).","sidebar":"tutorialSidebar"},"home/read-write-L2-state/autosign":{"id":"home/read-write-L2-state/autosign","title":"Auto-signing for apps","description":"Note: wallets that use this feature are still in development","sidebar":"tutorialSidebar"},"home/read-write-L2-state/base-format":{"id":"home/read-write-L2-state/base-format","title":"Read and Write to L2 state","description":"To be a rollup, Paima state has to eventually be written to the L1. As a sovereign rollup, the way the data is stored is fairly simple (calling a contract function that simply emits its input as an event) and we provide a way to generate a grammar for this data.","sidebar":"tutorialSidebar"},"home/read-write-L2-state/batched-mode":{"id":"home/read-write-L2-state/batched-mode","title":"Batched mode","description":"Paima supports two different modes for inputs:","sidebar":"tutorialSidebar"},"home/read-write-L2-state/error-handling":{"id":"home/read-write-L2-state/error-handling","title":"Error Handling","description":"Errors are unavoidable. Notably, be sure to take into accounts the following error types:","sidebar":"tutorialSidebar"},"home/read-write-L2-state/parallelism":{"id":"home/read-write-L2-state/parallelism","title":"Sequential State Identifier","description":"By default, updates to Paima state may be applied in parallel. This is powerful as it allows different matches played by different players to be run in parallel. However, moves by players in the same lobby need to be made sequential.","sidebar":"tutorialSidebar"},"home/read-write-L2-state/posting-test-game-inputs":{"id":"home/read-write-L2-state/posting-test-game-inputs","title":"Posting Test Game Inputs To L2 Contract","description":"Once you have the Paima L2 contract deployed for your game together with your game node up and running, you will inevitably want to test sending game inputs to the blockchain","sidebar":"tutorialSidebar"},"home/read-write-L2-state/replay-protection":{"id":"home/read-write-L2-state/replay-protection","title":"Replay protection","description":"Given that games made with Paima Engine are technically \\"open\\" (meaning anyone can submit valid game input), one thing which we need to look out for is replaying attacks. Replaying attacks are situations classically in blockchains (but liable to any openly accessible state machine) where a previous valid input is resubmitted to the state machine/blockchain. Usually this is done by bad actors, and can cause various issues.","sidebar":"tutorialSidebar"},"home/releasing-a-game/versioning":{"id":"home/releasing-a-game/versioning","title":"Game Versioning","description":"Games often require frequent updates to keep users engaged, so Paima makes releasing new versions of games as easy as possible.","sidebar":"tutorialSidebar"},"home/setup/deploying-l2-smart-contract":{"id":"home/setup/deploying-l2-smart-contract","title":"Deploying The Paima L2 Smart Contract","description":"The Paima L2 Contract is built for developers to deploy their own game as an L2 which seamlessly works with Paima Engine.","sidebar":"tutorialSidebar"},"home/setup/deploying-your-stateful-nft":{"id":"home/setup/deploying-your-stateful-nft","title":"Deploying Your Own Stateful NFT Contract","description":"Paima Engine supports both classical ERC721 NFT contracts and Paima Extended ERC721 NFT contracts for Stateful NFTs.","sidebar":"tutorialSidebar"},"home/setup/environment-config-values":{"id":"home/setup/environment-config-values","title":"Environment Configuration Variables","description":"The following is a list of possible environment variables that can be configured for your project. These variables are read in the ENV class, located in paima-sdk/paima-utils/config.js. Please refer to that file for more information on default values.","sidebar":"tutorialSidebar"},"home/setup/how-to-use-paima-engine":{"id":"home/setup/how-to-use-paima-engine","title":"How To Use Paima Engine","description":"Paima Engine is as an all-in-one batteries-included executable which provides you with everything you need to get started writing your own trustless Web3 game.","sidebar":"tutorialSidebar"},"home/setup/paima-bacher":{"id":"home/setup/paima-bacher","title":"Paima Batcher","description":"Paima Batcher is the first key component of the Paima Whirlpool infrastructure which enables cross-chain play (via account abstraction layer), automatically paying transaction fees for users, and decreasing overall fees by batching many game inputs together.","sidebar":"tutorialSidebar"},"home/what-is-paima-engine":{"id":"home/what-is-paima-engine","title":"What is Paima Engine?","description":"Paima is a Web3 Engine optimized for games, gamification and autonomous worlds that allows building web3 applications in just days","sidebar":"tutorialSidebar"}}}')}}]);