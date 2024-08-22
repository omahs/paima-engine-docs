"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[4537],{5141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(5893),n=a(1151);const r={},s="Batched mode",o={id:"home/state-machine/direct-write/batched-mode",title:"Batched mode",description:"To learn how to setup a batcher yourself, see the documentation here",source:"@site/docs/home/100-state-machine/200-direct-write/400-batched-mode.md",sourceDirName:"home/100-state-machine/200-direct-write",slug:"/home/state-machine/direct-write/batched-mode",permalink:"/ja/home/state-machine/direct-write/batched-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/100-state-machine/200-direct-write/400-batched-mode.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/ja/home/state-machine/direct-write/error-handling"},next:{title:"Replay protection",permalink:"/ja/home/state-machine/direct-write/replay-protection"}},h={},d=[{value:"Paima Engine Support",id:"paima-engine-support",level:2},{value:"Batched Input Format",id:"batched-input-format",level:2},{value:"Supported networks",id:"supported-networks",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Batcher Webserver",id:"batcher-webserver",level:3},{value:"Address Validator",id:"address-validator",level:3},{value:"Game Input Validator",id:"game-input-validator",level:3},{value:"Batched Transaction Poster",id:"batched-transaction-poster",level:3},{value:"Batcher Runtime",id:"batcher-runtime",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"batched-mode",children:"Batched mode"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["To learn how to setup a batcher yourself, see the documentation ",(0,i.jsx)(t.a,{href:"/ja/home/setup/paima-bacher",children:"here"})]})}),"\n",(0,i.jsx)(t.p,{children:"Paima supports two different modes for inputs:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Non-batched mode. This only supports wallets set to the same network as used for the settlement layer of the app. Transaction are submitted directly by the user (and they cover the transaction fees)"}),"\n",(0,i.jsx)(t.li,{children:"Batched mode. Users sign data, and transactions are crafted by the batcher. This allows users to use the app with different EVM networks or wallets from different cryptocurrencies."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We protect batched mode users by calculating ",(0,i.jsx)(t.code,{children:"sign(securityPrefix || input || timestamp)"})," where:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"securityPrefix"})," is described ",(0,i.jsx)(t.a,{href:"/ja/home/state-machine/direct-write/autosign",children:"here"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timestamp"})," is used for replay protection. You can learn more about replay protection ",(0,i.jsx)(t.a,{href:"/ja/home/state-machine/direct-write/replay-protection",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The idea behind it is that rather than each user submitting their own transactions directly on-chain, instead they:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create a valid game input."}),"\n",(0,i.jsx)(t.li,{children:"Sign the payload with their private key."}),"\n",(0,i.jsx)(t.li,{children:"Provide the game input + signature + their address to a batcher."}),"\n",(0,i.jsx)(t.li,{children:'The batcher compiles the signed game inputs of many users and submits one "batched game input" transaction the contract.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"paima-engine-support",children:"Paima Engine Support"}),"\n",(0,i.jsx)(t.p,{children:"One of the great things about game input batching is that we can support it on the level of Paima Engine such that every game will be able to automatically get to take advantage of it for free. Furthermore, the implementer of a game state machine does not even have to consider batched game inputs (besides the fact that address types may vary if supporting other L1s)."}),"\n",(0,i.jsxs)(t.p,{children:["Specifically, Paima Funnel will handle unbundling the batch for you so that each entry inside the batch will be treated as if it was an individual input from the perspective of your app (technically speaking, the single ",(0,i.jsx)(t.code,{children:"submittedData"})," that contains the entire batch will be split such that each entry inside the batch will be its own ",(0,i.jsx)(t.code,{children:"submittedData"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["In order for this to be secure, while processing a batched game input transaction Paima Funnel verifies every signature matches for every game input supplied. If not, then that game input is thrown away. As such, when constructing a ",(0,i.jsx)(t.code,{children:"submittedData"}),", the address will be verified and can be trusted if they end up inside your app (of note, in regular submitted game input this signature validation is performed by the blockchain validators who verified the tx before it was added to a block, so now we have to do it instead). Thus the game state machine will be able to trust the authenticity of all ",(0,i.jsx)(t.code,{children:"submittedData"}),", whether or not they came from batched game input txs, and not have to even consider how they were submitted."]}),"\n",(0,i.jsx)(t.h2,{id:"batched-input-format",children:"Batched Input Format"}),"\n",(0,i.jsx)(t.p,{children:"We will specify a standard batched input transactions are required to follow in order to be considered valid."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"B~\nuserAddress/userSignature/input/millisecondTimestamp~\nuserAddress/userSignature/input/millisecondTimestamp~\nuserAddress/userSignature/input/millisecondTimestamp~\n"})}),"\n",(0,i.jsx)(t.p,{children:"Key notes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"B"})," is used to denote this is a batched game input transaction. It is simply the ASCII character ",(0,i.jsx)(t.code,{children:"B"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"~"})," in practice is actually the ",(0,i.jsx)(t.code,{children:"\\x02"})," ASCII character"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"/"})," in practice is actually the ",(0,i.jsx)(t.code,{children:"\\x03"})," ASCII character"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"supported-networks",children:"Supported networks"}),"\n",(0,i.jsx)(t.p,{children:"Users often only have a crypto wallet for a single ecosystem (if they even have one at all), so the Paima batcher system allows you to have these users still use your application (even if it spans multiple different networks) by providing a batcher that submits transactions on their behalf when required."}),"\n",(0,i.jsxs)(t.p,{children:["The Paima batcher supports different stacks based on an ",(0,i.jsx)(t.code,{children:"BATCHER_NETWORK"})," variable (learn more about the environment setup ",(0,i.jsx)(t.a,{href:"/ja/home/setup/paima-bacher",children:"here"}),"). Notably, it supports:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"EVM"}),"\n",(0,i.jsx)(t.li,{children:"Avail"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For each network, the batcher will submit transactions and wait for finalization. The batcher exposes an event listener so that other tools can monitor a transaction's progress from being received by the batcher all the way to finalization onchain, and you can find the documentation for these events ",(0,i.jsx)(t.a,{href:"/ja/home/state-machine/creating-events/events/builtin-events",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(t.p,{children:"The diagram below lays out the general architecture of Paima Batcher."}),"\n",(0,i.jsx)(t.mermaid,{value:"graph TD\n    C[User] --\x3e|submits from wallet| Server\n    subgraph Server\n        Webserver\n        CryptoValidator[Address validator]\n        Webserver --\x3e CryptoValidator\n    end\n    Server --\x3e|saves to| Database\n\n    CustomValidator[Custom validator]\n    CustomValidator --\x3e|writes validation result| Database\n    Database --\x3e|polls unvalidated txs| CustomValidator\n\n    TransationPoster --\x3e|sends tx| Blockchain\n    Blockchain --\x3e|tx confirmation| TransationPoster\n\n    Database --\x3e|polls validated txs| TransationPoster\n    TransationPoster --\x3e|marks confirmed txs| Database\n\n    Blockchain"}),"\n",(0,i.jsx)(t.h3,{id:"batcher-webserver",children:"Batcher Webserver"}),"\n",(0,i.jsx)(t.p,{children:"The batcher webserver is the external facing webserver which allows users to interact with the batcher. The primary functionality of the web server will be to allow users to submit their game inputs to be batched, however eventually the web server will also expose endpoints related to user status (ie. telling the user how many more game inputs, or days they have paid for/still available)."}),"\n",(0,i.jsx)(t.h3,{id:"address-validator",children:"Address Validator"}),"\n",(0,i.jsx)(t.p,{children:"The address validator is the module which dictates whether or not a user(address) is allowed to have their game input batched (returns a true/false to the webserver after the user submits their game input to let the user know whether it was accepted). The address validator checks:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Whether the address is one of the supported address schemes."}),"\n",(0,i.jsx)(t.li,{children:"Whether the submitted game input matches the signature supplied with it."}),"\n",(0,i.jsx)(t.li,{children:"Whether the address is allowed to submit game input to the batcher."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If the address validator returns ",(0,i.jsx)(t.code,{children:"true"})," for the user of the submitted game input (meaning the user has the right to submit their game inputs to the batcher) then it also adds the game input into the ",(0,i.jsx)(t.code,{children:"unvalidated_game_inputs"})," table of the database (ordered by an ever-increasing id as primary key)."]}),"\n",(0,i.jsx)(t.p,{children:"Initially we will allow any address to batch their game input for free, but will add the ability for the address validator to rate limit users based on number of game inputs submitted and/or number of days they are allowed to submit as many game inputs as they wish (and then rate limiting on how fast they can submit them). This rate limiting will eventually be tied to external data (ie. whether someone owns an NFT, is staking, or made an in app purchase on mobile, etc.)."}),"\n",(0,i.jsx)(t.p,{children:"The address validator is used by the webserver on the same coordinating thread."}),"\n",(0,i.jsx)(t.h3,{id:"game-input-validator",children:"Game Input Validator"}),"\n",(0,i.jsxs)(t.p,{children:["Each deployed batcher will specify which game input validator it is using (with the expectation that for each game we will implement a custom validator). The game input validator reads inputs from the ",(0,i.jsx)(t.code,{children:"unvalidated_game_inputs"})," table and verifies that:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The user submitted game input is formatted properly."}),"\n",(0,i.jsxs)(t.li,{children:["For game inputs with a state identifier (",(0,i.jsx)(t.code,{children:"|*"}),"), checks a running game backend to ensure that said piece of state actually exists (ex. that someone is joining or submitting moves to a match that is not fake)."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If these checks pass, then the game input is added to the ",(0,i.jsx)(t.code,{children:"validated_game_inputs"})," table (ordered by an ever-increasing id as primary key). If the checks do not pass, then the game input is thrown away. In either case, it is also deleted from the ",(0,i.jsx)(t.code,{children:"unvalidated_game_inputs"})," table."]}),"\n",(0,i.jsx)(t.p,{children:"The validator runs on a distinct thread/process and only interacts with the database. In the future we can think about parallelizing game input validation if this ever becomes a bottleneck."}),"\n",(0,i.jsx)(t.h3,{id:"batched-transaction-poster",children:"Batched Transaction Poster"}),"\n",(0,i.jsxs)(t.p,{children:["The batched transaction poster reads inputs from the ",(0,i.jsx)(t.code,{children:"validated_game_inputs"})," table and produced a batched transaction which gets submitted to the on-chain game smart contract that the batcher is targeting. Once the transaction has been submitted and confirmed, the poster deletes the inputs which from the ",(0,i.jsx)(t.code,{children:"validated_game_inputs"})," table."]}),"\n",(0,i.jsx)(t.p,{children:"The poster runs on a distinct thread and only interacts with the database and the on-chain contract."}),"\n",(0,i.jsx)(t.h3,{id:"batcher-runtime",children:"Batcher Runtime"}),"\n",(0,i.jsx)(t.p,{children:"The batcher runtime is the coordinating top-level module which:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Starts the webserver on its own thread"}),"\n",(0,i.jsx)(t.li,{children:"Starts the game input validator on its own thread"}),"\n",(0,i.jsx)(t.li,{children:"Starts the batched transaction poster on its own thread"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var i=a(7294);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);