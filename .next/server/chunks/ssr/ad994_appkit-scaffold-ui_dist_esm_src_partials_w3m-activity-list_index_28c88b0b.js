module.exports=[449104,a=>{"use strict";a.i(489442);var b,c,d=a.i(572424),e=a.i(802705);a.i(410935);var f=a.i(811016),g=a.i(954055),h=a.i(100706),i=a.i(602383),j=a.i(135323),k=a.i(242528),l=a.i(94702),m=a.i(667625),n=a.i(977352),o=a.i(435044);a.i(639170);var p=a.i(680194),q=a.i(977464);a.i(61586),a.i(729613),a.i(302475),a.i(145357);var r=d;a.i(623301);var s=a.i(905406);a.i(804882);var t=a.i(638183);(b=c||(c={})).approve="approved",b.bought="bought",b.borrow="borrowed",b.burn="burnt",b.cancel="canceled",b.claim="claimed",b.deploy="deployed",b.deposit="deposited",b.execute="executed",b.mint="minted",b.receive="received",b.repay="repaid",b.send="sent",b.sell="sold",b.stake="staked",b.trade="swapped",b.unstake="unstaked",b.withdraw="withdrawn";var u=d;a.i(468305),a.i(451707),a.i(325624);var v=a.i(956646);let w=v.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[3]} !important;
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
    border-radius: ${({borderRadius:a})=>a[4]};
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:a})=>a.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class extends u.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(a){return b=>{b.stopPropagation(),this.failedImageUrls.add(a),this.requestUpdate()}}render(){let[a,b]=this.images;this.images.length||(this.dataset.noImages="true");let c=a?.type==="NFT",d=b?.url?"NFT"===b.type:c;return this.style.cssText=`
    --local-left-border-radius: ${c?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${d?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,e.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[a,b]=this.images;return 2===this.images.length&&(a?.url||b?.url)?this.renderSwapImages(a,b):a?.url&&!this.failedImageUrls.has(a.url)?this.renderSingleImage(a):a?.type==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(a,b){return e.html`<div class="swap-images-container">
      ${a?.url?this.renderImageOrFallback(a,"first",!0):null}
      ${b?.url?this.renderImageOrFallback(b,"last",!0):null}
    </div>`}renderSingleImage(a){return this.renderImageOrFallback(a,void 0,!1)}renderImageOrFallback(a,b,c=!1){return a.url?this.failedImageUrls.has(a.url)?c&&b?this.renderFallbackIconInContainer(b):this.renderFallbackIcon():e.html`<wui-image
      src=${a.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(a.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(a){return e.html`<div class="swap-fallback-container ${a}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return e.html`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(a){return e.html`<wui-icon size="xl" weight="regular" color="default" name=${a}></wui-icon>`}templateIcon(){let a,b="accent-primary";return(a=this.getIcon(),this.status&&(b=this.getStatusColor()),a)?e.html`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${b} icon=${a}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};y.styles=[w],x([(0,f.property)()],y.prototype,"type",void 0),x([(0,f.property)()],y.prototype,"status",void 0),x([(0,f.property)()],y.prototype,"direction",void 0),x([(0,f.property)({type:Boolean})],y.prototype,"onlyDirectionIcon",void 0),x([(0,f.property)({type:Array})],y.prototype,"images",void 0),x([(0,f.property)({type:Object})],y.prototype,"secondImage",void 0),x([(0,g.state)()],y.prototype,"failedImageUrls",void 0),y=x([(0,q.customElement)("wui-transaction-visual")],y);let z=v.css`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:a})=>a[2]};
    padding: ${({spacing:a})=>a[1]} ${({spacing:a})=>a[2]};
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
`;var A=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let B=class extends r.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return e.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,s.ifDefined)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${c[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let a=this.descriptions?.[0];return a?e.html`
          <wui-text variant="md-regular" color="secondary">
            <span>${a}</span>
          </wui-text>
        `:null}templateSecondDescription(){let a=this.descriptions?.[1];return a?e.html`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${a}</span>
          </wui-text>
        `:null}};B.styles=[t.resetStyles,z],A([(0,f.property)()],B.prototype,"type",void 0),A([(0,f.property)({type:Array})],B.prototype,"descriptions",void 0),A([(0,f.property)()],B.prototype,"date",void 0),A([(0,f.property)({type:Boolean})],B.prototype,"onlyDirectionIcon",void 0),A([(0,f.property)()],B.prototype,"status",void 0),A([(0,f.property)()],B.prototype,"direction",void 0),A([(0,f.property)({type:Array})],B.prototype,"images",void 0),B=A([(0,q.customElement)("wui-transaction-list-item")],B);var C=d;a.i(516185),a.i(80336);var D=d;let E=v.css`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[128]};
  }

  .fallback-icon {
    color: ${({tokens:a})=>a.theme.iconInverse};
    border-radius: ${({borderRadius:a})=>a[3]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:a})=>a[128]};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:a})=>a["01"]};
    color: ${({tokens:a})=>a.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:a})=>a.core.textSuccess} 30%,
      ${({tokens:a})=>a.theme.backgroundPrimary} 70%
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
    padding: ${({spacing:a})=>a[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:a})=>a[1]};
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
`;var F=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let G={sm:"xxs",lg:"md"},H=class extends D.LitElement{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return e.html`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[a,b]=this.images;return 2===this.images.length&&(a||b)?e.html`
        <wui-image class="swap-crop-left-image" src=${a} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${b} alt="Swap image"></wui-image>
      `:a?e.html`<wui-image src=${a} alt="Swap image"></wui-image>`:null}fiatTemplate(){return e.html`<wui-icon
      class="fallback-icon"
      size=${G[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return e.html`<wui-icon
      class="fallback-icon"
      size=${G[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[a]=this.images;return a?e.html`<wui-image src=${a} alt="Token image"></wui-image> `:e.html`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?e.html`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:e.html`<wui-icon
      class="direction-icon"
      size=${G[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};H.styles=[E],F([(0,f.property)()],H.prototype,"type",void 0),F([(0,f.property)()],H.prototype,"size",void 0),F([(0,f.property)()],H.prototype,"statusImageUrl",void 0),F([(0,f.property)({type:Array})],H.prototype,"images",void 0),H=F([(0,q.customElement)("wui-transaction-thumbnail")],H);let I=v.css`
  :host > wui-flex:first-child {
    gap: ${({spacing:a})=>a[2]};
    padding: ${({spacing:a})=>a[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,J=class extends C.LitElement{render(){return e.html`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};J.styles=[t.resetStyles,I],J=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,q.customElement)("wui-transaction-list-item-loader")],J);var K=a.i(83965);let L=v.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:a})=>a["3"]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:a})=>a["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var M=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let N="last-transaction",O=class extends d.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=i.ChainController.state.activeCaipAddress,this.transactionsByYear=n.TransactionsController.state.transactionsByYear,this.loading=n.TransactionsController.state.loading,this.empty=n.TransactionsController.state.empty,this.next=n.TransactionsController.state.next,n.TransactionsController.clearCursor(),this.unsubscribe.push(i.ChainController.subscribeKey("activeCaipAddress",a=>{a&&this.caipAddress!==a&&(n.TransactionsController.resetTransactions(),n.TransactionsController.fetchTransactions(a)),this.caipAddress=a}),i.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),n.TransactionsController.subscribe(a=>{this.transactionsByYear=a.transactionsByYear,this.loading=a.loading,this.empty=a.empty,this.next=a.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return e.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){n.TransactionsController.resetTransactions(),this.caipAddress&&n.TransactionsController.fetchTransactions(j.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(a=>{let b=parseInt(a,10),c=Array(12).fill(null).map((a,c)=>({groupTitle:p.TransactionUtil.getTransactionGroupTitle(b,c),transactions:this.transactionsByYear[b]?.[c]})).filter(({transactions:a})=>a).reverse();return c.map(({groupTitle:a,transactions:b},d)=>{let f=d===c.length-1;return b?e.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${f?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${a}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(b,f)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(a,b){let{date:c,descriptions:d,direction:f,images:g,status:h,type:i,transfers:j,isAllNFT:k}=this.getTransactionListItemProps(a);return e.html`
      <wui-transaction-list-item
        date=${c}
        .direction=${f}
        id=${b&&this.next?N:""}
        status=${h}
        type=${i}
        .images=${g}
        .onlyDirectionIcon=${k||1===j.length}
        .descriptions=${d}
      ></wui-transaction-list-item>
    `}templateTransactions(a,b){return a.map((c,d)=>{let f=b&&d===a.length-1;return e.html`${this.templateRenderTransaction(c,f)}`})}emptyStateActivity(){return e.html`<wui-flex
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
    </wui-flex>`}emptyStateAccount(){return e.html`<wui-flex
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
    </wui-flex>`}templateEmpty(){return"account"===this.page?e.html`${this.emptyStateAccount()}`:e.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?e.html` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(7).fill(e.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(a=>a)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){m.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:a}=l.OptionsController.state;this.paginationObserver=new IntersectionObserver(([b])=>{b?.isIntersecting&&!this.loading&&(n.TransactionsController.fetchTransactions(j.CoreHelperUtil.getPlainAddress(this.caipAddress)),k.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:j.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:a,cursor:this.next,isSmartAccount:(0,o.getPreferredAccountType)(i.ChainController.state.activeChain)===K.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let a=this.shadowRoot?.querySelector(`#${N}`);a&&this.paginationObserver?.observe(a)}getTransactionListItemProps(a){let b=h.DateUtil.formatDate(a?.metadata?.minedAt),c=p.TransactionUtil.mergeTransfers(a?.transfers||[]),d=p.TransactionUtil.getTransactionDescriptions(a,c),e=c?.[0],f=!!e&&c?.every(a=>!!a.nft_info),g=p.TransactionUtil.getTransactionImages(c);return{date:b,direction:e?.direction,descriptions:d,isAllNFT:f,images:g,status:a.metadata?.status,transfers:c,type:a.metadata?.operationType}}};O.styles=L,M([(0,f.property)()],O.prototype,"page",void 0),M([(0,g.state)()],O.prototype,"caipAddress",void 0),M([(0,g.state)()],O.prototype,"transactionsByYear",void 0),M([(0,g.state)()],O.prototype,"loading",void 0),M([(0,g.state)()],O.prototype,"empty",void 0),M([(0,g.state)()],O.prototype,"next",void 0),O=M([(0,q.customElement)("w3m-activity-list")],O),a.s([],449104)}];

//# sourceMappingURL=ad994_appkit-scaffold-ui_dist_esm_src_partials_w3m-activity-list_index_28c88b0b.js.map