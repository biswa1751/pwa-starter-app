(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=window,Vt=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),re=new WeakMap;let Te=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Vt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=re.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&re.set(e,t))}return t}toString(){return this.cssText}};const ar=o=>new Te(typeof o=="string"?o:o+"",void 0,jt),vt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new Te(e,o,jt)},lr=(o,t)=>{Vt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),s=lt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)})},oe=Vt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ar(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wt;const ht=window,se=ht.trustedTypes,cr=se?se.emptyScript:"",ie=ht.reactiveElementPolyfillSupport,Tt={toAttribute(o,t){switch(t){case Boolean:o=o?cr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ne=(o,t)=>t!==o&&(t==t||o==o),At={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:Ne},Nt="finalized";let N=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const s=this._$Ep(r,e);s!==void 0&&(this._$Ev.set(s,r),t.push(s))}),t}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||At}static finalize(){if(this.hasOwnProperty(Nt))return!1;this[Nt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of r)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(oe(s))}else t!==void 0&&e.push(oe(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return lr(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=At){var s;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const n=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Tt).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Ev.get(t);if(i!==void 0&&this._$El!==i){const n=s.getPropertyOptions(i),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Tt;this._$El=i,this[i]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let s=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Ne)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};N[Nt]=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},ie?.({ReactiveElement:N}),((wt=ht.reactiveElementVersions)!==null&&wt!==void 0?wt:ht.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Et;const dt=window,B=dt.trustedTypes,ne=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,Mt="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,Me="?"+w,hr=`<${Me}>`,L=document,Y=()=>L.createComment(""),G=o=>o===null||typeof o!="object"&&typeof o!="function",ze=Array.isArray,dr=o=>ze(o)||typeof o?.[Symbol.iterator]=="function",xt=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,le=/>/g,x=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,he=/"/g,Be=/^(?:script|style|textarea|title)$/i,ur=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),H=ur(1),I=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),de=new WeakMap,k=L.createTreeWalker(L,129,null,!1);function He(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ne!==void 0?ne.createHTML(t):t}const pr=(o,t)=>{const e=o.length-1,r=[];let s,i=t===2?"<svg>":"",n=j;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,b=0;for(;b<a.length&&(n.lastIndex=b,d=n.exec(a),d!==null);)b=n.lastIndex,n===j?d[1]==="!--"?n=ae:d[1]!==void 0?n=le:d[2]!==void 0?(Be.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=x):d[3]!==void 0&&(n=x):n===x?d[0]===">"?(n=s??j,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?x:d[3]==='"'?he:ce):n===he||n===ce?n=x:n===ae||n===le?n=j:(n=x,s=void 0);const v=n===x&&o[c+1].startsWith("/>")?" ":"";i+=n===j?a+hr:h>=0?(r.push(l),a.slice(0,h)+Mt+a.slice(h)+w+v):a+w+(h===-2?(r.push(void 0),c):v)}return[He(o,i+(o[e]||"<?>")+(t===2?"</svg>":"")),r]};let zt=class Ie{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,n=0;const c=t.length-1,a=this.parts,[l,d]=pr(t,e);if(this.el=Ie.createElement(l,r),k.currentNode=this.el.content,e===2){const h=this.el.content,b=h.firstChild;b.remove(),h.append(...b.childNodes)}for(;(s=k.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const b of s.getAttributeNames())if(b.endsWith(Mt)||b.startsWith(w)){const v=d[n++];if(h.push(b),v!==void 0){const T=s.getAttribute(v.toLowerCase()+Mt).split(w),it=/([.?@])?(.*)/.exec(v);a.push({type:1,index:i,name:it[2],strings:T,ctor:it[1]==="."?br:it[1]==="?"?gr:it[1]==="@"?mr:gt})}else a.push({type:6,index:i})}for(const b of h)s.removeAttribute(b)}if(Be.test(s.tagName)){const h=s.textContent.split(w),b=h.length-1;if(b>0){s.textContent=B?B.emptyScript:"";for(let v=0;v<b;v++)s.append(h[v],Y()),k.nextNode(),a.push({type:2,index:++i});s.append(h[b],Y())}}}else if(s.nodeType===8)if(s.data===Me)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(w,h+1))!==-1;)a.push({type:7,index:i}),h+=w.length-1}i++}}static createElement(t,e){const r=L.createElement("template");return r.innerHTML=t,r}};function D(o,t,e=o,r){var s,i,n,c;if(t===I)return t;let a=r!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[r]:e._$Cl;const l=G(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((i=a?._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,r)),r!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=D(o,a._$AS(o,t.values),a,r)),t}let fr=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:r},parts:s}=this._$AD,i=((e=t?.creationScope)!==null&&e!==void 0?e:L).importNode(r,!0);k.currentNode=i;let n=k.nextNode(),c=0,a=0,l=s[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Ft(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new $r(n,this,t)),this._$AV.push(d),l=s[++a]}c!==l?.index&&(n=k.nextNode(),c++)}return k.currentNode=L,i}v(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Ft=class De{constructor(t,e,r,s){var i;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cp=(i=s?.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),G(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):dr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==m&&G(this._$AH)?this._$AA.nextSibling.data=t:this.$(L.createTextNode(t)),this._$AH=t}g(t){var e;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=zt.createElement(He(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.v(r);else{const n=new fr(i,this),c=n.u(this.options);n.v(r),this.$(c),this._$AH=n}}_$AC(t){let e=de.get(t.strings);return e===void 0&&de.set(t.strings,e=new zt(t)),e}T(t){ze(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new De(this.k(Y()),this.k(Y()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},gt=class{constructor(t,e,r,s,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,s){const i=this.strings;let n=!1;if(i===void 0)t=D(this,t,e,0),n=!G(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const c=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=D(this,c[r+a],e,a),l===I&&(l=this._$AH[a]),n||(n=!G(l)||l!==this._$AH[a]),l===m?t=m:t!==m&&(t+=(l??"")+i[a+1]),this._$AH[a]=l}n&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},br=class extends gt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}};const vr=B?B.emptyScript:"";let gr=class extends gt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==m?this.element.setAttribute(this.name,vr):this.element.removeAttribute(this.name)}};class mr extends gt{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=D(this,t,e,0))!==null&&r!==void 0?r:m)===I)return;const s=this._$AH,i=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}let $r=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};const ue=dt.litHtmlPolyfillSupport;ue?.(zt,Ft),((Et=dt.litHtmlVersions)!==null&&Et!==void 0?Et:dt.litHtmlVersions=[]).push("2.8.0");const _r=(o,t,e)=>{var r,s;const i=(r=e?.renderBefore)!==null&&r!==void 0?r:t;let n=i._$litPart$;if(n===void 0){const c=(s=e?.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=n=new Ft(t.insertBefore(Y(),c),c,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var St,Ct;let U=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_r(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return I}};U.finalized=!0,U._$litElement$=!0,(St=globalThis.litElementHydrateSupport)===null||St===void 0||St.call(globalThis,{LitElement:U});const pe=globalThis.litElementPolyfillSupport;pe?.({LitElement:U});((Ct=globalThis.litElementVersions)!==null&&Ct!==void 0?Ct:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=o=>t=>typeof t=="function"?((e,r)=>(customElements.define(e,r),r))(o,t):((e,r)=>{const{kind:s,elements:i}=r;return{kind:s,elements:i,finisher(n){customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},wr=(o,t,e)=>{t.constructor.createProperty(e,o)};function qt(o){return(t,e)=>e!==void 0?wr(o,t,e):yr(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kt;((kt=window.HTMLSlotElement)===null||kt===void 0?void 0:kt.prototype.assignedElements)!=null;const Ar="modulepreload",Er=function(o){return"/"+o},fe={},Ve=function(t,e,r){if(!e||e.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=Er(i),i in fe)return;fe[i]=!0;const n=i.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===i&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":Ar,n||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),n)return new Promise((d,h)=>{l.addEventListener("load",d),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},Kt=Symbol.for("app-tools::log::1.x");globalThis[Kt]={setDebug:xr,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function xr(o){globalThis[Kt].debug=!!o}function Sr(o,t){globalThis[Kt].debug&&(console.groupCollapsed(`[app-tools] ${o}`),t&&console.log(t),console.groupEnd())}function Cr(o){return(t,e)=>{Sr(`${o}: ${t}`,e)}}const y=Cr("router");class kr extends Event{constructor(t){super("route-changed"),this.context=t}}class Pr extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(e=>({...e,urlPattern:new URLPattern({pathname:e.path,baseURL:window.location.href,search:"*",hash:"*"})})),y("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href))}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return y(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const e of this.routes){const r=e.urlPattern.exec(t);if(r){const{title:s}=e,i=Object.fromEntries(new URLSearchParams(t.search)),n=r?.pathname?.groups??{};return this.context={url:t,title:typeof s=="function"?s({params:n,query:i,url:t}):s,params:n,query:i},e}}return y(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new kr(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(i=>i.tagName==="A");if(!e||!e.href)return;const r=new URL(e.href);if(this.url.href===r.href||r.host!==window.location.host||e.hasAttribute("download")||e.href.includes("mailto:"))return;const s=e.getAttribute("target");s&&s!==""&&s!=="_self"||(t.preventDefault(),this.navigate(r))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,e={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let r=this._matchRoute(t)||this._matchRoute(this.fallback);y(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(r);for(const i of s)try{const n=await i?.shouldNavigate?.(this.context);n&&(await n.condition()||(t=new URL(n.redirect,this.baseUrl),r=this._matchRoute(t)||this._matchRoute(this.fallback),s=this._collectPlugins(r),y("Redirecting",{context:this.context,route:this.route})))}catch(n){throw y(`Plugin "${i.name}" error on shouldNavigate hook`,n),n}if(this.route=r,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const i of s)try{await i?.beforeNavigation?.(this.context)}catch(n){throw y(`Plugin "${i.name}" error on beforeNavigation hook`,n),n}e.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const i of s)try{await i?.afterNavigation?.(this.context)}catch(n){throw y(`Plugin "${i.name}" error on afterNavigation hook`,n),n}}}function Ur(o){return{name:"lazy",beforeNavigation:()=>{o()}}}globalThis.URLPattern||await Ve(()=>import("./index-d961e0b8.js"),[]);const Lr="/",be=new Pr({routes:[{path:ut(),title:"Home",render:()=>H`<app-home></app-home>`},{path:ut("about"),title:"About",plugins:[Ur(()=>Ve(()=>import("./app-about-681b5e68.js"),[]))],render:()=>H`<app-about></app-about>`}]});function ut(o){var t=Lr;return o&&(t=t+o),t}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis,Zt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),ve=new WeakMap;let je=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Zt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=ve.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ve.set(e,t))}return t}toString(){return this.cssText}};const Or=o=>new je(typeof o=="string"?o:o+"",void 0,Jt),rt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new je(e,o,Jt)},Rr=(o,t)=>{if(Zt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=ct.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)}},ge=Zt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Or(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tr,defineProperty:Nr,getOwnPropertyDescriptor:Mr,getOwnPropertyNames:zr,getOwnPropertySymbols:Br,getPrototypeOf:Hr}=Object,mt=globalThis,me=mt.trustedTypes,Ir=me?me.emptyScript:"",Dr=mt.reactiveElementPolyfillSupport,Z=(o,t)=>o,pt={toAttribute(o,t){switch(t){case Boolean:o=o?Ir:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Yt=(o,t)=>!Tr(o,t),$e={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:Yt};Symbol.metadata??=Symbol("metadata"),mt.litPropertyMetadata??=new WeakMap;class M extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$e){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Nr(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=Mr(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s?.call(this)},set(n){const c=s?.call(this);i.call(this,n),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$e}static _$Ei(){if(this.hasOwnProperty(Z("elementProperties")))return;const t=Hr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){const e=this.properties,r=[...zr(e),...Br(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(ge(s))}else t!==void 0&&e.push(ge(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:pt).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:pt;this._$Em=s,this[s]=n.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,r,s=!1,i){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Yt)(s?i:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(t){}firstUpdated(t){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[Z("elementProperties")]=new Map,M[Z("finalized")]=new Map,Dr?.({ReactiveElement:M}),(mt.reactiveElementVersions??=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=globalThis,ft=Gt.trustedTypes,_e=ft?ft.createPolicy("lit-html",{createHTML:o=>o}):void 0,Fe="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,We="?"+A,Vr=`<${We}>`,O=document,X=()=>O.createComment(""),Q=o=>o===null||typeof o!="object"&&typeof o!="function",qe=Array.isArray,jr=o=>qe(o)||typeof o?.[Symbol.iterator]=="function",Pt=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,we=/>/g,S=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Ee=/"/g,Ke=/^(?:script|style|textarea|title)$/i,Fr=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),$t=Fr(1),R=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),xe=new WeakMap,P=O.createTreeWalker(O,129);function Ze(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(t):t}const Wr=(o,t)=>{const e=o.length-1,r=[];let s,i=t===2?"<svg>":"",n=F;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,b=0;for(;b<a.length&&(n.lastIndex=b,d=n.exec(a),d!==null);)b=n.lastIndex,n===F?d[1]==="!--"?n=ye:d[1]!==void 0?n=we:d[2]!==void 0?(Ke.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=S):d[3]!==void 0&&(n=S):n===S?d[0]===">"?(n=s??F,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?S:d[3]==='"'?Ee:Ae):n===Ee||n===Ae?n=S:n===ye||n===we?n=F:(n=S,s=void 0);const v=n===S&&o[c+1].startsWith("/>")?" ":"";i+=n===F?a+Vr:h>=0?(r.push(l),a.slice(0,h)+Fe+a.slice(h)+A+v):a+A+(h===-2?c:v)}return[Ze(o,i+(o[e]||"<?>")+(t===2?"</svg>":"")),r]};class tt{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,n=0;const c=t.length-1,a=this.parts,[l,d]=Wr(t,e);if(this.el=tt.createElement(l,r),P.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=P.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Fe)){const b=d[n++],v=s.getAttribute(h).split(A),T=/([.?@])?(.*)/.exec(b);a.push({type:1,index:i,name:T[2],strings:v,ctor:T[1]==="."?Kr:T[1]==="?"?Zr:T[1]==="@"?Jr:_t}),s.removeAttribute(h)}else h.startsWith(A)&&(a.push({type:6,index:i}),s.removeAttribute(h));if(Ke.test(s.tagName)){const h=s.textContent.split(A),b=h.length-1;if(b>0){s.textContent=ft?ft.emptyScript:"";for(let v=0;v<b;v++)s.append(h[v],X()),P.nextNode(),a.push({type:2,index:++i});s.append(h[b],X())}}}else if(s.nodeType===8)if(s.data===We)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(A,h+1))!==-1;)a.push({type:7,index:i}),h+=A.length-1}i++}}static createElement(t,e){const r=O.createElement("template");return r.innerHTML=t,r}}function V(o,t,e=o,r){if(t===R)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl;const i=Q(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=V(o,s._$AS(o,t.values),s,r)),t}class qr{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);P.currentNode=s;let i=P.nextNode(),n=0,c=0,a=r[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new ot(i,i.nextSibling,this,t):a.type===1?l=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(l=new Yr(i,this,t)),this._$AV.push(l),a=r[++c]}n!==a?.index&&(i=P.nextNode(),n++)}return P.currentNode=O,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),Q(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):jr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=tt.createElement(Ze(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{const i=new qr(s,this),n=i.u(this.options);i.p(e),this.$(n),this._$AH=i}}_$AC(t){let e=xe.get(t.strings);return e===void 0&&xe.set(t.strings,e=new tt(t)),e}T(t){qe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new ot(this.k(X()),this.k(X()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class _t{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,e=this,r,s){const i=this.strings;let n=!1;if(i===void 0)t=V(this,t,e,0),n=!Q(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const c=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=V(this,c[r+a],e,a),l===R&&(l=this._$AH[a]),n||=!Q(l)||l!==this._$AH[a],l===g?t=g:t!==g&&(t+=(l??"")+i[a+1]),this._$AH[a]=l}n&&!s&&this.O(t)}O(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Kr extends _t{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===g?void 0:t}}class Zr extends _t{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Jr extends _t{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??g)===R)return;const r=this._$AH,s=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==g&&(r===g||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Yr{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Gr=Gt.litHtmlPolyfillSupport;Gr?.(tt,ot),(Gt.litHtmlVersions??=[]).push("3.0.2");const Xr=(o,t,e)=>{const r=e?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=e?.renderBefore??null;r._$litPart$=s=new ot(t.insertBefore(X(),i),i,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let J=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};J._$litElement$=!0,J.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:J});const Qr=globalThis.litElementPolyfillSupport;Qr?.({LitElement:J});(globalThis.litElementVersions??=[]).push("4.0.1");var yt=rt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,to=rt`
  ${yt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Je=class{constructor(o,...t){this.slotNames=[],this.handleSlotChange=e=>{const r=e.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=o).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent.trim()!=="")return!0;if(o.nodeType===o.ELEMENT_NODE){const t=o;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(o){return this.host.querySelector(`:scope > [slot="${o}"]`)!==null}test(o){return o==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(o)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Ye=Object.defineProperty,eo=Object.defineProperties,ro=Object.getOwnPropertyDescriptor,oo=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,so=Object.prototype.hasOwnProperty,io=Object.prototype.propertyIsEnumerable,Ce=(o,t,e)=>t in o?Ye(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,st=(o,t)=>{for(var e in t||(t={}))so.call(t,e)&&Ce(o,e,t[e]);if(Se)for(var e of Se(t))io.call(t,e)&&Ce(o,e,t[e]);return o},Ge=(o,t)=>eo(o,oo(t)),u=(o,t,e,r)=>{for(var s=r>1?void 0:r?ro(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ye(t,e,s),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:Yt},ao=(o=no,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(e.name,o),r==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,o)},init(c){return c!==void 0&&this.C(n,void 0,o),c}}}if(r==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+r)};function p(o){return(t,e)=>typeof e=="object"?ao(o,t,e):((r,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,i):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xt(o){return p({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lo(o,t){return(e,r,s)=>{const i=n=>n.renderRoot?.querySelector(o)??null;if(t){const{get:n,set:c}=typeof r=="object"?e:s??(()=>{const a=Symbol();return{get(){return this[a]},set(l){this[a]=l}}})();return ke(e,r,{get(){if(t){let a=n.call(this);return a===void 0&&(a=i(this),c.call(this,a)),a}return i(this)}})}return ke(e,r,{get(){return i(this)}})}}var E=class extends J{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([o,t])=>{this.constructor.define(o,t)})}emit(o,t){const e=new CustomEvent(o,st({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(o,t=this,e={}){const r=customElements.get(o);if(!r){customElements.define(o,class extends t{},e);return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${o}>${s}, but <${o}>${i} has already been registered.`)}};E.version="2.11.2";E.dependencies={};u([p()],E.prototype,"dir",2);u([p()],E.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ho=o=>(...t)=>({_$litDirective$:o,values:t});class uo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=ho(class extends uo{constructor(o){if(super(o),o.type!==co.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}const e=o.element.classList;for(const r of this.it)r in t||(e.remove(r),this.it.delete(r));for(const r in t){const s=!!t[r];s===this.it.has(r)||this.st?.has(r)||(s?(e.add(r),this.it.add(r)):(e.remove(r),this.it.delete(r)))}return R}});var Qe=class extends E{constructor(){super(...arguments),this.hasSlotController=new Je(this,"footer","header","image")}render(){return $t`
      <div
        part="base"
        class=${Xe({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Qe.styles=to;Qe.define("sl-card");var po=rt`
  ${yt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;const Bt=new Set,fo=new MutationObserver(rr),z=new Map;let tr=document.documentElement.dir||"ltr",er=document.documentElement.lang||navigator.language,C;fo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function bo(...o){o.map(t=>{const e=t.$code.toLowerCase();z.has(e)?z.set(e,Object.assign(Object.assign({},z.get(e)),t)):z.set(e,t),C||(C=t)}),rr()}function rr(){tr=document.documentElement.dir||"ltr",er=document.documentElement.lang||navigator.language,[...Bt.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}let vo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Bt.add(this.host)}hostDisconnected(){Bt.delete(this.host)}dir(){return`${this.host.dir||tr}`.toLowerCase()}lang(){return`${this.host.lang||er}`.toLowerCase()}getTranslationData(t){var e,r;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s?.language.toLowerCase(),n=(r=(e=s?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&r!==void 0?r:"",c=z.get(`${i}-${n}`),a=z.get(i);return{locale:s,language:i,region:n,primary:c,secondary:a}}exists(t,e){var r;const{primary:s,secondary:i}=this.getTranslationData((r=e.lang)!==null&&r!==void 0?r:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||i&&i[t]||e.includeFallback&&C&&C[t])}term(t,...e){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(s&&s[t])i=s[t];else if(C&&C[t])i=C[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}};var or=class extends vo{},sr=class extends E{constructor(){super(...arguments),this.localize=new or(this)}render(){return $t`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};sr.styles=po;var W=new WeakMap,q=new WeakMap,Ut=new WeakSet,nt=new WeakMap,go=class{constructor(o,t){this.handleFormData=e=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!r&&!n&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(c=>{e.formData.append(s,c.toString())}):e.formData.append(s,i.toString()))},this.handleFormSubmit=e=>{var r;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=W.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),nt.set(this.host,[])},this.handleInteraction=e=>{const r=nt.get(this.host);r.includes(e.type)||r.push(e.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const r of e)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=o).addController(this),this.options=st({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const r=e.getRootNode(),s=e.getAttribute("form");if(s)return r.getElementById(s)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var r;return(r=e.disabled)!=null?r:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,setValue:(e,r)=>e.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const o=this.options.form(this.host);o&&this.attachForm(o),nt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),nt.delete(this.host),this.options.assumeInteractionOn.forEach(o=>{this.host.removeEventListener(o,this.handleInteraction)})}hostUpdated(){const o=this.options.form(this.host);o||this.detachForm(),o&&this.form!==o&&(this.detachForm(),this.attachForm(o)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(o){o?(this.form=o,W.has(this.form)?W.get(this.form).add(this.host):W.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),q.has(this.form)||(q.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var o;this.form&&((o=W.get(this.form))==null||o.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),q.has(this.form)&&(this.form.reportValidity=q.get(this.form),q.delete(this.form))),this.form=void 0}setUserInteracted(o,t){t?Ut.add(o):Ut.delete(o),o.requestUpdate()}doAction(o,t){if(this.form){const e=document.createElement("button");e.type=o,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&e.setAttribute(r,t.getAttribute(r))})),this.form.append(e),e.click(),e.remove()}}getForm(){var o;return(o=this.form)!=null?o:null}reset(o){this.doAction("reset",o)}submit(o){this.doAction("submit",o)}setValidity(o){const t=this.host,e=!!Ut.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!o),t.toggleAttribute("data-valid",o),t.toggleAttribute("data-user-invalid",!o&&e),t.toggleAttribute("data-user-valid",o&&e)}updateValidity(){const o=this.host;this.setValidity(o.validity.valid)}emitInvalidEvent(o){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});o||t.preventDefault(),this.host.dispatchEvent(t)||o?.preventDefault()}},Qt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ge(st({},Qt),{valid:!1,valueMissing:!0}));Object.freeze(Ge(st({},Qt),{valid:!1,customError:!0}));var mo=rt`
  ${yt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,$o=rt`
  ${yt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ht="";function Pe(o){Ht=o}function _o(o=""){if(!Ht){const t=[...document.getElementsByTagName("script")],e=t.find(r=>r.hasAttribute("data-shoelace"));if(e)Pe(e.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";r&&(s=r.getAttribute("src")),Pe(s.split("/").slice(0,-1).join("/"))}}return Ht.replace(/\/$/,"")+(o?`/${o.replace(/^\//,"")}`:"")}var yo={name:"default",resolver:o=>_o(`assets/icons/${o}.svg`)},wo=yo,Ue={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ao={name:"system",resolver:o=>o in Ue?`data:image/svg+xml,${encodeURIComponent(Ue[o])}`:""},Eo=Ao,xo=[wo,Eo],It=[];function So(o){It.push(o)}function Co(o){It=It.filter(t=>t!==o)}function Le(o){return xo.find(t=>t.name===o)}function te(o,t){const e=st({waitUntilFirstUpdate:!1},t);return(r,s)=>{const{update:i}=r,n=Array.isArray(o)?o:[o];r.update=function(c){n.forEach(a=>{const l=a;if(c.has(l)){const d=c.get(l),h=this[l];d!==h&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](d,h)}}),i.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=(o,t)=>t===void 0?o?._$litType$!==void 0:o?._$litType$===t;var K=Symbol(),at=Symbol(),Lt,Ot=new Map,_=class extends E{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(o,t){var e;let r;if(t?.spriteSheet)return $t`<svg part="svg">
        <use part="use" href="${o}"></use>
      </svg>`;try{if(r=await fetch(o,{mode:"cors"}),!r.ok)return r.status===410?K:at}catch{return at}try{const s=document.createElement("div");s.innerHTML=await r.text();const i=s.firstElementChild;if(((e=i?.tagName)==null?void 0:e.toLowerCase())!=="svg")return K;Lt||(Lt=new DOMParser);const c=Lt.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):K}catch{return K}}connectedCallback(){super.connectedCallback(),So(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Co(this)}getIconSource(){const o=Le(this.library);return this.name&&o?{url:o.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var o;const{url:t,fromLibrary:e}=this.getIconSource(),r=e?Le(this.library):void 0;if(!t){this.svg=null;return}let s=Ot.get(t);if(s||(s=this.resolveIcon(t,r),Ot.set(t,s)),!this.initialRender)return;const i=await s;if(i===at&&Ot.delete(t),t===this.getIconSource().url){if(ko(i)){this.svg=i;return}switch(i){case at:case K:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(o=r?.mutator)==null||o.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};_.styles=$o;u([Xt()],_.prototype,"svg",2);u([p({reflect:!0})],_.prototype,"name",2);u([p()],_.prototype,"src",2);u([p()],_.prototype,"label",2);u([p({reflect:!0})],_.prototype,"library",2);u([te("label")],_.prototype,"handleLabelChange",1);u([te(["name","src","library"])],_.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=Symbol.for(""),Po=o=>{if(o?.r===ir)return o?._$litStatic$},Oe=(o,...t)=>({_$litStatic$:t.reduce((e,r,s)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+o[s+1],o[0]),r:ir}),Re=new Map,Uo=o=>(t,...e)=>{const r=e.length;let s,i;const n=[],c=[];let a,l=0,d=!1;for(;l<r;){for(a=t[l];l<r&&(i=e[l],(s=Po(i))!==void 0);)a+=s+t[++l],d=!0;l!==r&&c.push(i),n.push(a),l++}if(l===r&&n.push(t[r]),d){const h=n.join("$$lit$$");(t=Re.get(h))===void 0&&(n.raw=n,Re.set(h,t=n)),e=c}return o(t,...e)},Rt=Uo($t);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=o=>o??g;var f=class extends E{constructor(){super(...arguments),this.formControlController=new go(this,{form:o=>{if(o.hasAttribute("form")){const t=o.getRootNode(),e=o.getAttribute("form");return t.getElementById(e)}return o.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Je(this,"[default]","prefix","suffix"),this.localize=new or(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Qt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(o){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(o)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(o){this.isButton()&&(this.button.setCustomValidity(o),this.formControlController.updateValidity())}render(){const o=this.isLink(),t=o?Oe`a`:Oe`button`;return Rt`
      <${t}
        part="base"
        class=${Xe({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$(o?void 0:this.disabled)}
        type=${$(o?void 0:this.type)}
        title=${this.title}
        name=${$(o?void 0:this.name)}
        value=${$(o?void 0:this.value)}
        href=${$(o?this.href:void 0)}
        target=${$(o?this.target:void 0)}
        download=${$(o?this.download:void 0)}
        rel=${$(o?this.rel:void 0)}
        role=${$(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Rt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Rt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};f.styles=mo;f.dependencies={"sl-icon":_,"sl-spinner":sr};u([lo(".button")],f.prototype,"button",2);u([Xt()],f.prototype,"hasFocus",2);u([Xt()],f.prototype,"invalid",2);u([p()],f.prototype,"title",2);u([p({reflect:!0})],f.prototype,"variant",2);u([p({reflect:!0})],f.prototype,"size",2);u([p({type:Boolean,reflect:!0})],f.prototype,"caret",2);u([p({type:Boolean,reflect:!0})],f.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],f.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],f.prototype,"outline",2);u([p({type:Boolean,reflect:!0})],f.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],f.prototype,"circle",2);u([p()],f.prototype,"type",2);u([p()],f.prototype,"name",2);u([p()],f.prototype,"value",2);u([p()],f.prototype,"href",2);u([p()],f.prototype,"target",2);u([p()],f.prototype,"rel",2);u([p()],f.prototype,"download",2);u([p()],f.prototype,"form",2);u([p({attribute:"formaction"})],f.prototype,"formAction",2);u([p({attribute:"formenctype"})],f.prototype,"formEnctype",2);u([p({attribute:"formmethod"})],f.prototype,"formMethod",2);u([p({attribute:"formnovalidate",type:Boolean})],f.prototype,"formNoValidate",2);u([p({attribute:"formtarget"})],f.prototype,"formTarget",2);u([te("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1);f.define("sl-button");var Lo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,t)=>`Go to slide ${o} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format"};bo(Lo);const Oo=vt`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var Ro=Object.defineProperty,To=Object.getOwnPropertyDescriptor,nr=(o,t,e,r)=>{for(var s=r>1?void 0:r?To(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ro(t,e,s),s};let bt=class extends U{constructor(){super(...arguments),this.message="Welcome!"}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return H`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?H`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${ut("about")}" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `}};bt.styles=[Oo,vt`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];nr([qt()],bt.prototype,"message",2);bt=nr([Wt("app-home")],bt);var No=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,ee=(o,t,e,r)=>{for(var s=r>1?void 0:r?Mo(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&No(t,e,s),s};let et=class extends U{constructor(){super(...arguments),this.title="PWA Starter",this.enableBack=!1}render(){return H`
      <header>

        <div id="back-button-block">
          ${this.enableBack?H`<sl-button href="${ut()}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};et.styles=vt`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      height: 4em;
      padding-left: 16px;
      padding-top: 12px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 50px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 20px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 12em;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;ee([qt({type:String})],et.prototype,"title",2);ee([qt({type:Boolean})],et.prototype,"enableBack",2);et=ee([Wt("app-header")],et);var zo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,Ho=(o,t,e,r)=>{for(var s=r>1?void 0:r?Bo(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&zo(t,e,s),s};let Dt=class extends U{firstUpdated(){be.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return be.render()}};Dt.styles=vt`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;Dt=Ho([Wt("app-index")],Dt);export{Oo as a,Wt as e,vt as i,U as s,H as x};
//# sourceMappingURL=index-8f232ece.js.map
