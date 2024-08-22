"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[1002],{401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(5893),s=t(1151);const r={},c="ERC1155 Primitives",o={id:"home/state-machine/react-to-events/primitive-catalogue/evm/ERC1155",title:"ERC1155 Primitives",description:"- ERC1155, keeping track of ERC1155 ownership for a specified ERC1155 contract at the currently processed blockheight",source:"@site/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/10-evm/6-ERC1155.md",sourceDirName:"home/100-state-machine/300-react-to-events/10-primitive-catalogue/10-evm",slug:"/home/state-machine/react-to-events/primitive-catalogue/evm/ERC1155",permalink:"/home/state-machine/react-to-events/primitive-catalogue/evm/ERC1155",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/10-evm/6-ERC1155.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ERC6551 Primitives",permalink:"/home/state-machine/react-to-events/primitive-catalogue/evm/ERC6551"},next:{title:"Dynamic primitives",permalink:"/home/state-machine/react-to-events/primitive-catalogue/evm/dynamic-primitives"}},a={},l=[{value:"ERC1155",id:"erc1155",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Utility functions",id:"utility-functions",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"erc1155-primitives",children:"ERC1155 Primitives"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#erc1155",children:"ERC1155"}),", keeping track of ERC1155 ownership for a specified ERC1155 contract at the currently processed blockheight"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"erc1155",children:"ERC1155"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'extensions:\n  - name: "My semi-fungible token"\n    type: "erc1155"\n    contractAddress: "0x01...ef"\n    startBlockHeight: 7654321\n    scheduledPrefix: "newnft"\n    # optional - monitors both the 0-address and the dEaD-address\n    burnScheduledPrefix: "nftburn"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"meaning",children:"Meaning"}),"\n",(0,i.jsx)(n.p,{children:"This extension allows you to track ownership for any ERC1155-compatible contract."}),"\n",(0,i.jsx)(n.h3,{id:"paima-concise-format",children:"Paima Concise format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"prefix|operator|from|to|ids|values\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prefix"})," is the ",(0,i.jsx)(n.code,{children:"scheduledPrefix"})," specified in the config file,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"operator"})," is the address of an account/contract that is approved to make the transfer,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"from"})," is the address that sent the tokens,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"to"})," is the address that received the tokens"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ids"})," is a JSON-encoded array of token IDs included in the transfer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"values"})," is a JSON-encoded array of the amount of each token ID sent in the transfer"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"If"})," ",(0,i.jsx)(n.code,{children:"burnScheduledPrefix"})," is set, burn events are also emitted with the format:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"prefix|operator|from|ids|values\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prefix"})," is the value of ",(0,i.jsx)(n.code,{children:"burnScheduledPrefix"})," in the config file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"operator"})," is the address of an account/contract that is approved to make the transfer,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"from"})," is the address that sent the tokens,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ids"})," is a JSON-encoded array of token IDs included in the transfer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"values"})," is a JSON-encoded array of the amount of each token ID sent in the transfer"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"utility-functions",children:"Utility functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getErc1155AllTokens"}),", get a listing of all tokens owned by a wallet within a single ERC-1155 contract."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { ICdeErc1155GetAllTokensResult } from '@paima/db';\n// interface ICdeErc1155GetAllTokensResult {\n//   balance: string;\n//   cde_id: number;\n//   token_id: string;\n//   wallet_address: string;\n// }\n\nexport async function getErc1155AllTokens(\n  readonlyDBConn: Pool,\n  extensionName: string,\n  wallet: string\n): Promise<ICdeErc1155GetAllTokensResult[]>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getErc1155ByTokenId"}),", get info on a specific token within a single ERC-1155 contract."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import type { ICdeErc1155GetByTokenIdResult } from '@paima/db';\n// interface ICdeErc1155GetByTokenIdResult {\n//   balance: string;\n//   cde_id: number;\n//   token_id: string;\n//   wallet_address: string;\n// }\n\nexport async function getErc1155ByTokenId(\n  readonlyDBConn: Pool,\n  extensionName: string,\n  tokenId: bigint\n): Promise<ICdeErc1155GetByTokenIdResult | null>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getErc1155ByTokenIdAndWallet"}),", get info on a specific token owned by a wallet within a single ERC-1155 contract."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import type { getErc1155ByTokenIdAndWallet } from '@paima/db';\n// interface ICdeErc1155GetByTokenIdAndWalletResult {\n//   balance: string;\n//   cde_id: number;\n//   token_id: string;\n//   wallet_address: string;\n// }\n\nexport async function getErc1155ByTokenIdAndWallet(\n  readonlyDBConn: Pool,\n  extensionName: string,\n  wallet: string,\n  tokenId: bigint\n): Promise<ICdeErc1155GetByTokenIdAndWalletResult | null>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var i=t(7294);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);