(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,576599,e=>{"use strict";e.s(["NavigationUtil",0,{URLS:{FAQ:"https://walletconnect.com/faq"}}])},39299,e=>{"use strict";e.i(812207);var t=e.i(604148),i=e.i(654479);e.i(374576);var r=e.i(120119);e.i(234051);var a=e.i(829389);e.i(852634),e.i(839009);var o=e.i(459088),n=e.i(645975);e.i(835902);var s=e.i(592057);let l=s.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var c=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends t.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return i.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,a.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?i.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};p.styles=[o.resetStyles,l],c([(0,r.property)()],p.prototype,"errorMessage",void 0),c([(0,r.property)({type:Boolean})],p.prototype,"disabled",void 0),c([(0,r.property)()],p.prototype,"value",void 0),c([(0,r.property)()],p.prototype,"tabIdx",void 0),p=c([(0,n.customElement)("wui-email-input")],p),e.s([],39299)},307075,e=>{"use strict";var t=e.i(853532),i=e.i(383856),r=e.i(588233),a=e.i(695331);function o(e,t={}){let{key:i="fallback",name:s="Fallback",rank:l=!1,shouldThrow:c=n,retryCount:p,retryDelay:u}=t;return({chain:t,pollingInterval:o=4e3,timeout:n,...d})=>{let h=e,m=()=>{},g=(0,a.createTransport)({key:i,name:s,async request({method:e,params:i}){let r,a=async(o=0)=>{let s=h[o]({...d,chain:t,retryCount:0,timeout:n});try{let t=await s.request({method:e,params:i});return m({method:e,params:i,response:t,transport:s,status:"success"}),t}catch(n){if(m({error:n,method:e,params:i,transport:s,status:"error"}),c(n)||o===h.length-1||!(r??=h.slice(o+1).some(i=>{let{include:r,exclude:a}=i({chain:t}).config.methods||{};return r?r.includes(e):!a||!a.includes(e)})))throw n;return a(o+1)}};return a()},retryCount:p,retryDelay:u,type:"fallback"},{onResponse:e=>m=e,transports:h.map(e=>e({chain:t,retryCount:0}))});if(l){let e="object"==typeof l?l:{};!function({chain:e,interval:t=4e3,onTransports:i,ping:a,sampleCount:o=10,timeout:n=1e3,transports:s,weights:l={}}){let{stability:c=.7,latency:p=.3}=l,u=[],d=async()=>{let l=await Promise.all(s.map(async t=>{let i,r,o=t({chain:e,retryCount:0,timeout:n}),s=Date.now();try{await (a?a({transport:o}):o.request({method:"net_listening"})),r=1}catch{r=0}finally{i=Date.now()}return{latency:i-s,success:r}}));u.push(l),u.length>o&&u.shift();let h=Math.max(...u.map(e=>Math.max(...e.map(({latency:e})=>e))));i(s.map((e,t)=>{let i=u.map(e=>e[t].latency),r=i.reduce((e,t)=>e+t,0)/i.length,a=u.map(e=>e[t].success),o=a.reduce((e,t)=>e+t,0)/a.length;return 0===o?[0,t]:[p*(1-r/h)+c*o,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>s[e])),await (0,r.wait)(t),d()};d()}({chain:t,interval:e.interval??o,onTransports:e=>h=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:h,weights:e.weights})}return g}}function n(e){return!!("code"in e&&"number"==typeof e.code&&(e.code===i.TransactionRejectedRpcError.code||e.code===i.UserRejectedRequestError.code||t.ExecutionRevertedError.nodeMessage.test(e.message)||5e3===e.code))}e.s(["fallback",()=>o,"shouldThrow",()=>n])},849694,124141,e=>{"use strict";var t=e.i(365801),i=e.i(742710),r=e.i(675457),a=e.i(564126),o=e.i(360334),n=e.i(227302),s=e.i(150576),l=e.i(82283);let c={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class p extends Error{}async function u(e,t){let i=function(){let{sdkType:e,sdkVersion:t,projectId:i}=l.OptionsController.getSnapshot(),r=new URL("https://rpc.walletconnect.org/v1/json-rpc");return r.searchParams.set("projectId",i),r.searchParams.set("st",e),r.searchParams.set("sv",t),r.searchParams.set("source","fund-wallet"),r.toString()}(),{projectId:r}=l.OptionsController.getSnapshot(),a={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:r}},o=await fetch(i,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}),n=await o.json();if(n.error)throw new p(n.error.message);return n}async function d(e){return(await u("reown_getExchanges",e)).result}async function h(e){return(await u("reown_getExchangePayUrl",e)).result}async function m(e){return(await u("reown_getExchangeBuyStatus",e)).result}function g(e,t){let{chainNamespace:i,chainId:r}=s.ParseUtil.parseCaipNetworkId(e),a=c[i];if(!a)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let o=a.native.assetNamespace,n=a.native.assetReference;"native"!==t&&(o=a.defaultTokenNamespace,n=t);let l=`${i}:${r}`;return`${l}/${o}:${n}`}let y={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},w={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:y,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function f(e){return Object.values(w).filter(t=>t.network===e)}e.s(["baseSepoliaUSDC",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"baseUSDC",0,y,"formatCaip19Asset",()=>g,"getBuyStatus",()=>m,"getExchanges",()=>d,"getPayUrl",()=>h,"getPaymentAssetsForNetwork",()=>f],124141);var x=e.i(24742),b=e.i(960398),v=e.i(653157),$=e.i(811424);let k={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},C=(0,t.proxy)(k),T={state:C,subscribe:e=>(0,t.subscribe)(C,()=>e(C)),subscribeKey:(e,t)=>(0,i.subscribeKey)(C,e,t),resetState(){Object.assign(C,{...k})},async getAssetsForNetwork(e){let t=f(e),i=await T.getAssetsImageAndPrice(t),r=t.map(e=>{let t="native"===e.asset?(0,a.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`,r=i.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:r?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:r?.fungibles?.[0]?.iconUrl}}});return C.assets=r,r},async getAssetsImageAndPrice(e){let t=e.map(e=>"native"===e.asset?(0,a.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>x.BlockchainApiController.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!C?.paymentAsset?.price)throw Error("Cannot get token price");let e=r.NumberUtil.bigNumber(C.amount??0).round(8),t=r.NumberUtil.bigNumber(C.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){C.amount=e,C.paymentAsset?.price&&(C.tokenAmount=T.getTokenAmount())},setPaymentAsset(e){C.paymentAsset=e},isPayWithExchangeEnabled:()=>l.OptionsController.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>T.isPayWithExchangeEnabled()&&b.ChainController.state.activeCaipNetwork&&o.ConstantsUtil.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(b.ChainController.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let e=T.isPayWithExchangeSupported();if(!C.paymentAsset||!e){C.exchanges=[],C.isLoading=!1;return}C.isLoading=!0;let t=await d({page:0,asset:g(C.paymentAsset.network,C.paymentAsset.asset),amount:C.amount?.toString()??"0"});C.exchanges=t.exchanges.slice(0,2)}catch(e){throw $.SnackController.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{C.isLoading=!1}},async getPayUrl(e,t){try{let i=Number(t.amount),r=await h({exchangeId:e,asset:g(t.network,t.asset),amount:i.toString(),recipient:`${t.network}:${t.recipient}`});return v.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),r}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw Error("Asset not supported");throw Error(e.message)}},async handlePayWithExchange(e){try{let t=b.ChainController.getAccountData()?.address;if(!t)throw Error("No account connected");if(!C.paymentAsset)throw Error("No payment asset selected");let i=n.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!i)throw Error("Could not create popup window");C.isPaymentInProgress=!0,C.paymentId=crypto.randomUUID(),C.currentPayment={type:"exchange",exchangeId:e};let{network:r,asset:a}=C.paymentAsset,o={network:r,asset:a,amount:C.tokenAmount,recipient:t},s=await T.getPayUrl(e,o);if(!s){try{i.close()}catch(e){console.error("Unable to close popup window",e)}throw Error("Unable to initiate payment")}C.currentPayment.sessionId=s.sessionId,C.currentPayment.status="IN_PROGRESS",C.currentPayment.exchangeId=e,i.location.href=s.url}catch(e){C.error="Unable to initiate payment",$.SnackController.showError(C.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:i,retries:r=20}){let a=await T.getBuyStatus(e,t,i);if("SUCCESS"===a.status||"FAILED"===a.status)return a;if(0===r)throw Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),T.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:i,retries:r-1})},async getBuyStatus(e,t,i){try{if(!C.currentPayment)throw Error("No current payment");let r=await m({sessionId:t,exchangeId:e});if(C.currentPayment.status=r.status,"SUCCESS"===r.status||"FAILED"===r.status){let e=b.ChainController.getAccountData()?.address;C.currentPayment.result=r.txHash,C.isPaymentInProgress=!1,v.EventsController.sendEvent({type:"track",event:"SUCCESS"===r.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===r.status?n.CoreHelperUtil.parseError(C.error):void 0,source:"fund-from-exchange",paymentId:i,configuration:{network:C.paymentAsset?.network||"",asset:C.paymentAsset?.asset||"",recipient:e||"",amount:C.amount??0},currentPayment:{type:"exchange",exchangeId:C.currentPayment?.exchangeId,sessionId:C.currentPayment?.sessionId,result:r.txHash}}})}return r}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){C.currentPayment=void 0,C.isPaymentInProgress=!1,C.paymentId="",C.paymentAsset=null,C.amount=0,C.tokenAmount=0,C.priceLoading=!1,C.error=null,C.exchanges=[],C.isLoading=!1}};e.s(["ExchangeController",0,T],849694)},746650,e=>{"use strict";e.i(912190),e.s([])},684326,765090,e=>{"use strict";var t=e.i(654479);let{I:i}=t._$LH;var r=e.i(391909);let a=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),a(e,t);return!0},o=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},n=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),c(t)}};function s(e){void 0!==this._$AN?(o(this),this._$AM=e,n(this)):this._$AM=e}function l(e,t=!1,i=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let e=i;e<r.length;e++)a(r[e],!1),o(r[e]);else null!=r&&(a(r,!1),o(r));else a(this,e)}let c=e=>{e.type==r.PartType.CHILD&&(e._$AP??=l,e._$AQ??=s)};class p extends r.Directive{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),n(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(a(this,e),o(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let u=()=>new d;class d{}let h=new WeakMap,m=(0,r.directive)(class extends p{render(e){return t.nothing}update(e,[i]){let r=i!==this.G;return r&&void 0!==this.G&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=i,this.ht=e.options?.host,this.rt(this.ct=e.element)),t.nothing}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=h.get(t);void 0===i&&(i=new WeakMap,h.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?h.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});e.s(["createRef",()=>u,"ref",()=>m],765090),e.s([],684326)},835902,e=>{"use strict";e.i(812207);var t=e.i(604148),i=e.i(654479);e.i(374576);var r=e.i(120119);e.i(234051);var a=e.i(829389);e.i(684326);var o=e.i(765090);e.i(852634),e.i(839009);var n=e.i(459088),s=e.i(645975),l=e.i(162611);let c=l.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var p=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,o.createRef)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return i.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,o.ref)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,a.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?i.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?i.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?i.html`<wui-icon name="spinner" size="md"></wui-icon>`:i.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?i.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?i.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};u.styles=[n.resetStyles,n.elementStyles,c],p([(0,r.property)()],u.prototype,"icon",void 0),p([(0,r.property)({type:Boolean})],u.prototype,"disabled",void 0),p([(0,r.property)({type:Boolean})],u.prototype,"loading",void 0),p([(0,r.property)()],u.prototype,"placeholder",void 0),p([(0,r.property)()],u.prototype,"type",void 0),p([(0,r.property)()],u.prototype,"value",void 0),p([(0,r.property)()],u.prototype,"errorText",void 0),p([(0,r.property)()],u.prototype,"warningText",void 0),p([(0,r.property)()],u.prototype,"onSubmit",void 0),p([(0,r.property)()],u.prototype,"size",void 0),p([(0,r.property)({attribute:!1})],u.prototype,"onKeyDown",void 0),u=p([(0,s.customElement)("wui-input-text")],u),e.s([],835902)},6957,e=>{"use strict";e.i(835902),e.s([])},923838,e=>{"use strict";e.i(812207);var t=e.i(604148),i=e.i(654479);e.i(374576);var r=e.i(120119),a=e.i(675457);e.i(852634),e.i(864380),e.i(839009),e.i(73944);var o=e.i(459088),n=e.i(645975),s=e.i(162611);let l=s.css`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    gap: ${({spacing:e})=>e[3]};
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  .token-name-container {
    flex: 1;
  }
`;var c=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends t.LitElement{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return i.html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex
            flexDirection="column"
            justifyContent="space-between"
            gap="1"
            class="token-name-container"
          >
            <wui-text variant="md-regular" color="primary" lineClamp="1">
              ${this.tokenName}
            </wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${a.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
          width="auto"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${a.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?i.html`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:i.html`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};p.styles=[o.resetStyles,o.elementStyles,l],c([(0,r.property)()],p.prototype,"tokenName",void 0),c([(0,r.property)()],p.prototype,"tokenImageUrl",void 0),c([(0,r.property)({type:Number})],p.prototype,"tokenValue",void 0),c([(0,r.property)()],p.prototype,"tokenAmount",void 0),c([(0,r.property)()],p.prototype,"tokenCurrency",void 0),c([(0,r.property)({type:Boolean})],p.prototype,"clickable",void 0),p=c([(0,n.customElement)("wui-list-token")],p),e.s([],923838)},221803,e=>{"use strict";e.i(812207);var t=e.i(604148),i=e.i(654479);e.i(374576);var r=e.i(120119);e.i(864380);var a=e.i(459088),o=e.i(112699),n=e.i(645975),s=e.i(162611);let l=s.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends t.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});
    `,i.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",i.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=o.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};p.styles=[a.resetStyles,l],c([(0,r.property)()],p.prototype,"imageSrc",void 0),c([(0,r.property)()],p.prototype,"alt",void 0),c([(0,r.property)()],p.prototype,"address",void 0),c([(0,r.property)()],p.prototype,"size",void 0),p=c([(0,n.customElement)("wui-avatar")],p),e.s([],221803)},389676,e=>{"use strict";e.i(812207);var t,i,r=e.i(604148),a=e.i(654479);e.i(374576);var o=e.i(120119),n=e.i(56350),s=e.i(48836),l=e.i(960398),c=e.i(227302),p=e.i(653157),u=e.i(82283),d=e.i(221728),h=e.i(426618),m=e.i(564126);e.i(404041);var g=e.i(528994),y=e.i(645975);e.i(62238),e.i(746650),e.i(210380),e.i(249536);var w=r;e.i(234051);var f=e.i(829389);e.i(839009);var x=e.i(459088);(t=i||(i={})).approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn";var b=r;e.i(852634),e.i(864380),e.i(912190);var v=e.i(162611);let $=v.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var k=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let C=class extends b.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(e){return t=>{t.stopPropagation(),this.failedImageUrls.add(e),this.requestUpdate()}}render(){let[e,t]=this.images;this.images.length||(this.dataset.noImages="true");let i=e?.type==="NFT",r=t?.url?"NFT"===t.type:i;return this.style.cssText=`
    --local-left-border-radius: ${i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,a.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images;return 2===this.images.length&&(e?.url||t?.url)?this.renderSwapImages(e,t):e?.url&&!this.failedImageUrls.has(e.url)?this.renderSingleImage(e):e?.type==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(e,t){return a.html`<div class="swap-images-container">
      ${e?.url?this.renderImageOrFallback(e,"first",!0):null}
      ${t?.url?this.renderImageOrFallback(t,"last",!0):null}
    </div>`}renderSingleImage(e){return this.renderImageOrFallback(e,void 0,!1)}renderImageOrFallback(e,t,i=!1){return e.url?this.failedImageUrls.has(e.url)?i&&t?this.renderFallbackIconInContainer(t):this.renderFallbackIcon():a.html`<wui-image
      src=${e.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(e.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(e){return a.html`<div class="swap-fallback-container ${e}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return a.html`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(e){return a.html`<wui-icon size="xl" weight="regular" color="default" name=${e}></wui-icon>`}templateIcon(){let e,t="accent-primary";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?a.html`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${e}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};C.styles=[$],k([(0,o.property)()],C.prototype,"type",void 0),k([(0,o.property)()],C.prototype,"status",void 0),k([(0,o.property)()],C.prototype,"direction",void 0),k([(0,o.property)({type:Boolean})],C.prototype,"onlyDirectionIcon",void 0),k([(0,o.property)({type:Array})],C.prototype,"images",void 0),k([(0,o.property)({type:Object})],C.prototype,"secondImage",void 0),k([(0,n.state)()],C.prototype,"failedImageUrls",void 0),C=k([(0,y.customElement)("wui-transaction-visual")],C);let T=v.css`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var S=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let A=class extends w.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return a.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,f.ifDefined)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${i[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?a.html`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?a.html`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};A.styles=[x.resetStyles,T],S([(0,o.property)()],A.prototype,"type",void 0),S([(0,o.property)({type:Array})],A.prototype,"descriptions",void 0),S([(0,o.property)()],A.prototype,"date",void 0),S([(0,o.property)({type:Boolean})],A.prototype,"onlyDirectionIcon",void 0),S([(0,o.property)()],A.prototype,"status",void 0),S([(0,o.property)()],A.prototype,"direction",void 0),S([(0,o.property)({type:Array})],A.prototype,"images",void 0),A=S([(0,y.customElement)("wui-transaction-list-item")],A);var E=r;e.i(864576),e.i(73944);var P=r;let I=v.css`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var D=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let U={sm:"xxs",lg:"md"},R=class extends P.LitElement{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return a.html`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[e,t]=this.images;return 2===this.images.length&&(e||t)?a.html`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${t} alt="Swap image"></wui-image>
      `:e?a.html`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return a.html`<wui-icon
      class="fallback-icon"
      size=${U[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return a.html`<wui-icon
      class="fallback-icon"
      size=${U[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[e]=this.images;return e?a.html`<wui-image src=${e} alt="Token image"></wui-image> `:a.html`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?a.html`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:a.html`<wui-icon
      class="direction-icon"
      size=${U[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};R.styles=[I],D([(0,o.property)()],R.prototype,"type",void 0),D([(0,o.property)()],R.prototype,"size",void 0),D([(0,o.property)()],R.prototype,"statusImageUrl",void 0),D([(0,o.property)({type:Array})],R.prototype,"images",void 0),R=D([(0,y.customElement)("wui-transaction-thumbnail")],R);let O=v.css`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,N=class extends E.LitElement{render(){return a.html`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};N.styles=[x.resetStyles,O],N=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,y.customElement)("wui-transaction-list-item-loader")],N);var z=e.i(979484);let j=v.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e["3"]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var _=function(e,t,i,r){var a,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let L="last-transaction",F=class extends r.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=l.ChainController.state.activeCaipAddress,this.transactionsByYear=h.TransactionsController.state.transactionsByYear,this.loading=h.TransactionsController.state.loading,this.empty=h.TransactionsController.state.empty,this.next=h.TransactionsController.state.next,h.TransactionsController.clearCursor(),this.unsubscribe.push(l.ChainController.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(h.TransactionsController.resetTransactions(),h.TransactionsController.fetchTransactions(e)),this.caipAddress=e}),l.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),h.TransactionsController.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){h.TransactionsController.resetTransactions(),this.caipAddress&&h.TransactionsController.fetchTransactions(c.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),i=Array(12).fill(null).map((e,i)=>({groupTitle:g.TransactionUtil.getTransactionGroupTitle(t,i),transactions:this.transactionsByYear[t]?.[i]})).filter(({transactions:e})=>e).reverse();return i.map(({groupTitle:e,transactions:t},r)=>{let o=r===i.length-1;return t?a.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${o?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${e}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(t,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:i,descriptions:r,direction:o,images:n,status:s,type:l,transfers:c,isAllNFT:p}=this.getTransactionListItemProps(e);return a.html`
      <wui-transaction-list-item
        date=${i}
        .direction=${o}
        id=${t&&this.next?L:""}
        status=${s}
        type=${l}
        .images=${n}
        .onlyDirectionIcon=${p||1===c.length}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((i,r)=>{let o=t&&r===e.length-1;return a.html`${this.templateRenderTransaction(i,o)}`})}emptyStateActivity(){return a.html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return a.html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?a.html`${this.emptyStateAccount()}`:a.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?a.html` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(7).fill(a.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){d.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=u.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(h.TransactionsController.fetchTransactions(c.CoreHelperUtil.getPlainAddress(this.caipAddress)),p.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:c.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(0,m.getPreferredAccountType)(l.ChainController.state.activeChain)===z.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${L}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=s.DateUtil.formatDate(e?.metadata?.minedAt),i=g.TransactionUtil.mergeTransfers(e?.transfers||[]),r=g.TransactionUtil.getTransactionDescriptions(e,i),a=i?.[0],o=!!a&&i?.every(e=>!!e.nft_info),n=g.TransactionUtil.getTransactionImages(i);return{date:t,direction:a?.direction,descriptions:r,isAllNFT:o,images:n,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};F.styles=j,_([(0,o.property)()],F.prototype,"page",void 0),_([(0,n.state)()],F.prototype,"caipAddress",void 0),_([(0,n.state)()],F.prototype,"transactionsByYear",void 0),_([(0,n.state)()],F.prototype,"loading",void 0),_([(0,n.state)()],F.prototype,"empty",void 0),_([(0,n.state)()],F.prototype,"next",void 0),F=_([(0,y.customElement)("w3m-activity-list")],F),e.s([],389676)}]);