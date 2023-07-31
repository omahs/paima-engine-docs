"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Chain Data Extensions",s={unversionedId:"home/Reacting to events/chain-data-extensions",id:"home/Reacting to events/chain-data-extensions",title:"Chain Data Extensions",description:"When you are looking to add deep blockchain integration to your game, you will likely be interested in accessing information about ownership of ERC721s (NFTs) or a wallet's balance of ERC20 tokens for example. Paima Engine enables this by automatically doing the heavy work for you via a feature called Chain Data Extensions. CDEs allow you to read data trustlessly from the underlying L1.",source:"@site/docs/home/3 - Reacting to events/2 - chain-data-extensions.md",sourceDirName:"home/3 - Reacting to events",slug:"/home/Reacting to events/chain-data-extensions",permalink:"/ja/home/Reacting to events/chain-data-extensions",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3 - Reacting to events/2 - chain-data-extensions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scheduling Events and Timers",permalink:"/ja/home/Reacting to events/scheduled-events"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Accessing the collected data",id:"accessing-the-collected-data",level:2},{value:"ERC721",id:"erc721",level:2},{value:"ERC20",id:"erc20",level:2},{value:"ERC20Deposit",id:"erc20deposit",level:2},{value:"Generic",id:"generic",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chain-data-extensions"},"Chain Data Extensions"),(0,i.kt)("p",null,"When you are looking to add deep blockchain integration to your game, you will likely be interested in accessing information about ownership of ERC721s (NFTs) or a wallet's balance of ERC20 tokens for example. Paima Engine enables this by automatically doing the heavy work for you via a feature called ",(0,i.kt)("em",{parentName:"p"},"Chain Data Extensions"),". CDEs allow you to read data trustlessly from the underlying L1."),(0,i.kt)("p",null,"The basic approach is simple: you simply set up a config file where you specify what contracts you want to collect data from (in the L1) and Paima Engine automatically projects the emitted event data to your game node. In other words, when you then run your game node, it will automatically acquire the data for you along with a simple-to-use interface in the Paima SDK to allow you to access this data."),(0,i.kt)("p",null,"Paima Engine currently supports the following types of chain data extensions, each described in more detail in its own section:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#erc721"},"ERC721"),", keeping track of NFT ownership for a specified ERC721 contract at the currently processed blockheight, as well as generating scheduled inputs for newly minted NFTs;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#erc20"},"ERC20"),", keeping track of wallet balances for a specified ERC20 contract;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#erc20deposit"},"ERC20Deposit"),", keeping track of the total amount of a specified ERC20 contract sent by wallets to a specified address, as well as generating scheduled inputs when such transfers happen;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#generic"},"Generic"),", allowing you to provide an arbitrary contract ABI and the signature of the event to track, allowing you to collect data even from smart contracts not directly supported by the above types.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To specify which chain data extensions you are using for your game, you need to provide a configuration file. By default, a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions.yml")," in your root directory (same place as the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file) is expected, but you may adjust this path using the ",(0,i.kt)("inlineCode",{parentName:"p"},"CDE_CONFIG_PATH")," environment variable."),(0,i.kt)("p",null,"Here is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions.yml")," that you can copy paste into the root folder of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'extensions:\n  - name: "My NFT Contract"\n    type: "erc721"\n    contractAddress: "0x01...EF"\n    startBlockHeight: 7654321\n    scheduledPrefix: "newnft"\n  - name: "My SpecialCoin"\n    type: "erc20-deposit"\n    contractAddress: "0xFE...10"\n    startBlockHeight: 4567123\n    scheduledPrefix: "dp"\n    depositAddress: "0xAB...CD"\n  - name: "My Custom Contract"\n    type: "generic"\n    contractAddress: "0xDC...BA"\n    startBlockHeight: 11223344\n    abiPath: "./abis/MyCustomContract.json"\n    eventSignature: "MyEvent(address,uint256)"\n    scheduledPrefix: "cst"\n')),(0,i.kt)("p",null,"Note that extensions of different types often require slightly different fields ","\u2013"," this will be described in their respective sections. However, here is a quick overview of the purposes of each field in the above config:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": This field allows you to refer to this particular extension when using the Paima SDK functions for accessing the data it has collected;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": This specifies which extension you want to use, currently supporting values corresponding to the types of extensions described in later subsections:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"erc721"'),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"erc20"'),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"erc20-deposit"'),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"generic"'),";"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contractAddress"),": The address of the contract to read data from;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startBlockHeight"),": The starting blockheight from which you want the data to be read, zero by default; You should always set this to the block height that the smart contract was deployed on when in production."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheduledPrefix"),": For extensions that trigger scheduled inputs (ERC721 and ERC20Deposit) specifies the prefix used with these scheduled inputs;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"depositAddress"),": This field is only used by the ERC20Deposit extension type to specify the target address of transactions you are interested in tracking.")),(0,i.kt)("p",null,"If you try to run your game node with an invalid or non-existent CDE config file, Paima Engine will report the problem to you and then carry on as if no chain data extensions were specified."),(0,i.kt)("h2",{id:"accessing-the-collected-data"},"Accessing the collected data"),(0,i.kt)("p",null,"Each extension may provide data to your game in one (or both) of the two ways below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By collecting the data and saving it into your game database directly, which you can access using Paima SDK functions described below;"),(0,i.kt)("li",{parentName:"ol"},"By scheduling inputs when certain events happen, which you can then react to in your state transition function.")),(0,i.kt)("p",null,"The data collected and functions used to access it are specific to each type of extension and you can find more information about that in their respective sections. In general, be aware that these functions will read directly from the game state database (which is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"readonlyDBConn")," parameter is for), and you will need to specify the extension name (which is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"cdeName")," parameter in each function is for) which needs to correspond to the name you specified in the configuration file."),(0,i.kt)("p",null,"Scheduled inputs are triggered by events specific to each extension type, with the circumstances and the format of the scheduled input described in their respective sections. The inputs are always scheduled either for the current blockheight (which enables them to be processed immediately, as scheduled inputs are processed before the state transition function is called), or, if they are triggered before the overall ",(0,i.kt)("inlineCode",{parentName:"p"},"START_BLOCKHEIGHT")," of the game node (specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file), in the so-called ",(0,i.kt)("em",{parentName:"p"},"pre-sync")," phase, they are scheduled for ",(0,i.kt)("inlineCode",{parentName:"p"},"START_BLOCKHEIGHT + 1")," (which is the first blockheight for which the state transition function is called). The scheduled inputs will always start with the prefix specified in the config as ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledPrefix"),"."),(0,i.kt)("p",null,"To learn by example, please consult the NFT LvlUp game template ","\u2013"," ",(0,i.kt)("inlineCode",{parentName:"p"},"./paima-engine-linux init template nft-lvlup")," to learn more."),(0,i.kt)("h2",{id:"erc721"},"ERC721"),(0,i.kt)("p",null,"This extension allows you to track NFT ownership for any ERC721-compatible contract. You may also use it with PaimaERC721 contracts, which additionally allow you to specify an arbitrary string when minting an NFT ","\u2013"," this extension type supports retrieving that string using scheduled inputs."),(0,i.kt)("p",null,"A scheduled input is triggered every time a new NFT is minted. The scheduled input will have the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prefix|contractAddress|tokenId|mintData\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheduledPrefix")," specified in the config file,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contractAddress")," is the address of the contract (also specified in the config file),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokenId")," is the ID of the newly minted token (in base 10),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mintData")," is the string emitted when the NFT was minted for PaimaERC721 NFTs (used for specifying the type of Stateful NFT). For classical ERC721 contracts, it will always be an empty string.")),(0,i.kt)("p",null,"Paima SDK provides you with the following functions you can use to access ERC721 NFT data when using CDEs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getNftOwner"),", to fetch the address which owns the NFT with the specified token ID:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getNftOwner(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  nftId: bigint\n): Promise<string | null>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isNftOwner"),", to check whether the specified address owns the specified NFT:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function isNftOwner(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  nftId: bigint,\n  ownerAddress: string\n): Promise<boolean>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getOwnedNfts"),", to fetch a list of token IDs of NFTs owned by the specified wallet address:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getOwnedNfts(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  ownerAddress: string\n): Promise<bigint[]>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getAllOwnedNfts"),", to fetch a list of ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenId"),",",(0,i.kt)("inlineCode",{parentName:"li"},"cdeName")," pairs of NFTs owned by the specified wallet address across all chain data extensions:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getAllOwnedNfts(\n  readonlyDBConn: Pool,\n  ownerAddress: string\n): Promise<\n  {\n    cdeName: string;\n    tokenId: bigint;\n  }[]\n>;\n")),(0,i.kt)("h2",{id:"erc20"},"ERC20"),(0,i.kt)("p",null,"This extension allows you to track the balances of a specified ERC20 token for all wallets by processing ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," events the contract emits. It does not schedule any inputs, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledPrefix")," field can be omitted."),(0,i.kt)("p",null,"Paima SDK provides you with the following functions you can use to access ERC20 data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getFungibleTokenBalance"),", to fetch the balance of a specified wallet address:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getFungibleTokenBalance(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  walletAddress: string\n): Promise<bigint | null>;\n")),(0,i.kt)("h2",{id:"erc20deposit"},"ERC20Deposit"),(0,i.kt)("p",null,"Unlike the ERC20 extension, which keeps track of the overall balances of the specified token, this one only keeps track of transfers made to a ",(0,i.kt)("em",{parentName:"p"},"Deposit Address")," specified in the config file. It stores the total amount transferred, and triggers a scheduled input for each such transfer. The desired deposit address needs to be specified in the config file as the ",(0,i.kt)("inlineCode",{parentName:"p"},"depositAddress")," field as seen in the example earlier."),(0,i.kt)("p",null,"A scheduled input is triggered every time a transfer is made to the deposit address. The scheduled input will have the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prefix|fromAddr|value\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheduledPrefix")," specified in the config file,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fromAddr")," is the address from which tokens have been sent to the deposit address,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the amount transferred in base 10.")),(0,i.kt)("p",null,"Paima SDK provides you with the following functions you can use to access the collected data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"totalAmountDeposited"),", to fetch the total amount the specified address has deposited to the deposit address:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function totalAmountDeposited(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  walletAddress: string\n): Promise<bigint | null>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"findUsersWithDepositsGreaterThan"),", to fetch the list of wallet addresses which have sent at least the specified threshold amount:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function findUsersWithDepositsGreaterThan(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  thresholdAmount: bigint\n): Promise<string[]>;\n")),(0,i.kt)("h2",{id:"generic"},"Generic"),(0,i.kt)("p",null,"The CDE types described above work great for many common use cases, but we also want to allow game developers to read state from smart contracts and events not supported by these types. For this reason, we provide a generic CDE type, which allows you to specify the ABI of a contract and the signature of an event to track such events emitted from such a contract. In the config file, you will thus need to provide the following two values compared to other CDE types (as seen in the example earlier):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abiPath"),", specifying a path to a .json file describing the compiled contract ","\u2013"," the only field required in this file is the ",(0,i.kt)("inlineCode",{parentName:"li"},"abi")," field in the top-level object;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventSignature"),", specifying the signature of the event consisting only of the event name followed by parameter types (without names) in order, enclosed in parentheses and separated by commas.")),(0,i.kt)("p",null,"Each event tracked by this CDE will then be represented by a single JSON object containing each parameter of the event twice, under two separate keys ","\u2013"," once under the index of the parameter within the event signature (starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),") and once under the parameter's name as specified in the provided ABI file. For instance, an event with the signature ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer(address,address,uint256)")," whose parameters are respectively named ",(0,i.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", could be represented by the following object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "0":"0x0000000000000000000000000000000000000000",\n    "1":"0xFF...00",\n    "2":"1000000",\n    "from":"0x0000000000000000000000000000000000000000",\n    "to":"0xFF...00",\n    "value":"1000000"\n}\n')),(0,i.kt)("p",null,"For each event emitted from the contract corresponding to the provided signature, an object like this is constructed and included in a newly scheduled input, as well as stored in the database. When storing the event objects in the database, the block height at which the triggering event occured is also included. The scheduled input for each event is of the following form, where ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledPrefix")," specified in the CDE config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prefix|stringifiedJsonObject\n")),(0,i.kt)("p",null,"Note that because the Paima concise encoding uses the vertical pipe ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," symbol as a divider, the parameters of your event should ideally not contain this symbol, as it would cause issues when processing the generated scheduled input using ",(0,i.kt)("inlineCode",{parentName:"p"},"paima-concise"),". You should nevertheless still be able to withdraw the data of such events from the database with no issues."),(0,i.kt)("p",null,"Paima SDK uses the type ",(0,i.kt)("inlineCode",{parentName:"p"},"GenericCdeDataUnit")," shown below to store data about a single event from the tracked smart contract. The exact type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," field is dependent on the provided contract ABI and corresponds to the JSON object described earlier in this section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface GenericCdeDataUnit {\n    blockHeight: number;\n    payload: any;\n}\n")),(0,i.kt)("p",null,"Paima SDK provides you with the following types and functions you can use to access the collected data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getGenericDataBlockheight"),", to fetch all events that happened at a given block height:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getGenericDataBlockheight(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  blockHeight: number\n): Promise<GenericCdeDataUnit[]>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getGenericDataBlockheightRange"),", to fetch all events that happened within a given block height range:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getGenericDataBlockheightRange(\n  readonlyDBConn: Pool,\n  cdeName: string,\n  fromBlock: number,\n  toBlock: number\n): Promise<GenericCdeDataUnit[]>;\n")))}p.isMDXComponent=!0}}]);