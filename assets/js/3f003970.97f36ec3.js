"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},r="Deploying Your Own Stateful NFT Contract",l={unversionedId:"home/Setting Up Your Environment/deploying-your-stateful-nft",id:"home/Setting Up Your Environment/deploying-your-stateful-nft",title:"Deploying Your Own Stateful NFT Contract",description:"Paima Engine supports both classical ERC721 NFT contracts and Paima Extended ERC721 NFT contracts for Stateful NFTs.",source:"@site/docs/home/1 - Setting Up Your Environment/3 - deploying-your-stateful-nft.md",sourceDirName:"home/1 - Setting Up Your Environment",slug:"/home/Setting Up Your Environment/deploying-your-stateful-nft",permalink:"/home/Setting Up Your Environment/deploying-your-stateful-nft",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/1 - Setting Up Your Environment/3 - deploying-your-stateful-nft.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploying The Paima L2 Smart Contract",permalink:"/home/Setting Up Your Environment/deploying-l2-smart-contract"},next:{title:"Environment Configuration Variables",permalink:"/home/Setting Up Your Environment/environment-config-values"}},s={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Accessing the contracts",id:"accessing-the-contracts",level:2},{value:"State customization",id:"state-customization",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Admin operations",id:"admin-operations",level:2},{value:"Accessing the NFT data from your game node",id:"accessing-the-nft-data-from-your-game-node",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-your-own-stateful-nft-contract"},"Deploying Your Own Stateful NFT Contract"),(0,o.kt)("p",null,"Paima Engine supports both classical ERC721 NFT contracts and Paima Extended ERC721 NFT contracts for Stateful NFTs."),(0,o.kt)("p",null,'To provide developers more power in customizing how Stateful NFTs are initialized in their game, we have extended the ERC721 standard to allow selecting a pre-defined string when minting the NFT. This string gets routed through the Paima stack and ends up as a part of the scheduled input which your STF reads to initialize the NFT state (ex. "Warrior", "Mage", "Archer").'),(0,o.kt)("p",null,"The instructions below will walk you through all the steps required to deploy your own Paima Extended ERC721 NFT contract, together with an NFT Sale contract which will allow anyone to purchase your Stateful NFTs (and have it all automatically integrate with Paima Engine seamlessly)."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"To deploy the contracts, you will need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The address and private key of an EVM account on the target network (network you will be deploying on) with sufficient funds for deploying the contract (aka. the ",(0,o.kt)("em",{parentName:"li"},"deployment account"),"),"),(0,o.kt)("li",{parentName:"ul"},"The address of an account on the target network to be marked as the owner of the contract, capable of withdrawing funds (the ",(0,o.kt)("em",{parentName:"li"},"owner account"),", can be the same as the deployment account).")),(0,o.kt)("h2",{id:"accessing-the-contracts"},"Accessing the contracts"),(0,o.kt)("p",null,"First we will get access to the smart contracts and make sure all dependencies are installed to be able to compile/deploy them:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"./paima-engine contracts")," which emits the ",(0,o.kt)("em",{parentName:"li"},"contracts")," directory."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts/nft/")," directory;"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," to install all needed dependencies.")),(0,o.kt)("h2",{id:"state-customization"},"State customization"),(0,o.kt)("p",null,"Before you deploy your contracts, you may want to customize what strings the NFTs get minted with. To achieve this, you will need to make a few simple changes to two source files found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/src/")," directory:"),(0,o.kt)("p",null,"First, in ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/src/NftType.sol"),", you will find the following enum:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enum NftType {\n    FIRE,\n    WATER\n}\n")),(0,o.kt)("p",null,"Edit this enum by adding, removing or changing any of its values to obtain your desired list of possible values. For example, you can extend it by adding two more elements as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enum NftType {\n    FIRE,\n    WATER,\n    EARTH,\n    AIR\n}\n")),(0,o.kt)("p",null,"Next, you need to map these enum values to strings that the NFTs will be minted with. To do this, open ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/src/NftTypeMapper.sol"),", where you will find the following code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    constructor() {\n        nftTypeToString[NftType.FIRE] = "fire";\n        nftTypeToString[NftType.WATER] = "water";\n    }\n')),(0,o.kt)("p",null,"Edit this file so that it contains an entry for each possible enum value, assigning the strings you want to mint with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    constructor() {\n        nftTypeToString[NftType.FIRE] = "fire";\n        nftTypeToString[NftType.WATER] = "water";\n        nftTypeToString[NftType.EARTH] = "earth";\n        nftTypeToString[NftType.AIR] = "air";\n    }\n')),(0,o.kt)("p",null,"After this, your NFT contract is almost ready for deployment. One final preparation step is ensuring that your configuration is up to date."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Whether you are deploying or simply performing some admin functions, most of the data is taken from ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/deploy-config.json"),". Notice that the file contains separate configurations for testnet and mainnet, so you can have different configurations for different networks. A brief overview of the fields expected in this file follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Nft"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"symbol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supply")," ","\u2013"," the maximum number of NFTs that can be minted;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner")," ","\u2013",' the owner of the contract. Only used for the "transfer ownership" admin function, during deployment, the address of the deploying wallet will be used;'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minter")," ","\u2013",' intended primarily for the "add minter" admin function, also used during deployment if not empty;'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"baseUri")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NftSale"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"price")," ","\u2013"," the price of buying an NFT through the sale contract, used both for ",(0,o.kt)("inlineCode",{parentName:"li"},"NativeNftSale")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Erc20NftSale"),". For native sale the price is multiplied by ",(0,o.kt)("inlineCode",{parentName:"li"},"10^decimals"),";"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NativeNftSale"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decimals")," ","\u2013"," decimals of the underlying base currency of the chain, used for price calculation;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner")," ","\u2013"," see ",(0,o.kt)("inlineCode",{parentName:"li"},"Nft"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," field;"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Erc20NftSale"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currencies")," ","\u2013"," an object mapping symbols of supported ERC20 tokens to addresses of their contracts;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner")," ","\u2013"," see ",(0,o.kt)("inlineCode",{parentName:"li"},"Nft"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," field;")))),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," fields in the configuration are only used with the transfer ownership admin functionality; when first deploying the contracts, the deployment account is set as the owner. Be aware that only the owner can perform certain admin operations with the contracts (config updates, fund withdrawal). Once you change it, you cannot perform these operations as described in this file unless you use the new owner account as the deployment account."),(0,o.kt)("p",null,"Another configuration file used for deployment is ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/contract-addresses.json"),". In the vast majority of cases, especially when first deploying, you will not need to update this file or think about it at all, as it gets updated automatically whenever a new contract is deployed. If you are nevertheless interested in more details, consult ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/README.md"),"."),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"There are two contracts that you need to deploy in order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The NFT contract (",(0,o.kt)("inlineCode",{parentName:"li"},"Nft"),") ","\u2013"," this is the ERC721-compatible contract which mints the NFTs and stores their ownership state;"),(0,o.kt)("li",{parentName:"ul"},"The NFT sale contract (",(0,o.kt)("inlineCode",{parentName:"li"},"NativeNftSale"),") ","\u2013"," this is the interface for buying your NFTs, from where you can also withdraw the funds used to buy them. It must be deployed after deploying the NFT contract so that it can be associated with it.")),(0,o.kt)("p",null,"To achieve this, simply navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/")," directory, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy.sh")," script and follow the script's instructions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd contracts/nft/\n./deploy.sh\n")),(0,o.kt)("p",null,"After executing the two commands above, you will be asked to select the target network you want to deploy to and asked to provide the private key corresponding to the deployment account. Afterwards, select the option allowing you to deploy contracts (rather than perform admin operations) and select the NFT contract (",(0,o.kt)("inlineCode",{parentName:"p"},"Nft"),") as the contract to be deployed. Once the operation has completed, you should see a message like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Deployed contract addresses:\n   Nft: 0xfB7...a13\n\nTo automatically add this contract's Data to your game node database, you can copy and paste the following to your CDE config file:\n  - name: Test NFT contract\n    type: erc721\n    contractAddress: 0xfB7...a13\n    startBlockHeight: 12494000\n    initializationPrefix: nftmint\n")),(0,o.kt)("p",null,"Note down the contract address denoted on the second line, and also copy the final five lines, which you can later use as part of your ",(0,o.kt)("em",{parentName:"p"},"CDE config file")," to use your NFT data in your game node. Afterwards, you can run the deploy script again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./deploy.sh\n")),(0,o.kt)("p",null,"Again, follow the script's instructions just like for deploying the NFT contract, but this time select the ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeNftSale")," contract. Once deployment finishes, you should see a message like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Deployed contract addresses:\n   NativeNftSale: 0x3C0...E4b\n   NativeProxy:   0x4a2...33C\n")),(0,o.kt)("p",null,"You can now use the address marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeProxy")," as the address of your NFT sale contract."),(0,o.kt)("h2",{id:"admin-operations"},"Admin operations"),(0,o.kt)("p",null,"The deploy script found at ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/nft/deploy.sh")," can also be used to update the configuration of your deployed contracts. Simply update ",(0,o.kt)("inlineCode",{parentName:"p"},"contract/nft/src/deploy-config.json")," with any values you want to change and then run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd contracts/nft/\n./deploy.sh\n")),(0,o.kt)("p",null,"Simply follow the script's instructions, this time choosing to perform admin operations rather than deployment, select which operation you want to perform and then just wait for it to finish."),(0,o.kt)("p",null,"Note that to execute these admin operations with a smart contract, you need to be its owner, meaning that when the script asks you for the deployment private key, you need to supply the private key of the owner account. You do not need to worry about this if you didn't explicitly change the owner and are using the same private key as you deployed with."),(0,o.kt)("h2",{id:"accessing-the-nft-data-from-your-game-node"},"Accessing the NFT data from your game node"),(0,o.kt)("p",null,"Open up our NFT LvlUp game template - ",(0,o.kt)("inlineCode",{parentName:"p"},"./paima-engine-linux init template nft-lvlup")," to learn more."))}d.isMDXComponent=!0}}]);