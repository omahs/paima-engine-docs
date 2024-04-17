"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[2264],{5037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(5893),s=i(1151);i(5574);i.p;const o={},a="Introduction",r={id:"home/multichain-support/nfts/introduction",title:"Introduction",description:"Paima Engine allows connecting NFTs to games without requiring an NFT bridge - even if the NFT lives on a different layer of the same chain, or on a different chain entirely.",source:"@site/docs/home/700-multichain-support/1-nfts/1-introduction.mdx",sourceDirName:"home/700-multichain-support/1-nfts",slug:"/home/multichain-support/nfts/introduction",permalink:"/home/multichain-support/nfts/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/700-multichain-support/1-nfts/1-introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Game Versioning",permalink:"/home/releasing-a-game/versioning"},next:{title:"Basics",permalink:"/home/multichain-support/nfts/projected-nfts/basics"}},l={},c=[{value:"Active solutions",id:"active-solutions",level:2},{value:"Chain \u2192 Game",id:"chain--game",level:3},{value:"Game \u2192 Chain",id:"game--chain",level:3},{value:"Passive solutions",id:"passive-solutions",level:2},{value:"Centralized solutions",id:"centralized-solutions",level:2}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Paima Engine allows connecting NFTs to games without requiring an NFT bridge - even if the NFT lives on a different layer of the same chain, or on a different chain entirely."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Motivation"}),": many games, due to being data and computation heavy applications, run on sidechains, L2s and appchain as opposed to popular L1 blockchains. This is problematic because popular NFT collections (which people generally want to use in-game) live on the L1 (a different environment). A common solution to this problem is building an NFT bridge, but bridges not only have a bad reputation for fungible tokens which limits usage, the problem is even worse for NFTs where there is also a philosophical disconnect (if a bridge gets hacked, which is the canonical NFT? The one the hacker stole, or the bridged asset?)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution"}),": instead of bridging NFTs, we instead provide many ways to connect NFTs directly into the game optimized for different scenarios."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"No free lunch"}),": note that all options come with trade-offs. Pick the one most appropriate for your project."]}),"\n",(0,t.jsx)(n.h2,{id:"active-solutions",children:"Active solutions"}),"\n",(0,t.jsx)(n.p,{children:"These solutions require actively monitoring multiple chains. These solutions require more computation resources and are more complex, but have lower trust assumptions."}),"\n",(0,t.jsx)(n.p,{children:"This is possible by leveraging:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["EVM: ",(0,t.jsx)(n.a,{href:"/home/react-to-events/funnel-types/parallel-evm-funnel",children:"Parallel EVM funnel"})]}),"\n",(0,t.jsxs)(n.li,{children:["Cardano: ",(0,t.jsx)(n.a,{href:"/home/react-to-events/funnel-types/carp-funnel",children:"Carp funnel"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"chain--game",children:"Chain \u2192 Game"}),"\n",(0,t.jsx)(n.p,{children:"Chain to Game is useful if you want to connect an existing NFT collection on an existing blockchain into your game."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Guaranteed ownership"}),": sometimes it's important to guarantee the user currently owns the NFT right at this moment. For this, ",(0,t.jsx)(n.a,{href:"/home/multichain-support/nfts/projected-nfts/basics",children:"projected NFTs"})," work best"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Delayed ownership"}),": sometimes it's okay if the ownership information is not entirely up-to-date. In this case, use"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["EVM: ",(0,t.jsx)(n.a,{href:"/home/react-to-events/primitive-catalogue/evm/ERC721",children:"erc721 primitive"})]}),"\n",(0,t.jsxs)(n.li,{children:["Cardano: ",(0,t.jsx)(n.a,{href:"/home/react-to-events/primitive-catalogue/cardano/delayed-state",children:"delayed utxo primitive"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"game--chain",children:"Game \u2192 Chain"}),"\n",(0,t.jsx)(n.p,{children:'Game to Chain ("Inverse projections") are useful when you want game state to be tradable as an NFT on an existing blockchain.'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["EVM: ",(0,t.jsx)(n.a,{href:"/home/PRCs/prc-3",children:"prc-3"})]}),"\n",(0,t.jsx)(n.li,{children:"Cardano: in development"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"passive-solutions",children:"Passive solutions"}),"\n",(0,t.jsx)(n.p,{children:"Passive solutions do not require actively monitoring other chains (instead, outsourcing this to a separate mechanism). These are simpler at the cost of relying on an external mechanism."}),"\n",(0,t.jsx)(n.p,{children:"Paima Engine currently doesn't support passive solutions, but solutions like this exist:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Storage proofs"}),"\n",(0,t.jsx)(n.li,{children:"Bridges (NFT or simply message passing)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We plan to add passive solutions to Paima as part of our roadmap"}),"\n",(0,t.jsx)(n.h2,{id:"centralized-solutions",children:"Centralized solutions"}),"\n",(0,t.jsx)(n.p,{children:"Centralized solutions like oracles or mirroring are also possible with different tradeoffs. These options are computationally cheap (both onchain and offchain) but require additional trust and devops overhead."}),"\n",(0,t.jsx)(n.p,{children:"We do not provide these solutions built into Paima Engine itself at the moment, but adding them is part of our roadmap."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5574:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/crosschain-nft-44cc53b236eb67ea0131f86f9b6b8736.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var t=i(7294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);