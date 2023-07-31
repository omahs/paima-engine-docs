"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[256],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,E=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?t.createElement(E,i(i({ref:r},d),{},{components:n})):t.createElement(E,i({ref:r},d))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2567:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Error Handling",s={unversionedId:"home/Read & Write L2 State/error-handling",id:"home/Read & Write L2 State/error-handling",title:"Error Handling",description:"Errors are unavoidable. Notably, be sure to take into accounts the following error types:",source:"@site/docs/home/2 - Read & Write L2 State/3 - error-handling.md",sourceDirName:"home/2 - Read & Write L2 State",slug:"/home/Read & Write L2 State/error-handling",permalink:"/home/Read & Write L2 State/error-handling",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/2 - Read & Write L2 State/3 - error-handling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sequential State Identifier",permalink:"/home/Read & Write L2 State/parallelism"},next:{title:"Posting Test Game Inputs To L2 Contract",permalink:"/home/Read & Write L2 State/posting-test-game-inputs"}},l={},p=[],d={toc:p};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"Errors are unavoidable. Notably, be sure to take into accounts the following error types:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Programming mistakes"),(0,o.kt)("li",{parentName:"ol"},"Concurrency issues. Blockchains are asynchronous and so an action that was valid when the user took it may no longer be valid when it appears on-chain. For example, a user could try joining a lobby that no longer exists."),(0,o.kt)("li",{parentName:"ol"},"User abuse. Just because your application has no UI for something, it doesn't stop somebody from creating a transaction and submitting it to the blockchain manually. For example, a user could try joining the same lobby two times on the same wallet to see if it breaks your application")),(0,o.kt)("p",null,"To handle errors, Paima has a system to allow define error codes for your application that extend the built-in error handling in Paima"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { ErrorMessageFxn } from 'paima-sdk/paima-utils';\nimport { buildErrorCodeTranslator } from 'paima-sdk/paima-utils';\nimport type { EndpointErrorFxn } from 'paima-sdk/paima-mw-core';\nimport {\n  PaimaMiddlewareErrorCode,\n  PAIMA_MIDDLEWARE_ERROR_MESSAGES,\n  buildAbstractEndpointErrorFxn,\n} from 'paima-sdk/paima-mw-core';\n\nexport const enum MiddlewareErrorCode {\n  // start your error codes after the reserved namespace for Paima Engine's internal system\n  GENERIC_ERROR = PaimaMiddlewareErrorCode.FINAL_PAIMA_GENERIC_ERROR + 1,\n  CANNOT_JOIN_OWN_LOBBY,\n}\n\ntype ErrorMessageMapping = Record<MiddlewareErrorCode, string>;\nconst MIDDLEWARE_ERROR_MESSAGES: ErrorMessageMapping = {\n  [MiddlewareErrorCode.GENERIC_ERROR]: 'Unspecified generic Game error',\n  [MiddlewareErrorCode.CANNOT_JOIN_OWN_LOBBY]: 'Cannot join your own lobby',\n};\n\nconst errorMessageFxn: ErrorMessageFxn = buildErrorCodeTranslator({\n  ...PAIMA_MIDDLEWARE_ERROR_MESSAGES,\n  ...MIDDLEWARE_ERROR_MESSAGES,\n});\n\nexport function buildEndpointErrorFxn(endpointName: string): EndpointErrorFxn {\n  return buildAbstractEndpointErrorFxn(errorMessageFxn, endpointName);\n}\n")),(0,o.kt)("p",null,"Now, when you need to throw an error, you can easily handle them as seen below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const errorFxn = buildEndpointErrorFxn('joinLobby');\n\nif (userJoinedOwnLobby(lobby, userId)) {\n    return errorFxn(MiddlewareErrorCode.CANNOT_JOIN_OWN_LOBBY);\n}\n")))}c.isMDXComponent=!0}}]);