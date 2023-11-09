"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[6542],{781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=t(5893),i=t(1151);const r={sidebar_position:2},c="Deploying The Paima L2 Smart Contract",a={id:"home/setup/deploying-l2-smart-contract",title:"Deploying The Paima L2 Smart Contract",description:"The Paima L2 Contract is built for developers to deploy their own game as an L2 which seamlessly works with Paima Engine.",source:"@site/docs/home/1-setup/2-deploying-l2-smart-contract.md",sourceDirName:"home/1-setup",slug:"/home/setup/deploying-l2-smart-contract",permalink:"/ja/home/setup/deploying-l2-smart-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/1-setup/2-deploying-l2-smart-contract.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How To Use Paima Engine",permalink:"/ja/home/setup/how-to-use-paima-engine"},next:{title:"Deploying Your Own Stateful NFT Contract",permalink:"/ja/home/setup/deploying-your-stateful-nft"}},l={},s=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Accessing The Contract",id:"accessing-the-contract",level:2},{value:"Editing Truffle Config",id:"editing-truffle-config",level:2},{value:"Deployment Instructions",id:"deployment-instructions",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploying-the-paima-l2-smart-contract",children:"Deploying The Paima L2 Smart Contract"}),"\n",(0,o.jsx)(n.p,{children:"The Paima L2 Contract is built for developers to deploy their own game as an L2 which seamlessly works with Paima Engine."}),"\n",(0,o.jsxs)(n.p,{children:["In addition to being a core part of infrastructure for the L2 itself, this contract enables developers to earn revenue through collecting fees on every single posted game input. This fee will be held internally in the contract, and can be withdrawn by a specific ",(0,o.jsx)(n.strong,{children:"owner account"})," (which is defined upon deploying the contract)."]}),"\n",(0,o.jsx)(n.p,{children:"The owner of the deployed L2 smart contract has the ability to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Set/change the fee"}),"\n",(0,o.jsx)(n.li,{children:"Change the owner of the contract to a new address"}),"\n",(0,o.jsx)(n.li,{children:"Withdraw collected funds from the contract"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This contract is currently implemented to be usable on top of EVM-based blockchains."}),"\n",(0,o.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,o.jsx)(n.p,{children:"To deploy the contract, you will need the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The address and private key of an EVM account on the target network (network you will be deploying on) with sufficient funds for deploying the contract (aka. the ",(0,o.jsx)(n.em,{children:"deployment account"}),"),"]}),"\n",(0,o.jsxs)(n.li,{children:["The address of an account on the target network to be marked as the owner of the contract, capable of withdrawing funds (the ",(0,o.jsx)(n.em,{children:"owner account"}),", can be the same as the deployment account)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"accessing-the-contract",children:"Accessing The Contract"}),"\n",(0,o.jsx)(n.p,{children:"First we will get access to the smart contract (specifically its whole project) and make sure all dependencies are installed to be able to compile/deploy it."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"./paima-engine contracts"})," which emits the ",(0,o.jsx)(n.em,{children:"contracts"})," folder."]}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to the ",(0,o.jsx)(n.em,{children:"contracts/paima-l2-contract"})," directory;"]}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"npm i"})," to install all needed dependencies (otherwise you will get a ",(0,o.jsx)(n.code,{children:"Cannot find module"})," error)"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"editing-truffle-config",children:"Editing Truffle Config"}),"\n",(0,o.jsxs)(n.p,{children:["You will notice a ",(0,o.jsx)(n.code,{children:"truffle-config.js"})," file in the ",(0,o.jsx)(n.em,{children:"paima-l2-contract"})," folder. This is a config file which holds all the needed info to deploy the Paima L2 smart contract onto a target blockchain."]}),"\n",(0,o.jsx)(n.p,{children:"Specifically, the fields you will want to look at editing are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"owner"}),' (The EVM address that will have "admin control" of your contract on-chain)']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fee"})," (A static fee that users are required to pay to submit a game input to the contract/L2)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"providerOrURL"})," (URL to an RPC node of the target network you want to deploy on. Default included RPC is for the Milkomeda C1 devnet)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"network_id"})," (The network id of the target network you want to deploy on.)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You will notice that the current config is setup for targeting a ",(0,o.jsx)(n.code,{children:"testnet"})," network. Feel free to also create a ",(0,o.jsx)(n.code,{children:"mainnet"})," network config in the future for your mainnet deployment."]}),"\n",(0,o.jsx)(n.p,{children:"Once you have filled out the above fields, your config is ready-to-go."}),"\n",(0,o.jsx)(n.h2,{id:"deployment-instructions",children:"Deployment Instructions"}),"\n",(0,o.jsx)(n.p,{children:"With the prerequisites ready, deploying the contract is done with the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Fund a (non-hardware wallet) EVM account on your target chain with enough to cover the cost of deploying a contract (this is your deployment account)."}),"\n",(0,o.jsx)(n.li,{children:'Export the private key of the account from your wallet software (Metamask supports this in the "Account details" section).'}),"\n",(0,o.jsxs)(n.li,{children:["Set the deployment account private key to an environment variable called ",(0,o.jsx)(n.code,{children:"PRIVATE_KEY"})," and export it. For example, in Bash, run ",(0,o.jsx)(n.code,{children:"export PRIVATE_KEY=..."})," with your private key (without an ",(0,o.jsx)(n.code,{children:"0x"})," prefix) instead of the ellipsis."]}),"\n",(0,o.jsxs)(n.li,{children:["Deploy the contract by running ",(0,o.jsx)(n.code,{children:"npx truffle migrate --network testnet"})," (or if you created a ",(0,o.jsx)(n.code,{children:"mainnet"})," network in your config, you can fill that in instead of ",(0,o.jsx)(n.code,{children:"testnet"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Truffle will proceed forward with doing all of the steps required to get the contract compiled and deployed, using the wallet you specified the ",(0,o.jsx)(n.code,{children:"PRIVATE_KEY"})," for."]}),"\n",(0,o.jsx)(n.li,{children:"Once finished you will get a summary of the deployment which includes the address of the newly deployed contract:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Starting migrations...\n======================\n> Network name:    'testnet'\n> Network id:      200101\n> Block gas limit: 64937344 (0x3dedd80)\n\n\n2_deploy_contracts.js\n=====================\n\n   Deploying 'Storage'\n   -------------------\n   > transaction hash:    0x7118207b63af53ef0b26ffda15f3bb7c90e7ab76801633ffec713d81267c1724\n   > Blocks: 1            Seconds: 4\n   > contract address:    0x12eCd8dB44026A49E59d824876eaceD201AeEE96\n   > block number:        10023539\n   > block timestamp:     1272639491\n   > account:             0x0Ee04327E020Da09e0ad77Bf15071138C2e62172\n   > balance:             4.204060886188679262\n   > gas used:            699316 (0xaabb4)\n   > gas price:           60 gwei\n   > value sent:          0 ETH\n   > total cost:          0.04195896 ETH\n\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.04195896 ETH\n\nSummary\n=======\n> Total deployments:   1\n> Final cost:          0.04195896 ETH\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Of note, truffle will always print out ",(0,o.jsx)(n.code,{children:"ETH"}),", but in fact it used the native currency of your target blockchain."]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Congratulations, you have officially deployed your L2 smart contract for your game! You will only need to deploy the contract once, and it will continue to work without any further interactions needed."}),"\n",(0,o.jsx)(n.p,{children:"Simply note down the contract address and continue forward with the main how to guide to finish deploying a fully working game node."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var o=t(7294);const i={},r=o.createContext(i);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);