"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[9444],{515:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(5893),a=n(1151);const i={},r="Contract Configurations",c={id:"home/smart-contracts/evm/introduction",title:"Contract Configurations",description:"Paima templates leverage Hardhat for deploying and managing EVM contracts.",source:"@site/docs/home/50-smart-contracts/200-evm/100-introduction.md",sourceDirName:"home/50-smart-contracts/200-evm",slug:"/home/smart-contracts/evm/introduction",permalink:"/home/smart-contracts/evm/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/50-smart-contracts/200-evm/100-introduction.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Paima Batcher",permalink:"/home/setup/paima-bacher"},next:{title:"Deploying the L2 Contract",permalink:"/home/smart-contracts/evm/paima-l2-contract"}},s={},d=[{value:"Deploying to a testnet or mainnet",id:"deploying-to-a-testnet-or-mainnet",level:3},{value:"Adding New Contracts",id:"adding-new-contracts",level:2},{value:"Contracts you want to use as-is",id:"contracts-you-want-to-use-as-is",level:3},{value:"Contracts with custom logic",id:"contracts-with-custom-logic",level:3},{value:"Modifying the Paima Built-In Contract",id:"modifying-the-paima-built-in-contract",level:2},{value:"Interacting with Contracts",id:"interacting-with-contracts",level:2},{value:"Finding Your Deployed Contracts",id:"finding-your-deployed-contracts",level:2}];function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"contract-configurations",children:"Contract Configurations"}),"\n",(0,o.jsxs)(e.p,{children:["Paima templates leverage ",(0,o.jsx)(e.a,{href:"https://hardhat.org/",children:"Hardhat"})," for deploying and managing EVM contracts."]}),"\n",(0,o.jsx)(e.p,{children:"Typically, deploying your contracts involve two steps:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"npm run chain:start # start a chain on the local network\nnpm run chain:deploy # deploy contracts to the local network (see `hardhat.config.ts` for network names)\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Deployments are done leveraging ",(0,o.jsx)(e.a,{href:"https://hardhat.org/ignition/docs/getting-started#overview",children:"Hardhat Ignition"}),". You can modify the scripts to deploy all the EVM contracts for your app by modifying ",(0,o.jsx)(e.code,{children:"./contracts/evm/ignition/modules/deploy"})," and you can modify the core Hardhat configs in ",(0,o.jsx)(e.code,{children:"hardhat.config.ts"})]}),"\n",(0,o.jsxs)(e.p,{children:["Paima comes with multiple contracts for the basic use-cases. You can find all the EVM contracts that come with Paima in the ",(0,o.jsx)(e.a,{href:"/home/libraries/evm-contracts/solidity/generated-docs",children:"@paima/evm-contracts"})," NPM package."]}),"\n",(0,o.jsx)(e.h3,{id:"deploying-to-a-testnet-or-mainnet",children:"Deploying to a testnet or mainnet"}),"\n",(0,o.jsxs)(e.p,{children:["By default, Hardhat will spin up a local EVM chain for you to interact with (learn more ",(0,o.jsx)(e.a,{href:"https://hardhat.org/hardhat-network/docs/overview",children:"here"}),"). If you want to use a real network (testnet or mainnet), the following steps will help you get set up:"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Make sure you have the correct network setup in your ",(0,o.jsx)(e.code,{children:"hardhat.config.ts"})]}),"\n",(0,o.jsx)(e.li,{children:"Ensure that you have a good RPC provider for the network (free RPC providers will typically rate limit and enforce other limitations making them too limited for Paima)"}),"\n",(0,o.jsx)(e.li,{children:"Fund a (non-hardware wallet) EVM account on your target chain with enough to cover the cost of deploying a contract (this is your deployment account)."}),"\n",(0,o.jsx)(e.li,{children:'Export the private key of the account from your wallet software (MetaMask supports this in the "Account details" section).'}),"\n",(0,o.jsxs)(e.li,{children:["Set the deployment account private key to an environment variable called ",(0,o.jsx)(e.code,{children:"DEPLOYER_PRIVATE_KEY"})," and export it. For example, in Bash, run ",(0,o.jsx)(e.code,{children:"export DEPLOYER_PRIVATE_KEY=..."})," with your private key (without an ",(0,o.jsx)(e.code,{children:"0x"})," prefix) instead of the ellipsis."]}),"\n",(0,o.jsxs)(e.li,{children:["Make sure you've set any parameters for your deployment in ",(0,o.jsx)(e.code,{children:"./contracts/evm/ignition/parameters.json"})]}),"\n",(0,o.jsxs)(e.li,{children:["Deploy the contract by running ",(0,o.jsx)(e.code,{children:"npm run chain:deploy"})]}),"\n",(0,o.jsxs)(e.li,{children:["Hardhat will proceed forward with doing all of the steps required to get the contract compiled and deployed, using the wallet you specified the ",(0,o.jsx)(e.code,{children:"DEPLOYER_PRIVATE_KEY"})," for."]}),"\n",(0,o.jsx)(e.li,{children:"Once finished you will get a summary of the deployment which includes the address of the newly deployed contract"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"adding-new-contracts",children:"Adding New Contracts"}),"\n",(0,o.jsx)(e.p,{children:"To add new contracts to your project and have them available from your Hardhat Ignition deployment script, you have two options:"}),"\n",(0,o.jsx)(e.h3,{id:"contracts-you-want-to-use-as-is",children:"Contracts you want to use as-is"}),"\n",(0,o.jsxs)(e.p,{children:["If you want to use a contract as-is, you can add it to your compilation process by modifying your ",(0,o.jsx)(e.code,{children:"hardhat.config.ts"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"const config: HardhatUserConfig = {\n  dependencyCompiler: {\n    paths: [\n      // add your contract here. Example \u2193\n      // '@paima/evm-contracts/contracts/PaimaL2Contract.sol',\n    ],\n  },\n};\n"})}),"\n",(0,o.jsx)(e.h3,{id:"contracts-with-custom-logic",children:"Contracts with custom logic"}),"\n",(0,o.jsxs)(e.p,{children:["If you want to add your own custom contract for your game, you place it in ",(0,o.jsx)(e.code,{children:"./contracts/evm/solidity"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["More generally speaking, you can modify the place where new contracts are loaded by modifying your ",(0,o.jsx)(e.code,{children:"hardhat.config.ts"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"const config: HardhatUserConfig = {\n  paths: {\n    sources: './contracts/evm/solidity', // \u2190 here\n  },\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"modifying-the-paima-built-in-contract",children:"Modifying the Paima Built-In Contract"}),"\n",(0,o.jsxs)(e.p,{children:["You can extend the functionality of the built-in contracts using Solidity ",(0,o.jsx)(e.a,{href:"https://solidity-by-example.org/inheritance/",children:"inheritance"}),", as for example the L2 contract can be found in ",(0,o.jsx)(e.code,{children:"@paima/evm-contracts/contracts/PaimaL2Contract.sol"}),". However, for cases where that is not sufficient, Paima allows you to extract a copy of all the built-in contracts by running ",(0,o.jsx)(e.code,{children:"./paima-engine contracts"})," which emits a ",(0,o.jsx)(e.code,{children:"contracts"})," folder."]}),"\n",(0,o.jsx)(e.h2,{id:"interacting-with-contracts",children:"Interacting with Contracts"}),"\n",(0,o.jsxs)(e.p,{children:["You can interact with the contracts you've deployed using the ",(0,o.jsx)(e.a,{href:"https://github.com/Synthetixio/hardhat-interact",children:"hardhat-interact plugin"})," using ",(0,o.jsx)(e.code,{children:"npx hardhat --network localhost interact"})]}),"\n",(0,o.jsx)(e.h2,{id:"finding-your-deployed-contracts",children:"Finding Your Deployed Contracts"}),"\n",(0,o.jsxs)(e.p,{children:["You can find the deployment address of the contract anytime in ",(0,o.jsx)(e.code,{children:"./contracts/evm/ignition/deployments/chain-XXX/deployed_addresses.json"})]})]})}function h(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var o=n(7294);const a={},i=o.createContext(a);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);