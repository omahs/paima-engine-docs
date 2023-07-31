"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Paima Batcher",l={unversionedId:"home/Setting Up Your Environment/paima-bacher",id:"home/Setting Up Your Environment/paima-bacher",title:"Paima Batcher",description:"Paima Batcher is the first key component of the Paima Whirlpool infrastructure which enables cross-chain play (via account abstraction layer), automatically paying transaction fees for users, and decreasing overall fees by batching many game inputs together.",source:"@site/docs/home/1 - Setting Up Your Environment/5 - paima-bacher.md",sourceDirName:"home/1 - Setting Up Your Environment",slug:"/home/Setting Up Your Environment/paima-bacher",permalink:"/home/Setting Up Your Environment/paima-bacher",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/1 - Setting Up Your Environment/5 - paima-bacher.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Environment Configuration Variables",permalink:"/home/Setting Up Your Environment/environment-config-values"},next:{title:"Read and Write to L2 state",permalink:"/home/Read & Write L2 State/base-format"}},s={},c=[{value:"Preparation",id:"preparation",level:2},{value:"Usage",id:"usage",level:2},{value:"Cleanup",id:"cleanup",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paima-batcher"},"Paima Batcher"),(0,r.kt)("p",null,"Paima Batcher is the first key component of the Paima Whirlpool infrastructure which enables cross-chain play (via account abstraction layer), automatically paying transaction fees for users, and decreasing overall fees by batching many game inputs together."),(0,r.kt)("p",null,"For background, Paima Engine-based games rely on user inputs being posted to a Paima L2 Contract, which, by default, requires users to send transactions to the target blockchain. This approach has the disadvantage of limiting input posters to using accounts and funds solely on the target blockchain."),(0,r.kt)("p",null,"Paima Batcher overcomes this by accepting game inputs signed by various wallets, batches them into a new transaction, and posts them all at once to the deployed Paima L2 Contract. This allows the game inputs to be processed by your game node as if they were posted by the original users directly."),(0,r.kt)("p",null,'Before submitting the inputs, the batcher always verifies the attached signature to ensure that invalid signatures do not get posted (Paima Funnel inside of the Engine also does this check, but this acts as an extra proactive measure). Additionally, you can configure the batcher to impose limits on how often a given address can submit game inputs in a given timeframe, or even configure the batcher to validate the game inputs themselves and reject any that it finds to be invalid (in order to avoid wasting transaction fees, and prevent "DoS" attacks by bad actors).'),(0,r.kt)("p",null,"Furthermore, batcher support is fully integrated into Paima Engine, including the middleware core in Paima SDK, so there is no need to worry about writing extra code to make your game work with the batcher. It just seamlessly works."),(0,r.kt)("p",null,"Of note, because Paima Engine games are full fledged Sovereign Rollups, this means we have a built-in mechanism for democratization & decentralization of batching (unlike the majority of rollups today). In other words, anyone can run a batcher for any game built with Paima Engine, opening up opportunities for your community & 3rd party developers to create their own web/mobile game clients, tools, websites, and services that provide players with completely novel gameplay experiences!"),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"To begin using Paima Batcher, first you will need to emit it from the Paima Engine executable. Simply call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./paima-engine batcher\n")),(0,r.kt)("p",null,"This will pop out a ",(0,r.kt)("inlineCode",{parentName:"p"},"batcher")," folder with all of the Paima Batcher code inside for you to build/deploy."),(0,r.kt)("p",null,"Change into the ",(0,r.kt)("inlineCode",{parentName:"p"},"batcher")," directory and make sure to install all of the dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd batcher\nnpm i\n")),(0,r.kt)("p",null,"With that out of the way, we can move forward with deploying the batcher. In summary, you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare your root ",(0,r.kt)("inlineCode",{parentName:"li"},".env.*")," config file to support the batcher,"),(0,r.kt)("li",{parentName:"ol"},"Add your batcher wallet account private key to it,"),(0,r.kt)("li",{parentName:"ol"},"Run the batcher using ",(0,r.kt)("inlineCode",{parentName:"li"},"npm start"),".")),(0,r.kt)("p",null,"First, ensure you have a config file ",(0,r.kt)("inlineCode",{parentName:"p"},".env.*")," ready in the root directory of your project (where you called ",(0,r.kt)("inlineCode",{parentName:"p"},"./paima-engine batcher"),"). Presumably, you already have one there for your game, you just need to add the additional variables required by the batcher. The simplest approach to do this is to append the existing batcher env file into your env file in the directory above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat .env.devnet >> ../.env.production\n")),(0,r.kt)("p",null,"Of note, one key variable that needs to be set manually to use the batcher is the ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCHER_PRIVATE_KEY"),". This needs to be set as the private key of the wallet intended to be used for creating and posting the batched transactions (note, the wallet needs sufficient funds for posting to the contract). The expected format of the variable is a hex string without the ",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," prefix (ie. exactly what you get from MetaMask under Account details -> Export private key)."),(0,r.kt)("p",null,"If you plan to use the batcher in web 2.5 environment, you also need to turn on the self signing feature by setting ",(0,r.kt)("inlineCode",{parentName:"p"},'SELF_SIGNING_ENABLED="true"')," and filling in ",(0,r.kt)("inlineCode",{parentName:"p"},"API_KEY")," value of your choice in ",(0,r.kt)("inlineCode",{parentName:"p"},"SELF_SIGNING_API_KEY")," variable. You'll use this key afterwards on the server communicating with the batcher."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"With all of that said and done, to compile and run the batcher using docker simply run the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},"batcher")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm start\n")),(0,r.kt)("p",null,"If your env file was set up properly, it will boot the batcher up and have it ready to be used with your game."),(0,r.kt)("p",null,"Of note, the IP/port (or domain name) that the batcher is running/accessible on will need to be copied and set as the ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCHER_URI")," in your env file. This variable is used by the middleware to allow the game frontend/wallet to seamlessly integrate with the batcher without any extra work on your end."),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"At any point after stopping the batcher, you can clean up via the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm stop\n")))}u.isMDXComponent=!0}}]);