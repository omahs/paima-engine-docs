"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Generic CDE",l={unversionedId:"home/react-to-events/chain-data-extensions/Generic",id:"home/react-to-events/chain-data-extensions/Generic",title:"Generic CDE",description:"- Generic, allowing you to provide an arbitrary contract ABI and the signature of the event to track, allowing you to collect data even from smart contracts not directly supported by the above types.",source:"@site/docs/home/3-react-to-events/2-chain-data-extensions/999-Generic.md",sourceDirName:"home/3-react-to-events/2-chain-data-extensions",slug:"/home/react-to-events/chain-data-extensions/Generic",permalink:"/home/react-to-events/chain-data-extensions/Generic",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3-react-to-events/2-chain-data-extensions/999-Generic.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ERC721 CDEs",permalink:"/home/react-to-events/chain-data-extensions/ERC721"},next:{title:"Create your own CDE",permalink:"/home/react-to-events/chain-data-extensions/create-your-own"}},c={},s=[{value:"Generic",id:"generic",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Utility functions",id:"utility-functions",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generic-cde"},"Generic CDE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generic"},"Generic"),", allowing you to provide an arbitrary contract ABI and the signature of the event to track, allowing you to collect data even from smart contracts not directly supported by the above types.")),(0,r.kt)("h2",{id:"generic"},"Generic"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'extensions:\n  - name: "My Custom Contract"\n    type: "generic"\n    contractAddress: "0xDC...BA"\n    startBlockHeight: 11223344\n    abiPath: "./abis/MyCustomContract.json"\n    eventSignature: "MyEvent(address,uint256)"\n    scheduledPrefix: "cst"\n')),(0,r.kt)("h3",{id:"meaning"},"Meaning"),(0,r.kt)("p",null,"The other CDE types described work great for many common use cases, but we also want to allow game developers to read state from smart contracts and events not supported by these types. For this reason, we provide a generic CDE type, which allows you to specify the ABI of a contract and the signature of an event to track such events emitted from such a contract. In the config file, you will thus need to provide the following two values compared to other CDE types (as seen in the example earlier):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abiPath"),", specifying a path to a .json file describing the compiled contract ","\u2013"," the only field required in this file is the ",(0,r.kt)("inlineCode",{parentName:"li"},"abi")," field in the top-level object;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eventSignature"),", specifying the signature of the event consisting only of the event name followed by parameter types (without names) in order, enclosed in parentheses and separated by commas.")),(0,r.kt)("p",null,"Each event tracked by this CDE will then be represented by a single JSON object containing each parameter of the event twice, under two separate keys ","\u2013"," once under the index of the parameter within the event signature (starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),") and once under the parameter's name as specified in the provided ABI file."),(0,r.kt)("p",null,"When storing the event objects in the database, the block height at which the triggering event occurred is also included."),(0,r.kt)("h3",{id:"paima-concise-format"},"Paima Concise format"),(0,r.kt)("p",null,"The scheduled input for each event is of the following form, where ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"scheduledPrefix")," specified in the CDE config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"prefix|stringifiedJsonObject\n")),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"scheduledPrefix")," specified in the config file,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stringifiedJsonObject")," is the JSON type for the event")),(0,r.kt)("p",null,"For instance, an event with the signature ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer(address,address,uint256)")," whose parameters are respectively named ",(0,r.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", could be represented by the following object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "0":"0x0000000000000000000000000000000000000000",\n    "1":"0xFF...00",\n    "2":"1000000",\n    "from":"0x0000000000000000000000000000000000000000",\n    "to":"0xFF...00",\n    "value":"1000000"\n}\n')),(0,r.kt)("p",null,"Note that because the Paima concise encoding uses the vertical pipe ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," symbol as a divider, the parameters of your event should ideally not contain this symbol, as it would cause issues when processing the generated scheduled input using ",(0,r.kt)("inlineCode",{parentName:"p"},"paima-concise"),". You should nevertheless still be able to withdraw the data of such events from the database with no issues."),(0,r.kt)("h3",{id:"utility-functions"},"Utility functions"),(0,r.kt)("p",null,"Paima SDK uses the type ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericCdeDataUnit")," shown below to store data about a single event from the tracked smart contract. The exact type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," field is dependent on the provided contract ABI and corresponds to the JSON object described earlier in this section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface GenericCdeDataUnit {\n    blockHeight: number;\n    payload: any;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getGenericDataBlockheight"),", to fetch all events that happened at a given block height:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getGenericDataBlockheight(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  blockHeight: number\n): Promise<GenericCdeDataUnit[]>;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getGenericDataBlockheightRange"),", to fetch all events that happened within a given block height range:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getGenericDataBlockheightRange(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  fromBlock: number,\n  toBlock: number\n): Promise<GenericCdeDataUnit[]>;\n")))}u.isMDXComponent=!0}}]);