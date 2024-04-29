"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[6303],{5003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=n(5893),s=n(1151);const a={},i="Effect on Interfaces",r={id:"home/multichain-support/wallet-layer/delegate-wallet/interfaces",title:"Effect on Interfaces",description:"Enabling wallet delegation has implications on the interfaces of multiple different parts of your application.",source:"@site/docs/home/700-multichain-support/2-wallet-layer/100-delegate-wallet/3-interfaces.mdx",sourceDirName:"home/700-multichain-support/2-wallet-layer/100-delegate-wallet",slug:"/home/multichain-support/wallet-layer/delegate-wallet/interfaces",permalink:"/ja/home/multichain-support/wallet-layer/delegate-wallet/interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/700-multichain-support/2-wallet-layer/100-delegate-wallet/3-interfaces.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ja/home/multichain-support/wallet-layer/delegate-wallet/introduction"},next:{title:"Integrate into your game",permalink:"/ja/home/multichain-support/wallet-layer/delegate-wallet/integrate"}},o={},d=[{value:"Meta Primitive",id:"meta-primitive",level:2},{value:"STF",id:"stf",level:2},{value:"Indexer Database",id:"indexer-database",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Connect two wallets",id:"connect-two-wallets",level:3},{value:"Cancel delegation",id:"cancel-delegation",level:3},{value:"Migrate wallet",id:"migrate-wallet",level:3},{value:"Helper",id:"helper",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"effect-on-interfaces",children:"Effect on Interfaces"}),"\n",(0,l.jsx)(t.p,{children:"Enabling wallet delegation has implications on the interfaces of multiple different parts of your application."}),"\n",(0,l.jsx)(t.h2,{id:"meta-primitive",children:"Meta Primitive"}),"\n",(0,l.jsxs)(t.p,{children:["The user must (using a ",(0,l.jsx)(t.a,{href:"/ja/home/read-write-L2-state/base-format",children:"concise"})," command) send a transaction to delegate their wallet address to another wallet address"]}),"\n",(0,l.jsxs)(t.p,{children:["Wallet delegation provides the following ",(0,l.jsx)(t.a,{href:"/ja/home/react-to-events/primitive-catalogue/meta/introduction",children:"meta primitives"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"    delegate            =   &wd|from?|to?|from_signature|to_signature\n    migrate             =   &wm|from?|to?|from_signature|to_signature\n    cancelDelegations   =   &wc|to?\n"})}),"\n",(0,l.jsx)(t.h2,{id:"stf",children:"STF"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/ja/home/read-write-L2-state/read-data#stf-function",children:"STF"})," data is slightly changed:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"userAddress"}),": contains the main wallet address."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"realAddress"}),": contains the real wallet address that sent the transaction."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"userId"}),": contains the user id, which is the same for all wallets of the same user."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"userAddress"})," and ",(0,l.jsx)(t.code,{children:"realAddress"})," will be the same for the main wallet or if there are no delegations."]}),"\n",(0,l.jsx)(t.h2,{id:"indexer-database",children:"Indexer Database"}),"\n",(0,l.jsx)(t.p,{children:"There are 2 tables tracked in the indexer to manage delegations:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"addresses"}),": ",(0,l.jsx)(t.em,{children:"(always present)"})," maps a unique user id to each wallet address."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"delegations"}),": ",(0,l.jsx)(t.em,{children:"(new for delegations)"})," maps delegated wallet addresses using IDs from the ",(0,l.jsx)(t.em,{children:"addresses"})," table."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"middleware",children:"Middleware"}),"\n",(0,l.jsxs)(t.p,{children:["There are multiple files part of ",(0,l.jsx)(t.code,{children:"@paima/sdk/mw-core"})," to help integrate wallet delegation"]}),"\n",(0,l.jsx)(t.h3,{id:"connect-two-wallets",children:"Connect two wallets"}),"\n",(0,l.jsxs)(t.p,{children:["This function delegates ",(0,l.jsx)(t.code,{children:"from"})," your main wallet ",(0,l.jsx)(t.code,{children:"to"})," your burner wallet"]}),"\n",(0,l.jsxs)(t.p,{children:["When delegating, you must sign the following message template in 2 steps: once for each key (",(0,l.jsx)(t.code,{children:"from"})," key & ",(0,l.jsx)(t.code,{children:"to"})," key):"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"DELEGATE-WALLET:<other-address-lowercase>\n"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["The previous plaintext message can be generated with the builtin helper: ",(0,l.jsx)(t.code,{children:"WalletConnectHelper.buildMessageToSign(other-address-lowercase)"})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"other-address-lowercase"}),": the address not signing this step"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.em,{children:"Note:"})," the address signing for a given step is not explicitly added since its address & signature are implicitly part of the transaction"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"function walletConnect(\n  // If from/to are null\n  // they gets replaced by the wallet that sends (or signs if using the batcher) the tx\n  from: string | null,\n  to: string | null,\n  from_signature: string,\n  to_signature: string\n): Promise<SuccessfulResult<PostDataResponse> | FailedResult>\n"})}),"\n",(0,l.jsx)(t.h3,{id:"cancel-delegation",children:"Cancel delegation"}),"\n",(0,l.jsxs)(t.p,{children:["This function removes any current delegation to the sender address.\nIf ",(0,l.jsx)(t.code,{children:"to"})," is an empty string, it will remove all delegations.\nIf ",(0,l.jsx)(t.code,{children:"to"})," is a valid address, it will remove the delegation to that single address."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"function walletConnectCancelDelegations(\n  to: string\n): Promise<SuccessfulResult<PostDataResponse> | FailedResult>\n"})}),"\n",(0,l.jsx)(t.h3,{id:"migrate-wallet",children:"Migrate wallet"}),"\n",(0,l.jsxs)(t.p,{children:["This function migrates the address ",(0,l.jsx)(t.code,{children:"from"})," to ",(0,l.jsx)(t.code,{children:"to"}),"."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"function walletConnectMigrate(\n  // null gets replaced by the wallet that signs the tx\n  from: string | null,\n  to: string | null,\n  from_signature: string,\n  to_signature: string\n): Promise<SuccessfulResult<PostDataResponse> | FailedResult> \n"})}),"\n",(0,l.jsx)(t.h3,{id:"helper",children:"Helper"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"WalletConnectHelper"})," class contains helper functions to sign with injected or generate the message for local wallets:"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"buildMessageToSign"})," to generate the correct concise notation to sign for an action"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"connectExternalWalletAndSign"})," to connect an external wallet and delegate from it at the same time."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var l=n(7294);const s={},a=l.createContext(s);function i(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);