"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[8523],{9351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(5893),i=a(1151);const s={},o="Delayed State",r={id:"home/react-to-events/primitive-catalogue/cardano/delayed-state",title:"Delayed State",description:"Different blockchains may have different block times & finality, so trying to guarantee the state of blockchain A from blockchain B often requires timelock systems like projected data.",source:"@site/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/20-delayed-state.md",sourceDirName:"home/300-react-to-events/2-primitive-catalogue/20-cardano",slug:"/home/react-to-events/primitive-catalogue/cardano/delayed-state",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/delayed-state",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/20-delayed-state.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pool Delegation",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/stakepools"},next:{title:"Cardano Transfer",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/cardano-transfer"}},c={},d=[{value:"Delayed asset",id:"delayed-asset",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Utility functions",id:"utility-functions",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"delayed-state",children:"Delayed State"}),"\n",(0,n.jsxs)(t.p,{children:["Different blockchains may have different block times & finality, so trying to guarantee the state of blockchain A from blockchain B often requires timelock systems like ",(0,n.jsx)(t.a,{href:"/ja/home/multichain-support/nfts/projected-nfts/basics",children:"projected data"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["However, not all use-cases care about having the data entirely up-to-date. For example, NFT-gated features should work even if your knowledge of whether or not the user owns an NFT is 5 minutes delayed. That is to say, delayed data is ",(0,n.jsx)(t.strong,{children:"not"})," guaranteed to be up-to-date (hence ",(0,n.jsx)(t.em,{children:"delayed"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"This delay is also generically unavoidable with chains that don't have instant finality like Cardano as we generally want our app to update only with changes that have been finalized (which takes time)."}),"\n",(0,n.jsxs)(t.p,{children:["If you're looking to track when these assets were minted/burned, use the ",(0,n.jsx)(t.a,{href:"/ja/home/react-to-events/primitive-catalogue/cardano/cardano-mint-burn",children:"mint-burn"})," primitive."]}),"\n",(0,n.jsx)(t.h2,{id:"delayed-asset",children:"Delayed asset"}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'extensions:\n  - name: "delayed-asset1"\n    type: cardano-delayed-asset\n    fingerprints:\n      - "asset1c43p68zwjezc7aaaaaaaaaaaaaaaaaaaaaaaaa"\n      - "asset1c43p68zwjezc7bbbbbbbbbbbbbbbbbbbbbbbbb"\n      - "asset1c43p68zwjezc7ccccccccccccccccccccccccc"\n    policyIds:\n      - "919d4c2c9455016289341b1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"\n      - "919d4c2c9455016289341b1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"\n    startSlot: 22505578\n    stopSlot: 32815924\n    network: CardanoNetworkConfigEntryName\n'})}),"\n",(0,n.jsx)(t.h3,{id:"meaning",children:"Meaning"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"startSlot"})," is required and means that only events after that slot (exclusive)\nwill be considered. This should be a slot that happened before the first\ntransaction involving the assets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"stopSlot"})," is optional, and it stops the indexing at that point."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"fingerprints"})," and ",(0,n.jsx)(t.code,{children:"policyIds"})," select the assets to be indexed. It's not\nnecessary to provide both."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"fingerprints"})," takes the cip14 fingerprint in bech32, and indexes a single\nasset (per entry in the array)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"policyIds"})," will instead index all the assets in that policy."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"utility-functions",children:"Utility functions"}),"\n",(0,n.jsxs)(t.p,{children:["There are two functions that can be used to get the utxo entries for an address.\nDepending on whether the filtering is done by fingerprint or by policy id. Note\nthat this doesn't necessarily return one entry per utxo, since each entry is for\na single asset. This means there may be more than one entry in the array with\nthe same ",(0,n.jsx)(t.code,{children:"txId-outputIndex"})," pair. This can happen when filtering by policy id,\nbecause an output have more than one asset.  In that case, the ",(0,n.jsx)(t.code,{children:"assetName"})," can\nbe used to discriminate."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export interface CardanoAssetUtxo {\n  txId: string;\n  outputIndex: number;\n  amount: string;\n  policyId: string;\n  assetName: string;\n}\n\nexport declare function getCardanoAssetUtxosByFingerprint(\n  readonlyDBConn: Pool,\n  address: string,\n  cip14Fingerprint: string\n): Promise<CardanoAssetUtxo[]>;\n\n\nexport declare function getCardanoAssetUtxosByPolicyId(\n  readonlyDBConn: Pool,\n  address: string,\n  policyId: string\n): Promise<CardanoAssetUtxo[]>;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(7294);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);