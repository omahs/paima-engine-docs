"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const a={},l="Cardano",r={unversionedId:"home/multichain-support/projected-nfts/cross-chain/cardano",id:"home/multichain-support/projected-nfts/cross-chain/cardano",title:"Cardano",description:"Block timing",source:"@site/docs/home/7-multichain-support/1-projected-nfts/2-cross-chain/2-cardano.md",sourceDirName:"home/7-multichain-support/1-projected-nfts/2-cross-chain",slug:"/home/multichain-support/projected-nfts/cross-chain/cardano",permalink:"/home/multichain-support/projected-nfts/cross-chain/cardano",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/7-multichain-support/1-projected-nfts/2-cross-chain/2-cardano.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/home/multichain-support/projected-nfts/cross-chain/basics"},next:{title:"Wallet Layer",permalink:"/home/multichain-support/wallet-layer"}},s={},c=[{value:"Block timing",id:"block-timing",level:2},{value:"Multi-asset projection",id:"multi-asset-projection",level:2},{value:"Supported lock conditions",id:"supported-lock-conditions",level:2},{value:"Locking using a public key hash",id:"locking-using-a-public-key-hash",level:3},{value:"Locking using a pre-existing NFT external to this script",id:"locking-using-a-pre-existing-nft-external-to-this-script",level:3},{value:"Locking using an NFT created specifically for this hololocker (a &quot;Receipt&quot;)",id:"locking-using-an-nft-created-specifically-for-this-hololocker-a-receipt",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cardano"},"Cardano"),(0,o.kt)("h2",{id:"block-timing"},"Block timing"),(0,o.kt)("p",null,"In Cardano, finality is measured by ",(0,o.kt)("inlineCode",{parentName:"p"},"ttl")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"minimum_lock_time")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ttl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"minimum_lock_time")," are measured in ",(0,o.kt)("em",{parentName:"p"},"slots"),", despite the fact that finality is measured in ",(0,o.kt)("em",{parentName:"p"},"blocks"),". These are not the same thing, since there can be many empty slots in Cardano (which contribute nothing to finality). However, in order to ensure determinism, Cardano smart contracts only have access to POSIX millisecond timestamps (conversion is done by the Cardano node internally before being forwarded to the contract). The current duration of a slot cannot be known from a smart contract (as of Babbage) and no mapping of time to blocks is available to contracts either."),(0,o.kt)("h2",{id:"multi-asset-projection"},"Multi-asset projection"),(0,o.kt)("p",null,"Although the main use-case is projecting a single NFT, we support projecting multiple NFTs at once as well as fungible tokens. If multiple assets are used in a single projection, we also support partially unlocking funds from the hololocker by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"partial_withdraw")," as part of the redeemer when moving funds from ",(0,o.kt)("inlineCode",{parentName:"p"},"Locked")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Unlocking")," - allowing the remaining funds to stay projected"),(0,o.kt)("p",null,"Note that the funds that are kept locked do not have to be kept in the same hololocker type. Although switching the type is not an important feature in the usual case, it's important in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Receipt")," as you will have to mint a new receipt NFT to to unlock the projected funds later."),(0,o.kt)("h2",{id:"supported-lock-conditions"},"Supported lock conditions"),(0,o.kt)("h3",{id:"locking-using-a-public-key-hash"},"Locking using a public key hash"),(0,o.kt)("p",null,"To create hololockers,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send the asset(s) you want to project to the script hash of the hololocker with ",(0,o.kt)("inlineCode",{parentName:"li"},"{ owner: Owner::PKH(address), status: Status::Locked }")," as the datum")),(0,o.kt)("p",null,"To unlock/withdraw hololockers,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Include the hololocker as an input "),(0,o.kt)("li",{parentName:"ol"},"Include the required public key hash in the ",(0,o.kt)("inlineCode",{parentName:"li"},"required_signers")," field of the transaction. Note that you do NOT need to actually withdraw the contents of the hololocker to the address specified in datum. It simply needs to be part of the ",(0,o.kt)("inlineCode",{parentName:"li"},"required_signers")," of the transaction that withdraws the asset"),(0,o.kt)("li",{parentName:"ol"},"(when unlocking) place the projected funds you want to unlock in a UTXO with the inline datum set to ",(0,o.kt)("inlineCode",{parentName:"li"},"State { owner, Unlocking { out_ref, for_how_long } }")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," is the same as before, ",(0,o.kt)("inlineCode",{parentName:"li"},"out_ref")," is the ",(0,o.kt)("inlineCode",{parentName:"li"},"{ tx_hash, index}")," pair of the utxo input from (1), and ",(0,o.kt)("inlineCode",{parentName:"li"},"for_how_long")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"ttl + minimum_lock_time")),(0,o.kt)("li",{parentName:"ol"},"(if ",(0,o.kt)("inlineCode",{parentName:"li"},"partial_withdraw")," when unlocking) place the remaining funds in a inline datum representing their new hololocker in the output index directly following the output of the funds you are unlocking"),(0,o.kt)("li",{parentName:"ol"},"Sign the transaction using the required public key hash"),(0,o.kt)("li",{parentName:"ol"},"(when withdrawing) you can withdraw the content to any address you wish")),(0,o.kt)("h3",{id:"locking-using-a-pre-existing-nft-external-to-this-script"},"Locking using a pre-existing NFT external to this script"),(0,o.kt)("p",null,"To unlock, use a specific pre-existing NFT (",(0,o.kt)("inlineCode",{parentName:"p"},"<policy, token_name>")," pair). This is useful for example in the case of a NFT-backed multisig script where you do not have a specific public key hash to use as a lock."),(0,o.kt)("p",null,"Strictly speaking, a fungible token could be used as the lock the hololocker, but only one unit is required to unlock (no pseudo-multisig). Note this token isn't burned in the transaction. "),(0,o.kt)("p",null,"To create hololockers,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send the asset(s) you want to project to the script hash of the hololocker with ",(0,o.kt)("inlineCode",{parentName:"li"},"{ owner: Owner::NFT(policy_id, asset_name), status: Status::Locked }")," as the datum")),(0,o.kt)("p",null,"To unlock/withdraw hololockers,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Include the hololocker as an input"),(0,o.kt)("li",{parentName:"ol"},"Include ",(0,o.kt)("inlineCode",{parentName:"li"},"nft_input_owner")," which encodes the input (",(0,o.kt)("inlineCode",{parentName:"li"},"{ tx_hash, index}")," pair) of the transaction that contains the NFT used as a lock. This is just for performance optimization"),(0,o.kt)("li",{parentName:"ol"},"(when unlocking) place the projected funds you want to unlock in a UTXO with the inline datum set to ",(0,o.kt)("inlineCode",{parentName:"li"},"State { owner, Unlocking { out_ref, for_how_long } }")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," is the same as before, ",(0,o.kt)("inlineCode",{parentName:"li"},"out_ref")," is the ",(0,o.kt)("inlineCode",{parentName:"li"},"{ tx_hash, index}")," pair of the utxo input from (1), and ",(0,o.kt)("inlineCode",{parentName:"li"},"for_how_long")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"ttl + minimum_lock_time")),(0,o.kt)("li",{parentName:"ol"},"(if ",(0,o.kt)("inlineCode",{parentName:"li"},"partial_withdraw")," when unlocking) place the remaining funds in a inline datum representing their new hololocker in the output index directly following the output of the funds you are unlocking"),(0,o.kt)("li",{parentName:"ol"},"(when withdrawing) you can withdraw the content to any address you wish")),(0,o.kt)("h3",{id:"locking-using-an-nft-created-specifically-for-this-hololocker-a-receipt"},'Locking using an NFT created specifically for this hololocker (a "Receipt")'),(0,o.kt)("p",null,"This NFT has to be burned to unlock the NFT. Note that the hololocker script can be used both as a spending script and as a minting script to implement this use-case."),(0,o.kt)("p",null,"Note: you can create multiple of this type of hololockers at once (useful for airdrops)."),(0,o.kt)("p",null,"To create hololockers,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set the redeemer for the mint hololocker script as ",(0,o.kt)("inlineCode",{parentName:"li"},"{ total: Int }")),(0,o.kt)("li",{parentName:"ol"},"Specify ",(0,o.kt)("inlineCode",{parentName:"li"},"total")," number of assets being minted, with the policy being the hololocker script and the asset name for each token ",(0,o.kt)("inlineCode",{parentName:"li"},"i=0..total")," being ",(0,o.kt)("inlineCode",{parentName:"li"},"blake2b_256(cbor(input[0]), i)"),". We use the first input of the transaction (",(0,o.kt)("inlineCode",{parentName:"li"},"input[0]"),") as this guarantees the uniqueness of the asset name, given nobody will ever be able to use the same ",(0,o.kt)("inlineCode",{parentName:"li"},"{ tx_hash, index}")," pair again. "),(0,o.kt)("li",{parentName:"ol"},"Ensure that for every minted token, there is an equivalent standalone output which uses an inline datum ",(0,o.kt)("inlineCode",{parentName:"li"},"{ owner: Receipt(minted_asset_name), status: Locked }"),". Include the assets you want to project in these outputs. Note that you can send the newly minted lock NFTs to any address you wish")),(0,o.kt)("p",null,"To unlock hololockers,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Include the UTXO holding the lock NFT as an input"),(0,o.kt)("li",{parentName:"ol"},"Specify the hololocker as a mint policy that burns the lock NFT"),(0,o.kt)("li",{parentName:"ol"},"Specify the hololocker as a mint policy that mints a new lock NFT (its asset name will be set using the same deterministic rule as mentioned in the section on creating the hololocker). This new NFT will be used when you want to withdraw the hololocker content."),(0,o.kt)("li",{parentName:"ol"},"Add the asset name of the newly minted NFT in the redeemer of the spend condition (as ",(0,o.kt)("inlineCode",{parentName:"li"},"new_receipt_owner"),")"),(0,o.kt)("li",{parentName:"ol"},"Place the projected funds you want to unlock in a UTXO with the inline datum set to ",(0,o.kt)("inlineCode",{parentName:"li"},"State { owner: new_receipt_owner, Unlocking { out_ref, for_how_long } }")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"out_ref")," is the ",(0,o.kt)("inlineCode",{parentName:"li"},"{ tx_hash, index}")," pair of the utxo input from (1), and ",(0,o.kt)("inlineCode",{parentName:"li"},"for_how_long")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"ttl + minimum_lock_time")),(0,o.kt)("li",{parentName:"ol"},"(if ",(0,o.kt)("inlineCode",{parentName:"li"},"partial_withdraw"),") place the remaining funds in a inline datum representing their new hololocker in the output index directly following the output of the funds you are unlocking")),(0,o.kt)("p",null,"To withdraw hololockers,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Include the UTXO holding the lock NFT as an input"),(0,o.kt)("li",{parentName:"ol"},"Specify the hololocker as a mint policy that burns the unlock NFT"),(0,o.kt)("li",{parentName:"ol"},"You can withdraw the content to any address you wish")))}h.isMDXComponent=!0}}]);