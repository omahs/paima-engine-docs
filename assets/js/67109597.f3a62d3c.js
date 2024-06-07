"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[1918],{7975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(5893),s=n(1151);const r={sidebar_position:1},a="Scheduling Events and Timers",o={id:"home/react-to-events/scheduled-events",title:"Scheduling Events and Timers",description:"Games heavily rely on passive time to trigger events, such as limits on the length of a match or the duration of status effects. Paima supports these through a generic system called scheduledData that keeps track of which inputs (that conform to your app's grammar) to trigger at which block height (used instead of timestamps).",source:"@site/docs/home/300-react-to-events/1-scheduled-events.md",sourceDirName:"home/300-react-to-events",slug:"/home/react-to-events/scheduled-events",permalink:"/home/react-to-events/scheduled-events",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/300-react-to-events/1-scheduled-events.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Auto-signing for apps",permalink:"/home/read-write-L2-state/autosign"},next:{title:"Primitive Catalogue",permalink:"/home/react-to-events/primitive-catalogue/introduction"}},c={},l=[{value:"1. Durations",id:"1-durations",level:2},{value:"Time limits",id:"time-limits",level:3},{value:"Globally Recurring events",id:"globally-recurring-events",level:3},{value:"2. Synchronizing access to a shared state",id:"2-synchronizing-access-to-a-shared-state",level:2},{value:"3. Primitives",id:"3-primitives",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"scheduling-events-and-timers",children:"Scheduling Events and Timers"}),"\n",(0,i.jsxs)(t.p,{children:["Games heavily rely on passive time to trigger events, such as limits on the length of a match or the duration of status effects. Paima supports these through a generic system called ",(0,i.jsx)(t.code,{children:"scheduledData"})," that keeps track of which inputs (that conform to your app's grammar) to trigger at which block height (used instead of timestamps)."]}),"\n",(0,i.jsx)(t.p,{children:"Paima will fetch, execute and commit the result of any scheduled data for a block BEFORE it considers any regular input inside the block."}),"\n",(0,i.jsx)(t.p,{children:"There are three common usages of timers in Paima"}),"\n",(0,i.jsx)(t.h2,{id:"1-durations",children:"1. Durations"}),"\n",(0,i.jsx)(t.p,{children:"There are two functions for scheduling events"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"createScheduledData(inputData: string, blockHeight: number): SQLUpdate"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"deleteScheduledData(inputData: string, blockHeight: number | null): SQLUpdate"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These can be used to schedule an event that happens in 5 minutes (ex: a potion whose status wears off eventually)"}),"\n",(0,i.jsx)(t.h3,{id:"time-limits",children:"Time limits"}),"\n",(0,i.jsx)(t.p,{children:"Some games leverage time limits to perform an action (ex: 5 minutes to make a move, otherwise your turn is skipped)"}),"\n",(0,i.jsx)(t.p,{children:"Handling this kind of use-case typically involve the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["When their turn starts, create a timer (",(0,i.jsx)(t.code,{children:"createScheduledData"}),") that skips their turn in 5 minutes"]}),"\n",(0,i.jsxs)(t.li,{children:["If they make a move, use ",(0,i.jsx)(t.code,{children:"deleteScheduledData"})," to delete their timer (and process their move)"]}),"\n",(0,i.jsx)(t.li,{children:"If they don't make a move, the timer from (1) will trigger so that your state machine can skip their turn (or any other cleanup required)"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We call this kind of state transition a ",(0,i.jsx)(t.code,{children:"zombie"})," (or ",(0,i.jsx)(t.code,{children:"zombie round"}),") as it's usually used to process a move if the player is no longer alive (ex: they left their keyboard so the timer expires and their turn is skipped)."]}),"\n",(0,i.jsx)(t.h3,{id:"globally-recurring-events",children:"Globally Recurring events"}),"\n",(0,i.jsx)(t.p,{children:"It is common to require to recurring events with no clear start trigger. For example:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Spawn monsters every 5 minutes"}),"\n",(0,i.jsx)(t.li,{children:"Cleanup stats once a day"}),"\n",(0,i.jsx)(t.li,{children:"Calculate prizes once a week"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'To do this we can set up a "recursive" scheduled event'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Specify the initial trigger as a SQL migration"}),"\n",(0,i.jsx)(t.li,{children:"Have every trigger schedule the next trigger"}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Add a Migration at 1.SQL"}),"\n"]}),(0,i.jsxs)(t.p,{children:["Create ",(0,i.jsx)(t.code,{children:"db/migrations/1.sql"})," and add an input to execute the first schedule."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-SQL",metastring:"wordWrap=true",children:"INSERT INTO scheduled_data (block_height, input_data )\nVALUES (\n  -- get the latest block + 1\n  coalesce((\n    SELECT block_height\n    FROM block_heights\n    ORDER BY block_height DESC\n    LIMIT 1\n  ), 0) + 1,\n  'hour|0'\n);\n"})}),(0,i.jsxs)(t.p,{children:["NOTE: You can replace the value for the ",(0,i.jsx)(t.code,{children:"block_height"})," if you need to run this at a specific time",(0,i.jsx)(t.br,{}),"\n","This is possible with blockchains with known block generation time or with ",(0,i.jsx)(t.a,{href:"/home/react-to-events/funnel-types/stable-tick-rate-funnel",children:"Emulated Blocks mode"}),"."]}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Add a Paima Concise Command\nModify ",(0,i.jsx)(t.code,{children:"state-transition/src/stf/v1/parser.ts"})," (or where you have the Paima Concise Grammar)."]}),"\n"]}),(0,i.jsx)(t.p,{children:"Add a command to the list a new command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const myGrammar = `\n// highlight-next-line\n scheduleHourly          = hour|tick\n`;\n\nconst parserCommands = {\n  // highlight-next-line\n    scheduleHourly: {\n       tick: PaimaParser.NumberParser(0),\n    },\n}\n"})}),(0,i.jsxs)(t.p,{children:["Add your interface: (Generally located at ",(0,i.jsx)(t.code,{children:"state-transition/src/stf/v1/types.ts"}),")"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export type ParsedSubmittedInput =\n  | ScheduleHourlyInput\n\nexport interface ScheduleHourlyInput {\n  input: 'scheduleHourly';\n  tick: number;\n}\n"})}),(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Add an STF Function to process and create the next event"}),"\n"]}),(0,i.jsxs)(t.p,{children:["Capture the input in the STF and process it (Generally in ",(0,i.jsx)(t.code,{children:"state-transition/src/stf/v1/index.ts"}),")"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export default async function (\n  inputData: STFSubmittedData,\n  blockHeight: number,\n  randomnessGenerator: Prando,\n  dbConn: Pool\n): Promise<SQLUpdate[]> {\n\n  const input = parse(inputData.inputData);\n\n  // highlight-start\n  if (input.input === 'scheduleHourly') {\n    // Check if sent by the scheduler. Users might post the same input payload.\n    if (inputData.realAddress === SCHEDULED_DATA_ADDRESS) {\n  // highlight-end\n        const commands: SQLUpdate[] = [];\n        console.log('This message appears each hour!');\n        console.log('This is tick number', input.tick);\n        /* Add your custom logic */\n        \n        // Calculate the number of blocks in 1 hour. \n        const hourSeconds = 60 * 60;\n        const hourBlocks = hourSeconds / ENV.BLOCK_TIME;\n        \n        // highlight-start\n        commands.push(createScheduledData(\n                `hour|${input.tick + 1}`,\n                 blockHeight + hourBlocks\n        ));\n        // highlight-end\n        \n        return commands;\n    }\n  }\n  ...\n}\n"})}),(0,i.jsx)(t.p,{children:"You will see in the console:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"This message appears each hour!\nThis is tick number 0\nThis message appears each hour!\nThis is tick number 1\nThis message appears each hour!\nThis is tick number 2\n...\n"})}),(0,i.jsx)(t.p,{children:"IMPORTANT: It is very important that the scheduler does NOT return an SQL statement that might be rejected (e.g., duplicated primary key) if there is any invalid SQL command the entire list of commands is discarded, and the recursive schedule will not be inserted."})]}),"\n",(0,i.jsx)(t.h2,{id:"2-synchronizing-access-to-a-shared-state",children:"2. Synchronizing access to a shared state"}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/home/read-write-L2-state/parallelism",children:"parallelism"})]}),"\n",(0,i.jsx)(t.h2,{id:"3-primitives",children:"3. Primitives"}),"\n",(0,i.jsxs)(t.p,{children:["Event found by ",(0,i.jsx)(t.a,{href:"./primitive-catalogue/introduction#accessing-the-collected-data",children:"primitives"})," are scheduled to occur when the rollup's state machine reaches the block height in which they're found."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);