module.exports=[814747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},120635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},832319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},909270,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored.contexts.AppRouterContext},738783,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].ReactServerDOMTurbopackClient},736313,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored.contexts.HooksClientContext},818341,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored.contexts.ServerInsertedHtml},115676,540849,884947,a=>{"use strict";var b=a.i(252271),c=a.i(129286);let d=(0,b.proxy)({isLegalCheckboxChecked:!1}),e={state:d,subscribe:a=>(0,b.subscribe)(d,()=>a(d)),subscribeKey:(a,b)=>(0,c.subscribeKey)(d,a,b),setIsLegalCheckboxChecked(a){d.isLegalCheckboxChecked=a}};a.s(["OptionsStateController",0,e],115676),a.i(489442);var f=a.i(572424),g=a.i(802705);a.i(410935);var h=a.i(954055),i=a.i(94702);a.i(639170);var j=a.i(977464),k=f,l=a.i(811016);a.i(623301);var m=a.i(905406);a.i(225822);var n=a.i(51208);a.i(468305),a.i(804882);var o=a.i(638183),p=a.i(956646);let q=p.css`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:a})=>a[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:a})=>a.neutrals400};
    color: ${({colors:a})=>a.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:a})=>a.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:a})=>a.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:a})=>a[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:a})=>a.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:a})=>a.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:a})=>a.neutrals700};
    background-color: ${({colors:a})=>a.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:a})=>a.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:a})=>a.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s={lg:"md",md:"sm",sm:"sm"},t=class extends k.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,n.createRef)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){let a=s[this.size];return g.html`
      <label data-size=${this.size}>
        <input
          ${(0,n.ref)(this.inputElementRef)}
          ?checked=${(0,m.ifDefined)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${a}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};t.styles=[o.resetStyles,q],r([(0,l.property)({type:Boolean})],t.prototype,"checked",void 0),r([(0,l.property)({type:Boolean})],t.prototype,"disabled",void 0),r([(0,l.property)()],t.prototype,"size",void 0),t=r([(0,j.customElement)("wui-checkbox")],t),a.i(145357);let u=p.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:a})=>a["3"]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.theme.textSecondary};
    font-weight: 500;
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends f.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=e.state.isLegalCheckboxChecked,this.unsubscribe.push(e.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state,c=i.OptionsController.state.features?.legalCheckbox;return(a||b)&&c?g.html`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>privacy policy</a>`:null}onCheckboxChange(){e.setIsLegalCheckboxChecked(!this.checked)}};w.styles=[u],v([(0,h.state)()],w.prototype,"checked",void 0),w=v([(0,j.customElement)("w3m-legal-checkbox")],w),a.s([],540849);var x=f;let y=p.css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${a=>a.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=class extends x.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let a=this.radius>50?50:this.radius,b=36-a;return g.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${a}
          stroke-dasharray="${116+b} ${245+b}"
          stroke-dashoffset=${360+1.75*b}
        />
      </svg>
    `}};A.styles=[o.resetStyles,y],z([(0,l.property)({type:Number})],A.prototype,"radius",void 0),A=z([(0,j.customElement)("wui-loading-thumbnail")],A),a.s([],884947)},554936,a=>{"use strict";a.i(489442);var b=a.i(572424),c=a.i(802705);a.i(410935);var d=a.i(811016);a.i(623301);var e=a.i(905406);a.i(468305),a.i(804882);var f=a.i(638183),g=a.i(977464);a.i(644320);var h=a.i(885876);let i=h.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return c.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,e.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?c.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};k.styles=[f.resetStyles,i],j([(0,d.property)()],k.prototype,"errorMessage",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"disabled",void 0),j([(0,d.property)()],k.prototype,"value",void 0),j([(0,d.property)()],k.prototype,"tabIdx",void 0),k=j([(0,g.customElement)("wui-email-input")],k),a.s([],554936)},851980,874399,a=>{"use strict";var b=a.i(252271),c=a.i(129286),d=a.i(877548),e=a.i(435044),f=a.i(977601),g=a.i(135323),h=a.i(922848),i=a.i(94702);let j={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class k extends Error{}async function l(a,b){let c=function(){let{sdkType:a,sdkVersion:b,projectId:c}=i.OptionsController.getSnapshot(),d=new URL("https://rpc.walletconnect.org/v1/json-rpc");return d.searchParams.set("projectId",c),d.searchParams.set("st",a),d.searchParams.set("sv",b),d.searchParams.set("source","fund-wallet"),d.toString()}(),{projectId:d}=i.OptionsController.getSnapshot(),e={jsonrpc:"2.0",id:1,method:a,params:{...b||{},projectId:d}},f=await fetch(c,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),g=await f.json();if(g.error)throw new k(g.error.message);return g}async function m(a){return(await l("reown_getExchanges",a)).result}async function n(a){return(await l("reown_getExchangePayUrl",a)).result}async function o(a){return(await l("reown_getExchangeBuyStatus",a)).result}function p(a,b){let{chainNamespace:c,chainId:d}=h.ParseUtil.parseCaipNetworkId(a),e=j[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b&&(f=e.defaultTokenNamespace,g=b);let i=`${c}:${d}`;return`${i}/${f}:${g}`}let q={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},r={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:q,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function s(a){return Object.values(r).filter(b=>b.network===a)}a.s(["baseSepoliaUSDC",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"baseUSDC",0,q,"formatCaip19Asset",()=>p,"getBuyStatus",()=>o,"getExchanges",()=>m,"getPayUrl",()=>n,"getPaymentAssetsForNetwork",()=>s],874399);var t=a.i(473439),u=a.i(602383),v=a.i(242528),w=a.i(531657);let x={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},y=(0,b.proxy)(x),z={state:y,subscribe:a=>(0,b.subscribe)(y,()=>a(y)),subscribeKey:(a,b)=>(0,c.subscribeKey)(y,a,b),resetState(){Object.assign(y,{...x})},async getAssetsForNetwork(a){let b=s(a),c=await z.getAssetsImageAndPrice(b),d=b.map(a=>{let b="native"===a.asset?(0,e.getActiveNetworkTokenAddress)():`${a.network}:${a.asset}`,d=c.find(a=>a.fungibles?.[0]?.address?.toLowerCase()===b.toLowerCase());return{...a,price:d?.fungibles?.[0]?.price||1,metadata:{...a.metadata,iconUrl:d?.fungibles?.[0]?.iconUrl}}});return y.assets=d,d},async getAssetsImageAndPrice(a){let b=a.map(a=>"native"===a.asset?(0,e.getActiveNetworkTokenAddress)():`${a.network}:${a.asset}`);return await Promise.all(b.map(a=>t.BlockchainApiController.fetchTokenPrice({addresses:[a]})))},getTokenAmount(){if(!y?.paymentAsset?.price)throw Error("Cannot get token price");let a=d.NumberUtil.bigNumber(y.amount??0).round(8),b=d.NumberUtil.bigNumber(y.paymentAsset.price).round(8);return a.div(b).round(8).toNumber()},setAmount(a){y.amount=a,y.paymentAsset?.price&&(y.tokenAmount=z.getTokenAmount())},setPaymentAsset(a){y.paymentAsset=a},isPayWithExchangeEnabled:()=>i.OptionsController.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>z.isPayWithExchangeEnabled()&&u.ChainController.state.activeCaipNetwork&&f.ConstantsUtil.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(u.ChainController.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let a=z.isPayWithExchangeSupported();if(!y.paymentAsset||!a){y.exchanges=[],y.isLoading=!1;return}y.isLoading=!0;let b=await m({page:0,asset:p(y.paymentAsset.network,y.paymentAsset.asset),amount:y.amount?.toString()??"0"});y.exchanges=b.exchanges.slice(0,2)}catch(a){throw w.SnackController.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{y.isLoading=!1}},async getPayUrl(a,b){try{let c=Number(b.amount),d=await n({exchangeId:a,asset:p(b.network,b.asset),amount:c.toString(),recipient:`${b.network}:${b.recipient}`});return v.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:c},currentPayment:{type:"exchange",exchangeId:a},source:"fund-from-exchange",headless:!1}}),d}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw Error("Asset not supported");throw Error(a.message)}},async handlePayWithExchange(a){try{let b=u.ChainController.getAccountData()?.address;if(!b)throw Error("No account connected");if(!y.paymentAsset)throw Error("No payment asset selected");let c=g.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!c)throw Error("Could not create popup window");y.isPaymentInProgress=!0,y.paymentId=crypto.randomUUID(),y.currentPayment={type:"exchange",exchangeId:a};let{network:d,asset:e}=y.paymentAsset,f={network:d,asset:e,amount:y.tokenAmount,recipient:b},h=await z.getPayUrl(a,f);if(!h){try{c.close()}catch(a){console.error("Unable to close popup window",a)}throw Error("Unable to initiate payment")}y.currentPayment.sessionId=h.sessionId,y.currentPayment.status="IN_PROGRESS",y.currentPayment.exchangeId=a,c.location.href=h.url}catch(a){y.error="Unable to initiate payment",w.SnackController.showError(y.error)}},async waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d=20}){let e=await z.getBuyStatus(a,b,c);if("SUCCESS"===e.status||"FAILED"===e.status)return e;if(0===d)throw Error("Unable to get deposit status");return await new Promise(a=>{setTimeout(a,5e3)}),z.waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d-1})},async getBuyStatus(a,b,c){try{if(!y.currentPayment)throw Error("No current payment");let d=await o({sessionId:b,exchangeId:a});if(y.currentPayment.status=d.status,"SUCCESS"===d.status||"FAILED"===d.status){let a=u.ChainController.getAccountData()?.address;y.currentPayment.result=d.txHash,y.isPaymentInProgress=!1,v.EventsController.sendEvent({type:"track",event:"SUCCESS"===d.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===d.status?g.CoreHelperUtil.parseError(y.error):void 0,source:"fund-from-exchange",paymentId:c,configuration:{network:y.paymentAsset?.network||"",asset:y.paymentAsset?.asset||"",recipient:a||"",amount:y.amount??0},currentPayment:{type:"exchange",exchangeId:y.currentPayment?.exchangeId,sessionId:y.currentPayment?.sessionId,result:d.txHash}}})}return d}catch(a){return{status:"UNKNOWN",txHash:""}}},reset(){y.currentPayment=void 0,y.isPaymentInProgress=!1,y.paymentId="",y.paymentAsset=null,y.amount=0,y.tokenAmount=0,y.priceLoading=!1,y.error=null,y.exchanges=[],y.isLoading=!1}};a.s(["ExchangeController",0,z],851980)},199052,a=>{"use strict";var b=a.i(252271),c=a.i(129286),d=a.i(883148),e=a.i(977601),f=a.i(929581),g=a.i(321590),h=a.i(473439),i=a.i(602383),j=a.i(94702);let k={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},l={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},m={providers:e.ONRAMP_PROVIDERS,selectedProvider:null,error:null,purchaseCurrency:k,paymentCurrency:l,purchaseCurrencies:[k],paymentCurrencies:[],quotesLoading:!1},n=(0,b.proxy)(m),o=(0,f.withErrorBoundary)({state:n,subscribe:a=>(0,b.subscribe)(n,()=>a(n)),subscribeKey:(a,b)=>(0,c.subscribeKey)(n,a,b),setSelectedProvider(a){if(a&&"meld"===a.name){let b=i.ChainController.state.activeChain,c=b===d.ConstantsUtil.CHAIN.SOLANA?"SOL":"USDC",f=b?i.ChainController.state.chains.get(b)?.accountState?.address??"":"",g=new URL(a.url);g.searchParams.append("publicKey",e.MELD_PUBLIC_KEY),g.searchParams.append("destinationCurrencyCode",c),g.searchParams.append("walletAddress",f),g.searchParams.append("externalCustomerId",j.OptionsController.state.projectId),n.selectedProvider={...a,url:g.toString()}}else n.selectedProvider=a},setOnrampProviders(a){Array.isArray(a)&&a.every(a=>"string"==typeof a)?n.providers=e.ONRAMP_PROVIDERS.filter(b=>a.includes(b.name)):n.providers=[]},setPurchaseCurrency(a){n.purchaseCurrency=a},setPaymentCurrency(a){n.paymentCurrency=a},setPurchaseAmount(a){o.state.purchaseAmount=a},setPaymentAmount(a){o.state.paymentAmount=a},async getAvailableCurrencies(){let a=await h.BlockchainApiController.getOnrampOptions();n.purchaseCurrencies=a.purchaseCurrencies,n.paymentCurrencies=a.paymentCurrencies,n.paymentCurrency=a.paymentCurrencies[0]||l,n.purchaseCurrency=a.purchaseCurrencies[0]||k,await g.ApiController.fetchCurrencyImages(a.paymentCurrencies.map(a=>a.id)),await g.ApiController.fetchTokenImages(a.purchaseCurrencies.map(a=>a.symbol))},async getQuote(){n.quotesLoading=!0;try{let a=await h.BlockchainApiController.getOnrampQuote({purchaseCurrency:n.purchaseCurrency,paymentCurrency:n.paymentCurrency,amount:n.paymentAmount?.toString()||"0",network:n.purchaseCurrency?.symbol});return n.quotesLoading=!1,n.purchaseAmount=Number(a?.purchaseAmount.amount),a}catch(a){return n.error=a.message,n.quotesLoading=!1,null}finally{n.quotesLoading=!1}},resetState(){n.selectedProvider=null,n.error=null,n.purchaseCurrency=k,n.paymentCurrency=l,n.purchaseCurrencies=[k],n.paymentCurrencies=[],n.paymentAmount=void 0,n.purchaseAmount=void 0,n.quotesLoading=!1}});a.s(["OnRampController",0,o])},65559,a=>{"use strict";a.s(["NavigationUtil",0,{URLS:{FAQ:"https://walletconnect.com/faq"}}])},545088,a=>{"use strict";var b=a.i(252271),c=a.i(129286);let d={convertEVMChainIdToCoinType(a){if(a>=0x80000000)throw Error("Invalid chainId");return(0x80000000|a)>>>0}};var e=a.i(82228),f=a.i(929581),g=a.i(473439),h=a.i(602383),i=a.i(346280),j=a.i(109450),k=a.i(667625);let l=(0,b.proxy)({suggestions:[],loading:!1}),m=(0,f.withErrorBoundary)({state:l,subscribe:a=>(0,b.subscribe)(l,()=>a(l)),subscribeKey:(a,b)=>(0,c.subscribeKey)(l,a,b),async resolveName(a){try{return await g.BlockchainApiController.lookupEnsName(a)}catch(a){throw Error(a?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(a){try{return await g.BlockchainApiController.lookupEnsName(a),!0}catch{return!1}},async getSuggestions(a){try{return l.loading=!0,l.suggestions=[],l.suggestions=(await g.BlockchainApiController.getEnsNameSuggestions(a)).suggestions||[],l.suggestions}catch(a){throw Error(m.parseEnsApiError(a,"Error fetching name suggestions"))}finally{l.loading=!1}},async getNamesForAddress(a){try{if(!h.ChainController.state.activeCaipNetwork)return[];let b=e.StorageUtil.getEnsFromCacheForAddress(a);if(b)return b;let c=await g.BlockchainApiController.reverseLookupEnsName({address:a});return e.StorageUtil.updateEnsCache({address:a,ens:c,timestamp:Date.now()}),c}catch(a){throw Error(m.parseEnsApiError(a,"Error fetching names for address"))}},async registerName(a){let b=h.ChainController.state.activeCaipNetwork,c=h.ChainController.getAccountData(b?.chainNamespace)?.address,f=j.ConnectorController.getAuthConnector();if(!b)throw Error("Network not found");if(!c||!f)throw Error("Address or auth connector not found");l.loading=!0;try{let f=JSON.stringify({name:a,attributes:{},timestamp:Math.floor(Date.now()/1e3)});k.RouterController.pushTransactionStack({onCancel(){k.RouterController.replace("RegisterAccountName")}});let j=await i.ConnectionController.signMessage(f);l.loading=!1;let m=b.id;if(!m)throw Error("Network not found");let n=d.convertEVMChainIdToCoinType(Number(m));await g.BlockchainApiController.registerEnsName({coinType:n,address:c,signature:j,message:f}),h.ChainController.setAccountProp("profileName",a,b.chainNamespace),e.StorageUtil.updateEnsCache({address:c,ens:[{name:a,registered_at:new Date().toISOString(),updated_at:void 0,addresses:{},attributes:[]}],timestamp:Date.now()}),k.RouterController.replace("RegisterAccountNameSuccess")}catch(c){let b=m.parseEnsApiError(c,`Error registering name ${a}`);throw k.RouterController.replace("RegisterAccountName"),Error(b)}finally{l.loading=!1}},validateName:a=>/^[a-zA-Z0-9-]{4,}$/u.test(a),parseEnsApiError:(a,b)=>a?.reasons?.[0]?.description||b});a.s(["EnsController",0,m],545088)},74508,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_61a86087._.js","server/chunks/ssr/node_modules_@noble_curves_esm_secp256k1_fbba09d4.js","server/chunks/ssr/node_modules_viem__esm_index_0bd4f3a2.js","server/chunks/ssr/node_modules_24596ded._.js"].map(b=>a.l(b))).then(()=>b(104263)))},202490,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-controllers_dist_esm_e2f1baa8._.js"].map(b=>a.l(b))).then(()=>b(867119)))},815828,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_embedded-wallet_036dcf28.js"].map(b=>a.l(b))).then(()=>b(578339)))},83391,a=>{a.v(b=>Promise.all(["server/chunks/ssr/ad994_appkit-scaffold-ui_dist_esm_src_utils_w3m-email-otp-widget_index_6cb62e08.js","server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_email_f8c498b8.js"].map(b=>a.l(b))).then(()=>b(845079)))},88008,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_socials_bad48c6c.js"].map(b=>a.l(b))).then(()=>b(935896)))},541264,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-ui_dist_esm_exports_wui-token-button_83d704ff.js","server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_swaps_630847b3.js","server/chunks/ssr/a9bf9_@reown_appkit-controllers_dist_esm_src_controllers_SwapController_b4a3618c.js"].map(b=>a.l(b))).then(()=>b(456235)))},858867,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-ui_dist_esm_exports_be008a36._.js","server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_send_b6fae5ba.js","server/chunks/ssr/a9bf9_@reown_appkit-controllers_dist_esm_src_controllers_SwapController_b4a3618c.js"].map(b=>a.l(b))).then(()=>b(768362)))},897603,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_receive_c11f6cbe.js"].map(b=>a.l(b))).then(()=>b(963598)))},432029,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-ui_dist_esm_exports_wui-image_959bab56.js","server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_onramp_213908e4.js"].map(b=>a.l(b))).then(()=>b(649032)))},87395,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-ui_dist_esm_exports_e7060e9a._.js","server/chunks/ssr/d4b1c_modules_@reown_appkit-scaffold-ui_dist_esm_exports_pay-with-exchange_23f2b48a.js"].map(b=>a.l(b))).then(()=>b(671901)))},462402,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_transactions_fc9019c8.js"].map(b=>a.l(b))).then(()=>b(590239)))},90581,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_77e63858._.js","server/chunks/ssr/node_modules_@reown_appkit-pay_dist_esm_exports_index_4ba4f998.js"].map(b=>a.l(b))).then(()=>b(31835)))},630667,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_90241a41._.js"].map(b=>a.l(b))).then(()=>b(462514)))},452592,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_index_704eae10.js"].map(b=>a.l(b))).then(()=>b(804116)))},524103,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@reown_appkit-ui_dist_esm_exports_wui-image_959bab56.js","server/chunks/ssr/a9bf9_@reown_appkit-controllers_dist_esm_src_controllers_SwapController_b4a3618c.js","server/chunks/ssr/node_modules_@reown_appkit-pay_dist_esm_exports_index_4ba4f998.js","server/chunks/ssr/node_modules_@reown_appkit-scaffold-ui_dist_esm_exports_w3m-modal_1597838c.js"].map(b=>a.l(b))).then(()=>b(625282)))},713227,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_82369182._.js"].map(b=>a.l(b))).then(()=>b(239843)))},653182,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_01775c1a._.js"].map(b=>a.l(b))).then(()=>b(835089)))},108599,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_b112fc4d._.js"].map(b=>a.l(b))).then(()=>b(149351)))},37835,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_b4e4822c._.js"].map(b=>a.l(b))).then(()=>b(453110)))},731649,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_d3ece652._.js"].map(b=>a.l(b))).then(()=>b(151662)))},257383,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_9e755cd4._.js"].map(b=>a.l(b))).then(()=>b(778568)))},274792,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_a648f441._.js"].map(b=>a.l(b))).then(()=>b(219052)))},69065,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_0ed3be5d._.js"].map(b=>a.l(b))).then(()=>b(481475)))},17710,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_5eaf7ae5._.js"].map(b=>a.l(b))).then(()=>b(89655)))},102271,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_95a16cae._.js"].map(b=>a.l(b))).then(()=>b(356724)))},288791,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_99670ed8._.js"].map(b=>a.l(b))).then(()=>b(787151)))},921292,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_37fb3a42._.js"].map(b=>a.l(b))).then(()=>b(108474)))},731763,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_cfa79ef3._.js"].map(b=>a.l(b))).then(()=>b(907069)))},409775,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_a87a73e2._.js"].map(b=>a.l(b))).then(()=>b(168475)))},566704,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_2f68f8f4._.js"].map(b=>a.l(b))).then(()=>b(673356)))},942306,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_9652f5a9._.js"].map(b=>a.l(b))).then(()=>b(552766)))},155799,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_7e31fb25._.js"].map(b=>a.l(b))).then(()=>b(783360)))},37378,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_9ace11bb._.js"].map(b=>a.l(b))).then(()=>b(77017)))},165897,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_97bfc601._.js"].map(b=>a.l(b))).then(()=>b(316989)))},186915,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_86c456be._.js"].map(b=>a.l(b))).then(()=>b(673780)))},80216,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_f7fbed53._.js"].map(b=>a.l(b))).then(()=>b(630718)))},12813,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_db5bd243._.js"].map(b=>a.l(b))).then(()=>b(345714)))},751562,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_4bc3816f._.js"].map(b=>a.l(b))).then(()=>b(626907)))},887193,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_4b3bfc53._.js"].map(b=>a.l(b))).then(()=>b(972065)))},617890,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_78476b5d._.js"].map(b=>a.l(b))).then(()=>b(957411)))},314200,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_d0469913._.js"].map(b=>a.l(b))).then(()=>b(285730)))},990228,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_e992af40._.js"].map(b=>a.l(b))).then(()=>b(624600)))},337662,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_ab8a94cf._.js"].map(b=>a.l(b))).then(()=>b(429945)))},576877,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_15f6592d._.js"].map(b=>a.l(b))).then(()=>b(395493)))},802387,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_c766c8bd._.js"].map(b=>a.l(b))).then(()=>b(956015)))},203065,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_b42b4f03._.js"].map(b=>a.l(b))).then(()=>b(223816)))},192107,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_eca06c1f._.js"].map(b=>a.l(b))).then(()=>b(216762)))},615436,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_3daf6f62._.js"].map(b=>a.l(b))).then(()=>b(458017)))},402010,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_93b3362d._.js"].map(b=>a.l(b))).then(()=>b(885226)))},844986,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_6ade8eb5._.js"].map(b=>a.l(b))).then(()=>b(29752)))},939077,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_dc5a988d._.js"].map(b=>a.l(b))).then(()=>b(30288)))},598886,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_db763074._.js"].map(b=>a.l(b))).then(()=>b(837633)))},976514,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_3b6c37f8._.js"].map(b=>a.l(b))).then(()=>b(430833)))},45527,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_1866e4d2._.js"].map(b=>a.l(b))).then(()=>b(279777)))},922185,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_9582fb94._.js"].map(b=>a.l(b))).then(()=>b(282193)))},42082,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_b11a7e6b._.js"].map(b=>a.l(b))).then(()=>b(349379)))},537936,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_ff01e2e9._.js"].map(b=>a.l(b))).then(()=>b(210826)))},178286,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_fb5224b7._.js"].map(b=>a.l(b))).then(()=>b(216479)))},935558,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_11d709c8._.js"].map(b=>a.l(b))).then(()=>b(332345)))},346561,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_7d5f4ad7._.js"].map(b=>a.l(b))).then(()=>b(380801)))},380681,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_f0a9f647._.js"].map(b=>a.l(b))).then(()=>b(10176)))},975316,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_07b07fc7._.js"].map(b=>a.l(b))).then(()=>b(154836)))},666618,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_983ca8b4._.js"].map(b=>a.l(b))).then(()=>b(697237)))},224448,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_fb58e9e4._.js"].map(b=>a.l(b))).then(()=>b(895395)))},951162,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_d608e4a3._.js"].map(b=>a.l(b))).then(()=>b(564980)))},966536,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_8b46e069._.js"].map(b=>a.l(b))).then(()=>b(942539)))},993576,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@phosphor-icons_webcomponents_dist_3fac8aa9._.js"].map(b=>a.l(b))).then(()=>b(872601)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__a030d154._.js.map