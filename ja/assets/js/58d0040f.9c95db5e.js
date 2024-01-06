"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[2209],{452:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=a(5893),n=a(1151);const s={sidebar_position:2},r="Sequential State Identifier",l={id:"home/read-write-L2-state/parallelism",title:"Sequential State Identifier",description:"By default, updates to Paima state may be applied in parallel. This is powerful as it allows different matches played by different players to be run in parallel. However, moves by players in the same lobby need to be made sequential.",source:"@site/docs/home/200-read-write-L2-state/2-parallelism.md",sourceDirName:"home/200-read-write-L2-state",slug:"/home/read-write-L2-state/parallelism",permalink:"/ja/home/read-write-L2-state/parallelism",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/200-read-write-L2-state/2-parallelism.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Read and Write to L2 state",permalink:"/ja/home/read-write-L2-state/base-format"},next:{title:"Error Handling",permalink:"/ja/home/read-write-L2-state/error-handling"}},o={},d=[{value:"Example",id:"example",level:2},{value:"Applying Global Side Effects",id:"applying-global-side-effects",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"sequential-state-identifier",children:"Sequential State Identifier"}),"\n",(0,i.jsx)(t.p,{children:"By default, updates to Paima state may be applied in parallel. This is powerful as it allows different matches played by different players to be run in parallel. However, moves by players in the same lobby need to be made sequential."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"|*"})," denotes that the value following it is a unique state identifier for some sub-section of global game state which will ",(0,i.jsx)(t.strong,{children:"never"})," be mutated by any other game input unless it also carries the same state identifier/id, and makes inputs that use this identifier run sequentially (yet still in parallel to inputs that do not specify it)"]}),"\n",(0,i.jsxs)(t.p,{children:["Currently, only one ",(0,i.jsx)(t.code,{children:"|*"})," is allowed in a game input for the time being. We might try to make the state identifier more expressive by being able to chain them via the equivalent of ",(0,i.jsx)(t.code,{children:"AND"}),"s, but for the time being we will skip over this."]}),"\n",(0,i.jsx)(t.p,{children:"In other words, every game input which is trying to mutate some state, such as a lobby/match demarcated by it's unique lobby ID, must specify that it intends to do so using the state identifier, thus allowing the Paima Engine Runtime to know that they will be mutating the same piece of global state."}),"\n",(0,i.jsx)(t.p,{children:'From there, Paima Engine sorts all scheduled and user submitted game input into a series of queues, where any game inputs which have the same state identifier id get put together in the same queue and run one-by-one (though in parallel to all of the other queues). Any game inputs which aren\'t marked with a state identifier are put into their own "1 element queue" and run in parallel as well.'}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Suppose you have the following grammar"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const myGrammar = `\ncreateLobby         = c|lobbyID\njoinLobby           = j|*lobbyID\nsubmitMove          = s|*lobbyID|move\n`;\n"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["When creating a lobby, use ",(0,i.jsx)(t.code,{children:"|"})," as-is (not ",(0,i.jsx)(t.code,{children:"|*"}),"). This is because creating a lobby mutates no existing state, but in fact creates brand new state that is completely unique and unrelated to the rest of the game global state."]}),"\n",(0,i.jsxs)(t.li,{children:["When joining the lobby, use ",(0,i.jsx)(t.code,{children:"*lobbyID"}),". The parallel notation will allow your STF to process join lobby requests sequentially so that lobby joining is first-come-first-serve up to the max participants in a lobby for your game"]}),"\n",(0,i.jsxs)(t.li,{children:["When submitting a move inside the lobby for the game, use ",(0,i.jsx)(t.code,{children:"*lobbyID"})," so that moves in the game are ordered first-come-first-serve."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"applying-global-side-effects",children:"Applying Global Side Effects"}),"\n",(0,i.jsx)(t.p,{children:"Besides simply updating the game input strings with a state identifier, there is one final and important consideration which must be made when building game state machines which are going to be run in parallel mode via the runtime. Any time that any of these parallel executed computations produce global side effects, we inherently have a problem of how we are going to apply those back in global state such that we arrive at a deterministically resolved final state."}),"\n",(0,i.jsx)(t.p,{children:"For example, maybe a game needs to update each user's wins/losses/ties record. We could theoretically just hope that a player never finishes two matches at the same block height, or if they do, hope when executing in parallel they update the same state luckily one-by-one, rather than both trying to apply updates and having one being overwritten by the other, but this is inherently unprincipled and unworkable."}),"\n",(0,i.jsx)(t.p,{children:"As such, we need a new approach for how we can apply global side effects in a principled manner. Lucky for us, we already have a great piece of functionality implemented in Paima Engine exactly suited for this job: scheduled inputs."}),"\n",(0,i.jsxs)(t.p,{children:["Using scheduled inputs, whenever a global side effect needs to be applied, we simply create a new scheduled input for ",(0,i.jsx)(t.code,{children:"[current block height] + 1"})," (see ",(0,i.jsx)(t.a,{href:"/ja/home/react-to-events/scheduled-events",children:"passive events"})," to learn more) and ensure that it also carries a state identifier inside. Thus in our grammar, we can simply define a new type of valid (scheduled) game input which specifies that the given user's stats need to be updated with the resulting win/tie/loss:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const myGrammar = `\nuserScheduledData    = u|*user|result\n`;\n\nconst userScheduledData: ParserRecord<UserStats> = {\n  user: PaimaParser.WalletAddress(),\n  result: PaimaParser.EnumParser(['w', 'l']),\n};\n"})}),"\n",(0,i.jsx)(t.p,{children:"All user stat updates will carry the state identifier (which in this case is the user's address, not a lobby ID), thus queuing them all back-to-back, and thereby allowing said side effects to be safely and deterministically applied and everything to work without issues."})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>r});var i=a(7294);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);