"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Wallet Layer",l={unversionedId:"home/multichain-support/wallet-layer",id:"home/multichain-support/wallet-layer",title:"Wallet Layer",description:"Paima, although being EVM based, uses account abstraction to support wallets from multiple different cryptocurrencies. You can learn how to setup the batchers for account abstraction here.",source:"@site/docs/home/7-multichain-support/2-wallet-layer.md",sourceDirName:"home/7-multichain-support",slug:"/home/multichain-support/wallet-layer",permalink:"/home/multichain-support/wallet-layer",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/7-multichain-support/2-wallet-layer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cardano",permalink:"/home/multichain-support/projected-nfts/cross-chain/cardano"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wallet-layer"},"Wallet Layer"),(0,n.kt)("p",null,"Paima, although being EVM based, uses account abstraction to support wallets from multiple different cryptocurrencies. You can learn how to setup the batchers for account abstraction ",(0,n.kt)("a",{parentName:"p",href:"/home/setup/paima-bacher"},"here"),"."),(0,n.kt)("p",null,"The wallet layer supports two different modes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Non-batched mode (self-sequencing). This only supports EVM wallets set to the same network as used for the settlement layer of the app. Transaction are submitted directly by the user (and they cover the transaction fees)"),(0,n.kt)("li",{parentName:"ol"},"Batched mode. Users sign data, and transactions are crafted by the batcher. This allows users to use the app with different EVM networks or wallets from different cryptocurrencies.")),(0,n.kt)("p",null,"Notably, Paima supports account abstraction through its batcher (similar to account-abstraction ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4337"},"EIP-4337")," relies on bundlers)"),(0,n.kt)("p",null,"Adding support for a new cryptocurrency to be used as a wallet in Paima requires modifying the following components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@paima/crypto"),": add the necessary cryptography"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@paima/providers"),": add wallet standard support"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@paima/mw-core"),": expose the new logic to frontends written with Paima"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@paima/batcher-address-validator"),": add support for the new crypto to the batcher system")))}m.isMDXComponent=!0}}]);