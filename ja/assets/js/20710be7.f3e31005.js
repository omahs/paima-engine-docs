"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[7894],{3139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(5893),i=a(1151);const r={},s="Writing L2 Data",o={id:"home/read-write-L2-state/write-data",title:"Writing L2 Data",description:"Concise Builder",source:"@site/docs/home/200-read-write-L2-state/20-write-data.md",sourceDirName:"home/200-read-write-L2-state",slug:"/home/read-write-L2-state/write-data",permalink:"/ja/home/read-write-L2-state/write-data",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/200-read-write-L2-state/20-write-data.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reading L2 Data",permalink:"/ja/home/read-write-L2-state/read-data"},next:{title:"Sequential State Identifier",permalink:"/ja/home/read-write-L2-state/parallelism"}},c={},d=[{value:"Concise Builder",id:"concise-builder",level:2},{value:"Writing data from an external source",id:"writing-data-from-an-external-source",level:2},{value:"(Hardhat) Submit Paima Game Input",id:"hardhat-submit-paima-game-input",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"writing-l2-data",children:"Writing L2 Data"}),"\n",(0,n.jsx)(t.h2,{id:"concise-builder",children:"Concise Builder"}),"\n",(0,n.jsxs)(t.p,{children:["Now that you've defined you grammar in the ",(0,n.jsx)(t.a,{href:"/ja/home/read-write-L2-state/base-format",children:"previous section"}),", you can programmatically interact with it."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Generate the data to submit"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { builder } from '@paima/sdk/concise';\n\nconst conciseBuilder = builder.initialize();\n//createdLobby = c|numOfRounds|isPractice?\nconciseBuilder.setPrefix('c');\nconciseBuilder.addValues([\n  { value: numberOfRounds.toString(10) },\n  { value: isPractice ? 'T' : '' },\n]);\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Submit the data onchain"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import {\n  awaitBlock,\n  postConciseData,\n} from '@paima/sdk/mw-core';\n\nconst response = await postConciseData(\n  conciseBuilder.build(),\n  errorFxn // See other section in the documentation on error handling\n);\nif (!response.success) return response;\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"(optional) wait for the transaction to success"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// wait for the block to appear on-chain and do any error handling\n// ex: if state changed between when the user made a tx and the tx getting included in a block\nawait awaitBlock(response.blockHeight);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"writing-data-from-an-external-source",children:"Writing data from an external source"}),"\n",(0,n.jsx)(t.h3,{id:"hardhat-submit-paima-game-input",children:"(Hardhat) Submit Paima Game Input"}),"\n",(0,n.jsxs)(t.p,{children:["Paima comes with a Hardhat plugin as part of ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@paima/evm-contracts",children:"@paima/evm-contracts"})," for this."]}),"\n",(0,n.jsxs)(t.p,{children:["To use it, make sure you have ",(0,n.jsx)(t.code,{children:"import @paima/evm-contracts/plugin"})," at the top of your ",(0,n.jsx)(t.code,{children:"hardhat.config.ts"})]}),"\n",(0,n.jsxs)(t.p,{children:["The Paima hardhat plugin comes with many utility such as ",(0,n.jsx)(t.code,{children:"PaimaL2Contract:submitGameInput"})," to post game inputs to the contract (calling the ",(0,n.jsx)(t.code,{children:"paimaSubmitGameInput"})," method on L2 contract)."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Interactive prompts: ",(0,n.jsx)(t.code,{children:"npx hardhat paima PaimaL2Contract:submitGameInput"})]}),"\n",(0,n.jsxs)(t.li,{children:["Command line parameters: ",(0,n.jsx)(t.code,{children:'npx hardhat paima PaimaL2Contract:submitGameInput --contract 0x5fbdb2315678afecb367f032d93f642f64180aa3 --data "j|*Xs6Q9GAqZVwe"'})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(7294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);