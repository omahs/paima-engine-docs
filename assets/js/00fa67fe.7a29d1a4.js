"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[4101],{2004:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=s(5893),l=s(1151);const a={},r="How it works",i={id:"home/multichain-support/delegate-wallet/how-it-works",title:"How it works",description:"Wallet Delegate API",source:"@site/docs/home/700-multichain-support/3-delegate-wallet/3-how-it-works.mdx",sourceDirName:"home/700-multichain-support/3-delegate-wallet",slug:"/home/multichain-support/delegate-wallet/how-it-works",permalink:"/home/multichain-support/delegate-wallet/how-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/700-multichain-support/3-delegate-wallet/3-how-it-works.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/home/multichain-support/delegate-wallet/getting-started"}},o={},d=[{value:"Wallet Delegate API",id:"wallet-delegate-api",level:2},{value:"STF",id:"stf",level:2},{value:"Wallet Delegate Tables",id:"wallet-delegate-tables",level:2},{value:"API",id:"api",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.h2,{id:"wallet-delegate-api",children:"Wallet Delegate API"}),"\n",(0,t.jsx)(n.p,{children:"The user must send a transaction to delegate their wallet address to another wallet address, through a concise command.\nIMPORTANT: This functionally is automatically provided by the SDK helpers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    delegate            =   &wd|from?|to?|from_signature|to_signature\n    migrate             =   &wm|from?|to?|from_signature|to_signature\n    cancelDelegations   =   &wc|to_signature\n"})}),"\n",(0,t.jsx)(n.p,{children:"They must sign the transaction with the following message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"DELEGATE-WALLET:<other-address-lowercase>:<env-contract-address>`\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"from: the main address that will be"}),"\n",(0,t.jsx)(n.li,{children:"to"}),"\n",(0,t.jsx)(n.li,{children:'other-address-lowercase: is "to" or "from" for "from" and "to" respectively address in lowercase.'}),"\n",(0,t.jsx)(n.li,{children:"env-contract-address: is defined in .env CONTRACT_ADDRESS"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stf",children:"STF"}),"\n",(0,t.jsx)(n.p,{children:"STF data is slightly changed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"userAddress: contains the main wallet address."}),"\n",(0,t.jsx)(n.li,{children:"realAddress: contains the real wallet address that sent the transaction."}),"\n",(0,t.jsx)(n.li,{children:"userId: contains the user id, which is the same for all wallets of the same user."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"userAddress and realAddress will be the same for the main wallet or if there are no delegations."}),"\n",(0,t.jsx)(n.h2,{id:"wallet-delegate-tables",children:"Wallet Delegate Tables"}),"\n",(0,t.jsx)(n.p,{children:"There will to managed tables"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"addresses: maps a unique user id to each wallet address."}),"\n",(0,t.jsx)(n.li,{children:"delegations: maps delegated wallet addresses."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'This function delegates Wallet "to" to "from".\nnull "from" or "to" gets replace by wallet that sends (or signs if using the batcher) the transaction.'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function walletConnect(\n  from: string | null,\n  to: string | null,\n  from_signature: string,\n  to_signature: string\n): Promise<SuccessfulResult<PostDataResponse> | FailedResult>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"This function removes any current delegation to the sender address.\nThe message has the format:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"DELEGATE-WALLET::<env-contract-address>`;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function walletConnectCancelDelegations(\n  to_signature: string\n): Promise<SuccessfulResult<PostDataResponse> | FailedResult> {\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:'This function migrates the address "from" to "to".\nnull "from" or "to" gets replace by wallet that sends (or signs if using the batcher) the transaction.'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function walletConnectMigrate(\n  from: string | null,\n  to: string | null,\n  from_signature: string,\n  to_signature: string\n): Promise<SuccessfulResult<PostDataResponse> | FailedResult> \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"This class contains helper functions to sign with injected or generate the message for local wallets."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"class WalletConnectHelper {\n    buildMessageToSign(subMessage: string): string;\n    connectExternalWalletAndSign(\n    walletType: AddressType,\n    walletName: string,\n    subMessage: string\n  ): Promise<{\n    message: string;\n    signedMessage: string;\n    walletAddress: string;\n  }>\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(7294);const l={},a=t.createContext(l);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);