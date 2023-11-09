"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[7190],{1305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(5893),s=n(1151);const r={},o="ERC6551 Primitives",a={id:"home/react-to-events/primitive-catalogue/ERC6551",title:"ERC6551 Primitives",description:"- ERC6551 Registry, keeping track of registrations of Token-Bound Accounts (TBAs) on the chain",source:"@site/docs/home/3-react-to-events/2-primitive-catalogue/4-ERC6551.md",sourceDirName:"home/3-react-to-events/2-primitive-catalogue",slug:"/home/react-to-events/primitive-catalogue/ERC6551",permalink:"/home/react-to-events/primitive-catalogue/ERC6551",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3-react-to-events/2-primitive-catalogue/4-ERC6551.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ERC721 Primitives",permalink:"/home/react-to-events/primitive-catalogue/ERC721"},next:{title:"Generic Primitives",permalink:"/home/react-to-events/primitive-catalogue/Generic"}},c={},l=[{value:"ERC6551 Registry",id:"erc6551-registry",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Contract address",id:"contract-address",level:3},{value:"Utility functions",id:"utility-functions",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"erc6551-primitives",children:"ERC6551 Primitives"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#erc6551-registry",children:"ERC6551 Registry"}),", keeping track of registrations of Token-Bound Accounts (TBAs) on the chain"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"erc6551-registry",children:"ERC6551 Registry"}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'extensions:\n  - name: "ERC6551 Registry"\n    type: "erc6551-registry"\n    contractAddress: "0x01...ef" # optional. Uses the new ERC6551 registry by default (WARNING: multiple projects use the old registry. See more info below)\n    implementation: "0x01...ef" # optional. Filters to only TBAs created with a specific implementation\n    tokenContract: "0x01...ef" # optional. Filters to only TBAs for a specific NFT collection\n    tokenId: "1234" # optional. Filters to only TBAs for a specific token ID in the collection\n    salt: "1234" # optional. Filters to only TBAs generated with a specific salt. Note: this is not an `indexed` field in the contract, so this will not lower the number of RPC calls\n    startBlockHeight: 7654321\n'})}),"\n",(0,i.jsx)(t.h3,{id:"meaning",children:"Meaning"}),"\n",(0,i.jsxs)(t.p,{children:["ERC6551 uses a ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6551#registry",children:"global registry"})," that where all TBAs are registered. This address is constant among all chains, and acts as an easy way to know all the TBAs deployed to the chain"]}),"\n",(0,i.jsxs)(t.p,{children:["This extension allows you to track all the TBAs that exist so that your game can easily aggregate state across different accounts owned by the same player, and it can allow you to treat specific kinds of TBA (ex: where the owner is a specific NFT for your game or a specific tool like ",(0,i.jsx)(t.a,{href:"https://www.stp.network",children:"AWNS"}),") differently."]}),"\n",(0,i.jsx)(t.h3,{id:"contract-address",children:"Contract address"}),"\n",(0,i.jsxs)(t.p,{children:["ERC6551 has had multiple versions using different contract addresses. You can find the history of all contract addresses used ",(0,i.jsx)(t.a,{href:"https://github.com/erc6551/reference/releases",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Notably, the old address did not used indexed fields for the ",(0,i.jsx)(t.code,{children:"AccountCreated"})," EVM logs, making them slower to index for some use-cases among other changes. Be sure to check which version of the registry your project uses."]}),"\n",(0,i.jsx)(t.h3,{id:"utility-functions",children:"Utility functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getErc6551AccountOwner"}),", fetch the NFT that owns this account:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export async function getErc6551AccountOwner(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  accountCreated: string\n): Promise<TokenIdPair | null>;\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getAllOwnedErc6551Accounts"}),", fetch all accounts owned by this NFT. This call is NOT recursive:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export async function getErc6551AccountOwner(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  nft: TokenIdPair\n): Promise<string[]>;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);