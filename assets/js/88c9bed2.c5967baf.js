"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[3829],{2283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const a={},o="Introduction",r={id:"home/game-node-api/events/introduction",title:"Introduction",description:"When writing a application, being able to easily know usage patterns is crucial to:",source:"@site/docs/home/350-game-node-api/100-events/1-introduction.md",sourceDirName:"home/350-game-node-api/100-events",slug:"/home/game-node-api/events/introduction",permalink:"/home/game-node-api/events/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/350-game-node-api/100-events/1-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Achievements",permalink:"/home/game-node-api/achievements"},next:{title:"General Interface",permalink:"/home/game-node-api/events/general-interface"}},l={},c=[];function d(e){const n={a:"a",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"When writing a application, being able to easily know usage patterns is crucial to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"As the core developers, to know what is working and what isn't"}),"\n",(0,i.jsx)(n.li,{children:"As an external developer, to be able to build interesting projects on top of the core protocol"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Although there are cases where having ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Relational_database",children:"relational databases"})," can provide a lot of speed, clarity and usability benefits, in a lot of cases ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/NoSQL",children:"non-relational databases"})," are significantly easier to write and much easier to consume externally. This is especially true in cases where use-generated content plays a key role in the protocol, as you often cannot know which relational structures best fit user behavior ahead of time. You can see this in practice for example with blockchains, where often there are relational database options for parts that seldom change (the core protocol itself), whereas user-generated content (ex: dApps) are often indexed using general logging systems (ex: ",(0,i.jsx)(n.a,{href:"https://docs.alchemy.com/docs/deep-dive-into-eth_getlogs",children:"event logs"})," for Solidity)."]}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, for Paima Engine, we provide ",(0,i.jsx)(n.a,{href:"/home/database-management/introduction",children:"database management"})," of rollup state out of the box, but also provide a simpler logging system for cases where it makes sense."]}),"\n",(0,i.jsx)(n.p,{children:"Notably, for Paima's event system, we had the following desirable properties:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Events should be customizable"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Events can be defined on a per-app basis, be emitted wherever needed (ex: an event if a player completes a quest)"}),"\n",(0,i.jsxs)(n.li,{children:["Events can self-define which fields are ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Database_index",children:"indexable"})," to fine-tune performance"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Events should be easily parsable"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Events should support static typing using ",(0,i.jsx)(n.a,{href:"https://json-schema.org/learn/getting-started-step-by-step",children:"json-schema"})]}),"\n",(0,i.jsx)(n.li,{children:"Events should come with a code generation and documentation generation to make it easy for external developers to understand"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Events should be easy to access"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Historical events are kept permanently by default"}),"\n",(0,i.jsxs)(n.li,{children:["(for historical data) Events should be accessible via a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/REST",children:"REST"})," interface"]}),"\n",(0,i.jsxs)(n.li,{children:["(for realtime data) Events should be accessible via a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern",children:"pub-sub system"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(7294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);