"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l="Block Funnel",i={unversionedId:"home/Reacting to Events/Funnel Types/Block Funnel",id:"home/Reacting to Events/Funnel Types/Block Funnel",title:"Block Funnel",description:"Block funnel is the most standard funnel type in Paima. It simply downloads the blocks from the RPC provider for the chain you are deploying to.",source:"@site/docs/home/3 - Reacting to Events/3 - Funnel Types/2 - Block Funnel.md",sourceDirName:"home/3 - Reacting to Events/3 - Funnel Types",slug:"/home/Reacting to Events/Funnel Types/Block Funnel",permalink:"/home/Reacting to Events/Funnel Types/Block Funnel",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3 - Reacting to Events/3 - Funnel Types/2 - Block Funnel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Paima Funnel",permalink:"/home/Reacting to Events/Funnel Types/Intro"},next:{title:"Stable Tick Rate",permalink:"/home/Reacting to Events/Funnel Types/Stable Tick Funnel"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-funnel"},"Block Funnel"),(0,o.kt)("p",null,"Block funnel is the most standard funnel type in Paima. It simply downloads the blocks from the RPC provider for the chain you are deploying to."),(0,o.kt)("p",null,"Notably, block funnel will do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the latest block number using ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_blockNumber")," so we know how far we are from the tip, and cache it to ",(0,o.kt)("inlineCode",{parentName:"li"},"latestAvailableBlockNumber")),(0,o.kt)("li",{parentName:"ol"},"Fetch a group of ",(0,o.kt)("inlineCode",{parentName:"li"},"DEFAULT_FUNNEL_GROUP_SIZE")," blocks (or less if we're already at the tip)"),(0,o.kt)("li",{parentName:"ol"},"Fetch all the block numbers needed in parallel using ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_getBlockByNumber")),(0,o.kt)("li",{parentName:"ol"},"Fetch all the ",(0,o.kt)("inlineCode",{parentName:"li"},"PaimaGameInteraction")," Solidity events for the block range using ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_getLogs")),(0,o.kt)("li",{parentName:"ol"},"Fetch all the ",(0,o.kt)("a",{parentName:"li",href:"./2%20-%20chain-data-extensions.md"},"Chain Data Extension (CDEs)")," for the block range using ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_getLogs"))))}u.isMDXComponent=!0}}]);