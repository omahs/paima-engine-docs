"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="How To Use Paima Engine",l={unversionedId:"home/how-to-use-paima-engine",id:"home/how-to-use-paima-engine",title:"How To Use Paima Engine",description:"Paima Engine is as an all-in-one batteries-included executable which provides you with everything you need to get started writing your own trustless Web3 game.",source:"@site/docs/home/1 - how-to-use-paima-engine.md",sourceDirName:"home",slug:"/home/how-to-use-paima-engine",permalink:"/ja/home/how-to-use-paima-engine",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/1 - how-to-use-paima-engine.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Paima Engine?",permalink:"/ja/"},next:{title:"Deploying The Paima L2 Smart Contract",permalink:"/ja/home/deploying-l2-smart-contract"}},s={},p=[{value:"Accessing Documentation",id:"accessing-documentation",level:2},{value:"Initializing Your Project",id:"initializing-your-project",level:2},{value:"Packing Your Game Code",id:"packing-your-game-code",level:2},{value:"Setting Up Your Game Node DB",id:"setting-up-your-game-node-db",level:2},{value:"Using Docker To Setup A Postgres DB",id:"using-docker-to-setup-a-postgres-db",level:3},{value:"Updating Your init.sql",id:"updating-your-initsql",level:3},{value:"Updating Your DB Queries",id:"updating-your-db-queries",level:3},{value:"Deploying Your Game&#39;s L2 Smart Contract",id:"deploying-your-games-l2-smart-contract",level:2},{value:"Setting Up Your Game Node Config",id:"setting-up-your-game-node-config",level:2},{value:"Running Your Game Node",id:"running-your-game-node",level:2},{value:"Testing Out Your Game Node",id:"testing-out-your-game-node",level:2},{value:"Deploying Your Game Node",id:"deploying-your-game-node",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"Debugging",id:"debugging",level:2},{value:"How to debug",id:"how-to-debug",level:3},{value:"Data Migrations",id:"data-migrations",level:2},{value:"Paima Engine Dry Running",id:"paima-engine-dry-running",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-paima-engine"},"How To Use Paima Engine"),(0,i.kt)("p",null,"Paima Engine is as an all-in-one batteries-included executable which provides you with everything you need to get started writing your own trustless Web3 game."),(0,i.kt)("h2",{id:"accessing-documentation"},"Accessing Documentation"),(0,i.kt)("p",null,"Paima Engine docs are available from two sources:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Embedded inside Paima Engine itself (",(0,i.kt)("inlineCode",{parentName:"li"},"./paima-engine docs"),")"),(0,i.kt)("li",{parentName:"ol"},"Hosted on ",(0,i.kt)("a",{parentName:"li",href:"https://docs.paimastudios.com"},"docs.paimastudios.com"))),(0,i.kt)("h1",{id:"accessing-paima-engine"},"Accessing Paima Engine"),(0,i.kt)("p",null,"Paima Engine is under developer preview at the moment. Notably, anybody can access it by ",(0,i.kt)("a",{parentName:"p",href:"https://paimastudios.com/contact/"},"contacting us"),"."),(0,i.kt)("p",null,"If you do not have Paima Engine yet, but want to follow along, you can find public templates using Paima ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaimaStudios/paima-game-templates"},"here")),(0,i.kt)("h2",{id:"initializing-your-project"},"Initializing Your Project"),(0,i.kt)("p",null,"When starting a new project with Paima Engine, the developer can choose to either go completely barebones (by only initializing ",(0,i.kt)("inlineCode",{parentName:"p"},"paima-sdk"),") or use an included template to bootstrap with all of the essentials. Initializing the SDK by itself may also be useful in cases where the developer is upgrading their project to use a new version of Paima Engine which has introduced new incompatibilities in the SDK."),(0,i.kt)("p",null,"You can see the available options by using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./paima-engine init\n")),(0,i.kt)("p",null,"To initialize a game using a basic game template use the following command and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"generic")," template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./paima-engine init template\n")),(0,i.kt)("p",null,"Once the command has finished, you will notice two new folders have been created, ",(0,i.kt)("inlineCode",{parentName:"p"},"paima-sdk")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"generic-game-template")," (name varies based on template selected). The SDK is directly used by the game template, and so all code you write will be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"generic-game-template")," folder."),(0,i.kt)("p",null,"Lastly to finish the initialization process off, simply go into the ",(0,i.kt)("inlineCode",{parentName:"p"},"generic-game-template")," folder and run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run initialize"),". This will install all of the packages and set the project up to be ready for you to start coding."),(0,i.kt)("p",null,"Of note, feel free to rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"generic-game-template")," folder to the name of your game (or whatever you prefer), but make sure to not change the folder name of ",(0,i.kt)("inlineCode",{parentName:"p"},"paima-sdk"),"."),(0,i.kt)("h2",{id:"packing-your-game-code"},"Packing Your Game Code"),(0,i.kt)("p",null,"The specifics of writing your game code is outside of the scope of this current getting started guide, thus we will move on to packing your game code to be run with Paima Engine."),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"generic-game-template")," folder has already been initialized in the previous section, we can move forward with packing the game code (you can pack the generic game template without writing any new code initially to test). Simply use the following command in the folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run pack\n")),(0,i.kt)("p",null,"This will generate two files (",(0,i.kt)("inlineCode",{parentName:"p"},"gameCode.cjs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints.cjs"),") which will be placed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"packaged"),' folder (located next to the executable). The former file holds the vast majority of the "game" (all of your code related to your game logic and state transitions) and the latter holds code related to setting up the webserver endpoints of your game node.'),(0,i.kt)("p",null,"Both of these files need to remain in the ",(0,i.kt)("inlineCode",{parentName:"p"},"packaged")," folder (which is required to be in the same root folder as the Paima Engine executable itself)."),(0,i.kt)("h2",{id:"setting-up-your-game-node-db"},"Setting Up Your Game Node DB"),(0,i.kt)("p",null,"Paima Engine requires you to deploy a Postgres database which will be used to store all state of your game node."),(0,i.kt)("p",null,"For those already experienced with setting up a Postgres DB, feel free to skip over the majority of this section. One important note however is that each game template also includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sql")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/db/migrations/init")," folder which you should use to initialize the database."),(0,i.kt)("h3",{id:"using-docker-to-setup-a-postgres-db"},"Using Docker To Setup A Postgres DB"),(0,i.kt)("p",null,"For those who prefer an automated solution, simply proceed with the following steps to have a local Postgres database ready-to-use with your game node:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install docker/docker compose on your computer (",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/"),")"),(0,i.kt)("li",{parentName:"ol"},"Go into the root folder of your game code (ie. ",(0,i.kt)("inlineCode",{parentName:"li"},"generic-game-template"),") in your terminal."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run database:up")),(0,i.kt)("li",{parentName:"ol"},"Docker compose will automatically download and setup Postgres for you, while also using the ",(0,i.kt)("inlineCode",{parentName:"li"},"init.sql")," from your game code to initialize the DB."),(0,i.kt)("li",{parentName:"ol"},"Your DB will be up and running, and can be closed via ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl + c")," like any CLI application."),(0,i.kt)("li",{parentName:"ol"},"Any time you want to bring the DB back online, simply re-run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run database:up"),".")),(0,i.kt)("h3",{id:"updating-your-initsql"},"Updating Your init.sql"),(0,i.kt)("p",null,"One side note, as you begin writing your game logic (or when building a template) you likely will end up changing the DB schema from the base template you started off with. When you do this, make sure to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sql")," file to properly initialize your DB schema so that future game nodes either you or others deploy for your game will be able to properly work with your game logic."),(0,i.kt)("h3",{id:"updating-your-db-queries"},"Updating Your DB Queries"),(0,i.kt)("p",null,"When you update your DB schema or you want to add or edit some of the queries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"db/")," directory of your game, you will want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pgtyped")," tool to process the ",(0,i.kt)("inlineCode",{parentName:"p"},".sql")," code to generate ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," code for the queries to be used by your game and the engine. To do this, simply navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"db/")," directory and execute ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run compile"),". Note that you will need to provide the credentials of a running Postgres DB initialized with your schema in the ",(0,i.kt)("inlineCode",{parentName:"p"},"db/pgtypedconfig.json")," file."),(0,i.kt)("p",null,"Furthermore, note that the version of ",(0,i.kt)("inlineCode",{parentName:"p"},"@pgtyped/query")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"db/package.json")," is set to a specific value, which should be the same as the version specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"paima-sdk/paima-db/package.json"),". These versions need to stay the same to avoid compatibility issues."),(0,i.kt)("h2",{id:"deploying-your-games-l2-smart-contract"},"Deploying Your Game's L2 Smart Contract"),(0,i.kt)("p",null,"Each game built with Paima Engine is its very own Layer 2. This means that you will need to deploy the Paima L2 Smart Contract for your game, to whichever chain you wish to launch on."),(0,i.kt)("p",null,"Reference the ",(0,i.kt)("a",{parentName:"p",href:"/ja/home/deploying-l2-smart-contract"},"Deploying L2 Smart Contract")," documentation to easily deploy the contract."),(0,i.kt)("h2",{id:"setting-up-your-game-node-config"},"Setting Up Your Game Node Config"),(0,i.kt)("p",null,"You may have noticed that during the initialization process a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development")," file was created in the root folder. The Paima Engine executable will read this file (or specifically ",(0,i.kt)("inlineCode",{parentName:"p"},".env.${process.env.NODE_ENV || development})")," when attempting to start running your game node."),(0,i.kt)("p",null,"Thus you must fill out this env file with all of the pre-requisites to proceed forward."),(0,i.kt)("p",null,"Specifically with the included barebones config, you must specify:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHAIN_URI")," (A URL to the RPC of an EVM chain node of the network you are targeting)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CONTRACT_ADDRESS")," (The contract address of your deployed Paima L2 Smart Contract for your game)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"START_BLOCKHEIGHT")," (The block height that your smart contact was deployed on, so Paima Engine knows from what block height to start syncing)"),(0,i.kt)("li",{parentName:"ul"},"Postgres DB Credentials")),(0,i.kt)("h2",{id:"running-your-game-node"},"Running Your Game Node"),(0,i.kt)("p",null,"Now that your game code is packed, contract and DB deployed, and your config is ready, we can now start your game node via the Paima Engine executable."),(0,i.kt)("p",null,"Simply go into the root folder and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./paima-engine run\n")),(0,i.kt)("p",null,"If you forgot to pack your code, your config is not properly setup, or anything else as such, you will get an error."),(0,i.kt)("p",null,"Otherwise if everything was setup correctly then you will have officially started your game node for the very first time! You will see some initial boot logs, and after a few seconds see the progress of your game node syncing from the blockchain as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"q125-q225\nq225-q325\nq325-q425\n...\n")),(0,i.kt)("p",null,"These logs denote the block height numbers that the game node is syncing from the deployed L2 smart contract on the blockchain. Other logs will also pop up, such as when game inputs are read from the contract. Of note, logs are also saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs.log")," file for easy access."),(0,i.kt)("h2",{id:"testing-out-your-game-node"},"Testing Out Your Game Node"),(0,i.kt)("p",null,"Now that your game node is syncing, we recommend testing to ensure that both the contract you deployed and the node itself are all in working order/configured properly."),(0,i.kt)("p",null,"Simply follow the ",(0,i.kt)("a",{parentName:"p",href:"/ja/home/posting-test-game-inputs"},"posting test game inputs to L2 contract tutorial")," and within a couple minutes you'll have experienced the end-to-end loop of using Paima Engine!"),(0,i.kt)("p",null,"Of note, the above tutorial teaches you an easy way to manually submit custom-crafted game inputs, which is also useful when implementing new features as you develop your games/apps."),(0,i.kt)("h2",{id:"deploying-your-game-node"},"Deploying Your Game Node"),(0,i.kt)("p",null,"If you wish to deploy your game on a server/move into a production environment, the following files are all that is needed for Paima Engine to run your game node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packaged/gameCode.cjs")," (packed game code)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packaged/endpoints.cjs")," (packed webserver code)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".env.*")," (Your game node config)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paima-engine")," (The Paima Engine executable)")),(0,i.kt)("p",null,"In other words, you do not require your unpacked game code or ",(0,i.kt)("inlineCode",{parentName:"p"},"paima-sdk"),", allowing you to easily run your game node wherever you deem best (without even needing node installed or any external dependencies)."),(0,i.kt)("h2",{id:"snapshots"},"Snapshots"),(0,i.kt)("p",null,"If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"pg_dump")," installed on the machine running your game node (typically included in the postgres package of your OS), then Paima Engine will automatically take snapshots every day of your game node DB and store them in a ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshots")," folder. The last 3 days of snapshots are maintained, and everything older is automatically deleted."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"pg_dump")," is not available, then when you start your game node an error will be printed in the terminal denoting of such, however the game node will still function perfectly fine nonetheless (and will simply skip taking snapshots)."),(0,i.kt)("p",null,"Of note, unlike in the Web2/2.5 world, these snapshots are ",(0,i.kt)("em",{parentName:"p"},"not vital"),". You are building a trustless Web3 game using Paima Engine, which means that even if your entire DB gets corrupted or deleted, a brand new game node can be synced from scratch by just reading from the blockchain. These snapshots are simply a quality-of-life enhancement, as they allow you to deploy new game nodes much faster without having to resync from scratch."),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Paima-Engine includes 4 binaries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux production ",(0,i.kt)("inlineCode",{parentName:"li"},"paima-engine-linux")),(0,i.kt)("li",{parentName:"ul"},"Linux development ",(0,i.kt)("inlineCode",{parentName:"li"},"dev-paima-engine-linux")),(0,i.kt)("li",{parentName:"ul"},"Macos x64 production ",(0,i.kt)("inlineCode",{parentName:"li"},"paima-engine-macos")),(0,i.kt)("li",{parentName:"ul"},"Macos x64 development ",(0,i.kt)("inlineCode",{parentName:"li"},"dev-paima-engine-macos"))),(0,i.kt)("p",null,"The binaries named ",(0,i.kt)("inlineCode",{parentName:"p"},"dev-*")," run a node.js inspector and should only be used for development and not for production environments."),(0,i.kt)("h3",{id:"how-to-debug"},"How to debug"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Launching your game with the ",(0,i.kt)("inlineCode",{parentName:"li"},"./dev-paima-engine-linux run")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"./dev-paima-engine-macos run")," you will see a message similar to:  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Debugger listening on ws://127.0.0.1:9229/e6e784f8-bcd8-4ace-8b17-9b515ae45f7d\nFor help, see: https://nodejs.org/en/docs/inspector\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open in a Google Chrome browser: ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome://inspect"),(0,i.kt)("br",{parentName:"p"}),"\n","You should see a ",(0,i.kt)("inlineCode",{parentName:"p"},"Remote Target")," entry with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"PKG_DUMMY_ENTRYPOINT file:///")," click on ",(0,i.kt)("inlineCode",{parentName:"p"},"inspect"),".",(0,i.kt)("br",{parentName:"p"}),"\n","NOTE: If you do not see the entry: in ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure...")," add ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:9229")," where the actual port is the one informed in the message in step 1.",(0,i.kt)("br",{parentName:"p"}),"\n",'A new debug "DevTools" window will pop up. ')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the new DevTools, go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sources")," tab and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+ Add folder to workspace")," select the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"packaged")," where your compiled game is located you should see ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints.cjs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gameCode.cjs")," select this folder.",(0,i.kt)("br",{parentName:"p"}),"\n","The first time DevTools might request permission to access your hard drive: allow access.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you are ready to DEBUG.\nIn the ",(0,i.kt)("inlineCode",{parentName:"p"},"sources")," tab you can place breakpoints in endpoint.cjs and gameCode.cjs by clicking on line-number on the left side of the line. "))),(0,i.kt)("h2",{id:"data-migrations"},"Data Migrations"),(0,i.kt)("p",null,"Data Migrations allow game developers to add data to the database e.g., World Setup, NPC, Items, and other system tables.  "),(0,i.kt)("p",null,"IMPORTANT: You should never add data to the database manually. It should be done only through state-transitions and data migrations."),(0,i.kt)("p",null,"Data Migrations are applied at a specific block-height. The file name indicates the OFFSET from the START_BLOCKHEIGHT (defined in the .env file)."),(0,i.kt)("p",null,"File structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root_folder\n   | --- paima-sdk\n   | --- paima-engine-{linux|macos}\n   | --- packaged\n             | --- endpoints.cjs\n             | --- gameCode.cjs\n             | --- migrations\n                          | --- 1000.sql\n                          | --- 5500.sql\n")),(0,i.kt)("p",null,"1000.sql will be applied at block-height START_BLOCKHEIGHT + 1000.",(0,i.kt)("br",{parentName:"p"}),"\n","5500.sql will be applied at block-height START_BLOCKHEIGHT + 5500.",(0,i.kt)("br",{parentName:"p"}),"\n","Both will be applied before any other inputs are processed for that block-height."),(0,i.kt)("p",null,"The *.sql files are PGSQL scripts. We ABSOLUTELY recommend writing your SQL script as a transaction, so if it fails the block-process-loop will stop and the script can be fixed and reapplied."),(0,i.kt)("p",null,"1000.sql example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BEGIN; \n-- INSERT... ; \n-- UPDATE ...; \nCOMMIT;\n")),(0,i.kt)("h2",{id:"paima-engine-dry-running"},"Paima Engine Dry Running"),(0,i.kt)("p",null,"For context, Paima Batcher allows end users to sign game inputs without manually posting transactions themselves. It enables the cross-chain Paima Whirlpool functionality to be possible in Paima Engine."),(0,i.kt)("p",null,'For Paima Batcher to work well in production, game inputs can be validated before posting on-chain to save on transaction fees & increase throughput. To support this validation Paima Engine ships with a "dry run" endpoint which allows directly submitting a game input via HTTP, and having it processed by the STF (returning success or fail) without saving any of the resulting SQL queries. As such this allows the batcher (or any external tooling) to check that a game input validates before posting it on-chain.'),(0,i.kt)("p",null,"This functionality is disabled by default to ensure that in production any game nodes which are user-facing have dry running disabled (as this is a DoS vector). "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can enable dry running by setting the environment variable in your .env file: ",(0,i.kt)("inlineCode",{parentName:"li"},"ENABLE_DRY_RUN=true"),"."),(0,i.kt)("li",{parentName:"ul"},"Once enabled, your game node will now have a ",(0,i.kt)("inlineCode",{parentName:"li"},"/dry_run")," endpoint which takes params of: ",(0,i.kt)("inlineCode",{parentName:"li"},"{gameInput: string, userAddress: string}"),"."),(0,i.kt)("li",{parentName:"ul"},"It is possible to detect dry run game inputs in your game logic (if you want to do advanced testing using dry running) by reading the ",(0,i.kt)("inlineCode",{parentName:"li"},"dry_run")," field in the game input you receive in your STF")))}u.isMDXComponent=!0}}]);