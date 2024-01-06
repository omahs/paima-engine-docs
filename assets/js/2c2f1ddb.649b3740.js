"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[4121],{5590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(5893),l=t(1151);const a={},i="Getting Started",r={id:"home/multichain-support/delegate-wallet/getting-started",title:"Getting Started",description:"We are going to implement a workflow to delegate a Local Wallet to an EVM Wallet.",source:"@site/docs/home/700-multichain-support/3-delegate-wallet/2-getting-started.mdx",sourceDirName:"home/700-multichain-support/3-delegate-wallet",slug:"/home/multichain-support/delegate-wallet/getting-started",permalink:"/home/multichain-support/delegate-wallet/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/700-multichain-support/3-delegate-wallet/2-getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/home/multichain-support/delegate-wallet/introduction"},next:{title:"How it works",permalink:"/home/multichain-support/delegate-wallet/how-it-works"}},o={},d=[{value:"In your middleware",id:"in-your-middleware",level:2},{value:"In your backend",id:"in-your-backend",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"We are going to implement a workflow to delegate a Local Wallet to an EVM Wallet."}),"\n",(0,s.jsx)(n.h2,{id:"in-your-middleware",children:"In your middleware"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["First implement a ",(0,s.jsx)(n.a,{href:"../wallet-layer/introduction#thirdweb-support",children:"Local Wallet"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a function to sign messages with your local wallet. ",(0,s.jsx)(n.code,{children:"WalletConnectHelper"})," and ",(0,s.jsx)(n.code,{children:"getActiveAddress"})," is provided by @paima/sdk. ",(0,s.jsx)(n.code,{children:"LocalWallet"})," is provided by ",(0,s.jsx)(n.code,{children:"thirdweb"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const signMessageWithLocalWallet = async (message: string) => {\n  const toSign = new WalletConnectHelper().buildMessageToSign(message);\n\n  return {\n    message: toSign,\n    walletAddress: getActiveAddress(WalletMode.EvmEthers).toLocaleLowerCase(),\n    /* localWallet is an instance of LocalWallet from the previous step */\n    signedMessage: await localWallet.signMessage(message),\n  };\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Now create a function to get User Wallets. ",(0,s.jsx)(n.code,{children:"allInjectedWallets"})," is provided by ",(0,s.jsx)(n.code,{children:"@paima/sdk"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const getWallets = async () => {\n  /* \"wallets\" is a map of connected wallets */\n  const wallets = await allInjectedWallets({\n    gameName: 'GameName',\n    gameChainId: undefined,\n  });\n  return wallets;\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Create a final function to sign messages with an external wallet. ",(0,s.jsx)(n.code,{children:"WalletConnectHelper"})," is provided by ",(0,s.jsx)(n.code,{children:"@paima/sdk"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const connectAndSignExternalWallet = async (\n  walletType: AddressType,\n  walletName: string, /* Provided in wallets[WalletMode].metadata.name */\n  otherAddress: string  \n) => {\n  return await new WalletConnectHelper().connectExternalWalletAndSign(walletType, walletName, message);\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Put it all together. ",(0,s.jsx)(n.code,{children:"walletConnectPromise"})," is provided by ",(0,s.jsx)(n.code,{children:"@paima/sdk"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const localWalletMessage = await signMessageWithLocalWallet();\nconst wallets = getWallets();\n\n// This is to use only the first EVM wallet.\n// You should check the contents of "wallets" and display the necessary options.\nconst injectedWalletMessage = await connectAndSignExternalWallet(\n  AddressType.EVM,\n  wallets[WalletMode.EvmInjected].metadata.name,\n  localWalletSignedMessage.walletAddress\n);\n\n// Send message to blockchain.\nawait walletConnectPromise(\n    injectedWalletMessage.walletAddress,\n    null, // localWalletMessage.walletAddress,\n    injectedWalletMessage.signedMessage,\n    localWalletMessage.signedMessage\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"in-your-backend",children:"In your backend"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the default API index: ",(0,s.jsx)(n.code,{children:"/backend/api/index.ts"}),"\nAdd the following code:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Clear wallet-connection cache.\nclearDelegateWalletCacheOnChanges(requirePersistentConnection());\n"})}),"\n",(0,s.jsx)(n.p,{children:"This allows to clear the API cache when the user changes the wallet connection."}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["STF Changes\nAs user wallet might change over time, as they can delegate, migrate and cancel delegations, we need to use ",(0,s.jsx)(n.code,{children:"userId"})," instead of ",(0,s.jsx)(n.code,{children:"userAddress"})," or ",(0,s.jsx)(n.code,{children:"realAddress"})," for user identification in our STF."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default async function (\n  inputData: SubmittedChainData,\n  blockHeight: number,\n  randomnessGenerator: Prando,\n  dbConn: Pool\n): Promise<SQLUpdate[]> {\n  const user = String(inputData.userId);\n  /* use user to identify user instead of userAddress or realAddress */\n  ...\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"userAddress: contains the main wallet address."}),"\n",(0,s.jsx)(n.li,{children:"realAddress: contains the real wallet address that sent the transaction."}),"\n",(0,s.jsx)(n.li,{children:"userId: contains the user id, which is the same for all wallets of the same user."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"API Controllers\nIn your API, if receiving user wallet address, convert them into the USER ID."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"@Route('items')\nexport class ItemController extends Controller {\n  @Get('/user')\n  public async getItemsForUser(\n    @Query() wallet: string\n  ): Promise<{ items: IGetAllItemsForUserResult[] }> {\n    const pool = requirePool();\n    const address = await getMainAddress(wallet, pool);\n    /* now use address, instead of wallet */\n    const items = await getAllItemsForUser.run({ wallet: address }, pool);\n    return { items };\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(7294);const l={},a=s.createContext(l);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);