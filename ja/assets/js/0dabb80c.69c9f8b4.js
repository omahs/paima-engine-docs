"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[6162],{8534:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(5893),s=i(1151);const a={},r="ERC20 Primitives",l={id:"home/react-to-events/primitive-catalogue/evm/ERC20",title:"ERC20 Primitives",description:"- ERC20, keeping track of wallet balances for a specified ERC20 contract;",source:"@site/docs/home/300-react-to-events/2-primitive-catalogue/10-evm/2-ERC20.md",sourceDirName:"home/300-react-to-events/2-primitive-catalogue/10-evm",slug:"/home/react-to-events/primitive-catalogue/evm/ERC20",permalink:"/ja/home/react-to-events/primitive-catalogue/evm/ERC20",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/300-react-to-events/2-primitive-catalogue/10-evm/2-ERC20.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Primitive Catalogue",permalink:"/ja/home/react-to-events/primitive-catalogue/introduction"},next:{title:"ERC721 Primitives",permalink:"/ja/home/react-to-events/primitive-catalogue/evm/ERC721"}},o={},c=[{value:"ERC20",id:"erc20",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Utility functions",id:"utility-functions",level:3},{value:"ERC20Deposit",id:"erc20deposit",level:2},{value:"Example",id:"example-1",level:3},{value:"Meaning",id:"meaning-1",level:3},{value:"Paima Concise format",id:"paima-concise-format-1",level:3},{value:"Utility functions",id:"utility-functions-1",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"erc20-primitives",children:"ERC20 Primitives"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#erc20",children:"ERC20"}),", keeping track of wallet balances for a specified ERC20 contract;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#erc20deposit",children:"ERC20Deposit"}),", keeping track of the total amount of a specified ERC20 contract sent by wallets to a"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"erc20",children:"ERC20"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'extensions:\n  - name: "Bar"\n    type: "erc20"\n    contractAddress: "0x01...ef"\n    startBlockHeight: 4567123\n'})}),"\n",(0,t.jsx)(n.h3,{id:"meaning",children:"Meaning"}),"\n",(0,t.jsxs)(n.p,{children:["This extension allows you to track the balances of a specified ERC20 token for all wallets by processing ",(0,t.jsx)(n.code,{children:"Transfer"})," events the contract emits."]}),"\n",(0,t.jsx)(n.h3,{id:"paima-concise-format",children:"Paima Concise format"}),"\n",(0,t.jsxs)(n.p,{children:["The ERC20 Primitive does not schedule any inputs, so the ",(0,t.jsx)(n.code,{children:"scheduledPrefix"})," field can be omitted."]}),"\n",(0,t.jsx)(n.h3,{id:"utility-functions",children:"Utility functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getFungibleTokenBalance"}),", to fetch the balance of a specified wallet address:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export async function getFungibleTokenBalance(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  walletAddress: string\n): Promise<bigint | null>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"erc20deposit",children:"ERC20Deposit"}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'extensions:\n  - name: "Foo"\n    type: "erc20-deposit"\n    contractAddress: "0x01...ef"\n    startBlockHeight: 4567123\n    scheduledPrefix: "dp"\n    depositAddress: "0x23...cd"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"meaning-1",children:"Meaning"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the ERC20 extension, which keeps track of the overall balances of the specified token, this one only keeps track of transfers made to a ",(0,t.jsx)(n.em,{children:"Deposit Address"})," specified in the config file. It stores the total amount transferred, and triggers a scheduled input for each such transfer. The desired deposit address needs to be specified in the config file as the ",(0,t.jsx)(n.code,{children:"depositAddress"})," field as seen in the example earlier."]}),"\n",(0,t.jsx)(n.h3,{id:"paima-concise-format-1",children:"Paima Concise format"}),"\n",(0,t.jsx)(n.p,{children:"A scheduled input is triggered every time a transfer is made to the deposit address. The scheduled input will have the following format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"prefix|fromAddr|value\n"})}),"\n",(0,t.jsx)(n.p,{children:"where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prefix"})," is the ",(0,t.jsx)(n.code,{children:"scheduledPrefix"})," specified in the config file,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fromAddr"})," is the address from which tokens have been sent to the deposit address,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"value"})," is the amount transferred in base 10."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"utility-functions-1",children:"Utility functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fetch the total amount the specified address has deposited to the deposit address"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// total amount the specified address has deposited to the deposit address\nexport async function totalAmountDeposited(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  walletAddress: string\n): Promise<bigint | null>;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fetch the list of wallet addresses which have sent at least the specified threshold amount"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export async function findUsersWithDepositsGreaterThan(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  thresholdAmount: bigint\n): Promise<string[]>;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);