"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[5867],{7697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(5893),i=n(1151);const r={},s="Cardano Transfer {#transfer}",o={id:"home/react-to-events/primitive-catalogue/cardano/cardano-transfer",title:"Cardano Transfer",description:"transfer}",source:"@site/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/30-cardano-transfer.md",sourceDirName:"home/300-react-to-events/2-primitive-catalogue/20-cardano",slug:"/home/react-to-events/primitive-catalogue/cardano/cardano-transfer",permalink:"/home/react-to-events/primitive-catalogue/cardano/cardano-transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/300-react-to-events/2-primitive-catalogue/20-cardano/30-cardano-transfer.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delayed State",permalink:"/home/react-to-events/primitive-catalogue/cardano/delayed-state"},next:{title:"Cardano Mint and Burn",permalink:"/home/react-to-events/primitive-catalogue/cardano/cardano-mint-burn"}},d={},c=[{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Detecting who made the payment",id:"who-paid",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"transfer",children:"Cardano Transfer"}),"\n",(0,a.jsx)(t.p,{children:"Keeps track of the entire (between the indexed slots) transaction history of a\npayment credential or particular address."}),"\n",(0,a.jsx)(t.p,{children:"Rules for how this primitive gets triggered:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Credential appears in the transaction witness (ex: an input to the transaction)"}),"\n",(0,a.jsx)(t.li,{children:"Credential appears in the transaction output"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Note: this primitive only gets triggered a single time per transaction (even if the transaction contains multiple outputs to the specified address)"}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'extensions:\n  - name: "CardanoTransfer"\n    type: cardano-transfer\n    credential: 8200581c55edc34de172a4a3ba9cac51f041187c84478d68e788dd6cf6f0b3d9 \n    startSlot: 12472120\n    stopSlot: 12500000\n    scheduledPrefix: ct\n    network: CardanoNetworkConfigEntryName\n'})}),"\n",(0,a.jsx)(t.h3,{id:"meaning",children:"Meaning"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"startSlot"})," is required and means that only transactions that happen after that slot (exclusive) will be considered."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"stopSlot"})," is optional, and it stops the indexing at that point."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"credential"})," can be a hex encoded payment credential, in which case all\nassociated addresses are indexed, regardless of the staking part. Or it can be\nbech32 address instead, in this case the indexed transactions are those with the\nsame exact address (same payment part and staking part)."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"paima-concise-format",children:"Paima Concise format"}),"\n",(0,a.jsx)(t.p,{children:"The scheduled input for each event is of the following form."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cardanoTransfer  = ct|txId|metadata|inputCredentials|outputs\n"})}),"\n",(0,a.jsx)(t.p,{children:"It can be parsed with a rule of the form:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const cardanoTransfer: ParserRecord<CardanoTransfer> = {\n  txId: PaimaParser.NCharsParser(0, 64),\n  metadata: PaimaParser.OptionalParser(null, PaimaParser.RegexParser(/[a-f0-9]*/)),\n  inputCredentials: PaimaParser.ArrayParser({\n    item: PaimaParser.RegexParser(/[a-f0-9]*/),\n  }),\n  outputs: (keyName: string, input: string) => {\n    return JSON.parse(input);\n  },\n};\n\ninterface CardanoTransfer {\n  txId: string;\n  metadata: string | null;\n  inputCredentials: string[];\n  outputs: {\n    asset: { policyId: string; assetName: string } | null;\n    amount: string;\n    address: string;\n  }[];\n}\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The metadata field is in its binary form, but hex encoded."}),"\n",(0,a.jsxs)(t.li,{children:["The entries in ",(0,a.jsx)(t.code,{children:"inputCredentials"})," are also hex encoded. Each one is the binary\nrepresentation of the payment key (64 characters or 32 bytes). This can give a hint on who made the transaction (see ",(0,a.jsx)(t.a,{href:"#who-paid",children:"below"})," for more on this)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"outputs"})," preserves the same order as in the binary transaction. The ",(0,a.jsx)(t.code,{children:"asset"}),"\nwill be ",(0,a.jsx)(t.code,{children:"null"})," when the amount is in lovelace."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"who-paid",children:"Detecting who made the payment"}),"\n",(0,a.jsx)(t.p,{children:"Trying to detect who actually made the transaction is difficult because transactions in Cardano can have multiple inputs and multiple outputs."}),"\n",(0,a.jsx)(t.p,{children:"Example of edge-cases:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Multiple input addresses that don't belong to the user (ex: multiple exchanges addresses)"}),"\n",(0,a.jsx)(t.li,{children:"Script credentials (instead of payment credentials)"}),"\n",(0,a.jsx)(t.li,{children:"Funds coming from other mechanisms like reward withdrawal or pool deposit refunds"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Therefore, although we provide access to the list of ",(0,a.jsx)(t.code,{children:"inputCredentials"}),", if possible it is better to define a specific metadata format for your application that includes which address the payment should be credited to. The ",(0,a.jsx)(t.code,{children:"metadata"})," for the transaction is given as part of the primitive."]}),"\n",(0,a.jsx)(t.p,{children:"Additionally, in cases where there are multiple outputs in the same transaction that trigger this primitive, we only trigger this primitive once. It is up to the app if it wants to aggregate multiple output values as a single payment, or keep them separated (possibly with a metadata hint about which address gets credited how much)."}),"\n",(0,a.jsx)(t.p,{children:"Also be careful: it's possible the credential you track appears neither in the input or the output. This happens because this primitive triggers whenever the transaction contains the credential as a witness, but witnesses are not limited to just inputs and are used for other features (ex: certificates) and as well as may be entirely extraneous (you can add more witnesses than actually needed)."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(7294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);