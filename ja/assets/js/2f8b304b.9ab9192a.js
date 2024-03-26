"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[3411],{5976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(5893),a=n(1151);const r={},o="Cardano Projected NFT",s={id:"home/react-to-events/primitive-catalogue/cardano/projected-nft",title:"Cardano Projected NFT",description:"Different blockchains may have different block times & finality, so trying to guarantee the state of blockchain A from blockchain B often requires timelock systems like projected data.",source:"@site/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/50-projected-nft.md",sourceDirName:"home/300-react-to-events/2-primitive-catalogue/20-cardano",slug:"/home/react-to-events/primitive-catalogue/cardano/projected-nft",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/projected-nft",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/50-projected-nft.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cardano Mint and Burn",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/cardano-mint-burn"},next:{title:"Create your own Primitive",permalink:"/ja/home/react-to-events/primitive-catalogue/create-your-own"}},c={},d=[{value:"Projected NFT",id:"projected-nft",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Utility functions",id:"utility-functions",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"cardano-projected-nft",children:"Cardano Projected NFT"}),"\n",(0,i.jsxs)(t.p,{children:["Different blockchains may have different block times & finality, so trying to guarantee the state of blockchain A from blockchain B often requires timelock systems like ",(0,i.jsx)(t.a,{href:"/ja/home/multichain-support/nfts/projected-nfts/basics",children:"projected data"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This primitive implements the Projected NFT system and, given Cardano NFTs are treated the same as any other asset in a UTXO, is seamlessly extended to be a general projected asset system (it is not limited to NFTs)."}),"\n",(0,i.jsxs)(t.p,{children:["If your use-case does not require a guarantee the data is up-to-date to the second, consider using ",(0,i.jsx)(t.a,{href:"/ja/home/react-to-events/primitive-catalogue/cardano/delayed-state",children:"the delayed state primitive"})," instead."]}),"\n",(0,i.jsx)(t.h2,{id:"projected-nft",children:"Projected NFT"}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'extensions:\n  - name: "projected-nft"\n    scheduledPrefix: cpn\n    type: cardano-projected-nft\n    startSlot: 22505578\n    stopSlot: 32815924\n    network: CardanoNetworkConfigEntryName\n'})}),"\n",(0,i.jsx)(t.h3,{id:"meaning",children:"Meaning"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"startSlot"})," is required and means that only events after that slot (exclusive)\nwill be considered. This should be a slot that happened before the first\ntransaction involving the assets."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"stopSlot"})," is optional, and it stops the indexing at that point."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"paima-concise-format",children:"Paima Concise format"}),"\n",(0,i.jsx)(t.p,{children:"The scheduled input for each event is of the following form."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cardanoTransfer = cpn|ownerAddress|previousTxHash|previousOutputIndex|currentTxHash|currentOutputIndex|policyId|assetName|status\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"status"})," is one of:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Lock"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Unlocking"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Claim"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Invalid"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"utility-functions",children:"Utility functions"}),"\n",(0,i.jsx)(t.p,{children:"You can get all the projected NFTs for an address with the utility function below"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export interface ICdeCardanoGetProjectedNftResult {\n  amount: string;\n  asset_name: string;\n  current_tx_hash: string;\n  current_tx_output_index: number | null;\n  for_how_long: string | null;\n  owner_address: string;\n  plutus_datum: string;\n  policy_id: string;\n  previous_tx_hash: string | null;\n  previous_tx_output_index: number | null;\n  status: 'Lock' | 'Unlocking' | 'Claim' | 'Invalid';\n}\n\nexport declare function getCardanoAddressProjectedNfts(\n  readonlyDBConn: Pool,\n  address: string\n): Promise<ICdeCardanoGetProjectedNftResult[]>;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(7294);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);