"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[4675],{7826:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var a=i(5893),s=i(1151);const n={sidebar_position:1,slug:"/"},o="What is Paima Engine?",r={id:"home/intro/what-is-paima-engine",title:"What is Paima Engine?",description:"Paima is a Web3 Engine optimized for games, gamification and autonomous worlds that allows building web3 applications in just days",source:"@site/docs/home/0-intro/0-what-is-paima-engine.md",sourceDirName:"home/0-intro",slug:"/",permalink:"/",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/0-intro/0-what-is-paima-engine.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"How To Use Paima Engine",permalink:"/home/setup/how-to-use-paima-engine"}},l={},h=[{value:"State machines as Sovereign Rollup L2s",id:"state-machines-as-sovereign-rollup-l2s",level:2},{value:"Data Projections (co-processing)",id:"data-projections-co-processing",level:2},{value:"Sharded rollups as a multichain co-processor",id:"sharded-rollups-as-a-multichain-co-processor",level:2},{value:"Stateful NFTs and NFT compression",id:"stateful-nfts-and-nft-compression",level:2},{value:"Parallelization (asynchronous compute) to handle over 10k+ tps per game",id:"parallelization-asynchronous-compute-to-handle-over-10k-tps-per-game",level:2},{value:"Cross-chain/multichain and sequencing with Paima Whirlpool",id:"cross-chainmultichain-and-sequencing-with-paima-whirlpool",level:2},{value:"L2-level Account Abstraction",id:"l2-level-account-abstraction",level:3},{value:"Based rollup &amp; Sequencer SDKs",id:"based-rollup--sequencer-sdks",level:3},{value:"Cross-chain NFTs",id:"cross-chain-nfts",level:3},{value:"Non-custodial L2s",id:"non-custodial-l2s",level:2},{value:"Example game",id:"example-game",level:2},{value:"Ongoing work",id:"ongoing-work",level:2},{value:"Data availability layer support",id:"data-availability-layer-support",level:3},{value:"ZK (Zero-Knowledge Cryptography)",id:"zk-zero-knowledge-cryptography",level:3},{value:"Example game",id:"example-game-1",level:4},{value:"State Channels (Short-lived Shards)",id:"state-channels-short-lived-shards",level:3},{value:"AI",id:"ai",level:3},{value:"P2P layer",id:"p2p-layer",level:3},{value:"Commit-reveal",id:"commit-reveal",level:3},{value:"Optimistic Rollup disadvantages",id:"optimistic-rollup-disadvantages",level:2},{value:"ZK Rollup disadvantages",id:"zk-rollup-disadvantages",level:2},{value:"Sovereign Rollup disadvantages",id:"sovereign-rollup-disadvantages",level:2},{value:"Trickier DeFi support on the L2",id:"trickier-defi-support-on-the-l2",level:3},{value:"Low compatibility with other L1 dApps by default",id:"low-compatibility-with-other-l1-dapps-by-default",level:3},{value:"Trickier cross-game indexing",id:"trickier-cross-game-indexing",level:3}];function c(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"what-is-paima-engine",children:"What is Paima Engine?"}),"\n",(0,a.jsx)(t.p,{children:"Paima is a Web3 Engine optimized for games, gamification and autonomous worlds that allows building web3 applications in just days"}),"\n",(0,a.jsx)(t.p,{children:"Notably, its key features are that it"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Allows building onchain games with web2 skills"}),"\n",(0,a.jsx)(t.li,{children:"Protects users even in the case of hacks allowing brands to build web3 applications without worrying"}),"\n",(0,a.jsx)(t.li,{children:"Enables you to deploy your game to leverage multiple chains and modular stacks at once in a single unified user and developer experience"}),"\n",(0,a.jsx)(t.li,{children:"Speeds you up to make weekly releases a reality instead of most web3 games which are release-and-pray"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Paima supports multiple chains out of the box, making it a fully modular rollup framework."}),"\n",(0,a.jsx)(t.h1,{id:"key-technologies-that-enable-this",children:"Key technologies that enable this"}),"\n",(0,a.jsxs)(t.p,{children:["If you prefer explanations in video form, we have ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=HtvemijxF-0",children:"a high-level summary video"})," that explains some of the core benefits of Paima Engine."]}),"\n",(0,a.jsx)(t.h2,{id:"state-machines-as-sovereign-rollup-l2s",children:"State machines as Sovereign Rollup L2s"}),"\n",(0,a.jsx)(t.p,{children:"Rollups come in many forms, each converting execution costs to storage costs in their own way:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:['Optimistic rollups: run the calculation offchain, then store all the data required to execute the function (just data, no execution) along with your locally computed value for the result. Only actually run the execution if somebody believes the result you posted is incorrect ("fraud proof").',(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.em,{children:"Popular examples: Arbitrum, Optimism"})]}),"\n",(0,a.jsxs)(t.li,{children:["ZK rollups: run the calculation offchain, then store all the data required to execute the function (just data, no execution) along with your locally computed ZK proof of the result.",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.em,{children:"Popular examples: ZK Sync, Starknet, Polygon zkEVM"})]}),"\n",(0,a.jsxs)(t.li,{children:["Sovereign rollup: run the calculation offchain, then store all the data required to execute the function (just data, no execution).",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.em,{children:"Popular examples: Rollkit, most infra for Bitcoin"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Paima is a framework for creating app-specific layer 2s (L2s) as sovereign rollups. That is to say: apps publish transactions to a blockchain for ordering and data availability, but uses its own code to determine the correct app state."}),"\n",(0,a.jsx)(t.p,{children:"Another way to describe this is first to note that every mathematical function has 3 key properties:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Function inputs"}),"\n",(0,a.jsx)(t.li,{children:"Function definition"}),"\n",(0,a.jsx)(t.li,{children:"Function outputs"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For Paima, the inputs are stored on-chain (which guarantees determinism), the function definition is packaged as an executable for running the app, and the function output is the resulting state machine after applying the state transition (with the result queryable through an indexer that is part of the game node)."}),"\n",(0,a.jsxs)(t.p,{children:['You may sometimes hear this referred to as a "pessimistic rollup" because nodes need to re-execute transactions to check the validity of the chain instead of optimistically being able to assume correctness. This mirrors many ideas of ',(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/State_machine_replication",children:"replicated state machines"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:i(6755).Z+"",width:"689",height:"285"})}),"\n",(0,a.jsx)(t.h2,{id:"data-projections-co-processing",children:"Data Projections (co-processing)"}),"\n",(0,a.jsx)(t.p,{children:"These state machines can evolve based on L1 updates such as"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"New blocks/transactions"}),"\n",(0,a.jsx)(t.li,{children:"Contracts on the L1 being updated"}),"\n",(0,a.jsx)(t.li,{children:"Accessing historical on-chain state"}),"\n",(0,a.jsx)(t.li,{children:"Reading updates from other L2s/rollups deployed on the blockchain"}),"\n",(0,a.jsxs)(t.li,{children:["Passive time and timers (game ticks) ",(0,a.jsx)(t.br,{}),"\n","Or even more complex transition rules."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In other words, it allows building event-driven (or sometimes called loop-driven) architectures."}),"\n",(0,a.jsx)(t.p,{children:"A great example of this is using the L1 blockchain as the source of randomness, which avoids every game having to re-implement a randomness oracle from scratch. Note that the data you can access through projections is actually more data than can natively be accessed by a smart contract (in fact, smart contract platforms usually very strictly limit the kind of data contracts can access). Co-processors are a growing field in web3 try and enable applications to bypass these restrictions to access more data and so in that way Paima Engine is a gaming-focused co-processor."}),"\n",(0,a.jsxs)(t.p,{children:["This is possible as sovereign rollups can project L1 state to the L2. A deep dive into data projections and the full modular gaming rollup stack ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=t9En_PR3NCA",children:"can be found in this video."})]}),"\n",(0,a.jsx)(t.h2,{id:"sharded-rollups-as-a-multichain-co-processor",children:"Sharded rollups as a multichain co-processor"}),"\n",(0,a.jsxs)(t.p,{children:["Paima allows you to do computation in your state machine over an aggregate view of multiple chains. This allows you to, in a sense, to shard the state of your application in multiple locations such as deploying your game to a cheaper chain yet still leverage NFT marketplace / DeFi liquidity from larger networks without requiring a bridge (since you are natively monitoring both chains). Note that this is done without giving up any sovereignty of your game logic. This is powered by having ",(0,a.jsx)(t.em,{children:"data projections"})," from different networks aggregated into the same state machine. This allows your games to scale like DEX aggregators in the sense that they can leverage and aggregate features from multiple ecosystems to provide the best experience for their users."]}),"\n",(0,a.jsx)(t.h2,{id:"stateful-nfts-and-nft-compression",children:"Stateful NFTs and NFT compression"}),"\n",(0,a.jsx)(t.p,{children:"Thanks to projections, we can access the state of L1 NFTs from Paima. We can then interpret the output of the state machine as extra information associated to these NFTs allowing them to evolve over time based on user actions on the L2."}),"\n",(0,a.jsx)(t.p,{children:"In a sense, you can think of this as an NFT compression protocol. Instead of having to mint a lot of static NFTs on the L1, you can instead mint a minimal set of NFTs on the L1 and then evolve them based off the state of the L2."}),"\n",(0,a.jsx)(t.h2,{id:"parallelization-asynchronous-compute-to-handle-over-10k-tps-per-game",children:"Parallelization (asynchronous compute) to handle over 10k+ tps per game"}),"\n",(0,a.jsx)(t.p,{children:"Paima state machine L2s are not only significantly more efficient than the EVM, they also supports optionally running state machine updates in parallel (not natively available in the EVM), allowing games and apps to massively scale by, for example, having different PVP matches or different maps in an MMO run in parallel."}),"\n",(0,a.jsx)(t.h2,{id:"cross-chainmultichain-and-sequencing-with-paima-whirlpool",children:"Cross-chain/multichain and sequencing with Paima Whirlpool"}),"\n",(0,a.jsxs)(t.p,{children:["Paima allows creating rollups that aggregate multiple chains together. Natively, Paima supports users submitting transactions to these underlying chains manually themselves, but this is a high burden for users - especially as the number of chains applications connect to has grown over the years thanks to the growing trend of building modular chains. To tackle this, Paima focuses on ",(0,a.jsx)(t.em,{children:"chain abstraction"})," with Paima Whirlpool - a suite of tools to help translate complex interactions to something that integrate seamlessly with Paima Engine."]}),"\n",(0,a.jsx)(t.h3,{id:"l2-level-account-abstraction",children:"L2-level Account Abstraction"}),"\n",(0,a.jsx)(t.p,{children:"Currently there is a large focus on account abstraction which powers smart contract wallets to create systems more flexible than the default public-key wallets created by most cryptocurrencies."}),"\n",(0,a.jsx)(t.p,{children:"Paima Engine can enable much more flexible account abstraction by providing this functionality at the L2 level when needed, which allows easily validating cryptographic primitives that would not otherwise be available at the L1."}),"\n",(0,a.jsx)(t.h3,{id:"based-rollup--sequencer-sdks",children:"Based rollup & Sequencer SDKs"}),"\n",(0,a.jsxs)(t.p,{children:["L2s created with Paima run as a ",(0,a.jsx)(t.a,{href:"https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016",children:"based rollup"}),' - that is to say its sequencing is simply done by the DA layer (which is generally the underlying L1) and so it fully inherits its finality. This means that Paima L2s can be run without a sequencer (sometimes referred to as "self sequencing") and fully inherit the decentralization and security of the L1, and do this without the downsides traditionally associated with based rollups thanks to Paima\'s support for parallelization.']}),"\n",(0,a.jsx)(t.p,{children:"Although apps may not always need sequencers, they can still improve scalability and also help user onboarding. Notably, they can"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Batch transactions together to amortize transaction fees"}),"\n",(0,a.jsx)(t.li,{children:"Cover the transaction fees for specified users through meta-transactions (ex: free txs for users who hold a specific NFT, who delegate to a stake pool, or who paid on a separate chain)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Thanks to the flexibility of the batcher system, Paima can even support games built without an enshrined sequencer - that is to say environments with multiple sequencers where anybody can choose to run their own decentralized sequencer for the game and monetize it how they want. This give the benefit of sequencing without the centralization or censorship concerns."}),"\n",(0,a.jsx)(t.h3,{id:"cross-chain-nfts",children:"Cross-chain NFTs"}),"\n",(0,a.jsx)(t.p,{children:"Projects may want to allow users to play games with NFTs hosted on chains separate from where the app was deployed. For example, the game is deployed on a DA layer, but is playable from NFT living on separate L1."}),"\n",(0,a.jsx)(t.p,{children:"The goal, therefore, is to try and support connecting these NFTs to state machines in different ways with different trade-offs to empower games to take advantage of approach that works best for them. Notably, we are actively working on integrating:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Multi-layer monitoring (Sharded rollups mentioned above)"}),"\n",(0,a.jsx)(t.li,{children:"Storage proofs"}),"\n",(0,a.jsx)(t.li,{children:"Mirroring"}),"\n",(0,a.jsx)(t.li,{children:"NFT bridging"}),"\n",(0,a.jsx)(t.li,{children:"Message passing"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Paima Engine helps developers overcome problems with connecting multiple ecosystems (even when monitoring multiple chains,  different chains have different block times and finality making solutions non-trivial) by providing a wide-variety of options to different use-cases including special handling of cases where we need to assert the user still holds the NFT (in other words, they haven't sold the NFT since the last time we got an update from the different chain about the ownership status)."}),"\n",(0,a.jsxs)(t.p,{children:["You can find more about the idea ",(0,a.jsx)(t.a,{href:"/home/multichain-support/nfts/introduction",children:"here"})]}),"\n",(0,a.jsx)(t.h2,{id:"non-custodial-l2s",children:"Non-custodial L2s"}),"\n",(0,a.jsx)(t.p,{children:'Most blockchain apps and L2s are custodial in nature. That is to say, to use them you first have to deposit your funds into the app/L2. This is dangerous because it means that user funds are at risk if the contract that is custodying user funds gets hacked, or if the L2 goes offline (sometimes called a "proposer failure" if nobody can bridge L2 funds back to the L1, or "sequencer failure" / "liveness failure" if the L2 state itself can no longer be advanced).'}),"\n",(0,a.jsx)(t.p,{children:"Paima however, thanks to its projective rollup support, can allow users to keep full custody of their assets while using games & apps written using Paima. That is to say, even if your app gets hacked or all batchers for a game go offline, user L1 assets are not at risk. This makes Paima a very safe way for brands to deploy onchain applications and brand reputation risk in the case of a hack is minimal. Technically speaking, it means liveness is ensured thanks to self sequencing and proposer failures are simply not possible as there is no need for proposers in the first place."}),"\n",(0,a.jsx)(t.p,{children:"Additionally, this also helps a lot with user acquisition as empirically most users are not comfortable bridging their NFTs from L1\u2192L2 due to bridge security concerns."}),"\n",(0,a.jsx)(t.p,{children:"Lastly, it also helps with liquidity & composability, as its means you don't have to fracture assets between L1 and L2."}),"\n",(0,a.jsx)(t.h2,{id:"example-game",children:"Example game"}),"\n",(0,a.jsx)(t.p,{children:"To help visualize how these components help build a game, we will show an example game that settles to an Arbitrum Orbit L3 (Xai Games) as its DA layer as it uses a data availability committee making data cheap. However, since almost no users have assets on Xai, it uses Paima's built-in batcher (sequencer) SDK and account abstraction layer to allow players to play gasless from other chains."}),"\n",(0,a.jsx)(t.p,{children:"Similarly, to give additional liquidity for NFTs for the game, it natively supports minting NFTs on the two of the largest ecosystems in crypto by marketcap (Ethereum through Arbitrum One and Cardano). Since there are many EVM ecosystems and we cannot possibly monitor them all, we use a projected NFT contract connected to a message relayer to support NFTs on the other chains (more on this topic in a later section)."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:i(7337).Z+"",width:"943",height:"485"})}),"\n",(0,a.jsx)(t.h2,{id:"ongoing-work",children:"Ongoing work"}),"\n",(0,a.jsx)(t.h3,{id:"data-availability-layer-support",children:"Data availability layer support"}),"\n",(0,a.jsx)(t.p,{children:"Paima, by default, uses EVM both as the settlement and Data Availability (DA) layer. However, some games may want to separate these concerns by using a different layers for settlement and DA (either as a volition or a validium)"}),"\n",(0,a.jsx)(t.p,{children:"To enable this, Paima will facilitate storing state machine inputs on a DA layer, significantly lowering costs for data-hungry use-cases. We plan to integrate Avail and Celestia for this"}),"\n",(0,a.jsx)(t.h3,{id:"zk-zero-knowledge-cryptography",children:"ZK (Zero-Knowledge Cryptography)"}),"\n",(0,a.jsx)(t.p,{children:"ZK cryptography is often used in Web3 for two different properties:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Its ability to succinctly prove the state of a system (kind of like a very efficient compression system)"}),"\n",(0,a.jsx)(t.li,{children:"Its ability to handle functions with private inputs"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Both these use-cases are of interest in games, as being able to prove world state helps with composability of worlds, and private inputs allow games with private state (ex: fog of war) and can also help with compliance (ex: being able to prove you know information without revealing the sensitive information publicly)"}),"\n",(0,a.jsxs)(t.p,{children:["Paima is working with ",(0,a.jsx)(t.a,{href:"http://zeko.io/",children:"Zeko"})," (based on Mina Protocol) to implement its first ZK Layer. You can learn more about the architecture of our ZK layer ",(0,a.jsx)(t.a,{href:"https://blog.paimastudios.com/paima-zk-layer/",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"example-game-1",children:"Example game"}),"\n",(0,a.jsx)(t.p,{children:"This game is a team battle game that leverages recursive SNARKs provided by the Mina blockchain for private state and state-channel-like scalability. However, Mina has very few users. To get around this issue, it allows users to deposit funds into the game from Ethereum and unlocks winnings using a ZK proof of victory. However, since ZK proofs only settle to Ethereum once a match is over (plus a few minutes of overhead). To allow writing a smooth UX where the whole game logic is a unified experience, the game is written using Paima Engine that monitors both Mina for the gameplay and Ethereum for the deposits and payouts."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:i(1683).Z+"",width:"715",height:"501"})}),"\n",(0,a.jsx)(t.h3,{id:"state-channels-short-lived-shards",children:"State Channels (Short-lived Shards)"}),"\n",(0,a.jsx)(t.p,{children:"Paima's parallelism feature already serves as the first step towards a future system to have game shards to help games scale as needed. These shards could be long-lived, or be ephemeral such as state channels that facilitate use-cases like 5v5 fights where a state channel could be opened between participants and settled when the game is over."}),"\n",(0,a.jsx)(t.h3,{id:"ai",children:"AI"}),"\n",(0,a.jsx)(t.p,{children:"A few common demands have emerged for integration of AI into autonomous worlds:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Affecting the appearance of user's NFTs"}),"\n",(0,a.jsxs)(t.li,{children:["Affecting the game world state (either as NPCs like in ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=aIDSmgsT4p8",children:"Smallville"})," or as a god that controls the world)"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'Since autonomous worlds do not necessarily have a central company driving the evolution of a game, this kind of autonomous action powered via AI and LLMs is an interesting alternative. However, since AI is not something that can be run computationally onchain, the AI is often run similarly to a sovereign rollup - as a uni-directional bridge. This is not ideal as it means you cannot "close the loop" by having the AI result come back and modify the in-game world.'}),"\n",(0,a.jsx)(t.p,{children:"Paima is tackling both of these use-cases:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Paima already supports basic deterministic AI integration and you can see an example of this in a proof-of-concept game called ",(0,a.jsx)(t.a,{href:"https://github.com/dcSpark/paima-ai-text-adventure",children:"Oracle RPG"})," where user Stateful NFTs dynamically evolve based on AI computation"]}),"\n",(0,a.jsxs)(t.li,{children:["We hope to expand AI support to allow more complex use-cases such as villages powered by AI agents that hold Stateful NFTs. This will be done through integration with ",(0,a.jsx)(t.a,{href:"https://twitter.com/shinkai_network",children:"Shinkai Network"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"p2p-layer",children:"P2P layer"}),"\n",(0,a.jsx)(t.p,{children:"Currently, Paima works by updating the world based off on-chain transactions. However, a P2P layer between players could improve the experience."}),"\n",(0,a.jsx)(t.p,{children:"Notably,"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Currently, the game tick rate to that of the underlying chain (1~2 seconds on many L1s/L2s). In the future, we will build a way to connect Paima games to a P2P layer so that transactions can be broadcast between users faster than it takes for the txs to appear on-chain, allowing for a faster experience assuming players have honestly submitted their transactions (optimistic updates)."}),"\n",(0,a.jsx)(t.li,{children:"Users want to send visual updates to each other that do not be to settled on-chain, such as chat boxes."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"commit-reveal",children:"Commit-reveal"}),"\n",(0,a.jsx)(t.p,{children:"Currently, for most commit-reveal schemes, users have to be online to make the reveal. In online games where everybody has 24hrs to commit their next move, this is not ideal as it means all players need to come online at the end of the round to reveal their move."}),"\n",(0,a.jsxs)(t.p,{children:['Solutions for this problem often involves more complex cryptography and too many "reveal" transactions to scale properly. However, Paima can very naturally integrate ',(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=z7wSFe5t7nc",children:"decentralized timelock encryption protocols"})," for games that need it."]}),"\n",(0,a.jsx)(t.h1,{id:"why-sovereign-rollups",children:"Why Sovereign rollups?"}),"\n",(0,a.jsx)(t.p,{children:"There are a few ways of powering scalable applications on-chain. Paima is built using Sovereign Rollups instead of two other common techniques: Optimistic Rollups and ZK Rollups"}),"\n",(0,a.jsx)(t.h2,{id:"optimistic-rollup-disadvantages",children:"Optimistic Rollup disadvantages"}),"\n",(0,a.jsx)(t.p,{children:"This section is written assuming an EVM-based optimistic rollup"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Apps have to be written in Solidity (if deploying to an existing optimistic rollup like Arbitrum) or be written to be compatible with the fraud-proof system (if an app-chain) which limits flexibility and generally means it's not composable with standard game development tools"}),"\n",(0,a.jsx)(t.li,{children:"App performance is bottlenecked by EVM performance. Even implementing parallelization (very common for games) requires a complex sharding system, greatly increasing ecosystem complexity."}),"\n",(0,a.jsx)(t.li,{children:"Limited to EVM's data model (reads and writes are slow)"}),"\n",(0,a.jsx)(t.li,{children:"No support for passive time, as you cannot fraud-proof the passage of time. However, passive time is hugely important for games (ex: timers)"}),"\n",(0,a.jsx)(t.li,{children:"Requires Solidity boilerplate (not accessible to most game developers)"}),"\n",(0,a.jsx)(t.li,{children:"Limited projection and stateful NFT support (optimistic rollups have limited projective rollup support). This limits the user base as many users will not want to bridge their NFTs from L1\u2192L2 to use the app and also hurts liquidity & composability"}),"\n",(0,a.jsx)(t.li,{children:"Apps have very long finality as they may get rolled back due to fraud proofs"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"zk-rollup-disadvantages",children:"ZK Rollup disadvantages"}),"\n",(0,a.jsx)(t.p,{children:"ZK Rollups are primarily a computation solution. Although handling computation is important, a lot of apps (especially games) are more data management platforms (user accounts, encoding how the accounts update over time, etc.). Therefore it often makes more sense to have a sovereign rollup as the base for the game, and only use ZK when required on specific parts of your app (such as associating ZK proofs to stateful NFTs that may represent things like results of a match)"}),"\n",(0,a.jsx)(t.p,{children:"If ZK is enforced or if the whole application needs to be written as one giant ZK circuit, you will run into the following issues:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"ZK performance is generally slow for large circuits, making it very hard to build complex games"}),"\n",(0,a.jsx)(t.li,{children:"ZK platforms typically enforce a global maximum on circuit sizes for zkApps deployed to their platform, which complex games will exceed"}),"\n",(0,a.jsx)(t.li,{children:"ZK circuits are currently still hard to write. There are some languages and efforts to simplify this, but they generally still require manual fine-tuning to try and minimize circuit size as much as possible"}),"\n",(0,a.jsx)(t.li,{children:"No support for passive time. This may be, depending in the use-case, replaceable by a Verifiable Delay Function, but this is much more complicated and not as powerful"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"sovereign-rollup-disadvantages",children:"Sovereign Rollup disadvantages"}),"\n",(0,a.jsxs)(t.p,{children:['Unfortunately there is no "free lunch", and so usage of sovereign rollups comes with some disadvantages as well. Keep in mind while reading this that Paima overcome these deficiencies by combining its sovereign rollup layer with its native support for L1 smart contracts and its ZK layer. You can learn more about this in our blog posts ',(0,a.jsx)(t.a,{href:"https://blog.paimastudios.com/self-sovereign-rollup/",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"trickier-defi-support-on-the-l2",children:"Trickier DeFi support on the L2"}),"\n",(0,a.jsxs)(t.p,{children:["Although assets that stay on the L1 are supported, if assets are stored on the L2 it is difficult to trustlessly bridge from the L2 back to the L1 (that is to say, supporting the ability to put $5 into the L2, make some money, then take $10 out require extra work). This isn't a requirement to build in-game economies, and this also isn't required for the overwhelming majority of non-DeFi applications and so it's not as problematic as one might think and can be overcome in multiple ways as mentioned in our ",(0,a.jsx)(t.a,{href:"https://blog.paimastudios.com/self-sovereign-rollup/",children:"blogpost"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"low-compatibility-with-other-l1-dapps-by-default",children:"Low compatibility with other L1 dApps by default"}),"\n",(0,a.jsx)(t.p,{children:"Paima gains a lot of its strength from shifting game state management into the L2, which cannot be read from other L1 dApps by default. We think this is actually a benefit though, as it avoids web3 developers making the single most common mistake in web3 games: overly focusing on compatibility when they do not have a product-market fit yet."}),"\n",(0,a.jsx)(t.p,{children:"That is to say, Paima allows you to start by building your entire app/game on the L2 and then, once you know users love the experience, you can migrate parts of your game state to the L1 (which requires you to write it in the L1 language like Solidity) and then projecting its state to the L2. This makes bootstrapping your game significantly faster, cheaper, safer, and makes it easier to update. Only focus on compatibility once users love your system and truly desire connecting it with other experiences."}),"\n",(0,a.jsx)(t.h3,{id:"trickier-cross-game-indexing",children:"Trickier cross-game indexing"}),"\n",(0,a.jsx)(t.p,{children:"Unless the game is built as one giant recursive SNARK circuit, it is hard to succinctly prove a summary of game state. Additionally, unlike optimistic rollups, it's harder to leverage any L1 light client infrastructure to prove game state. This is a consequence of Paima being a pessimistic rollup by default."}),"\n",(0,a.jsx)(t.p,{children:"This makes it harder to do things like peer-discovery of RPC nodes for a game and build cross-game indexing services like a platform to see all achievements earned across games written with Paima. We do, however, have some standards planned to help alleviate this issue."}),"\n",(0,a.jsx)(t.h1,{id:"architecture-overview",children:"Architecture overview"}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"https://paimastudios.com/paima-engine",children:"this page"})," for more."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1683:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/paima-mina-docs-895987db9ec0db81d116f9087e8efc3f.png"},6755:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/paima-sm-docs-7f3a29c1befe2988da1613bc08d526ec.png"},7337:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/paima-tarochi-docs-67e225120e3692f6c019a9f288a232ba.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var a=i(7294);const s={},n=a.createContext(s);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);