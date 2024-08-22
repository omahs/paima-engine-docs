"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[4113],{3639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(5893),s=t(1151);const l={},r="Integrate into your game",i={id:"home/multichain-support/wallet-layer/delegate-wallet/integrate",title:"Integrate into your game",description:"Here we share all the steps to integrate the wallet delegation system into a game",source:"@site/docs/home/700-multichain-support/2-wallet-layer/100-delegate-wallet/200-integrate.mdx",sourceDirName:"home/700-multichain-support/2-wallet-layer/100-delegate-wallet",slug:"/home/multichain-support/wallet-layer/delegate-wallet/integrate",permalink:"/ja/home/multichain-support/wallet-layer/delegate-wallet/integrate",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/700-multichain-support/2-wallet-layer/100-delegate-wallet/200-integrate.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Effect on Interfaces",permalink:"/ja/home/multichain-support/wallet-layer/delegate-wallet/interfaces"},next:{title:"Introduction",permalink:"/ja/home/libraries/evm-contracts/introduction"}},o={},d=[{value:"In your middleware",id:"in-your-middleware",level:2},{value:"In your backend",id:"in-your-backend",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"integrate-into-your-game",children:"Integrate into your game"}),"\n",(0,a.jsx)(n.p,{children:"Here we share all the steps to integrate the wallet delegation system into a game"}),"\n",(0,a.jsxs)(n.p,{children:["For this example, we will be delegating a locally generated keypair (using the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@thirdweb-dev/wallets",children:"thirdweb"})," wrapper for ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/ethers",children:"ethers"}),") to a user's EVM wallet (ex: ",(0,a.jsx)(n.a,{href:"https://rabby.io/",children:"Rabby"}),")"]}),"\n",(0,a.jsx)(n.h2,{id:"in-your-middleware",children:"In your middleware"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["First implement a ",(0,a.jsx)(n.a,{href:"/ja/home/multichain-support/wallet-layer/introduction#thirdweb-support",children:"Local Wallet"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a function to sign messages with your local wallet."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { getActiveAddress, WalletConnectHelper } from '@paima/sdk/mw-core';\n\nconst signMessageWithLocalWallet = async (message: string) => {\n  // wraps the message with the correct Paima Concise notation\n  const toSign = new WalletConnectHelper().buildMessageToSign(message);\n\n  return {\n    message: toSign,\n    // assumes you've called `userWalletLogin` on the local Ethers wallet from step (1)\n    walletAddress: getActiveAddress(WalletMode.EvmEthers).toLocaleLowerCase(),\n    /* localWallet is an instance of LocalWallet from thirdweb from step (1) */\n    signedMessage: await localWallet.signMessage(message),\n  };\n};\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Now create a function to get User Wallets"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { allInjectedWallets } from '@paima/sdk/providers';\n\nconst getWallets = async () => {\n  /* \"wallets\" is a map of connected wallets */\n  const wallets = await allInjectedWallets({\n    gameName: 'GameName', // replace with your game's name\n    gameChainId: undefined,\n  });\n  return wallets;\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Create a final function to sign messages with an external wallet."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { AddressType } from '@paima/sdk/utils';\nimport { WalletConnectHelper } from '@paima/sdk/mw-core';\n\nconst connectAndSignExternalWallet = async (\n  walletType: AddressType,\n  walletName: string, /* Provided in wallets[WalletMode].metadata.name */\n  otherAddress: string  \n) => {\n  return await new WalletConnectHelper().connectExternalWalletAndSign(walletType, walletName, message);\n};\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Put it all together."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { walletConnect } from '@paima/sdk/mw-core';\nimport { WalletMode } from '@paima/sdk/providers';\n\nconst localWalletMessage = await signMessageWithLocalWallet();\nconst wallets = getWallets();\n\n// This is to use only the first EVM wallet.\n// You should check the contents of \"wallets\" and display the necessary options.\nconst injectedWalletMessage = await connectAndSignExternalWallet(\n  AddressType.EVM,\n  wallets[WalletMode.EvmInjected].metadata.name,\n  localWalletMessage.walletAddress\n);\n\n// Send message to blockchain.\nawait walletConnect(\n    injectedWalletMessage.walletAddress,\n    null, // localWalletMessage.walletAddress,\n    injectedWalletMessage.signedMessage,\n    localWalletMessage.signedMessage\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"in-your-backend",children:"In your backend"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["In the default API index: ",(0,a.jsx)(n.code,{children:"/backend/api/index.ts"}),"\nAdd the following code:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Clear wallet-connection cache.\nclearDelegateWalletCacheOnChanges(requirePersistentConnection());\n"})}),"\n",(0,a.jsx)(n.p,{children:"This allows to clear the API cache when the user changes the wallet connection."}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/ja/home/state-machine/define-machine/read-data#stf-function",children:"STF"})," Changes"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["As user wallet might change over time, as they can delegate, migrate and cancel delegations, we need to use ",(0,a.jsx)(n.code,{children:"userId"})," instead of ",(0,a.jsx)(n.code,{children:"userAddress"})," or ",(0,a.jsx)(n.code,{children:"realAddress"})," for user identification in our STF."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// main entry point for your game's state machine\nexport default async function (\n  inputData: SubmittedChainData,\n  blockHeight: number,\n  randomnessGenerator: Prando,\n  dbConn: Pool\n): Promise<SQLUpdate[]> {\n  // highlight-start\n  /* use this user to identify the player instead of userAddress or realAddress */\n  const user = String(inputData.userId);\n  // highlight-end\n  ...\n}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"userAddress"}),": contains the main wallet address."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"realAddress"}),": contains the real wallet address that sent the transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"userId"}),": contains the user id, which is the same for all wallets of the same user."]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"API Controllers\nIn your API, if receiving user wallet address, convert them into the USER ID."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { getMainAddress } from '@paima/node-sdk/db';\n\n// example query for a game that gets items for a user\n@Route('items')\nexport class ItemController extends Controller {\n  @Get('/user')\n  public async getItemsForUser(\n    @Query() wallet: string\n  ): Promise<{ items: IGetAllItemsForUserResult[] }> {\n    const pool = requirePool();\n    \n    // highlight-start\n    // this is the main line (everything else is just an example context)\n    const address = await getMainAddress(wallet, pool);\n    // highlight-end\n\n    /* now use address (instead of wallet) */\n    const items = await getAllItemsForUser.run(\n      // highlight-next-line\n      { wallet: address },\n      pool\n    );\n    return { items };\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(7294);const s={},l=a.createContext(s);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);