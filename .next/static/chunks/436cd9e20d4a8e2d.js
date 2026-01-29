(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,366350,e=>{"use strict";var t={exports:{}};function n(e){try{return JSON.stringify(e)}catch{return'"[Circular]"'}}let r=function(e,t,r){var a=r&&r.stringify||n;if("object"==typeof e&&null!==e){var i=t.length+1;if(1===i)return e;var s=Array(i);s[0]=a(e);for(var o=1;o<i;o++)s[o]=a(t[o]);return s.join(" ")}if("string"!=typeof e)return e;var l=t.length;if(0===l)return e;for(var p="",u=0,d=-1,y=e&&e.length||0,c=0;c<y;){if(37===e.charCodeAt(c)&&c+1<y){switch(d=d>-1?d:0,e.charCodeAt(c+1)){case 100:case 102:if(u>=l||null==t[u])break;d<c&&(p+=e.slice(d,c)),p+=Number(t[u]),d=c+2,c++;break;case 105:if(u>=l||null==t[u])break;d<c&&(p+=e.slice(d,c)),p+=Math.floor(Number(t[u])),d=c+2,c++;break;case 79:case 111:case 106:if(u>=l||void 0===t[u])break;d<c&&(p+=e.slice(d,c));var m=typeof t[u];if("string"===m){p+="'"+t[u]+"'",d=c+2,c++;break}if("function"===m){p+=t[u].name||"<anonymous>",d=c+2,c++;break}p+=a(t[u]),d=c+2,c++;break;case 115:if(u>=l)break;d<c&&(p+=e.slice(d,c)),p+=String(t[u]),d=c+2,c++;break;case 37:d<c&&(p+=e.slice(d,c)),p+="%",d=c+2,c++,u--}++u}++c}return -1===d?e:(d<y&&(p+=e.slice(d)),p)};t.exports=u;let a=function(){function e(e){return"u">typeof e&&e}try{return"u">typeof globalThis||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}().console||{};function i(e,t){return"silent"===e?1/0:t.levels.values[e]}let s=Symbol("pino.logFuncs"),o=Symbol("pino.hierarchy"),l={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function p(e,t){let n={logger:t,parent:e[o]};t[o]=n}function u(e){var t,n,r;let o,m,h;(e=e||{}).browser=e.browser||{};let b=e.browser.transmit;if(b&&"function"!=typeof b.send)throw Error("pino: transmit option must have a send function");let w=e.browser.write||a;e.browser.write&&(e.browser.asObject=!0);let x=e.serializers||{},T=(t=e.browser.serialize,Array.isArray(t)?t.filter(function(e){return"!stdSerializers.err"!==e}):!0===t&&Object.keys(x)),C=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(C=!1);let k=Object.keys(e.customLevels||{}),O=["error","fatal","warn","info","debug","trace"].concat(k);"function"==typeof w&&O.forEach(function(e){w[e]=w}),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");let z=e.level||"info",M=Object.create(w);M.log||(M.log=g),o={},O.forEach(e=>{o[e]=w[e]?w[e]:a[e]||a[l[e]||"log"]||g}),M[s]=o,p({},M),Object.defineProperty(M,"levelVal",{get:function(){return i(this.level,this)}}),Object.defineProperty(M,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,d(this,E,M,"error"),d(this,E,M,"fatal"),d(this,E,M,"warn"),d(this,E,M,"info"),d(this,E,M,"debug"),d(this,E,M,"trace"),k.forEach(e=>{d(this,E,M,e)})}});let E={transmit:b,serialize:T,asObject:e.browser.asObject,asObjectBindingsOnly:e.browser.asObjectBindingsOnly,formatters:e.browser.formatters,levels:O,timestamp:"function"==typeof(n=e).timestamp?n.timestamp:!1===n.timestamp?v:f,messageKey:e.messageKey||"msg",onChild:e.onChild||g};function L(t,n,r){if(!n)throw Error("missing bindings for child Pino");r=r||{},T&&n.serializers&&(r.serializers=n.serializers);let a=r.serializers;if(T&&a){var i=Object.assign({},x,a),s=!0===e.browser.serialize?Object.keys(i):T;delete n.serializers,y([n],s,i,this._stdErrSerialize)}function o(e){this._childLevel=(0|e._childLevel)+1,this.bindings=n,i&&(this.serializers=i,this._serialize=s),b&&(this._logEvent=c([].concat(e._logEvent.bindings,n)))}o.prototype=this;let l=new o(this);return p(this,l),l.child=function(...e){return L.call(this,t,...e)},l.level=r.level||this.level,t.onChild(l),l}return m=e.customLevels||{},M.levels={values:Object.assign({},u.levels.values,m),labels:Object.assign({},u.levels.labels,(h={},Object.keys(r=m).forEach(function(e){h[r[e]]=e}),h))},M.level=z,M.isLevelEnabled=function(e){return!!this.levels.values[e]&&this.levels.values[e]>=this.levels.values[this.level]},M.setMaxListeners=M.getMaxListeners=M.emit=M.addListener=M.on=M.prependListener=M.once=M.prependOnceListener=M.removeListener=M.removeAllListeners=M.listeners=M.listenerCount=M.eventNames=M.write=M.flush=g,M.serializers=x,M._serialize=T,M._stdErrSerialize=C,M.child=function(...e){return L.call(this,E,...e)},b&&(M._logEvent=c()),M}function d(e,t,n,l){var p,u,d,m,h,b,v;if(Object.defineProperty(e,l,{value:i(e.level,n)>i(l,n)?g:n[s][l],writable:!0,enumerable:!0,configurable:!0}),e[l]===g){if(!t.transmit)return;let r=i(t.transmit.level||e.level,n);if(i(l,n)<r)return}e[l]=(p=e,u=t,d=n,m=l,h=p[s][m],function(){let e=u.timestamp(),t=Array(arguments.length),n=Object.getPrototypeOf&&Object.getPrototypeOf(this)===a?a:this;for(var s=0;s<t.length;s++)t[s]=arguments[s];var o=!1;if(u.serialize&&(y(t,this._serialize,this.serializers,this._stdErrSerialize),o=!0),u.asObject||u.formatters?h.call(n,...function(e,t,n,a,i){let{level:s,log:o=e=>e}=i.formatters||{},l=n.slice(),p=l[0],u={},d=(0|e._childLevel)+1;if((d<1&&(d=1),a&&(u.time=a),s)?Object.assign(u,s(t,e.levels.values[t])):u.level=e.levels.values[t],i.asObjectBindingsOnly){if(null!==p&&"object"==typeof p)for(;d--&&"object"==typeof l[0];)Object.assign(u,l.shift());return[o(u),...l]}if(null!==p&&"object"==typeof p){for(;d--&&"object"==typeof l[0];)Object.assign(u,l.shift());p=l.length?r(l.shift(),l):void 0}else"string"==typeof p&&(p=r(l.shift(),l));return void 0!==p&&(u[i.messageKey]=p),[o(u)]}(this,m,t,e,u)):h.apply(n,t),u.transmit){let n=u.transmit.level||p._level,r=i(n,d),a=i(m,d);if(a<r)return;!function(e,t,n,r=!1){let a=t.send,i=t.ts,s=t.methodLevel,o=t.methodValue,l=t.val,p=e._logEvent.bindings;r||y(n,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=i,e._logEvent.messages=n.filter(function(e){return -1===p.indexOf(e)}),e._logEvent.level.label=s,e._logEvent.level.value=o,a(s,e._logEvent,l),e._logEvent=c(p)}(this,{ts:e,methodLevel:m,methodValue:a,transmitLevel:n,transmitValue:d.levels.values[u.transmit.level||p._level],send:u.transmit.send,val:i(p._level,d)},t,o)}});let f=function(e){let t=[];e.bindings&&t.push(e.bindings);let n=e[o];for(;n.parent;)(n=n.parent).logger.bindings&&t.push(n.logger.bindings);return t.reverse()}(e);0!==f.length&&(e[l]=(b=f,v=e[l],function(){return v.apply(this,[...b,...arguments])}))}function y(e,t,n,r){for(let a in e)if(r&&e[a]instanceof Error)e[a]=u.stdSerializers.err(e[a]);else if("object"==typeof e[a]&&!Array.isArray(e[a])&&t)for(let r in e[a])t.indexOf(r)>-1&&r in n&&(e[a][r]=n[r](e[a][r]))}function c(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function m(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let n in e)void 0===t[n]&&(t[n]=e[n]);return t}function h(){return{}}function b(e){return e}function g(){}function v(){return!1}function f(){return Date.now()}u.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},u.stdSerializers={mapHttpRequest:h,mapHttpResponse:h,wrapRequestSerializer:b,wrapResponseSerializer:b,wrapErrorSerializer:b,req:h,res:h,err:m,errWithCause:m},u.stdTimeFunctions=Object.assign({},{nullTime:v,epochTime:f,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),t.exports.default=u,t.exports.pino=u;let w="custom_context";var x=Object.defineProperty,T=(e,t,n)=>{let r;return(r="symbol"!=typeof t?t+"":t)in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n};class C{constructor(e){T(this,"nodeValue"),T(this,"sizeInBytes"),T(this,"next"),this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class k{constructor(e){T(this,"lengthInNodes"),T(this,"sizeInBytes"),T(this,"head"),T(this,"tail"),T(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){let t=new C(e);if(t.size>this.maxSizeInBytes)throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?this.tail&&(this.tail.next=t):this.head=t,this.tail=t,this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;let e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){let e=[],t=this.head;for(;null!==t;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};let t=e.value;return e=e.next,{done:!1,value:t}}}}}function O(e){return"string"==typeof e?e:JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString()+"n":t)||""}var z=Object.defineProperty,M=(e,t,n)=>{let r;return(r="symbol"!=typeof t?t+"":t)in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n};class E{constructor(e,n=1024e3){M(this,"logs"),M(this,"level"),M(this,"levelValue"),M(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=e??"error",this.levelValue=t.exports.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=n,this.logs=new k(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,n){n===t.exports.levels.values.error?console.error(e):n===t.exports.levels.values.warn?console.warn(e):n===t.exports.levels.values.debug?console.debug(e):n===t.exports.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(O({timestamp:new Date().toISOString(),log:e}));let t="string"==typeof e?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new k(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){let t=this.getLogArray();return t.push(O({extraMetadata:e})),new Blob(t,{type:"application/json"})}}var L=Object.defineProperty;class ${constructor(e,t=1024e3){((e,t,n)=>{let r;return(r="symbol"!=typeof t?t+"":t)in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n})(this,"baseChunkLogger"),this.baseChunkLogger=new E(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){let t=URL.createObjectURL(this.logsToBlob(e)),n=document.createElement("a");n.href=t,n.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(t)}}var A=Object.defineProperty;class S{constructor(e,t=1024e3){((e,t,n)=>{let r;return(r="symbol"!=typeof t?t+"":t)in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n})(this,"baseChunkLogger"),this.baseChunkLogger=new E(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var I=Object.defineProperty,j=Object.defineProperties,_=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))B.call(t,n)&&D(e,n,t[n]);if(R)for(var n of R(t))P.call(t,n)&&D(e,n,t[n]);return e};function V(e){return j(N({},e),_({level:e?.level||"info"}))}function F(e,t=w){return e[t]||""}function W(e,t,n=w){let r=function(e,t,n=w){let r=F(e,n);return r.trim()?`${r}/${t}`:t}(e,t,n);return function(e,t,n=w){return e[n]=t,e}(e.child({context:r}),r,n)}function U(e){var n,r,a,i,s,o,l;let p,u,d,y,c,m;if("u">typeof e.loggerOverride&&"string"!=typeof e.loggerOverride)return{logger:e.loggerOverride,chunkLoggerController:null};let h=j(N({},e.opts),_({level:"string"==typeof e.loggerOverride?e.loggerOverride:null==(n=e.opts)?void 0:n.level}));return"u">typeof window?(d=new $(null==(a=(r=j(N({},e),_({opts:h}))).opts)?void 0:a.level,r.maxSizeInBytes),{logger:t.exports((p=N({},r.opts),u={level:"trace",browser:j(N({},null==(i=r.opts)?void 0:i.browser),_({write:e=>d.write(e)}))},j(p,_(u)))),chunkLoggerController:d}):(m=new S(null==(o=(s=j(N({},e),_({opts:h}))).opts)?void 0:o.level,s.maxSizeInBytes),{logger:t.exports((y=N({},s.opts),c={level:"trace",browser:j(N({},null==(l=s.opts)?void 0:l.browser),_({write:e=>m.write(e)}))},j(y,_(c))),m),chunkLoggerController:m})}e.s(["generateChildLogger",()=>W,"generatePlatformLogger",()=>U,"getDefaultLoggerOptions",()=>V,"getLoggerContext",()=>F])},542904,e=>{"use strict";var t=e.i(247167);let n={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};e.s(["ConstantsUtil",0,n])},443452,e=>{"use strict";e.i(852634),e.s([])},752012,e=>{"use strict";let t=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockTimestamp",outputs:[{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"}],n=[{name:"query",type:"function",stateMutability:"view",inputs:[{type:"tuple[]",name:"queries",components:[{type:"address",name:"sender"},{type:"string[]",name:"urls"},{type:"bytes",name:"data"}]}],outputs:[{type:"bool[]",name:"failures"},{type:"bytes[]",name:"responses"}]},{name:"HttpError",type:"error",inputs:[{type:"uint16",name:"status"},{type:"string",name:"message"}]}],r=[{inputs:[{name:"dns",type:"bytes"}],name:"DNSDecodingFailed",type:"error"},{inputs:[{name:"ens",type:"string"}],name:"DNSEncodingFailed",type:"error"},{inputs:[],name:"EmptyAddress",type:"error"},{inputs:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"HttpError",type:"error"},{inputs:[],name:"InvalidBatchGatewayResponse",type:"error"},{inputs:[{name:"errorData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{name:"name",type:"bytes"},{name:"resolver",type:"address"}],name:"ResolverNotContract",type:"error"},{inputs:[{name:"name",type:"bytes"}],name:"ResolverNotFound",type:"error"},{inputs:[{name:"primary",type:"string"},{name:"primaryAddress",type:"bytes"}],name:"ReverseAddressMismatch",type:"error"},{inputs:[{internalType:"bytes4",name:"selector",type:"bytes4"}],name:"UnsupportedResolverProfile",type:"error"}],a=[...r,{name:"resolveWithGateways",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],i=[...r,{name:"reverseWithGateways",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"uint256",name:"coinType"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolver"},{type:"address",name:"reverseResolver"}]}];e.s(["addressResolverAbi",0,[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],"batchGatewayAbi",0,n,"erc1155Abi",0,[{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],"erc1271Abi",0,[{name:"isValidSignature",type:"function",stateMutability:"view",inputs:[{name:"hash",type:"bytes32"},{name:"signature",type:"bytes"}],outputs:[{name:"",type:"bytes4"}]}],"erc20Abi",0,[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],"erc20Abi_bytes32",0,[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],"erc4626Abi",0,[{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"sender",type:"address"},{indexed:!0,name:"receiver",type:"address"},{indexed:!1,name:"assets",type:"uint256"},{indexed:!1,name:"shares",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"sender",type:"address"},{indexed:!0,name:"receiver",type:"address"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"assets",type:"uint256"},{indexed:!1,name:"shares",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"asset",outputs:[{name:"assetTokenAddress",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{name:"account",type:"address"}],name:"balanceOf",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"convertToAssets",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"convertToShares",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"},{name:"receiver",type:"address"}],name:"deposit",outputs:[{name:"shares",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"caller",type:"address"}],name:"maxDeposit",outputs:[{name:"maxAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"caller",type:"address"}],name:"maxMint",outputs:[{name:"maxShares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"owner",type:"address"}],name:"maxRedeem",outputs:[{name:"maxShares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"owner",type:"address"}],name:"maxWithdraw",outputs:[{name:"maxAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"},{name:"receiver",type:"address"}],name:"mint",outputs:[{name:"assets",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"previewDeposit",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"previewMint",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"previewRedeem",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"previewWithdraw",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"},{name:"receiver",type:"address"},{name:"owner",type:"address"}],name:"redeem",outputs:[{name:"assets",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalAssets",outputs:[{name:"totalManagedAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"to",type:"address"},{name:"amount",type:"uint256"}],name:"transfer",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"assets",type:"uint256"},{name:"receiver",type:"address"},{name:"owner",type:"address"}],name:"withdraw",outputs:[{name:"shares",type:"uint256"}],stateMutability:"nonpayable",type:"function"}],"erc6492SignatureValidatorAbi",0,[{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function",name:"isValidSig"}],"erc721Abi",0,[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}]},{type:"event",name:"ApprovalForAll",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"payable",inputs:[{name:"spender",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"getApproved",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{type:"address"}]},{type:"function",name:"isApprovedForAll",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],outputs:[{type:"bool"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"ownerOf",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"owner",type:"address"}]},{type:"function",name:"safeTransferFrom",stateMutability:"payable",inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]},{type:"function",name:"safeTransferFrom",stateMutability:"nonpayable",inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"id",type:"uint256"},{name:"data",type:"bytes"}],outputs:[]},{type:"function",name:"setApprovalForAll",stateMutability:"nonpayable",inputs:[{name:"operator",type:"address"},{name:"approved",type:"bool"}],outputs:[]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"tokenByIndex",stateMutability:"view",inputs:[{name:"index",type:"uint256"}],outputs:[{type:"uint256"}]},{type:"function",name:"tokenByIndex",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],outputs:[{name:"tokenId",type:"uint256"}]},{type:"function",name:"tokenURI",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transferFrom",stateMutability:"payable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]}],"multicall3Abi",0,t,"textResolverAbi",0,[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],"universalResolverResolveAbi",0,a,"universalResolverReverseAbi",0,i])},644616,e=>{"use strict";function t(e,t){let n=e.toString(),r=n.startsWith("-");r&&(n=n.slice(1));let[a,i]=[(n=n.padStart(t,"0")).slice(0,n.length-t),n.slice(n.length-t)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${a||"0"}${i?`.${i}`:""}`}e.s(["formatUnits",()=>t])},234051,829389,e=>{"use strict";var t=e.i(654479);let n=e=>e??t.nothing;e.s(["ifDefined",()=>n],829389),e.s([],234051)},864380,e=>{"use strict";e.i(812207);var t=e.i(604148),n=e.i(654479);e.i(374576);var r=e.i(120119);e.i(234051);var a=e.i(829389),i=e.i(459088),s=e.i(645975),o=e.i(162611);let l=o.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var p=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){let e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return(this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon)?n.html`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?n.html`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:n.html`<img src=${(0,a.ifDefined)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};u.styles=[i.resetStyles,l],p([(0,r.property)()],u.prototype,"src",void 0),p([(0,r.property)()],u.prototype,"logo",void 0),p([(0,r.property)()],u.prototype,"icon",void 0),p([(0,r.property)()],u.prototype,"iconColor",void 0),p([(0,r.property)()],u.prototype,"alt",void 0),p([(0,r.property)()],u.prototype,"size",void 0),p([(0,r.property)({type:Boolean})],u.prototype,"boxed",void 0),p([(0,r.property)({type:Boolean})],u.prototype,"rounded",void 0),p([(0,r.property)({type:Boolean})],u.prototype,"fullSize",void 0),u=p([(0,s.customElement)("wui-image")],u),e.s([],864380)},534420,624947,e=>{"use strict";e.i(812207);var t=e.i(604148),n=e.i(654479);e.i(374576);var r=e.i(120119);e.i(852634),e.i(383227),e.i(839009);var a=e.i(459088),i=e.i(645975),s=e.i(162611);let o=s.css`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var l=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let p={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},u={lg:"md",md:"md",sm:"sm"},d=class extends t.LitElement{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let e=this.textVariant??p[this.size];return n.html`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let e=u[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return n.html`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};d.styles=[a.resetStyles,a.elementStyles,o],l([(0,r.property)()],d.prototype,"size",void 0),l([(0,r.property)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,r.property)({type:Boolean})],d.prototype,"fullWidth",void 0),l([(0,r.property)({type:Boolean})],d.prototype,"loading",void 0),l([(0,r.property)()],d.prototype,"variant",void 0),l([(0,r.property)()],d.prototype,"textVariant",void 0),d=l([(0,i.customElement)("wui-button")],d),e.s([],624947),e.s([],534420)},912190,e=>{"use strict";e.i(812207);var t=e.i(604148),n=e.i(654479);e.i(374576);var r=e.i(120119);e.i(234051);var a=e.i(829389);e.i(852634);var i=e.i(459088),s=e.i(645975),o=e.i(162611);let l=o.css`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var p=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,n.html`
      <wui-icon size=${(0,a.ifDefined)(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};u.styles=[i.resetStyles,i.elementStyles,l],p([(0,r.property)()],u.prototype,"icon",void 0),p([(0,r.property)()],u.prototype,"size",void 0),p([(0,r.property)()],u.prototype,"padding",void 0),p([(0,r.property)()],u.prototype,"color",void 0),u=p([(0,s.customElement)("wui-icon-box")],u),e.s([],912190)},383227,e=>{"use strict";e.i(812207);var t=e.i(604148),n=e.i(654479);e.i(374576);var r=e.i(120119),a=e.i(162611),i=e.i(459088),s=e.i(645975),o=e.i(592057);let l=o.css`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var p=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){let e={primary:a.vars.tokens.theme.textPrimary,secondary:a.vars.tokens.theme.textSecondary,tertiary:a.vars.tokens.theme.textTertiary,invert:a.vars.tokens.theme.textInvert,error:a.vars.tokens.core.textError,warning:a.vars.tokens.core.textWarning,"accent-primary":a.vars.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${"inherit"===this.color?"inherit":e[this.color]};
      `,this.dataset.size=this.size,n.html`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};u.styles=[i.resetStyles,l],p([(0,r.property)()],u.prototype,"color",void 0),p([(0,r.property)()],u.prototype,"size",void 0),u=p([(0,s.customElement)("wui-loading-spinner")],u),e.s([],383227)},864576,e=>{"use strict";e.i(812207);var t=e.i(604148),n=e.i(654479);e.i(374576);var r=e.i(120119),a=e.i(645975),i=e.i(162611);let s=i.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundPrimary} 0%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 50%,
      ${({tokens:e})=>e.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;var o=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let l=class extends t.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",n.html`<slot></slot>`}};l.styles=[s],o([(0,r.property)()],l.prototype,"width",void 0),o([(0,r.property)()],l.prototype,"height",void 0),o([(0,r.property)()],l.prototype,"variant",void 0),o([(0,r.property)({type:Boolean})],l.prototype,"rounded",void 0),l=o([(0,a.customElement)("wui-shimmer")],l),e.s([],864576)},780313,e=>{"use strict";e.i(864576),e.s([])},851887,e=>{"use strict";var t=e.i(365801),n=e.i(742710),r=e.i(401564),a=e.i(592279),i=e.i(82283);let s=(0,t.proxy)({message:"",variant:"info",open:!1}),o=(0,a.withErrorBoundary)({state:s,subscribeKey:(e,t)=>(0,n.subscribeKey)(s,e,t),open(e,t){let{debug:n}=i.OptionsController.state,{code:a,displayMessage:o,debugMessage:l}=e;if(o&&n&&(s.message=o,s.variant=t,s.open=!0),l){if(!r.ConstantsUtil.IS_DEVELOPMENT)return;let e="function"==typeof l?l():l,n=a?{code:a}:void 0;"error"===t?console.error(e,n):"warning"===t?console.warn(e,n):console.info(e,n)}},warn(e,t,n){s.open=!0,s.message=e,s.variant="warning",t&&console.warn(t,n)},close(){s.open=!1,s.message="",s.variant="info"}});e.s(["AlertController",0,o])}]);