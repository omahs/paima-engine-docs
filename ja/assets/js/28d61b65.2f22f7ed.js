"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[708],{2816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=n(5893),a=n(1151);const s={sidebar_position:6},c="Replay protection",o={id:"home/read-write-L2-state/replay-protection",title:"Replay protection",description:'Given that games made with Paima Engine are technically "open" (meaning anyone can submit valid game input), one thing which we need to look out for is replaying attacks. Replaying attacks are situations classically in blockchains (but liable to any openly accessible state machine) where a previous valid input is resubmitted to the state machine/blockchain. Usually this is done by bad actors, and can cause various issues.',source:"@site/docs/home/2-read-write-L2-state/6-replay-protection.md",sourceDirName:"home/2-read-write-L2-state",slug:"/home/read-write-L2-state/replay-protection",permalink:"/ja/home/read-write-L2-state/replay-protection",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/2-read-write-L2-state/6-replay-protection.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Batched mode",permalink:"/ja/home/read-write-L2-state/batched-mode"},next:{title:"Auto-signing for apps",permalink:"/ja/home/read-write-L2-state/autosign"}},r={},h=[{value:"Upgrading submittedData",id:"upgrading-submitteddata",level:2},{value:"Batch Submitted Game Input Nonces",id:"batch-submitted-game-input-nonces",level:2},{value:"Directly Submitted Game Input Nonces",id:"directly-submitted-game-input-nonces",level:2},{value:"Scheduled Input Nonces",id:"scheduled-input-nonces",level:2},{value:"Paima SM Nonce Checking",id:"paima-sm-nonce-checking",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"replay-protection",children:"Replay protection"}),"\n",(0,i.jsx)(t.p,{children:'Given that games made with Paima Engine are technically "open" (meaning anyone can submit valid game input), one thing which we need to look out for is replaying attacks. Replaying attacks are situations classically in blockchains (but liable to any openly accessible state machine) where a previous valid input is resubmitted to the state machine/blockchain. Usually this is done by bad actors, and can cause various issues.'}),"\n",(0,i.jsx)(t.p,{children:"In our case, there are a few scenarios where replays can happen:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Repeating a user's transaction for one batch either multiple times in the same batch, or in different batches"}),"\n",(0,i.jsx)(t.li,{children:"Resubmitting a user's transaction for one batch for a different app"}),"\n",(0,i.jsx)(t.li,{children:"If our backend crashes in the middle of processing a block, it will re-pull the block via the funnel and re-process all game inputs again (even the ones it processed half-way through prior to crashing)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We handle the base replay protection by having the user calculate ",(0,i.jsx)(t.code,{children:"sign(securityPrefix || input || timestamp)"})," where:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"securityPrefix"})," is described ",(0,i.jsx)(t.a,{href:"/ja/home/read-write-L2-state/autosign",children:"here"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timestamp"})," is used for replay protection"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["However, just storing this signature is not enough to protect against ",(0,i.jsx)(t.a,{href:"https://github.com/kadenzipfel/smart-contract-vulnerabilities/blob/master/vulnerabilities/signature-malleability.md",children:"signature malleability"}),". As such, we require introducing the concept of nonces to game inputs to address the replay vectors above."]}),"\n",(0,i.jsx)(t.h2,{id:"upgrading-submitteddata",children:"Upgrading submittedData"}),"\n",(0,i.jsxs)(t.p,{children:["To support nonces, we first must add a ",(0,i.jsx)(t.code,{children:"nonce"})," field to ",(0,i.jsx)(t.code,{children:"submittedData"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'{\n    inputData: "s|...",\n    userAddress: "0x...",\n    inputNonce: "9af3uasdfo2h..."\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["A nonce will be the hash of various other values (depending on how the game input was submitted), and thus be a string. Nonces are generated by Paima Funnel for each ",(0,i.jsx)(t.code,{children:"submittedData"})," when they read from on-chain."]}),"\n",(0,i.jsx)(t.h2,{id:"batch-submitted-game-input-nonces",children:"Batch Submitted Game Input Nonces"}),"\n",(0,i.jsxs)(t.p,{children:["Paima Funnel takes the batched transaction, separates out the ",(0,i.jsx)(t.code,{children:"submittedData"}),", and potentially performs two steps of computation for each:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Timestamp checking"}),"\n",(0,i.jsx)(t.li,{children:"Nonce generation"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In timestamp checking, the ",(0,i.jsx)(t.code,{children:"millisecondTimestamp"})," is converted into seconds and checked whether it is within 24 hours of the ",(0,i.jsx)(t.code,{children:"timestamp"}),' of the block that the batched transaction was included in. In other words, all signed game inputs inside of batch transactions have a 24 hour "validity period". If the difference between the two timestamps is greater than 24 hours, then throw away the submittedData as it is deemed invalid. (As such, it is important for clients to honestly submit the time when signing in order to ensure the game input is accepted.)']}),"\n",(0,i.jsx)(t.p,{children:"If timestamp checking succeeds, then the batch submitted game inputs have a nonce generated by Paima Funnel which is a hash of the:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"[millisecondTimestamp] + [userAddress] + [game input]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"directly-submitted-game-input-nonces",children:"Directly Submitted Game Input Nonces"}),"\n",(0,i.jsx)(t.p,{children:"Directly submitted (non-batched) game inputs will be given a nonce by Paima Funnel which is a hash of the:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"[blockHeight] + [userAddress] + [game input]\n"})}),"\n",(0,i.jsx)(t.p,{children:"Unlike with batched game inputs, we can use block height here. This is because the blockchain prevents replay attacks (by bad actors) of the game input automatically, so it's safe to create a unique identifier with the block height and not some signed auxillary user-submitted data (the timestamp for batched game input nonces)."}),"\n",(0,i.jsx)(t.h2,{id:"scheduled-input-nonces",children:"Scheduled Input Nonces"}),"\n",(0,i.jsx)(t.p,{children:"Scheduled inputs should be created with an empty string nonce. Empty string nonces are impossible for non-scheduled inputs, and as such can be treated as always unique."}),"\n",(0,i.jsx)(t.p,{children:"This empty string nonce model for scheduled inputs is secure from replays as long as we ensure that we delete the scheduled input at the same time (as a part of the same set of SQL queries) as applying the results of the STF on the scheduled input."}),"\n",(0,i.jsx)(t.h2,{id:"paima-sm-nonce-checking",children:"Paima SM Nonce Checking"}),"\n",(0,i.jsxs)(t.p,{children:["Paima SM will create a ",(0,i.jsx)(t.code,{children:"nonces"})," table in the game DB on initial start, and use this table to record all nonces of game inputs which have finished processing and check for duplicates."]}),"\n",(0,i.jsx)(t.p,{children:"Nonce checking and saving works as such:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Every time a game input is processed by Paima SM, it goes through a nonce checking process where it looks up whether the nonce exists in the ",(0,i.jsx)(t.code,{children:"nonces"})," table (the nonce is the primary key)."]}),"\n",(0,i.jsx)(t.li,{children:"If yes, throw away the game input and don't run the STF as it would otherwise replay the game input (bad actor replaying a batched tx, or the db crashed while processing a block)."}),"\n",(0,i.jsx)(t.li,{children:"If no (or empty string nonce, aka. scheduled input), continue using the game input in the STF."}),"\n",(0,i.jsxs)(t.li,{children:["After the game input has finished processing in the STF and returns a set of SQL queries, add one update query to add the nonce to the ",(0,i.jsx)(t.code,{children:"nonces"})," table, where the primary key is the nonce and the value is the current block height (from the ",(0,i.jsx)(t.code,{children:"ChainData"})," that contained this game input)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As such, we prevent all replaying thanks to nonces, whether it is by a bad actor, or due to the backend dying while processing a block."}),"\n",(0,i.jsx)(t.p,{children:"Nonces will be garbage collected every week, but this is safe, as the validity period of transactions with nonces would stop old transactions from being replayed anyway."})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var i=n(7294);const a={},s=i.createContext(a);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);