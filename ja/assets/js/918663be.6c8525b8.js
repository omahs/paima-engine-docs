"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[400],{1666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(5893),s=t(1151);const i={},r="Cardano Mint and Burn {#mint-burn}",o={id:"home/react-to-events/primitive-catalogue/cardano/cardano-mint-burn",title:"Cardano Mint and Burn",description:"mint-burn}",source:"@site/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/40-cardano-mint-burn.md",sourceDirName:"home/300-react-to-events/2-primitive-catalogue/20-cardano",slug:"/home/react-to-events/primitive-catalogue/cardano/cardano-mint-burn",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/cardano-mint-burn",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/40-cardano-mint-burn.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cardano Transfer",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/cardano-transfer"},next:{title:"Cardano Projected NFT",permalink:"/ja/home/react-to-events/primitive-catalogue/cardano/projected-nft"}},d={},c=[{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Detecting who minted and who burned",id:"detecting-who-minted-and-who-burned",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"mint-burn",children:"Cardano Mint and Burn"}),"\n",(0,a.jsx)(n.p,{children:"Tracks all the instances of a mint or burn of set of policy IDs."}),"\n",(0,a.jsxs)(n.p,{children:["If you're looking to track these assets after they've been minted, use the ",(0,a.jsx)(n.a,{href:"/ja/home/react-to-events/primitive-catalogue/cardano/delayed-state",children:"delayed state"})," primitive."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'extensions:\n  - name: "CARDANO-MINT-BURN"\n    type: cardano-mint-burn\n    policyIds:\n      - "0fc891fb7368d3b7c7b88815c203fda0d6862b0f1d797222672e91fe"\n      - "0fc891fb7368d3b7c7b88815c203fda0d6862b0f1d797222672e91ff"\n    startSlot: 722300\n    stopSlot: 733216\n    scheduledPrefix: cmb\n    network: CardanoNetworkConfigEntryName\n'})}),"\n",(0,a.jsx)(n.h3,{id:"meaning",children:"Meaning"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"startSlot"})," is required and means that only mints events after that slot (exclusive) will be considered."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"stopSlot"})," is optional, and it stops the indexing at that point."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"policyIds"})," is an array with the collections to index."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"paima-concise-format",children:"Paima Concise format"}),"\n",(0,a.jsx)(n.p,{children:"The scheduled input for each event is of the following form."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cardanoMint = cmb|txId|metadata|assets\n"})}),"\n",(0,a.jsx)(n.p,{children:"It can be parsed with a rule of the form:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const cardanoMint: ParserRecord<CardanoMint> = {\n  txId: PaimaParser.NCharsParser(0, 64),\n  metadata: PaimaParser.OptionalParser(null, PaimaParser.RegexParser(/[a-f0-9]*/)),\n  assets: PaimaParser.Json(),\n};\n\ninterface AssetAmount {\n    policyId: string;\n    assetName: string;\n    amount: string;\n}\nexport interface CardanoMint {\n  txId: string;\n  metadata: string | null;\n  assets: { [policyId: string]: { [assetName: string]: string } };\n  inputAddresses: { [address: string]: AssetAmount[] }\n  outputAddresses: { [address: string]: AssetAmount[] }\n}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"metadata"})," field is hex encoded (if any), and it's the metadata in binary\nform."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"assets"})," field has the minted or burned assets. The difference between a\nmint and a burn is in the sign of ",(0,a.jsx)(n.code,{children:"amount"})," when interpreted as a number."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"inputAddresses"})," represents addresses who at least partially burned the tracked tokens"]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"outputAddresses"})," represents addresses who at least partially minted the tracked tokens"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"detecting-who-minted-and-who-burned",children:"Detecting who minted and who burned"}),"\n",(0,a.jsx)(n.p,{children:"Some key facts about Cardano transactions to help understand how to parse this information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Cardano transactions can contain multiple mints & burns of different tokens in the same transaction"}),"\n",(0,a.jsx)(n.li,{children:"Different addresses can mint/burn tokens in the same transactions (txs have multiple inputs & outputs)"}),"\n",(0,a.jsx)(n.li,{children:"The same address can mint/burn multiple times in the same transaction (different inputs or different outputs)"}),"\n",(0,a.jsxs)(n.li,{children:["All mints & burns share the same ",(0,a.jsx)(n.code,{children:"metadata"})," field"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"A consequence of this is that not all the token supply found in the input may have been burned. In other words, the following transaction is possible:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"inputAddresses"})," contains 50 token X"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"assets"})," contains -30 token X"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"outputAddresses"})," contains 20 token X"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(7294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);