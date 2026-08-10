var sa=Object.defineProperty;var oa=(e,t,a)=>t in e?sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var s=(e,t,a)=>oa(e,typeof t!="symbol"?t+"":t,a);import{m as ca}from"./chunk-KBKLVYEJ-C2BMXH8L.js";import"./iframe-BiQvwhQz.js";import{ɵ as z,b as kt,c as Ct,i as m,bi as la,bj as da,bf as Pe,as as re,S as at,o as ze,u as S,bk as On,bl as ma,I as y,s as w,n as ha,ad as g,bh as B,j as Q,ba as F,L as I,m as L,a1 as Lt,bm as ua,bn as j,bo as En,aj as Ot,am as ae,b6 as Ln,bp as pa,M as J,aU as ht,bq as Nt,br as ga,k as U,aD as Pn,au as zn,C as Ft,e as k,f as Dt,bs as M,ae as G,B as O,aJ as Yt,ah as fa,ag as Un,bt as gt,bu as yi,bv as Mn,O as _a,aH as va,$ as wi,af as ba,bw as xa,bx as ya,A as wa,aG as jn,a0 as Si,by as Fn,bz as Sa,D as Dn,h as ka,p as Bn,bA as Ca,bB as Hn,bC as Na,bD as ki,bE as Aa,bF as qn,bG as Ra,bH as Ia,bI as Ta,N as Ue,H as $n,bJ as Oa,d as Ci,an as Vn,bK as Ea,t as rt,bL as La,R as se,E as ot,g as ut,x as Pt,z as Z,bM as ke,aP as At,a5 as N,a6 as A,bN as Wn,bO as Pa,bP as za,w as ct,aN as Ua,y as _t,v as tt,J as $,ao as vt,ap as x,a9 as P,a3 as bt,aa as V,W as E,aY as X,a4 as Ni,a8 as Gn,Q as Qe,V as Qn,U as $t,Y as Vt,P as Ma,X as ja,a2 as Fa,aT as Kn,T as Da,aS as Ba,aZ as Be,F as Ha,aV as qa,a_ as xt,aX as Bt,bQ as He,aw as qe,ax as Zn,ay as $a,az as Va,aA as Wa,aB as Xn,bR as Ga}from"./angular-platform-C_MM8IP_.js";import{_ as Yn,b as Bi,c as Qa,R as Ka,M as Za}from"./button-DdvBbqaS.js";import{_ as Ai,P as Hi,T as Xa,a as Ya,h as Jn}from"./portal-EpB8jNB0.js";import{a as tr,P as Ja}from"./_animation-chunk-Qpk-pkcu.js";import{B as ft}from"./bidi-l_WyJb_E.js";import{L as ts,M as qi,c as H,S as $i}from"./_pseudo-checkbox-chunk-KgovC0aY.js";import{F as es,_ as er,j as ir,S as nr,D as is,U as ns,a as Vi,A as rs,b as as}from"./_style-loader-chunk-DMQOpoAK.js";import{M as ss}from"./icon-C2gonzmO.js";import{O as Wi,a as rr}from"./observers-D8uFnVFL.js";import{N as os}from"./forms-pOSvA9S8.js";import"./preload-helper-Dp1pzeXC.js";import"./private-CWuS7jdp.js";class ar extends ts{constructor(){super(...arguments);s(this,"_origin","program")}setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}}let sr=(()=>{const t=class t{constructor(){s(this,"_listeners",[])}notify(n,i){for(let r of this._listeners)r(n,i)}listen(n){return this._listeners.push(n),()=>{this._listeners=this._listeners.filter(i=>n!==i)}}ngOnDestroy(){this._listeners=[]}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})(),Gi=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵmod",kt({type:t,imports:[qi],exports:[qi,ft]})),s(t,"ɵinj",Ct({imports:[ft]}));let e=t;return e})();/**
 * @license Angular v22.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */const f="primary",oe=Symbol("RouteTitle");class cs{constructor(t){s(this,"params");this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const a=this.params[t];return Array.isArray(a)?a[0]:a}return null}getAll(t){if(this.has(t)){const a=this.params[t];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function zt(e){return new cs(e)}function $e(e,t,a){for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i[0]===":")a[i.substring(1)]=r;else if(i!==r.path)return!1}return!0}function ls(e,t,a){const n=a.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>e.length||a.pathMatch==="full"&&(t.hasChildren()||n.length<e.length))return null;const l={},h=e.slice(0,n.length);return $e(n,h,l)?{consumed:h,posParams:l}:null}if(i!==n.lastIndexOf("**"))return null;const r=n.slice(0,i),o=n.slice(i+1);if(r.length+o.length>e.length||a.pathMatch==="full"&&t.hasChildren()&&a.path!=="**")return null;const c={};return!$e(r,e.slice(0,r.length),c)||!$e(o,e.slice(e.length-o.length),c)?null:{consumed:e,posParams:c}}function Ce(e){return new Promise((t,a)=>{e.pipe(Nt()).subscribe({next:n=>t(n),error:n=>a(n)})})}function ds(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length;++a)if(!K(e[a],t[a]))return!1;return!0}function K(e,t){const a=e?Ke(e):void 0,n=t?Ke(t):void 0;if(!a||!n||a.length!=n.length)return!1;let i;for(let r=0;r<a.length;r++)if(i=a[r],!or(e[i],t[i]))return!1;return!0}function Ke(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function or(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const a=[...e].sort(),n=[...t].sort();return a.every((i,r)=>n[r]===i)}else return e===t}function ms(e){return e.length>0?e[e.length-1]:null}function Rt(e){return Ln(e)?e:wa(e)?O(Promise.resolve(e)):g(e)}function cr(e){return Ln(e)?Ce(e):Promise.resolve(e)}const hs={exact:mr,subset:hr},lr={exact:ps,subset:gs,ignored:()=>!0},dr={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Jt={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function us(e,t,a){const n=e instanceof W?e:t.parseUrl(e);return Bn(()=>{var i;return Ze(((i=t.lastSuccessfulNavigation())==null?void 0:i.finalUrl)??new W,n,{...Jt,...a})})}function Ze(e,t,a){return hs[a.paths](e.root,t.root,a.matrixParams)&&lr[a.queryParams](e.queryParams,t.queryParams)&&!(a.fragment==="exact"&&e.fragment!==t.fragment)}function ps(e,t){return K(e,t)}function mr(e,t,a){if(!yt(e.segments,t.segments)||!be(e.segments,t.segments,a)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const n in t.children)if(!e.children[n]||!mr(e.children[n],t.children[n],a))return!1;return!0}function gs(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(a=>or(e[a],t[a]))}function hr(e,t,a){return ur(e,t,t.segments,a)}function ur(e,t,a,n){if(e.segments.length>a.length){const i=e.segments.slice(0,a.length);return!(!yt(i,a)||t.hasChildren()||!be(i,a,n))}else if(e.segments.length===a.length){if(!yt(e.segments,a)||!be(e.segments,a,n))return!1;for(const i in t.children)if(!e.children[i]||!hr(e.children[i],t.children[i],n))return!1;return!0}else{const i=a.slice(0,e.segments.length),r=a.slice(e.segments.length);return!yt(e.segments,i)||!be(e.segments,i,n)||!e.children[f]?!1:ur(e.children[f],t,r,n)}}function be(e,t,a){return t.every((n,i)=>lr[a](e[i].parameters,n.parameters))}class W{constructor(t=new b([],{}),a={},n=null){s(this,"root");s(this,"queryParams");s(this,"fragment");s(this,"_queryParamMap");this.root=t,this.queryParams=a,this.fragment=n}get queryParamMap(){return this._queryParamMap??(this._queryParamMap=zt(this.queryParams)),this._queryParamMap}toString(){return vs.serialize(this)}}class b{constructor(t,a){s(this,"segments");s(this,"children");s(this,"parent",null);this.segments=t,this.children=a,Object.values(a).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return xe(this)}}class Qt{constructor(t,a){s(this,"path");s(this,"parameters");s(this,"_parameterMap");this.path=t,this.parameters=a}get parameterMap(){return this._parameterMap??(this._parameterMap=zt(this.parameters)),this._parameterMap}toString(){return gr(this)}}function fs(e,t){return yt(e,t)&&e.every((a,n)=>K(a.parameters,t[n].parameters))}function yt(e,t){return e.length!==t.length?!1:e.every((a,n)=>a.path===t[n].path)}function _s(e,t){let a=[];return Object.entries(e.children).forEach(([n,i])=>{n===f&&(a=a.concat(t(i,n)))}),Object.entries(e.children).forEach(([n,i])=>{n!==f&&(a=a.concat(t(i,n)))}),a}let Ht=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:()=>new ce}));let e=t;return e})();class ce{parse(t){const a=new Is(t);return new W(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(t){const a=`/${Wt(t.root,!0)}`,n=ys(t.queryParams),i=typeof t.fragment=="string"?`#${bs(t.fragment)}`:"";return`${a}${n}${i}`}}const vs=new ce;function xe(e){return e.segments.map(t=>gr(t)).join("/")}function Wt(e,t){if(!e.hasChildren())return xe(e);if(t){const a=e.children[f]?Wt(e.children[f],!1):"",n=[];return Object.entries(e.children).forEach(([i,r])=>{i!==f&&n.push(`${i}:${Wt(r,!1)}`)}),n.length>0?`${a}(${n.join("//")})`:a}else{const a=_s(e,(n,i)=>i===f?[Wt(e.children[f],!1)]:[`${i}:${Wt(n,!1)}`]);return Object.keys(e.children).length===1&&e.children[f]!=null?`${xe(e)}/${a[0]}`:`${xe(e)}/(${a.join("//")})`}}function pr(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ue(e){return pr(e).replace(/%3B/gi,";")}function bs(e){return encodeURI(e)}function Xe(e){return pr(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ye(e){return decodeURIComponent(e)}function Qi(e){return ye(e.replace(/\+/g,"%20"))}function gr(e){return`${Xe(e.path)}${xs(e.parameters)}`}function xs(e){return Object.entries(e).map(([t,a])=>`;${Xe(t)}=${Xe(a)}`).join("")}function ys(e){const t=Object.entries(e).map(([a,n])=>Array.isArray(n)?n.map(i=>`${ue(a)}=${ue(i)}`).join("&"):`${ue(a)}=${ue(n)}`).filter(a=>a);return t.length?`?${t.join("&")}`:""}const ws=/^[^\/()?;#]+/;function Ve(e){const t=e.match(ws);return t?t[0]:""}const Ss=/^[^\/()?;=#]+/;function ks(e){const t=e.match(Ss);return t?t[0]:""}const Cs=/^[^=?&#]+/;function Ns(e){const t=e.match(Cs);return t?t[0]:""}const As=/^[^&#]+/;function Rs(e){const t=e.match(As);return t?t[0]:""}class Is{constructor(t){s(this,"url");s(this,"remaining");this.url=t,this.remaining=t}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new b([],{}):new b([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new I(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");const a=[];for(this.peekStartsWith("(")||a.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),a.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,t));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,t)),(a.length>0||Object.keys(n).length>0)&&(i[f]=new b(a,n)),i}parseSegment(){const t=Ve(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new I(4009,!1);return this.capture(t),new Qt(ye(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const a=ks(this.remaining);if(!a)return;this.capture(a);let n="";if(this.consumeOptional("=")){const i=Ve(this.remaining);i&&(n=i,this.capture(n))}t[ye(a)]=ye(n)}parseQueryParam(t){const a=Ns(this.remaining);if(!a)return;this.capture(a);let n="";if(this.consumeOptional("=")){const o=Rs(this.remaining);o&&(n=o,this.capture(n))}const i=Qi(a),r=Qi(n);if(Object.hasOwn(t,i)){let o=t[i];Array.isArray(o)||(o=[o],t[i]=o),o.push(r)}else t[i]=r}parseParens(t,a){const n=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const i=Ve(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new I(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=f);const c=this.parseChildren(a+1);n[o??f]=Object.keys(c).length===1&&c[f]?c[f]:new b([],c),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new I(4011,!1)}}function fr(e){return e.segments.length>0?new b([],{[f]:e}):e}function _r(e){const t=Object.create(null);for(const[n,i]of Object.entries(e.children)){const r=_r(i);if(n===f&&r.segments.length===0&&r.hasChildren())for(const[o,c]of Object.entries(r.children))t[o]=c;else(r.segments.length>0||r.hasChildren())&&(t[n]=r)}const a=new b(e.segments,t);return Ts(a)}function Ts(e){if(e.numberOfChildren===1&&e.children[f]){const t=e.children[f];return new b(e.segments.concat(t.segments),t.children)}return e}function St(e){return e instanceof W}function Os(e,t,a=null,n=null,i=new ce){const r=vr(e);return br(r,t,a,n,i)}function vr(e){let t;function a(r){const o={};for(const l of r.children){const h=a(l);o[l.outlet]=h}const c=new b(r.url,o);return r===e&&(t=c),c}const n=a(e.root),i=fr(n);return t??i}function br(e,t,a,n,i){let r=e;for(;r.parent;)r=r.parent;if(t.length===0)return We(r,r,r,a,n,i);const o=Es(t);if(o.toRoot())return We(r,r,new b([],{}),a,n,i);const c=Ls(o,r,e),l=c.processChildren?Kt(c.segmentGroup,c.index,o.commands):yr(c.segmentGroup,c.index,o.commands);return We(r,c.segmentGroup,l,a,n,i)}function Ne(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function te(e){return typeof e=="object"&&e!=null&&e.outlets}function Ki(e,t,a){e||(e="ɵ");const n=new W;return n.queryParams={[e]:t},a.parse(a.serialize(n)).queryParams[e]}function We(e,t,a,n,i,r){const o={};for(const[h,d]of Object.entries(n??{}))o[h]=Array.isArray(d)?d.map(u=>Ki(h,u,r)):Ki(h,d,r);let c;e===t?c=a:c=xr(e,t,a);const l=fr(_r(c));return new W(l,o,i)}function xr(e,t,a){const n=Object.create(null);return Object.entries(e.children).forEach(([i,r])=>{r===t?n[i]=a:n[i]=xr(r,t,a)}),new b(e.segments,n)}class Zi{constructor(t,a,n){s(this,"isAbsolute");s(this,"numberOfDoubleDots");s(this,"commands");if(this.isAbsolute=t,this.numberOfDoubleDots=a,this.commands=n,t&&n.length>0&&Ne(n[0]))throw new I(4003,!1);const i=n.find(te);if(i&&i!==ms(n))throw new I(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}}function Es(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Zi(!0,0,e);let t=0,a=!1;const n=e.reduce((i,r,o)=>{if(typeof r=="object"&&r!=null){if(r.outlets){const c={};return Object.entries(r.outlets).forEach(([l,h])=>{c[l]=typeof h=="string"?h.split("/"):h}),[...i,{outlets:c}]}if(r.segmentPath)return[...i,r.segmentPath]}return typeof r!="string"?[...i,r]:o===0?(r.split("/").forEach((c,l)=>{l==0&&c==="."||(l==0&&c===""?a=!0:c===".."?t++:c!=""&&i.push(c))}),i):[...i,r]},[]);return new Zi(a,t,n)}class we{constructor(t,a,n){s(this,"segmentGroup");s(this,"processChildren");s(this,"index");this.segmentGroup=t,this.processChildren=a,this.index=n}}function Ls(e,t,a){if(e.isAbsolute)return new we(t,!0,0);if(!a)return new we(t,!1,NaN);if(a.parent===null)return new we(a,!0,0);const n=Ne(e.commands[0])?0:1,i=a.segments.length-1+n;return Ps(a,i,e.numberOfDoubleDots)}function Ps(e,t,a){let n=e,i=t,r=a;for(;r>i;){if(r-=i,n=n.parent,!n)throw new I(4005,!1);i=n.segments.length}return new we(n,!1,i-r)}function zs(e){return te(e[0])?e[0].outlets:{[f]:e}}function yr(e,t,a){if(e??(e=new b([],{})),e.segments.length===0&&e.hasChildren())return Kt(e,t,a);const n=Us(e,t,a),i=a.slice(n.commandIndex);if(n.match&&n.pathIndex<e.segments.length){const r=new b(e.segments.slice(0,n.pathIndex),{});return r.children[f]=new b(e.segments.slice(n.pathIndex),e.children),Kt(r,0,i)}else return n.match&&i.length===0?new b(e.segments,{}):n.match&&!e.hasChildren()?Ye(e,t,a):n.match?Kt(e,0,i):Ye(e,t,a)}function Kt(e,t,a){if(a.length===0)return new b(e.segments,{});{const n=zs(a),i=Object.create(null);if(Object.keys(n).some(r=>r!==f)&&e.children[f]&&e.numberOfChildren===1&&e.children[f].segments.length===0){const r=Kt(e.children[f],t,a);return new b(e.segments,r.children)}return Object.entries(n).forEach(([r,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(i[r]=yr(e.children[r],t,o))}),Object.entries(e.children).forEach(([r,o])=>{n[r]===void 0&&(i[r]=o)}),new b(e.segments,i)}}function Us(e,t,a){let n=0,i=t;const r={match:!1,pathIndex:0,commandIndex:0};for(;i<e.segments.length;){if(n>=a.length)return r;const o=e.segments[i],c=a[n];if(te(c))break;const l=`${c}`,h=n<a.length-1?a[n+1]:null;if(i>0&&l===void 0)break;if(l&&h&&typeof h=="object"&&h.outlets===void 0){if(!Yi(l,h,o))return r;n+=2}else{if(!Yi(l,{},o))return r;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Ye(e,t,a){const n=e.segments.slice(0,t);let i=0;for(;i<a.length;){const r=a[i];if(te(r)){const l=Ms(r.outlets);return new b(n,l)}if(i===0&&Ne(a[0])){const l=e.segments[t];n.push(new Qt(l.path,Xi(a[0]))),i++;continue}const o=te(r)?r.outlets[f]:`${r}`,c=i<a.length-1?a[i+1]:null;o&&c&&Ne(c)?(n.push(new Qt(o,Xi(c))),i+=2):(n.push(new Qt(o,{})),i++)}return new b(n,{})}function Ms(e){const t={};return Object.entries(e).forEach(([a,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[a]=Ye(new b([],{}),0,n))}),t}function Xi(e){const t={};return Object.entries(e).forEach(([a,n])=>t[a]=`${n}`),t}function Yi(e,t,a){return e==a.path&&K(t,a.parameters)}const Zt="imperative";var C=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(C||{});class et{constructor(t,a){s(this,"id");s(this,"url");this.id=t,this.url=a}}class Ae extends et{constructor(a,n,i="imperative",r=null){super(a,n);s(this,"type",C.NavigationStart);s(this,"navigationTrigger");s(this,"restoredState");this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Y extends et{constructor(a,n,i){super(a,n);s(this,"urlAfterRedirects");s(this,"type",C.NavigationEnd);this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}var T=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(T||{}),Re=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(Re||{});class pt extends et{constructor(a,n,i,r){super(a,n);s(this,"reason");s(this,"code");s(this,"type",C.NavigationCancel);this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}function js(e){return e instanceof pt&&(e.code===T.Redirect||e.code===T.SupersededByNewNavigation)}class Ut extends et{constructor(a,n,i,r){super(a,n);s(this,"reason");s(this,"code");s(this,"type",C.NavigationSkipped);this.reason=i,this.code=r}}class Ri extends et{constructor(a,n,i,r){super(a,n);s(this,"error");s(this,"target");s(this,"type",C.NavigationError);this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class wr extends et{constructor(a,n,i,r){super(a,n);s(this,"urlAfterRedirects");s(this,"state");s(this,"type",C.RoutesRecognized);this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Fs extends et{constructor(a,n,i,r){super(a,n);s(this,"urlAfterRedirects");s(this,"state");s(this,"type",C.GuardsCheckStart);this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ds extends et{constructor(a,n,i,r,o){super(a,n);s(this,"urlAfterRedirects");s(this,"state");s(this,"shouldActivate");s(this,"type",C.GuardsCheckEnd);this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Bs extends et{constructor(a,n,i,r){super(a,n);s(this,"urlAfterRedirects");s(this,"state");s(this,"type",C.ResolveStart);this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Hs extends et{constructor(a,n,i,r){super(a,n);s(this,"urlAfterRedirects");s(this,"state");s(this,"type",C.ResolveEnd);this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class qs{constructor(t){s(this,"route");s(this,"type",C.RouteConfigLoadStart);this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class $s{constructor(t){s(this,"route");s(this,"type",C.RouteConfigLoadEnd);this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Vs{constructor(t){s(this,"snapshot");s(this,"type",C.ChildActivationStart);this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ws{constructor(t){s(this,"snapshot");s(this,"type",C.ChildActivationEnd);this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Gs{constructor(t){s(this,"snapshot");s(this,"type",C.ActivationStart);this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Qs{constructor(t){s(this,"snapshot");s(this,"type",C.ActivationEnd);this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ji{constructor(t,a,n,i){s(this,"routerEvent");s(this,"position");s(this,"anchor");s(this,"scrollBehavior");s(this,"type",C.Scroll);this.routerEvent=t,this.position=a,this.anchor=n,this.scrollBehavior=i}toString(){const t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}}class Ii{}class Sr{}class Ie{constructor(t,a){s(this,"url");s(this,"navigationBehaviorOptions");this.url=t,this.navigationBehaviorOptions=a}}function Ks(e){return!(e instanceof Ii)&&!(e instanceof Ie)&&!(e instanceof Sr)}class Zs{constructor(t){s(this,"rootInjector");s(this,"outlet",null);s(this,"route",null);s(this,"children");s(this,"attachRef",null);this.rootInjector=t,this.children=new le(this.rootInjector)}get injector(){var t;return((t=this.route)==null?void 0:t.snapshot._environmentInjector)??this.rootInjector}}let le=(()=>{const t=class t{constructor(n){s(this,"rootInjector");s(this,"contexts",new Map);this.rootInjector=n}onChildOutletCreated(n,i){const r=this.getOrCreateContext(n);r.outlet=i,this.contexts.set(n,r)}onChildOutletDestroyed(n){const i=this.getContext(n);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let i=this.getContext(n);return i||(i=new Zs(this.rootInjector),this.contexts.set(n,i)),i}getContext(n){return this.contexts.get(n)||null}};s(t,"ɵfac",function(i){return new(i||t)(Ot(re))}),s(t,"ɵprov",ae({token:t,factory:t.ɵfac,providedIn:"root"}));let e=t;return e})();class kr{constructor(t){s(this,"_root");this._root=t}get root(){return this._root.value}parent(t){const a=this.pathFromRoot(t);return a.length>1?a[a.length-2]:null}children(t){const a=Je(t,this._root);return a?a.children.map(n=>n.value):[]}firstChild(t){const a=Je(t,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(t){const a=ti(t,this._root);return a.length<2?[]:a[a.length-2].children.map(i=>i.value).filter(i=>i!==t)}pathFromRoot(t){return ti(t,this._root).map(a=>a.value)}}function Je(e,t){if(e===t.value)return t;for(const a of t.children){const n=Je(e,a);if(n)return n}return null}function ti(e,t){if(e===t.value)return[t];for(const a of t.children){const n=ti(e,a);if(n.length)return n.unshift(t),n}return[]}class D{constructor(t,a){s(this,"value");s(this,"children");this.value=t,this.children=a}toString(){return`TreeNode(${this.value})`}}function Et(e){const t={};return e&&e.children.forEach(a=>t[a.value.outlet]=a),t}class Cr extends kr{constructor(a,n){super(a);s(this,"snapshot");this.snapshot=n,Oi(this,a)}toString(){return this.snapshot.toString()}}function Nr(e,t){const a=Xs(e,t),n=new B([new Qt("",{})]),i=new B({}),r=new B({}),o=new B({}),c=new B(""),l=new de(n,i,o,c,r,f,e,a.root);return l.snapshot=a.root,new Cr(new D(l,[]),a)}function Xs(e,t){const a={},n={},i={},o=new ei([],a,i,"",n,f,e,null,{},t);return new Ar("",new D(o,[]))}class de{constructor(t,a,n,i,r,o,c,l){s(this,"urlSubject");s(this,"paramsSubject");s(this,"queryParamsSubject");s(this,"fragmentSubject");s(this,"dataSubject");s(this,"outlet");s(this,"component");s(this,"snapshot");s(this,"_futureSnapshot");s(this,"_routerState");s(this,"_paramMap");s(this,"_queryParamMap");s(this,"title");s(this,"url");s(this,"params");s(this,"queryParams");s(this,"fragment");s(this,"data");s(this,"_localInjector");var h;this.urlSubject=t,this.paramsSubject=a,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=r,this.outlet=o,this.component=c,this._futureSnapshot=l,this.title=((h=this.dataSubject)==null?void 0:h.pipe(L(d=>d[oe])))??g(void 0),this.url=t,this.params=a,this.queryParams=n,this.fragment=i,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??(this._paramMap=this.params.pipe(L(t=>zt(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap??(this._queryParamMap=this.queryParams.pipe(L(t=>zt(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}const Ys="always";function Ti(e,t,a){var r;let n;const{routeConfig:i}=e;return t!==null&&(a==="always"||(i==null?void 0:i.path)===""||!t.component&&!((r=t.routeConfig)!=null&&r.loadComponent))?n={params:{...t.params,...e.params},data:{...t.data,...e.data},resolve:{...e.data,...t.data,...i==null?void 0:i.data,...e._resolvedData}}:n={params:{...e.params},data:{...e.data},resolve:{...e.data,...e._resolvedData??{}}},i&&Ir(i)&&(n.resolve[oe]=i.title),n}class ei{constructor(t,a,n,i,r,o,c,l,h,d){s(this,"url");s(this,"params");s(this,"queryParams");s(this,"fragment");s(this,"data");s(this,"outlet");s(this,"component");s(this,"routeConfig");s(this,"_resolve");s(this,"_resolvedData");s(this,"_routerState");s(this,"_paramMap");s(this,"_queryParamMap");s(this,"_environmentInjector");this.url=t,this.params=a,this.queryParams=n,this.fragment=i,this.data=r,this.outlet=o,this.component=c,this.routeConfig=l,this._resolve=h,this._environmentInjector=d}get title(){var t;return(t=this.data)==null?void 0:t[oe]}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??(this._paramMap=zt(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap??(this._queryParamMap=zt(this.queryParams)),this._queryParamMap}toString(){const t=this.url.map(n=>n.toString()).join("/"),a=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${a}')`}}class Ar extends kr{constructor(a,n){super(n);s(this,"url");this.url=a,Oi(this,n)}toString(){return Rr(this._root)}}function Oi(e,t){t.value._routerState=e,t.children.forEach(a=>Oi(e,a))}function Rr(e){const t=e.children.length>0?` { ${e.children.map(Rr).join(", ")} } `:"";return`${e.value}${t}`}function Ge(e){if(e.snapshot){const t=e.snapshot,a=e._futureSnapshot;e.snapshot=a,K(t.queryParams,a.queryParams)||e.queryParamsSubject.next(a.queryParams),t.fragment!==a.fragment&&e.fragmentSubject.next(a.fragment),K(t.params,a.params)||e.paramsSubject.next(a.params),ds(t.url,a.url)||e.urlSubject.next(a.url),K(t.data,a.data)||e.dataSubject.next(a.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function ii(e,t){const a=K(e.params,t.params)&&fs(e.url,t.url),n=!e.parent!=!t.parent;return a&&!n&&(!e.parent||ii(e.parent,t.parent))}function Ir(e){return typeof e.title=="string"||e.title===null}const Js=new y("");let ni=(()=>{const t=class t{constructor(){s(this,"activated",null);s(this,"_activatedRoute",null);s(this,"name",f);s(this,"activateEvents",new U);s(this,"deactivateEvents",new U);s(this,"attachEvents",new U);s(this,"detachEvents",new U);s(this,"routerOutletData",Pn());s(this,"parentContexts",m(le));s(this,"location",m(zn));s(this,"changeDetector",m(Ft));s(this,"inputBinder",m(Me,{optional:!0}));s(this,"supportsBindingToComponentInputs",!0)}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){const{firstChange:i,previousValue:r}=n.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){var n;this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),(n=this.inputBinder)==null||n.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){var i;return((i=this.parentContexts.getContext(n))==null?void 0:i.outlet)===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;const n=this.parentContexts.getContext(this.name);n!=null&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new I(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new I(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new I(4012,!1);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,i){var r;this.activated=n,this._activatedRoute=i,this.location.insert(n.hostView),(r=this.inputBinder)==null||r.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,i){var d;if(this.isActivated)throw new I(4013,!1);this._activatedRoute=n;const r=this.location,c=n.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,h=new to(n,l,r.injector,this.routerOutletData);this.activated=r.createComponent(c,{index:r.length,injector:h,environmentInjector:i}),this.changeDetector.markForCheck(),(d=this.inputBinder)==null||d.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Dt]}));let e=t;return e})();class to{constructor(t,a,n,i){s(this,"route");s(this,"childContexts");s(this,"parent");s(this,"outletData");this.route=t,this.childContexts=a,this.parent=n,this.outletData=i}get(t,a){return t===de?this.route:t===le?this.childContexts:t===Js?this.outletData:this.parent.get(t,a)}}const Me=new y("");let eo=(()=>{const t=class t{constructor(n){s(this,"options");s(this,"outletDataSubscriptions",new Map);s(this,"outletSeenKeys",new Map);var i;this.options=n,(i=this.options).queryParams??(i.queryParams=!0)}bindActivatedRouteToOutletComponent(n){this.unsubscribeFromRouteData(n),this.subscribeToRouteData(n)}unsubscribeFromRouteData(n){var i;(i=this.outletDataSubscriptions.get(n))==null||i.unsubscribe(),this.outletDataSubscriptions.delete(n),this.outletSeenKeys.delete(n)}subscribeToRouteData(n){const{activatedRoute:i}=n,r=jn([this.options.queryParams?i.queryParams:g({}),i.params,i.data]).pipe(F(([o,c,l],h)=>(l={...o,...c,...l},h===0?g(l):Promise.resolve(l)))).subscribe(o=>{if(!n.isActivated||!n.activatedComponentRef||n.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(n);return}const c=Ca(i.component);if(!c){this.unsubscribeFromRouteData(n);return}let l=this.outletSeenKeys.get(n);l||(l=new Set,this.outletSeenKeys.set(n,l));for(const d of Object.keys(o))l.add(d);const h=this.options.unmatchedInputBehavior??"alwaysUndefined";for(const{templateName:d}of c.inputs){const u=o[d];(u!==void 0||h==="alwaysUndefined"||l.has(d))&&n.activatedComponentRef.setInput(d,u)}});this.outletDataSubscriptions.set(n,r)}};s(t,"ɵfac",function(i){Hn()}),s(t,"ɵprov",ae({token:t,factory:t.ɵfac}));let e=t;return e})(),ri=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵcmp",J({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ht(0,"router-outlet")},dependencies:[ni],encapsulation:2,changeDetection:1}));let e=t;return e})();function Ei(e){const t=e.children&&e.children.map(Ei),a=t?{...e,children:t}:{...e};return!a.component&&!a.loadComponent&&(t||a.loadChildren)&&a.outlet&&a.outlet!==f&&(a.component=ri),a}function io(e,t,a){const n=new Set,i=ee(e,t._root,a?a._root:void 0,n);return{newlyCreatedRoutes:n,state:new Cr(i,t)}}function ee(e,t,a,n){if(a&&e.shouldReuseRoute(t.value,a.value.snapshot)){const i=a.value;i._futureSnapshot=t.value;const r=no(e,t,a,n);return new D(i,r)}else{if(e.shouldAttach(t.value)){const o=e.retrieve(t.value);if(o!==null){const c=o.route;return c.value._futureSnapshot=t.value,c.children=t.children.map(l=>ee(e,l,void 0,n)),c}}const i=ro(t.value);n.add(i);const r=t.children.map(o=>ee(e,o,void 0,n));return new D(i,r)}}function no(e,t,a,n){return t.children.map(i=>{for(const r of a.children)if(e.shouldReuseRoute(i.value,r.value.snapshot))return ee(e,i,r,n);return ee(e,i,void 0,n)})}function ro(e){return new de(new B(e.url),new B(e.params),new B(e.queryParams),new B(e.fragment),new B(e.data),e.outlet,e.component,e)}class Li{constructor(t,a){s(this,"redirectTo");s(this,"navigationBehaviorOptions");this.redirectTo=t,this.navigationBehaviorOptions=a}}const Tr="ngNavigationCancelingError";function Te(e,t){const{redirectTo:a,navigationBehaviorOptions:n}=St(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,i=Or(!1,T.Redirect);return i.url=a,i.navigationBehaviorOptions=n,i}function Or(e,t){const a=new Error("NavigationCancelingError: ");return a[Tr]=!0,a.cancellationCode=t,a}function ao(e){return Er(e)&&St(e.url)}function Er(e){return!!e&&e[Tr]}class so{constructor(t,a,n,i,r){s(this,"routeReuseStrategy");s(this,"futureState");s(this,"currState");s(this,"forwardEvent");s(this,"inputBindingEnabled");this.routeReuseStrategy=t,this.futureState=a,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=r}activate(t){const a=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,n,t),Ge(this.futureState.root),this.activateChildRoutes(a,n,t)}deactivateChildRoutes(t,a,n){const i=Et(a);t.children.forEach(r=>{const o=r.value.outlet;this.deactivateRoutes(r,i[o],n),delete i[o]}),Object.values(i).forEach(r=>{this.deactivateRouteAndItsChildren(r,n)})}deactivateRoutes(t,a,n){const i=t.value,r=a?a.value:null;if(i===r)if(i.component){const o=n.getContext(i.outlet);o&&this.deactivateChildRoutes(t,a,o.children)}else this.deactivateChildRoutes(t,a,n);else r&&this.deactivateRouteAndItsChildren(a,n)}deactivateRouteAndItsChildren(t,a){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,a):this.deactivateRouteAndOutlet(t,a)}detachAndStoreRouteSubtree(t,a){const n=a.getContext(t.value.outlet),i=n&&t.value.component?n.children:a,r=Et(t);for(const o of Object.values(r))this.deactivateRouteAndItsChildren(o,i);if(n&&n.outlet){const o=n.outlet.detach(),c=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:c})}}deactivateRouteAndOutlet(t,a){var o;const n=a.getContext(t.value.outlet),i=n&&t.value.component?n.children:a,r=Et(t);for(const c of Object.values(r))this.deactivateRouteAndItsChildren(c,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),(o=t.value._localInjector)==null||o.destroy()}activateChildRoutes(t,a,n){const i=Et(a);t.children.forEach(r=>{this.activateRoutes(r,i[r.value.outlet],n),this.forwardEvent(new Qs(r.value.snapshot))}),t.children.length&&this.forwardEvent(new Ws(t.value.snapshot))}activateRoutes(t,a,n){const i=t.value,r=a?a.value:null;if(Ge(i),i===r)if(i.component){const o=n.getOrCreateContext(i.outlet);this.activateChildRoutes(t,a,o.children)}else this.activateChildRoutes(t,a,n);else if(i.component){const o=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){const c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(c.contexts),o.attachRef=c.componentRef,o.route=c.route.value,o.outlet&&o.outlet.attach(c.componentRef,c.route.value),Ge(c.route.value),this.activateChildRoutes(t,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(t,null,o.children)}else this.activateChildRoutes(t,null,n)}}class tn{constructor(t){s(this,"path");s(this,"route");this.path=t,this.route=this.path[this.path.length-1]}}class Se{constructor(t,a){s(this,"component");s(this,"route");this.component=t,this.route=a}}function oo(e,t,a){const n=e._root,i=t?t._root:null;return Gt(n,i,a,[n.value])}function co(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function qt(e,t){const a=Symbol(),n=t.get(e,a);return n===a?typeof e=="function"&&!ya(e)?e:t.get(e):n}function Gt(e,t,a,n,i={canDeactivateChecks:[],canActivateChecks:[]}){const r=Et(t);return e.children.forEach(o=>{lo(o,r[o.value.outlet],a,n.concat([o.value]),i),delete r[o.value.outlet]}),Object.entries(r).forEach(([o,c])=>Xt(c,a.getContext(o),i)),i}function lo(e,t,a,n,i={canDeactivateChecks:[],canActivateChecks:[]}){const r=e.value,o=t?t.value:null,c=a?a.getContext(e.value.outlet):null;if(o&&r.routeConfig===o.routeConfig){const l=mo(o,r,r.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new tn(n)):(r.data=o.data,r._resolvedData=o._resolvedData),r.component?Gt(e,t,c?c.children:null,n,i):Gt(e,t,a,n,i),l&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new Se(c.outlet.component,o))}else o&&Xt(t,c,i),i.canActivateChecks.push(new tn(n)),r.component?Gt(e,null,c?c.children:null,n,i):Gt(e,null,a,n,i);return i}function mo(e,t,a){if(typeof a=="function")return j(t._environmentInjector,()=>a(e,t));switch(a){case"pathParamsChange":return!yt(e.url,t.url);case"pathParamsOrQueryParamsChange":return!yt(e.url,t.url)||!K(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ii(e,t)||!K(e.queryParams,t.queryParams);case"paramsChange":default:return!ii(e,t)}}function Xt(e,t,a){const n=Et(e),i=e.value;Object.entries(n).forEach(([r,o])=>{i.component?t?Xt(o,t.children.getContext(r),a):Xt(o,null,a):Xt(o,t,a)}),i.component?t&&t.outlet&&t.outlet.isActivated?a.canDeactivateChecks.push(new Se(t.outlet.component,i)):a.canDeactivateChecks.push(new Se(null,i)):a.canDeactivateChecks.push(new Se(null,i))}function me(e){return typeof e=="function"}function ho(e){return typeof e=="boolean"}function uo(e){return e&&me(e.canLoad)}function po(e){return e&&me(e.canActivate)}function go(e){return e&&me(e.canActivateChild)}function fo(e){return e&&me(e.canDeactivate)}function _o(e){return e&&me(e.canMatch)}function Lr(e){return e instanceof xa||(e==null?void 0:e.name)==="EmptyError"}const pe=Symbol("INITIAL_VALUE");function Mt(){return F(e=>jn(e.map(t=>t.pipe(Lt(1),Si(pe)))).pipe(L(t=>{for(const a of t)if(a!==!0){if(a===pe)return pe;if(a===!1||vo(a))return a}return!0}),Q(t=>t!==pe),Lt(1)))}function vo(e){return St(e)||e instanceof Li}function Pr(e){return e.aborted?g(void 0).pipe(Lt(1)):new _a(t=>{const a=()=>{t.next(),t.complete()};return e.addEventListener("abort",a),()=>e.removeEventListener("abort",a)})}function zr(e){return Yt(Pr(e))}function bo(e){return gt(t=>{const{targetSnapshot:a,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:r}}=t;return r.length===0&&i.length===0?g({...t,guardsResult:!0}):xo(r,a,n).pipe(gt(o=>o&&ho(o)?yo(a,i,e):g(o)),L(o=>({...t,guardsResult:o})))})}function xo(e,t,a){return O(e).pipe(gt(n=>No(n.component,n.route,a,t)),Nt(n=>n!==!0,!0))}function yo(e,t,a){return O(t).pipe(yi(n=>va(So(n.route.parent,a),wo(n.route,a),Co(e,n.path),ko(e,n.route))),Nt(n=>n!==!0,!0))}function wo(e,t){return e!==null&&t&&t(new Gs(e)),g(!0)}function So(e,t){return e!==null&&t&&t(new Vs(e)),g(!0)}function ko(e,t){const a=t.routeConfig?t.routeConfig.canActivate:null;if(!a||a.length===0)return g(!0);const n=a.map(i=>wi(()=>{const r=t._environmentInjector,o=qt(i,r),c=po(o)?o.canActivate(t,e):j(r,()=>o(t,e));return Rt(c).pipe(Nt())}));return g(n).pipe(Mt())}function Co(e,t){const a=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(r=>co(r)).filter(r=>r!==null).map(r=>wi(()=>{const o=r.guards.map(c=>{const l=r.node._environmentInjector,h=qt(c,l),d=go(h)?h.canActivateChild(a,e):j(l,()=>h(a,e));return Rt(d).pipe(Nt())});return g(o).pipe(Mt())}));return g(i).pipe(Mt())}function No(e,t,a,n){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return g(!0);const r=i.map(o=>{const c=t._environmentInjector,l=qt(o,c),h=fo(l)?l.canDeactivate(e,t,a,n):j(c,()=>l(e,t,a,n));return Rt(h).pipe(Nt())});return g(r).pipe(Mt())}function Ao(e,t,a,n,i){const r=t.canLoad;if(r===void 0||r.length===0)return g(!0);const o=r.map(c=>{const l=qt(c,e),h=uo(l)?l.canLoad(t,a):j(e,()=>l(t,a)),d=Rt(h);return i?d.pipe(zr(i)):d});return g(o).pipe(Mt(),Ur(n))}function Ur(e){return Sa(G(t=>{if(typeof t!="boolean")throw Te(e,t)}),L(t=>t===!0))}function Ro(e,t,a,n,i,r){const o=t.canMatch;if(!o||o.length===0)return g(!0);const c=o.map(l=>{const h=qt(l,e),d=_o(h)?h.canMatch(t,a,i):j(e,()=>h(t,a,i));return Rt(d).pipe(zr(r))});return g(c).pipe(Mt(),Ur(n))}class nt extends Error{constructor(a){super();s(this,"segmentGroup");this.segmentGroup=a||null,Object.setPrototypeOf(this,nt.prototype)}}class ie extends Error{constructor(a){super();s(this,"urlTree");this.urlTree=a,Object.setPrototypeOf(this,ie.prototype)}}function Io(e){throw new I(4e3,!1)}function To(e){throw Or(!1,T.GuardRejected)}class Oo{constructor(t,a){s(this,"urlSerializer");s(this,"urlTree");this.urlSerializer=t,this.urlTree=a}async lineralizeSegments(t,a){let n=[],i=a.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[f])throw Io(`${t.redirectTo}`);i=i.children[f]}}async applyRedirectCommands(t,a,n,i,r){const o=await Eo(a,i,r);if(o instanceof W)throw new ie(o);const c=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),t,n);if(o[0]==="/")throw new ie(c);return c}applyRedirectCreateUrlTree(t,a,n,i){const r=this.createSegmentGroup(t,a.root,n,i);return new W(r,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(t,a){const n={};return Object.entries(t).forEach(([i,r])=>{if(typeof r=="string"&&r[0]===":"){const c=r.substring(1);n[i]=a[c]}else n[i]=r}),n}createSegmentGroup(t,a,n,i){const r=this.createSegments(t,a.segments,n,i);let o=Object.create(null);return Object.entries(a.children).forEach(([c,l])=>{o[c]=this.createSegmentGroup(t,l,n,i)}),new b(r,o)}createSegments(t,a,n,i){return a.map(r=>r.path[0]===":"?this.findPosParam(t,r,i):this.findOrReturn(r,n))}findPosParam(t,a,n){const i=n[a.path.substring(1)];if(!i)throw new I(4001,!1);return i}findOrReturn(t,a){let n=0;for(const i of a){if(i.path===t.path)return a.splice(n),i;n++}return t}}function Eo(e,t,a){if(typeof e=="string")return Promise.resolve(e);const n=e;return Ce(Rt(j(a,()=>n(t))))}function Lo(e,t){return e.providers&&!e._injector&&(e._injector=Fn(e.providers,t,`Route: ${e.path}`)),e._injector??t}function q(e){return e.outlet||f}function Po(e,t){const a=e.filter(n=>q(n)===t);return a.push(...e.filter(n=>q(n)!==t)),a}const ai={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Mr(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function zo(e,t,a,n,i,r,o){const c=jr(e,t,a);if(!c.matched)return g(c);const l=Mr(r(c));return n=Lo(t,n),Ro(n,t,a,i,l,o).pipe(L(h=>h===!0?c:{...ai}))}function jr(e,t,a){if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||a.length>0)?{...ai}:{matched:!0,consumedSegments:[],remainingSegments:a,parameters:{},positionalParamSegments:{}};const i=(t.matcher||ls)(a,e,t);if(!i)return{...ai};const r={};Object.entries(i.posParams??{}).forEach(([c,l])=>{r[c]=l.path});const o=i.consumed.length>0?{...r,...i.consumed[i.consumed.length-1].parameters}:r;return{matched:!0,consumedSegments:i.consumed,remainingSegments:a.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function en(e,t,a,n,i){return a.length>0&&jo(e,a,n,i)?{segmentGroup:new b(t,Mo(n,new b(a,e.children))),slicedSegments:[]}:a.length===0&&Fo(e,a,n)?{segmentGroup:new b(e.segments,Uo(e,a,n,e.children)),slicedSegments:a}:{segmentGroup:new b(e.segments,e.children),slicedSegments:a}}function Uo(e,t,a,n){const i={};for(const r of a)if(je(e,t,r)&&!n[q(r)]){const o=new b([],{});i[q(r)]=o}return{...n,...i}}function Mo(e,t){const a={};a[f]=t;for(const n of e)if(n.path===""&&q(n)!==f){const i=new b([],{});a[q(n)]=i}return a}function jo(e,t,a,n){return a.some(i=>!je(e,t,i)||!(q(i)!==f)?!1:!(n!==void 0&&q(i)===n))}function Fo(e,t,a){return a.some(n=>je(e,t,n))}function je(e,t,a){return(e.hasChildren()||t.length>0)&&a.pathMatch==="full"?!1:a.path===""}function Do(e,t,a){return t.length===0&&!e.children[a]}class Bo{}async function Ho(e,t,a,n,i,r,o,c){return new $o(e,t,a,n,i,o,r,c).recognize()}const qo=31;class $o{constructor(t,a,n,i,r,o,c,l){s(this,"injector");s(this,"configLoader");s(this,"rootComponentType");s(this,"config");s(this,"urlTree");s(this,"paramsInheritanceStrategy");s(this,"urlSerializer");s(this,"abortSignal");s(this,"applyRedirects");s(this,"absoluteRedirectCount",0);s(this,"allowRedirects",!0);this.injector=t,this.configLoader=a,this.rootComponentType=n,this.config=i,this.urlTree=r,this.paramsInheritanceStrategy=o,this.urlSerializer=c,this.abortSignal=l,this.applyRedirects=new Oo(this.urlSerializer,this.urlTree)}noMatchError(t){return new I(4002,`'${t.segmentGroup}'`)}async recognize(){const t=en(this.urlTree.root,[],[],this.config).segmentGroup,{children:a,rootSnapshot:n}=await this.match(t),i=new D(n,a),r=new Ar("",i),o=Os(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(o),{state:r,tree:o}}async match(t){const a=new ei([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,t,f,a),rootSnapshot:a}}catch(n){if(n instanceof ie)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof nt?this.noMatchError(n):n}}async processSegmentGroup(t,a,n,i,r){if(n.segments.length===0&&n.hasChildren())return this.processChildren(t,a,n,r);const o=await this.processSegment(t,a,n,n.segments,i,!0,r);return o instanceof D?[o]:[]}async processChildren(t,a,n,i){const r=[];for(const l of Object.keys(n.children))l==="primary"?r.unshift(l):r.push(l);let o=[];for(const l of r){const h=n.children[l],d=Po(a,l),u=await this.processSegmentGroup(t,d,h,l,i);o.push(...u)}const c=Fr(o);return Vo(c),c}async processSegment(t,a,n,i,r,o,c){for(const l of a)try{return await this.processSegmentAgainstRoute(l._injector??t,a,l,n,i,r,o,c)}catch(h){if(h instanceof nt||Lr(h))continue;throw h}if(Do(n,i,r))return new Bo;throw new nt(n)}async processSegmentAgainstRoute(t,a,n,i,r,o,c,l){if(q(n)!==o&&(o===f||!je(i,r,n)))throw new nt(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,i,n,r,o,l);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(t,i,a,n,r,o,l);throw new nt(i)}async expandSegmentAgainstRouteUsingRedirect(t,a,n,i,r,o,c){const{matched:l,parameters:h,consumedSegments:d,positionalParamSegments:u,remainingSegments:p}=jr(a,i,r);if(!l)throw new nt(a);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>qo&&(this.allowRedirects=!1));const _=this.createSnapshot(t,i,r,h,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);const v=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,u,Mr(_),t),R=await this.applyRedirects.lineralizeSegments(i,v);return this.processSegment(t,n,a,R.concat(p),o,!1,c)}createSnapshot(t,a,n,i,r){const o=new ei(n,i,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Go(a),q(a),a.component??a._loadedComponent??null,a,Qo(a),t),c=Ti(o,r,this.paramsInheritanceStrategy);return o.params=Object.freeze(c.params),o.data=Object.freeze(c.data),o}async matchSegmentAgainstRoute(t,a,n,i,r,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);const c=mt=>this.createSnapshot(t,n,mt.consumedSegments,mt.parameters,o),l=await Ce(zo(a,n,i,t,this.urlSerializer,c,this.abortSignal));if(n.path==="**"&&(a.children={}),!(l!=null&&l.matched))throw new nt(a);t=n._injector??t;const{routes:h}=await this.getChildConfig(t,n,i),d=n._loadedInjector??t,{parameters:u,consumedSegments:p,remainingSegments:_}=l,v=this.createSnapshot(t,n,p,u,o),{segmentGroup:R,slicedSegments:lt}=en(a,p,_,h,r);if(lt.length===0&&R.hasChildren()){const mt=await this.processChildren(d,h,R,v);return new D(v,mt)}if(h.length===0&&lt.length===0)return new D(v,[]);const Tt=q(n)===r,dt=await this.processSegment(d,h,R,lt,Tt?f:r,!0,v);return new D(v,dt instanceof D?[dt]:[])}async getChildConfig(t,a,n){if(a.children)return{routes:a.children,injector:t};if(a.loadChildren){if(a._loadedRoutes!==void 0){const r=a._loadedNgModuleFactory;return r&&!a._loadedInjector&&(a._loadedInjector=r.create(t).injector),{routes:a._loadedRoutes,injector:a._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ce(Ao(t,a,n,this.urlSerializer,this.abortSignal))){const r=await this.configLoader.loadChildren(t,a);return a._loadedRoutes=r.routes,a._loadedInjector=r.injector,a._loadedNgModuleFactory=r.factory,r}throw To()}return{routes:[],injector:t}}}function Vo(e){e.sort((t,a)=>t.value.outlet===f?-1:a.value.outlet===f?1:t.value.outlet.localeCompare(a.value.outlet))}function Wo(e){const t=e.value.routeConfig;return t&&t.path===""}function Fr(e){const t=[],a=new Set;for(const n of e){if(!Wo(n)){t.push(n);continue}const i=t.find(r=>n.value.routeConfig===r.value.routeConfig);i!==void 0?(i.children.push(...n.children),a.add(i)):t.push(n)}for(const n of a){const i=Fr(n.children);t.push(new D(n.value,i))}return t.filter(n=>!a.has(n))}function Go(e){return e.data||{}}function Qo(e){return e.resolve||{}}function Ko(e,t,a,n,i,r,o){return gt(async c=>{const{state:l,tree:h}=await Ho(e,t,a,n,c.extractedUrl,i,r,o);return{...c,targetSnapshot:l,urlAfterRedirects:h}})}function Zo(e){return gt(t=>{const{targetSnapshot:a,guards:{canActivateChecks:n}}=t;if(!n.length)return g(t);const i=new Set(n.map(c=>c.route)),r=new Set;for(const c of i)if(!r.has(c))for(const l of Dr(c))r.add(l);let o=0;return O(r).pipe(yi(c=>i.has(c)?Xo(c,a,e):(c.data=Ti(c,c.parent,e).resolve,g(void 0))),G(()=>o++),Mn(1),gt(c=>o===r.size?g(t):M))})}function Dr(e){const t=e.children.map(a=>Dr(a)).flat();return[e,...t]}function Xo(e,t,a){const n=e.routeConfig,i=e._resolve;return(n==null?void 0:n.title)!==void 0&&!Ir(n)&&(i[oe]=n.title),wi(()=>(e.data=Ti(e,e.parent,a).resolve,Yo(i,e,t).pipe(L(r=>(e._resolvedData=r,e.data={...e.data,...r},null)))))}function Yo(e,t,a){const n=Ke(e);if(n.length===0)return g({});const i={};return O(n).pipe(gt(r=>Jo(e[r],t,a).pipe(Nt(),G(o=>{if(o instanceof Li)throw Te(new ce,o);i[r]=o}))),Mn(1),L(()=>i),Un(r=>Lr(r)?M:ba(r)))}function Jo(e,t,a){const n=t._environmentInjector,i=qt(e,n),r=i.resolve?i.resolve(t,a):j(n,()=>i(t,a));return Rt(r)}function nn(e){return F(t=>{const a=e(t);return a?O(a).pipe(L(()=>t)):g(t)})}let Br=(()=>{const t=class t{buildTitle(n){let i,r=n.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===f);return i}getResolvedTitleForRoute(n){return n.data[oe]}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:()=>m(tc)}));let e=t;return e})(),tc=(()=>{const t=class t extends Br{constructor(i){super();s(this,"title");this.title=i}updateTitle(i){const r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};s(t,"ɵfac",function(r){return new(r||t)(Ot(ga))}),s(t,"ɵprov",ae({token:t,factory:t.ɵfac,providedIn:"root"}));let e=t;return e})();const It=new y("",{factory:()=>({})}),jt=new y("");let Pi=(()=>{const t=class t{constructor(){s(this,"componentLoaders",new WeakMap);s(this,"childrenLoaders",new WeakMap);s(this,"onLoadStartListener");s(this,"onLoadEndListener");s(this,"compiler",m(ua))}async loadComponent(n,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);const r=(async()=>{try{const o=await cr(j(n,()=>i.loadComponent())),c=await Hr(En(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=c,c}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(n,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);const r=(async()=>{try{const o=await ec(i,this.compiler,n,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})();async function ec(e,t,a,n){const i=await cr(j(a,()=>e.loadChildren())),r=await Hr(En(i));let o;r instanceof pa||Array.isArray(r)?o=r:o=await t.compileModuleAsync(r),n&&n(e);let c,l,h;return Array.isArray(o)?l=o:(c=o.create(a).injector,h=o,l=c.get(jt,[],{optional:!0,self:!0}).flat()),{routes:l.map(Ei),injector:c,factory:h}}async function Hr(e){return e}let zi=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:()=>m(ic)}));let e=t;return e})(),ic=(()=>{const t=class t{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,i){return n}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})();const qr=new y(""),$r=new y("");function nc(e,t,a){const n=e.get($r),i=e.get(Dn);if(!i.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(h=>setTimeout(h));let r;const o=new Promise(h=>{r=h}),c=i.startViewTransition(()=>(r(),rc(e)));c.updateCallbackDone.catch(h=>{}),c.ready.catch(h=>{}),c.finished.catch(h=>{});const{onViewTransitionCreated:l}=n;return l&&j(e,()=>l({transition:c,from:t,to:a})),o}function rc(e){return new Promise(t=>{ka({read:()=>setTimeout(t)},{injector:e})})}const ac=new y(""),sc=()=>{},Vr=new y("");let Ui=(()=>{const t=class t{constructor(){s(this,"currentNavigation",w(null,{equal:()=>!1}));s(this,"currentTransition",null);s(this,"lastSuccessfulNavigation",w(null));s(this,"events",new at);s(this,"transitionAbortWithErrorSubject",new at);s(this,"configLoader",m(Pi));s(this,"environmentInjector",m(re));s(this,"destroyRef",m(ha));s(this,"urlSerializer",m(Ht));s(this,"rootContexts",m(le));s(this,"location",m(Pe));s(this,"inputBindingEnabled",m(Me,{optional:!0})!==null);s(this,"titleStrategy",m(Br));s(this,"options",m(It,{optional:!0})||{});s(this,"paramsInheritanceStrategy",this.options.paramsInheritanceStrategy||Ys);s(this,"urlHandlingStrategy",m(zi));s(this,"createViewTransition",m(qr,{optional:!0}));s(this,"navigationErrorHandler",m(Vr,{optional:!0}));s(this,"activatedRouteInjectorFeature",m(ac,{optional:!0}));s(this,"navigationId",0);s(this,"transitions");s(this,"afterPreactivation",()=>g(void 0));s(this,"rootComponentType",null);s(this,"destroyed",!1);const n=r=>this.events.next(new qs(r)),i=r=>this.events.next(new $s(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}get hasRequestedNavigation(){return this.navigationId!==0}complete(){var n;(n=this.transitions)==null||n.complete()}handleNavigationRequest(n){const i=++this.navigationId;S(()=>{var r;(r=this.transitions)==null||r.next({...n,extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}})})}setupNavigations(n){return this.transitions=new B(null),this.transitions.pipe(Q(i=>i!==null),F(i=>{var h;let r=!0,o=!1;const c=new AbortController,l=()=>{var d;return!o&&((d=this.currentTransition)==null?void 0:d.id)===i.id};return g(i).pipe(F(d=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",T.SupersededByNewNavigation),M;this.currentTransition=i;const u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:d.id,initialUrl:d.rawUrl,extractedUrl:d.extractedUrl,targetBrowserUrl:typeof d.extras.browserUrl=="string"?this.urlSerializer.parse(d.extras.browserUrl):d.extras.browserUrl,trigger:d.source,extras:d.extras,previousNavigation:u?{...u,previousNavigation:null}:null,abort:()=>c.abort(),routesRecognizeHandler:d.routesRecognizeHandler,beforeActivateHandler:d.beforeActivateHandler});const p=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),_=d.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!p&&_!=="reload")return this.events.next(new Ut(d.id,this.urlSerializer.serialize(d.rawUrl),"",Re.IgnoredSameUrlNavigation)),d.resolve(!1),M;if(this.urlHandlingStrategy.shouldProcessUrl(d.rawUrl))return g(d).pipe(F(v=>(this.events.next(new Ae(v.id,this.urlSerializer.serialize(v.extractedUrl),v.source,v.restoredState)),v.id!==this.navigationId?M:Promise.resolve(v))),Ko(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy,c.signal),G(v=>{i.targetSnapshot=v.targetSnapshot,i.urlAfterRedirects=v.urlAfterRedirects,this.currentNavigation.update(R=>(R.finalUrl=v.urlAfterRedirects,R)),this.events.next(new Sr)}),F(v=>O(i.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(L(()=>v))),G(()=>{const v=new wr(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(v)}));if(p&&this.urlHandlingStrategy.shouldProcessUrl(d.currentRawUrl)){const{id:v,extractedUrl:R,source:lt,restoredState:Tt,extras:dt}=d,mt=new Ae(v,this.urlSerializer.serialize(R),lt,Tt);this.events.next(mt);const aa=Nr(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i={...d,targetSnapshot:aa,urlAfterRedirects:R,extras:{...dt,skipLocationChange:!1,replaceUrl:!1}},this.currentNavigation.update(Di=>(Di.finalUrl=R,Di)),g(i)}else return this.events.next(new Ut(d.id,this.urlSerializer.serialize(d.extractedUrl),"",Re.IgnoredByUrlHandlingStrategy)),d.resolve(!1),M}),L(d=>{const u=new Fs(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);return this.events.next(u),this.currentTransition=i={...d,guards:oo(d.targetSnapshot,d.currentSnapshot,this.rootContexts)},i}),bo(d=>this.events.next(d)),F(d=>{if(i.guardsResult=d.guardsResult,d.guardsResult&&typeof d.guardsResult!="boolean")throw Te(this.urlSerializer,d.guardsResult);const u=new Ds(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot,!!d.guardsResult);if(this.events.next(u),!l())return M;if(!d.guardsResult)return this.cancelNavigationTransition(d,"",T.GuardRejected),M;if(d.guards.canActivateChecks.length===0)return g(d);const p=new Bs(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);if(this.events.next(p),!l())return M;let _=!1;return g(d).pipe(Zo(this.paramsInheritanceStrategy),G({next:()=>{_=!0;const v=new Hs(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(v)},complete:()=>{_||this.cancelNavigationTransition(d,"",T.NoDataFromResolver)}}))}),nn(d=>{const u=_=>{var R,lt,Tt;const v=[];if((R=_.routeConfig)!=null&&R._loadedComponent)_.component=(lt=_.routeConfig)==null?void 0:lt._loadedComponent;else if((Tt=_.routeConfig)!=null&&Tt.loadComponent){const dt=_._environmentInjector;v.push(this.configLoader.loadComponent(dt,_.routeConfig).then(mt=>{_.component=mt}))}for(const dt of _.children)v.push(...u(dt));return v},p=u(d.targetSnapshot.root);return p.length===0?g(d):O(Promise.all(p).then(()=>d))}),F(d=>{const{newlyCreatedRoutes:u,state:p}=io(n.routeReuseStrategy,d.targetSnapshot,d.currentRouterState);return this.currentTransition=i=d={...d,targetRouterState:p,newlyCreatedRoutes:u},this.currentNavigation.update(_=>(_.targetRouterState=p,_)),g(d)}),((h=this.activatedRouteInjectorFeature)==null?void 0:h.operator())??(d=>d),nn(()=>this.afterPreactivation()),F(()=>{var _;const{currentSnapshot:d,targetSnapshot:u}=i,p=(_=this.createViewTransition)==null?void 0:_.call(this,this.environmentInjector,d.root,u.root);return p?O(p).pipe(L(()=>i)):g(i)}),Lt(1),F(d=>{r=!1,this.events.next(new Ii);const u=i.beforeActivateHandler.deferredHandle;return u?O(u.then(()=>d)):g(d)}),G(d=>{var u,p;new so(n.routeReuseStrategy,i.targetRouterState,i.currentRouterState,_=>this.events.next(_),this.inputBindingEnabled).activate(this.rootContexts),(u=d.newlyCreatedRoutes)==null||u.clear(),l()&&(o=!0,this.currentNavigation.update(_=>(_.abort=sc,_)),this.lastSuccessfulNavigation.set(S(this.currentNavigation)),this.events.next(new Y(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects))),(p=this.titleStrategy)==null||p.updateTitle(d.targetRouterState.snapshot),d.resolve(!0))}),Yt(Pr(c.signal).pipe(Q(()=>!o&&r),G(()=>{this.cancelNavigationTransition(i,c.signal.reason+"",T.Aborted)}))),G({complete:()=>{o=!0}}),Yt(this.transitionAbortWithErrorSubject.pipe(G(d=>{throw d}))),fa(()=>{var d;c.abort(),o||this.cancelNavigationTransition(i,"",T.SupersededByNewNavigation),((d=this.currentTransition)==null?void 0:d.id)===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Un(d=>{if(o=!0,rn(i),this.destroyed)return i.resolve(!1),M;if(Er(d))this.events.next(new pt(i.id,this.urlSerializer.serialize(i.extractedUrl),d.message,d.cancellationCode)),ao(d)?this.events.next(new Ie(d.url,d.navigationBehaviorOptions)):i.resolve(!1);else{const u=new Ri(i.id,this.urlSerializer.serialize(i.extractedUrl),d,i.targetSnapshot??void 0);try{const p=j(this.environmentInjector,()=>{var _;return(_=this.navigationErrorHandler)==null?void 0:_.call(this,u)});if(p instanceof Li){const{message:_,cancellationCode:v}=Te(this.urlSerializer,p);this.events.next(new pt(i.id,this.urlSerializer.serialize(i.extractedUrl),_,v)),this.events.next(new Ie(p.redirectTo,p.navigationBehaviorOptions))}else throw this.events.next(u),d}catch(p){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(p)}}return M}))}))}cancelNavigationTransition(n,i,r){rn(n);const o=new pt(n.id,this.urlSerializer.serialize(n.extractedUrl),i,r);this.events.next(o),n.resolve(!1)}isUpdatingInternalState(){var n,i;return((n=this.currentTransition)==null?void 0:n.extractedUrl.toString())!==((i=this.currentTransition)==null?void 0:i.currentUrlTree.toString())}isUpdatedBrowserUrl(){const n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=S(this.currentNavigation),r=(i==null?void 0:i.targetBrowserUrl)??(i==null?void 0:i.extractedUrl);return n.toString()!==(r==null?void 0:r.toString())&&!(i!=null&&i.extras.skipLocationChange)}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})();function oc(e){return e!==Zt}function rn(e){var t;if(e.newlyCreatedRoutes)for(const a of e.newlyCreatedRoutes)(t=a._localInjector)==null||t.destroy()}const cc=new y("");let lc=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:()=>m(mc)}));let e=t;return e})();class dc{shouldDetach(t){return!1}store(t,a){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,a){return t.routeConfig===a.routeConfig}shouldDestroyInjector(t){return!0}}let mc=(()=>{const t=class t extends dc{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})(),Mi=(()=>{const t=class t{constructor(){s(this,"urlSerializer",m(Ht));s(this,"options",m(It,{optional:!0})||{});s(this,"canceledNavigationResolution",this.options.canceledNavigationResolution||"replace");s(this,"location",m(Pe));s(this,"urlHandlingStrategy",m(zi));s(this,"urlUpdateStrategy",this.options.urlUpdateStrategy||"deferred");s(this,"currentUrlTree",new W);s(this,"rawUrlTree",this.currentUrlTree);s(this,"routerState",Nr(null,m(re)));s(this,"_stateMemento",this.createStateMemento())}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:i,targetBrowserUrl:r}){const o=n!==void 0?this.urlHandlingStrategy.merge(n,i):i,c=r??o;return c instanceof W?this.urlSerializer.serialize(c):c}routerUrlState(n){return(n==null?void 0:n.targetBrowserUrl)===void 0||(n==null?void 0:n.finalUrl)===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(n.finalUrl)}}commitTransition({targetRouterState:n,finalUrl:i,initialUrl:r}){i&&n?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=n):this.rawUrlTree=r}getRouterState(){return this.routerState}get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:()=>m(hc)}));let e=t;return e})(),hc=(()=>{const t=class t extends Mi{constructor(){super(...arguments);s(this,"currentPageId",0);s(this,"lastSuccessfulId",-1)}get browserPageId(){var i;return this.canceledNavigationResolution!=="computed"?this.currentPageId:((i=this.restoredState())==null?void 0:i.ɵrouterPageId)??this.currentPageId}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{i(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(i,r){i instanceof Ae?this.updateStateMemento():i instanceof Ut?this.commitTransition(r):i instanceof wr?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):i instanceof Ii?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):i instanceof pt&&!js(i)?this.restoreHistory(r):i instanceof Ri?this.restoreHistory(r,!0):i instanceof Y&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){const{extras:o,id:c}=r,{replaceUrl:l,state:h}=o;if(this.location.isCurrentPathEqualTo(i)||l){const d=this.browserPageId,u={...h,...this.generateNgRouterState(c,d,r)};this.location.replaceState(i,"",u)}else{const d={...h,...this.generateNgRouterState(c,this.browserPageId+1,r)};this.location.go(i,"",d)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){const o=this.browserPageId,c=this.currentPageId-o;c!==0?this.location.historyGo(c):this.getCurrentUrlTree()===i.finalUrl&&c===0&&(this.resetInternalState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(i),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:i}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r,o){return this.canceledNavigationResolution==="computed"?{navigationId:i,ɵrouterPageId:r,...this.routerUrlState(o)}:{navigationId:i,...this.routerUrlState(o)}}};s(t,"ɵfac",function(r){return new(r||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})();function Wr(e,t){e.events.pipe(Q(a=>a instanceof Y||a instanceof pt||a instanceof Ri||a instanceof Ut),L(a=>a instanceof Y||a instanceof Ut?0:(a instanceof pt?a.code===T.Redirect||a.code===T.SupersededByNewNavigation:!1)?2:1),Q(a=>a!==2),Lt(1)).subscribe(()=>{t()})}let it=(()=>{var t;const a=class a{constructor(){s(this,"disposed",!1);s(this,"nonRouterCurrentEntryChangeSubscription");s(this,"console",m(la));s(this,"stateManager",m(Mi));s(this,"options",m(It,{optional:!0})||{});s(this,"pendingTasks",m(da));s(this,"urlUpdateStrategy",this.options.urlUpdateStrategy||"deferred");s(this,"navigationTransitions",m(Ui));s(this,"urlSerializer",m(Ht));s(this,"location",m(Pe));s(this,"urlHandlingStrategy",m(zi));s(this,"injector",m(re));s(this,"_events",new at);s(this,"navigated",!1);s(this,"routeReuseStrategy",m(lc));s(this,"injectorCleanup",m(cc,{optional:!0}));s(this,"onSameUrlNavigation",this.options.onSameUrlNavigation||"ignore");s(this,"config",((t=m(jt,{optional:!0}))==null?void 0:t.flat())??[]);s(this,"componentInputBindingEnabled",!!m(Me,{optional:!0}));s(this,"currentNavigation",this.navigationTransitions.currentNavigation.asReadonly());s(this,"eventsSubscription",new ze);this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:i=>{}}),this.subscribeToNavigationEvents()}get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}subscribeToNavigationEvents(){const i=this.navigationTransitions.events.subscribe(r=>{var o;try{const c=this.navigationTransitions.currentTransition,l=S(this.navigationTransitions.currentNavigation);if(c!==null&&l!==null){if(this.stateManager.handleRouterEvent(r,l),r instanceof pt&&r.code!==T.Redirect&&r.code!==T.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Y)this.navigated=!0,(o=this.injectorCleanup)==null||o.call(this,this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Ie){const h=r.navigationBehaviorOptions,d=this.urlHandlingStrategy.merge(r.url,c.currentRawUrl),u={scroll:c.extras.scroll,browserUrl:c.extras.browserUrl,info:c.extras.info,skipLocationChange:c.extras.skipLocationChange,replaceUrl:c.extras.replaceUrl||this.urlUpdateStrategy==="eager"||oc(c.source),...h};this.scheduleNavigation(d,Zt,null,u,{resolve:c.resolve,reject:c.reject,promise:c.promise})}}Ks(r)&&this._events.next(r)}catch(c){this.navigationTransitions.transitionAbortWithErrorSubject.next(c)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Zt,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??(this.nonRouterCurrentEntryChangeSubscription=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r,o,c)=>{this.navigateToSyncWithBrowser(i,o,r,c)}))}navigateToSyncWithBrowser(i,r,o,c){const l=o!=null&&o.navigationId?o:null,h=(o==null?void 0:o.ɵrouterUrl)??i;if(o!=null&&o.ɵrouterUrl&&(c={...c,browserUrl:i}),o){const u={...o};delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(c.state=u)}const d=this.parseUrl(h);this.scheduleNavigation(d,r,l,c).catch(u=>{this.disposed||this.injector.get(On)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return S(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(Ei),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){var i;this._events.unsubscribe(),this.navigationTransitions.complete(),(i=this.nonRouterCurrentEntryChangeSubscription)==null||i.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){const{relativeTo:o,queryParams:c,fragment:l,queryParamsHandling:h,preserveFragment:d}=r,u=d?this.currentUrlTree.fragment:l;let p=null;switch(h??this.options.defaultQueryParamsHandling){case"merge":p={...this.currentUrlTree.queryParams,...c};break;case"preserve":p=this.currentUrlTree.queryParams;break;default:p=c||null}p!==null&&(p=this.removeEmptyProps(p));let _;try{const v=o?o.snapshot:this.routerState.snapshot.root;_=vr(v)}catch{(typeof i[0]!="string"||i[0][0]!=="/")&&(i=[]),_=this.currentUrlTree.root}return br(_,i,p,u??null,this.urlSerializer)}navigateByUrl(i,r={skipLocationChange:!1}){const o=St(i)?i:this.parseUrl(i),c=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(c,Zt,null,r)}navigate(i,r={skipLocationChange:!1}){return uc(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.console.warn(ma(4018,!1)),this.urlSerializer.parse("/")}}isActive(i,r){let o;if(r===!0?o={...dr}:r===!1?o={...Jt}:o={...Jt,...r},St(i))return Ze(this.currentUrlTree,i,o);const c=this.parseUrl(i);return Ze(this.currentUrlTree,c,o)}removeEmptyProps(i){return Object.entries(i).reduce((r,[o,c])=>(c!=null&&(r[o]=c),r),{})}scheduleNavigation(i,r,o,c,l){if(this.disposed)return Promise.resolve(!1);let h,d,u;l?(h=l.resolve,d=l.reject,u=l.promise):u=new Promise((_,v)=>{h=_,d=v});const p=this.pendingTasks.add();return Wr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(p))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:c,resolve:h,reject:d,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}};s(a,"ɵfac",function(r){return new(r||a)}),s(a,"ɵprov",z({token:a,factory:a.ɵfac}));let e=a;return e})();function uc(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new I(4008,!1)}/**
 * @license Angular v22.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */let pc=(()=>{const t=class t{constructor(){s(this,"router",m(it));s(this,"stateManager",m(Mi));s(this,"fragment",w(""));s(this,"queryParams",w({}));s(this,"path",w(""));s(this,"serializer",m(Ht));var n;this.updateState(),(n=this.router.events)==null||n.subscribe(i=>{i instanceof Y&&this.updateState()})}updateState(){const{fragment:n,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(n),this.queryParams.set(r),this.path.set(this.serializer.serialize(new W(i)))}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})(),Oe=(()=>{const t=class t{constructor(n,i,r,o,c,l){s(this,"router");s(this,"route");s(this,"tabIndexAttribute");s(this,"renderer");s(this,"el");s(this,"locationStrategy");s(this,"hrefAttributeValue",m(new Vn("href"),{optional:!0}));s(this,"reactiveHref",Ea(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue));s(this,"_target",w(void 0));s(this,"_queryParams",w(void 0,{equal:()=>!1}));s(this,"_fragment",w(void 0));s(this,"_queryParamsHandling",w(void 0));s(this,"_state",w(void 0,{equal:()=>!1}));s(this,"_info",w(void 0,{equal:()=>!1}));s(this,"_relativeTo",w(void 0));s(this,"_preserveFragment",w(!1));s(this,"_skipLocationChange",w(!1));s(this,"_replaceUrl",w(!1));s(this,"browserUrl",Pn(void 0));s(this,"isAnchorElement");s(this,"onChanges",new at);s(this,"applicationErrorHandler",m(On));s(this,"options",m(It,{optional:!0}));s(this,"reactiveRouterState",m(pc));s(this,"routerLinkInput",w(null));s(this,"_urlTree",Bn(()=>{var r;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();const n=o=>o==="preserve"||o==="merge";(n(this._queryParamsHandling())||n((r=this.options)==null?void 0:r.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();const i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:St(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(n,i)=>this.computeHref(n)===this.computeHref(i)}));var d,u,p,_;this.router=n,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=c,this.locationStrategy=l;const h=(d=c.nativeElement.tagName)==null?void 0:d.toLowerCase();this.isAnchorElement=h==="a"||h==="area"||!!(typeof customElements=="object"&&((_=(p=(u=customElements.get(h))==null?void 0:u.observedAttributes)==null?void 0:p.includes)!=null&&_.call(p,"href")))}get href(){return S(this.reactiveHref)}set href(n){this.reactiveHref.set(n)}set target(n){this._target.set(n)}get target(){return S(this._target)}set queryParams(n){this._queryParams.set(n)}get queryParams(){return S(this._queryParams)}set fragment(n){this._fragment.set(n)}get fragment(){return S(this._fragment)}set queryParamsHandling(n){this._queryParamsHandling.set(n)}get queryParamsHandling(){return S(this._queryParamsHandling)}set state(n){this._state.set(n)}get state(){return S(this._state)}set info(n){this._info.set(n)}get info(){return S(this._info)}set relativeTo(n){this._relativeTo.set(n)}get relativeTo(){return S(this._relativeTo)}set preserveFragment(n){this._preserveFragment.set(n)}get preserveFragment(){return S(this._preserveFragment)}set skipLocationChange(n){this._skipLocationChange.set(n)}get skipLocationChange(){return S(this._skipLocationChange)}set replaceUrl(n){this._replaceUrl.set(n)}get replaceUrl(){return S(this._replaceUrl)}setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.onChanges.next(this)}set routerLink(n){n==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(St(n)?this.routerLinkInput.set(n):this.routerLinkInput.set(Array.isArray(n)?n:[n]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(n,i,r,o,c){var u;const l=this._urlTree();if(l===null||this.isAnchorElement&&(n!==0||i||r||o||c||typeof this.target=="string"&&this.target!="_self"))return!0;const h=this.browserUrl(),d={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info,...h!==void 0&&{browserUrl:h}};return(u=this.router.navigateByUrl(l,d))==null||u.catch(p=>{this.applicationErrorHandler(p)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(n,i){const r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,n,i):r.removeAttribute(o,n)}get urlTree(){return S(this._urlTree)}computeHref(n){var i;return n!==null&&this.locationStrategy?((i=this.locationStrategy)==null?void 0:i.prepareExternalUrl(this.router.serializeUrl(n)))??"":null}};s(t,"ɵfac",function(i){return new(i||t)(rt(it),rt(de),La("tabindex"),rt(se),rt(ot),rt(ki))}),s(t,"ɵdir",k({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&Pt("click",function(c){return r.onClick(c.button,c.ctrlKey,c.shiftKey,c.altKey,c.metaKey)}),i&2&&Z("href",r.reactiveHref(),za)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ut],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ut],replaceUrl:[2,"replaceUrl","replaceUrl",ut],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[Dt]}));let e=t;return e})(),an=(()=>{const t=class t{constructor(n,i,r,o){s(this,"router");s(this,"element");s(this,"renderer");s(this,"cdr");s(this,"links");s(this,"classes",[]);s(this,"routerEventsSubscription");s(this,"linkInputChangesSubscription");s(this,"_isActive",!1);s(this,"routerLinkActiveOptions",{exact:!1});s(this,"ariaCurrentWhenActive");s(this,"isActiveChange",new U);s(this,"link",m(Oe,{optional:!0}));this.router=n,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=n.events.subscribe(c=>{c instanceof Y&&this.update()})}get isActive(){return this._isActive}ngAfterContentInit(){g(this.links.changes,g(null)).pipe(ke()).subscribe(n=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){var i;(i=this.linkInputChangesSubscription)==null||i.unsubscribe();const n=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=O(n).pipe(ke()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(n){if(n==null){this.classes=[];return}const i=Array.isArray(n)?n:n.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(n){this.update()}ngOnDestroy(){var n;this.routerEventsSubscription.unsubscribe(),(n=this.linkInputChangesSubscription)==null||n.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{const n=this.hasActiveLinks();this.classes.forEach(i=>{n?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),n&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==n&&(this._isActive=n,this.cdr.markForCheck(),this.isActiveChange.emit(n))})}isLinkActive(n){const i=this.routerLinkActiveOptions;if(i===null)return()=>!1;let r;return i===void 0?r={...Jt}:gc(i)?r=i:i.exact??!1?r={...dr}:r={...Jt},o=>{const c=o.urlTree;return c?S(us(c,n,r)):!1}}hasActiveLinks(){const n=this.isLinkActive(this.router);return this.link&&n(this.link)||this.links.some(n)}};s(t,"ɵfac",function(i){return new(i||t)(rt(it),rt(ot),rt(se),rt(Ft))}),s(t,"ɵdir",k({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&At(o,Oe,5),i&2){let c;N(c=A())&&(r.links=c)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Dt]}));let e=t;return e})();function gc(e){const t=e;return!!(t.paths||t.matrixParams||t.queryParams||t.fragment)}class Gr{}let fc=(()=>{const t=class t{preload(n,i){return g(null)}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵprov",z({token:t,factory:t.ɵfac}));let e=t;return e})(),_c=(()=>{const t=class t{constructor(n,i,r,o){s(this,"router");s(this,"injector");s(this,"preloadingStrategy");s(this,"loader");s(this,"subscription");this.router=n,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Q(n=>n instanceof Y),yi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){var n;(n=this.subscription)==null||n.unsubscribe()}processRoutes(n,i){const r=[];for(const o of i){o.providers&&!o._injector&&(o._injector=Fn(o.providers,n,""));const c=o._injector??n;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(c).injector);const l=o._loadedInjector??c;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(c,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(l,o.children??o._loadedRoutes))}return O(r).pipe(ke())}preloadConfig(n,i){return this.preloadingStrategy.preload(i,()=>{if(n.destroyed)return g(null);let r;i.loadChildren&&i.canLoad===void 0?r=O(this.loader.loadChildren(n,i)):r=g(null);const o=r.pipe(gt(c=>c===null?g(void 0):(i._loadedRoutes=c.routes,i._loadedInjector=c.injector,i._loadedNgModuleFactory=c.factory,this.processRoutes(c.injector??n,c.routes))));if(i.loadComponent&&!i._loadedComponent){const c=this.loader.loadComponent(n,i);return O([o,c]).pipe(ke())}else return o})}};s(t,"ɵfac",function(i){return new(i||t)(Ot(it),Ot(re),Ot(Gr),Ot(Pi))}),s(t,"ɵprov",ae({token:t,factory:t.ɵfac,providedIn:"root"}));let e=t;return e})();const Qr=new y("");let vc=(()=>{const t=class t{constructor(n){s(this,"options");s(this,"routerEventsSubscription");s(this,"scrollEventsSubscription");s(this,"lastId",0);s(this,"lastSource",Zt);s(this,"restoredId",0);s(this,"store",{});s(this,"isHydrating",m(Ta,{optional:!0})??!1);s(this,"urlSerializer",m(Ht));s(this,"zone",m(Ue));s(this,"viewportScroller",m(qn));s(this,"transitions",m(Ui));var i,r;this.options=n,(i=this.options).scrollPositionRestoration||(i.scrollPositionRestoration="disabled"),(r=this.options).anchorScrolling||(r.anchorScrolling="disabled"),this.isHydrating&&m($n).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof Ae?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof Y?(this.lastId=n.id,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.urlAfterRedirects).fragment)):n instanceof Ut&&n.code===Re.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(n=>{if(!(n instanceof Ji)||n.scrollBehavior==="manual")return;const i={behavior:"instant"};n.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(n.position,i):n.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(n.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(n,i){var o;if(this.isHydrating)return;const r=(o=S(this.transitions.currentNavigation))==null?void 0:o.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(c=>{setTimeout(c),typeof requestAnimationFrame<"u"&&requestAnimationFrame(c)}),this.zone.run(()=>{this.transitions.events.next(new Ji(n,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){var n,i;(n=this.routerEventsSubscription)==null||n.unsubscribe(),(i=this.scrollEventsSubscription)==null||i.unsubscribe()}};s(t,"ɵfac",function(i){Hn()}),s(t,"ɵprov",ae({token:t,factory:t.ɵfac}));let e=t;return e})();function bc(){return m(it).routerState.root}function he(e,t){return{ɵkind:e,ɵproviders:t}}function xc(){const e=m(Ci);return t=>{var r,o;const a=e.get($n);if(t!==a.components[0])return;const n=e.get(it),i=e.get(Kr);e.get(ji)===1&&n.initialNavigation(),(r=e.get(Zr,null,{optional:!0}))==null||r.setUpPreloading(),(o=e.get(Qr,null,{optional:!0}))==null||o.init(),n.resetRootComponentType(a.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}const Kr=new y("",{factory:()=>new at}),ji=new y("",{factory:()=>1});function yc(){const e=[{provide:Oa,useValue:!0},{provide:ji,useValue:0},Wn(()=>{const t=m(Ci);return t.get(Pa,Promise.resolve()).then(()=>new Promise(n=>{const i=t.get(it),r=t.get(Kr);Wr(i,()=>{n(!0)}),t.get(Ui).afterPreactivation=()=>(n(!0),r.closed?g(void 0):r),i.initialNavigation()}))})];return he(2,e)}function wc(){const e=[Wn(()=>{m(it).setUpLocationChangeListener()}),{provide:ji,useValue:2}];return he(3,e)}const Zr=new y("");function Xr(e){return he(0,[{provide:Zr,useExisting:_c},{provide:Gr,useExisting:e}])}function Sc(e={}){return he(8,[{provide:Me,useFactory:()=>new eo(e)}])}function kc(e){Ra("NgRouterViewTransitions");const t=[{provide:qr,useValue:nc},{provide:$r,useValue:{skipNextTransition:!1,...e}}];return he(9,t)}const Yr=[Pe,{provide:Ht,useClass:ce},it,le,{provide:de,useFactory:bc},Pi];let si=(()=>{const t=class t{constructor(){}static forRoot(n,i){return{ngModule:t,providers:[Yr,[],{provide:jt,multi:!0,useValue:n},[],i!=null&&i.errorHandler?{provide:Vr,useValue:i.errorHandler}:[],{provide:It,useValue:i||{}},i!=null&&i.useHash?Nc():Ac(),Cc(),i!=null&&i.preloadingStrategy?Xr(i.preloadingStrategy).ɵproviders:[],i!=null&&i.initialNavigation?Rc(i):[],i!=null&&i.bindToComponentInputs?Sc(typeof i.bindToComponentInputs=="object"?i.bindToComponentInputs:{}).ɵproviders:[],i!=null&&i.enableViewTransitions?kc().ɵproviders:[],Ic()]}}static forChild(n){return{ngModule:t,providers:[{provide:jt,multi:!0,useValue:n}]}}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵmod",kt({type:t,imports:[ni,Oe,an,ri],exports:[ni,Oe,an,ri]})),s(t,"ɵinj",Ct({}));let e=t;return e})();function Cc(){return{provide:Qr,useFactory:()=>{const e=m(qn),t=m(It);return t.scrollOffset&&e.setOffset(t.scrollOffset),new vc(t)}}}function Nc(){return{provide:ki,useClass:Na}}function Ac(){return{provide:ki,useClass:Aa}}function Rc(e){return[e.initialNavigation==="disabled"?wc().ɵproviders:[],e.initialNavigation==="enabledBlocking"?yc().ɵproviders:[]]}const sn=new y("");function Ic(){return[{provide:sn,useFactory:xc},{provide:Ia,multi:!0,useExisting:sn}]}const oi=new y("CdkAccordion");let ci=(()=>{const t=class t{constructor(){s(this,"_stateChanges",new at);s(this,"_openCloseAllActions",new at);s(this,"id",m(Ai).getId("cdk-accordion-"));s(this,"multi",!1)}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(n){this._stateChanges.next(n)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",ut]},exportAs:["cdkAccordion"],features:[ct([{provide:oi,useExisting:t}]),Dt]}));let e=t;return e})(),li=(()=>{const t=class t{constructor(){s(this,"accordion",m(oi,{optional:!0,skipSelf:!0}));s(this,"_changeDetectorRef",m(Ft));s(this,"_expansionDispatcher",m(sr));s(this,"_openCloseAllSubscription",ze.EMPTY);s(this,"closed",new U);s(this,"opened",new U);s(this,"destroyed",new U);s(this,"expandedChange",new U);s(this,"id",m(Ai).getId("cdk-accordion-child-"));s(this,"_expanded",!1);s(this,"_disabled",w(!1));s(this,"_removeUniqueSelectionListener",()=>{})}get expanded(){return this._expanded}set expanded(n){if(this._expanded!==n){if(this._expanded=n,this.expandedChange.emit(n),n){this.opened.emit();const i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}get disabled(){return this._disabled()}set disabled(n){this._disabled.set(n)}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((n,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==n&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(n=>{this.disabled||(this.expanded=n)})}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",ut],disabled:[2,"disabled","disabled",ut]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[ct([{provide:oi,useValue:void 0}])]}));let e=t;return e})(),on=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵmod",kt({type:t,imports:[ci,li],exports:[ci,li]})),s(t,"ɵinj",Ct({}));let e=t;return e})();const Tc=["body"],Oc=["bodyWrapper"],Ec=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Lc=["mat-expansion-panel-header","*","mat-action-row"];function Pc(e,t){}const zc=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Uc=["mat-panel-title","mat-panel-description","*"];function Mc(e,t){e&1&&(Qe(0,"span",1),Kn(),Qe(1,"svg",2),Da(2,"path",3),Qn()())}const di=new y("MAT_ACCORDION"),Jr=new y("MAT_EXPANSION_PANEL");let mi=(()=>{const t=class t{constructor(){s(this,"_template",m(Fa));s(this,"_expansionPanel",m(Jr,{optional:!0}))}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]}));let e=t;return e})();const ta=new y("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let hi=(()=>{const t=class t extends li{constructor(){super();s(this,"_viewContainerRef",m(zn));s(this,"_animationsDisabled",tr());s(this,"_document",m(Dn));s(this,"_ngZone",m(Ue));s(this,"_elementRef",m(ot));s(this,"_renderer",m(se));s(this,"_cleanupTransitionEnd");s(this,"_hideToggle",!1);s(this,"_togglePosition");s(this,"afterExpand",new U);s(this,"afterCollapse",new U);s(this,"_inputChanges",new at);s(this,"accordion",m(di,{optional:!0,skipSelf:!0}));s(this,"_lazyContent");s(this,"_body");s(this,"_bodyWrapper");s(this,"_portal");s(this,"_headerId",m(Ai).getId("mat-expansion-panel-header-"));s(this,"_transitionEndListener",({target:i,propertyName:r})=>{var o;i===((o=this._bodyWrapper)==null?void 0:o.nativeElement)&&r==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})});const i=m(ta,{optional:!0});this._expansionDispatcher=m(sr),i&&(this.hideToggle=i.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(i){this._hideToggle=i}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(i){this._togglePosition=i}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Si(null),Q(()=>this.expanded&&!this._portal),Lt(1)).subscribe(()=>{this._portal=new Xa(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(i){this._inputChanges.next(i)}ngOnDestroy(){var i;super.ngOnDestroy(),(i=this._cleanupTransitionEnd)==null||i.call(this),this._inputChanges.complete()}_containsFocus(){if(this._body){const i=this._document.activeElement,r=this._body.nativeElement;return i===r||r.contains(i)}return!1}_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{const i=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this._transitionEndListener),i.classList.add("mat-expansion-panel-animations-enabled")},200)})}};s(t,"ɵfac",function(r){return new(r||t)}),s(t,"ɵcmp",J({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(r,o,c){if(r&1&&At(c,mi,5),r&2){let l;N(l=A())&&(o._lazyContent=l.first)}},viewQuery:function(r,o){if(r&1&&Ni(Tc,5)(Oc,5),r&2){let c;N(c=A())&&(o._body=c.first),N(c=A())&&(o._bodyWrapper=c.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(r,o){r&2&&$("mat-expanded",o.expanded)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",ut],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[ct([{provide:di,useValue:void 0},{provide:Jr,useExisting:t}]),tt,Dt],ngContentSelectors:Lc,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(r,o){r&1&&(vt(Ec),x(0),P(1,"div",2,0)(3,"div",3,1)(5,"div",4),x(6,1),bt(7,Pc,0,0,"ng-template",5),V(),x(8,2),V()()),r&2&&(E(),Z("inert",o.expanded?null:""),E(2),X("id",o.id),Z("aria-labelledby",o._headerId),E(4),X("cdkPortalOutlet",o._portal))},dependencies:[Ya],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2}));let e=t;return e})(),cn=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["mat-action-row"]],hostAttrs:[1,"mat-action-row"]}));let e=t;return e})(),ui=(()=>{const t=class t{constructor(){s(this,"panel",m(hi,{host:!0}));s(this,"_element",m(ot));s(this,"_focusMonitor",m(es));s(this,"_changeDetectorRef",m(Ft));s(this,"_parentChangeSubscription",ze.EMPTY);s(this,"expandedHeight");s(this,"collapsedHeight");s(this,"tabIndex",0);m(er).load(Yn);const n=this.panel,i=m(ta,{optional:!0}),r=m(new Vn("tabindex"),{optional:!0}),o=n.accordion?n.accordion._stateChanges.pipe(Q(c=>!!(c.hideToggle||c.togglePosition))):M;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=Gn(n.opened,n.closed,o,n._inputChanges.pipe(Q(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),n.closed.pipe(Q(()=>n._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const n=this._isExpanded();return n&&this.expandedHeight?this.expandedHeight:!n&&this.collapsedHeight?this.collapsedHeight:null}_keydown(n){switch(n.keyCode){case nr:case ir:Jn(n)||(n.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(n);return}}focus(n,i){n?this._focusMonitor.focusVia(this._element,n,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(n=>{n&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵcmp",J({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,r){i&1&&Pt("click",function(){return r._toggle()})("keydown",function(c){return r._keydown(c)}),i&2&&(Z("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),ja("height",r._getHeaderHeight()),$("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",n=>n==null?0:Ma(n)]},ngContentSelectors:Uc,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,r){i&1&&(vt(zc),Qe(0,"span",0),x(1),x(2,1),x(3,2),Qn(),$t(4,Mc,3,0,"span",1)),i&2&&($("mat-content-hide-toggle",!r._showToggle()),E(4),Vt(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2}));let e=t;return e})(),ln=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}));let e=t;return e})(),dn=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}));let e=t;return e})(),mn=(()=>{const t=class t extends ci{constructor(){super(...arguments);s(this,"_keyManager");s(this,"_ownHeaders",new Ua);s(this,"_headers");s(this,"hideToggle",!1);s(this,"displayMode","default");s(this,"togglePosition","after")}ngAfterContentInit(){this._headers.changes.pipe(Si(this._headers)).subscribe(i=>{this._ownHeaders.reset(i.filter(r=>r.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new ar(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(i){this._keyManager.onKeydown(i)}_handleHeaderFocus(i){this._keyManager.updateActiveItem(i)}ngOnDestroy(){var i;super.ngOnDestroy(),(i=this._keyManager)==null||i.destroy(),this._ownHeaders.destroy()}};s(t,"ɵfac",(()=>{let i;return function(o){return(i||(i=_t(t)))(o||t)}})()),s(t,"ɵdir",k({type:t,selectors:[["mat-accordion"]],contentQueries:function(r,o,c){if(r&1&&At(c,ui,5),r&2){let l;N(l=A())&&(o._headers=l)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(r,o){r&2&&$("mat-accordion-multi",o.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",ut],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[ct([{provide:di,useExisting:t}]),tt]}));let e=t;return e})(),jc=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵmod",kt({type:t,imports:[on,Hi,mn,hi,cn,ui,dn,ln,mi],exports:[ft,mn,hi,cn,ui,dn,ln,mi]})),s(t,"ɵinj",Ct({imports:[on,Hi,ft]}));let e=t;return e})(),hn=(()=>{const t=class t{constructor(){s(this,"_vertical",!1);s(this,"_inset",!1)}get vertical(){return this._vertical}set vertical(n){this._vertical=H(n)}get inset(){return this._inset}set inset(n){this._inset=H(n)}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵcmp",J({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(Z("aria-orientation",r.vertical?"vertical":"horizontal"),$("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2}));let e=t;return e})(),un=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵmod",kt({type:t,imports:[hn],exports:[hn,ft]})),s(t,"ɵinj",Ct({imports:[ft]}));let e=t;return e})();const Fe=["*"],Fi=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`,ea=["unscopedContent"],Fc=["text"],Dc=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Bc=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"],Hc=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],qc=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function $c(e,t){e&1&&x(0,4)}function Vc(e,t){if(e&1&&(P(0,"div",11),ht(1,"input",12),P(2,"div",13),Kn(),P(3,"svg",14),ht(4,"path",15),V(),qa(),ht(5,"div",16),V()()),e&2){const a=xt();$("mdc-checkbox--disabled",a.disabled),E(),X("checked",a.selected)("disabled",a.disabled)}}function Wc(e,t){if(e&1&&(P(0,"div",17),ht(1,"input",18),P(2,"div",19),ht(3,"div",20)(4,"div",21),V()()),e&2){const a=xt();$("mdc-radio--disabled",a.disabled),E(),X("checked",a.selected)("disabled",a.disabled)}}function Gc(e,t){}function Qc(e,t){if(e&1&&(P(0,"span",4),bt(1,Gc,0,0,"ng-template",6),V()),e&2){xt();const a=Bt(3);E(),X("ngTemplateOutlet",a)}}function Kc(e,t){}function Zc(e,t){if(e&1&&(P(0,"span",5),bt(1,Kc,0,0,"ng-template",6),V()),e&2){xt();const a=Bt(5);E(),X("ngTemplateOutlet",a)}}function Xc(e,t){}function Yc(e,t){if(e&1&&bt(0,Xc,0,0,"ng-template",6),e&2){xt();const a=Bt(1);X("ngTemplateOutlet",a)}}function Jc(e,t){}function tl(e,t){if(e&1&&(P(0,"span",9),bt(1,Jc,0,0,"ng-template",6),V()),e&2){xt();const a=Bt(3);E(),X("ngTemplateOutlet",a)}}function el(e,t){}function il(e,t){if(e&1&&(P(0,"span",9),bt(1,el,0,0,"ng-template",6),V()),e&2){xt();const a=Bt(5);E(),X("ngTemplateOutlet",a)}}function nl(e,t){}function rl(e,t){if(e&1&&bt(0,nl,0,0,"ng-template",6),e&2){xt();const a=Bt(1);X("ngTemplateOutlet",a)}}const ia=new y("ListOption");let Ee=(()=>{const t=class t{constructor(){s(this,"_elementRef",m(ot))}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]}));let e=t;return e})(),Le=(()=>{const t=class t{constructor(){s(this,"_elementRef",m(ot))}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]}));let e=t;return e})(),pi=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]}));let e=t;return e})(),na=(()=>{const t=class t{constructor(){s(this,"_listOption",m(ia,{optional:!0}))}_isAlignedAtStart(){var n;return!this._listOption||((n=this._listOption)==null?void 0:n._getTogglePosition())==="after"}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,hostVars:4,hostBindings:function(i,r){i&2&&$("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}}));let e=t;return e})(),gi=(()=>{const t=class t extends na{};s(t,"ɵfac",(()=>{let n;return function(r){return(n||(n=_t(t)))(r||t)}})()),s(t,"ɵdir",k({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[tt]}));let e=t;return e})(),fi=(()=>{const t=class t extends na{};s(t,"ɵfac",(()=>{let n;return function(r){return(n||(n=_t(t)))(r||t)}})()),s(t,"ɵdir",k({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[tt]}));let e=t;return e})();const al=new y("MAT_LIST_CONFIG");let st=(()=>{const t=class t{constructor(){s(this,"_isNonInteractive",!0);s(this,"_disableRipple",!1);s(this,"_disabled",w(!1));s(this,"_defaultOptions",m(al,{optional:!0}))}get disableRipple(){return this._disableRipple}set disableRipple(n){this._disableRipple=H(n)}get disabled(){return this._disabled()}set disabled(n){this._disabled.set(H(n))}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,hostVars:1,hostBindings:function(i,r){i&2&&Z("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}}));let e=t;return e})(),_i=(()=>{const t=class t{constructor(){s(this,"_elementRef",m(ot));s(this,"_ngZone",m(Ue));s(this,"_listBase",m(st,{optional:!0}));s(this,"_platform",m(Ja));s(this,"_hostElement");s(this,"_isButtonElement");s(this,"_noopAnimations",tr());s(this,"_avatars");s(this,"_icons");s(this,"_explicitLines",null);s(this,"_disableRipple",!1);s(this,"_disabled",w(!1));s(this,"_subscriptions",new ze);s(this,"_rippleRenderer",null);s(this,"_hasUnscopedTextContent",!1);s(this,"rippleConfig");m(er).load(Yn);const n=m(Qa,{optional:!0});this.rippleConfig=n||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}set lines(n){this._explicitLines=as(n,null),this._updateItemLines(!1)}get disableRipple(){var n;return this.disabled||this._disableRipple||this._noopAnimations||!!((n=this._listBase)!=null&&n.disableRipple)}set disableRipple(n){this._disableRipple=H(n)}get disabled(){var n;return this._disabled()||!!((n=this._listBase)!=null&&n.disabled)}set disabled(n){this._disabled.set(H(n))}get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ka(this,this._ngZone,this._hostElement,this._platform,m(Ci)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Gn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(n){if(!this._lines||!this._titles||!this._unscopedContent)return;n&&this._checkDomForUnscopedTextContent();const i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){const o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let n=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(n+=1),n}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(n=>n.nodeType!==n.COMMENT_NODE).some(n=>!!(n.textContent&&n.textContent.trim()))}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,contentQueries:function(i,r,o){if(i&1&&At(o,gi,4)(o,fi,4),i&2){let c;N(c=A())&&(r._avatars=c),N(c=A())&&(r._icons=c)}},hostVars:4,hostBindings:function(i,r){i&2&&(Z("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),$("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}}));let e=t;return e})(),pn=(()=>{const t=class t extends st{constructor(){super(...arguments);s(this,"_isNonInteractive",!1)}};s(t,"ɵfac",(()=>{let i;return function(o){return(i||(i=_t(t)))(o||t)}})()),s(t,"ɵcmp",J({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[ct([{provide:st,useExisting:t}]),tt],ngContentSelectors:Fe,decls:1,vars:0,template:function(r,o){r&1&&(vt(),x(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`],encapsulation:2}));let e=t;return e})(),gn=(()=>{const t=class t extends st{};s(t,"ɵfac",(()=>{let n;return function(r){return(n||(n=_t(t)))(r||t)}})()),s(t,"ɵcmp",J({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ct([{provide:st,useExisting:t}]),tt],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,r){i&1&&(vt(),x(0))},styles:[Fi],encapsulation:2}));let e=t;return e})(),fn=(()=>{const t=class t extends _i{constructor(){super(...arguments);s(this,"_lines");s(this,"_titles");s(this,"_meta");s(this,"_unscopedContent");s(this,"_itemText");s(this,"_activated",!1)}get activated(){return this._activated}set activated(i){this._activated=H(i)}_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}};s(t,"ɵfac",(()=>{let i;return function(o){return(i||(i=_t(t)))(o||t)}})()),s(t,"ɵcmp",J({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(r,o,c){if(r&1&&At(c,Le,5)(c,Ee,5)(c,pi,5),r&2){let l;N(l=A())&&(o._lines=l),N(l=A())&&(o._titles=l),N(l=A())&&(o._meta=l)}},viewQuery:function(r,o){if(r&1&&Ni(ea,5)(Fc,5),r&2){let c;N(c=A())&&(o._unscopedContent=c.first),N(c=A())&&(o._itemText=c.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(r,o){r&2&&(Z("aria-current",o._getAriaCurrent()),$("mdc-list-item--activated",o.activated)("mdc-list-item--with-leading-avatar",o._avatars.length!==0)("mdc-list-item--with-leading-icon",o._icons.length!==0)("mdc-list-item--with-trailing-meta",o._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",o._hasBothLeadingAndTrailing())("_mat-animation-noopable",o._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[tt],ngContentSelectors:Bc,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(r,o){r&1&&(vt(Dc),x(0),P(1,"span",1),x(2,1),x(3,2),P(4,"span",2,0),Pt("cdkObserveContent",function(){return o._updateItemLines(!0)}),x(6,3),V()(),x(7,4),x(8,5),ht(9,"div",3))},dependencies:[rr],encapsulation:2}));let e=t;return e})();const ra=new y("SelectionList");let vi=(()=>{const t=class t extends _i{constructor(){super(...arguments);s(this,"_selectionList",m(ra));s(this,"_changeDetectorRef",m(Ft));s(this,"_lines");s(this,"_titles");s(this,"_unscopedContent");s(this,"selectedChange",new U);s(this,"togglePosition","after");s(this,"_color");s(this,"_value");s(this,"_selected",!1);s(this,"_inputsInitialized",!1)}get color(){return this._color||this._selectionList.color}set color(i){this._color=i}get value(){return this._value}set value(i){this.selected&&i!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=i}get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(i){const r=H(i);r!==this._selected&&(this._setSelected(r),(r||this._selectionList.multiple)&&this._selectionList._reportValueChange())}ngOnInit(){const i=this._selectionList;i._value&&i._value.some(o=>i.compareWith(this._value,o))&&this._setSelected(!0);const r=this._selected;Promise.resolve().then(()=>{(this._selected||r)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){var o,c,l;const r=((c=(o=this._titles)==null?void 0:o.get(0))==null?void 0:c._elementRef.nativeElement)||((l=this._unscopedContent)==null?void 0:l.nativeElement);return(r==null?void 0:r.textContent)||""}_hasCheckboxAt(i){return this._selectionList.multiple&&this._getTogglePosition()===i}_hasRadioAt(i){return!this._selectionList.multiple&&this._getTogglePosition()===i&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(i){return this._hasProjected("icons",i)||this._hasProjected("avatars",i)}_hasProjected(i,r){return this._getTogglePosition()!==r&&(i==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(i){return i===this._selected?!1:(this._selected=i,i?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(i),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(i){this._hostElement.setAttribute("tabindex",i+"")}_hasBothLeadingAndTrailing(){const i=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),r=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return i&&r}};s(t,"ɵfac",(()=>{let i;return function(o){return(i||(i=_t(t)))(o||t)}})()),s(t,"ɵcmp",J({type:t,selectors:[["mat-list-option"]],contentQueries:function(r,o,c){if(r&1&&At(c,Le,5)(c,Ee,5),r&2){let l;N(l=A())&&(o._lines=l),N(l=A())&&(o._titles=l)}},viewQuery:function(r,o){if(r&1&&Ni(ea,5),r&2){let c;N(c=A())&&(o._unscopedContent=c.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(r,o){r&1&&Pt("blur",function(){return o._handleBlur()})("click",function(){return o._toggleOnInteraction()}),r&2&&(Z("aria-selected",o.selected),$("mdc-list-item--selected",o.selected&&!o._selectionList.multiple&&o._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",o._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",o._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",o._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",o._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",o._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",o._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",o._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",o._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",o._hasBothLeadingAndTrailing())("mat-accent",o.color!=="primary"&&o.color!=="warn")("mat-warn",o.color==="warn")("_mat-animation-noopable",o._noopAnimations))},inputs:{togglePosition:"togglePosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[ct([{provide:_i,useExisting:t},{provide:ia,useExisting:t}]),tt],ngContentSelectors:qc,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(r,o){r&1&&(vt(Hc),bt(0,$c,1,0,"ng-template",null,0,Be)(2,Vc,6,4,"ng-template",null,1,Be)(4,Wc,5,4,"ng-template",null,2,Be),$t(6,Qc,2,1,"span",4)(7,Zc,2,1,"span",5),$t(8,Yc,1,1,null,6),P(9,"span",7),x(10),x(11,1),P(12,"span",8,3),Pt("cdkObserveContent",function(){return o._updateItemLines(!0)}),x(14,2),V()(),$t(15,tl,2,1,"span",9)(16,il,2,1,"span",9),$t(17,rl,1,1,null,6),x(18,3),ht(19,"div",10)),r&2&&(E(6),Vt(o._hasCheckboxAt("before")?6:o._hasRadioAt("before")?7:-1),E(2),Vt(o._hasIconsOrAvatarsAt("before")?8:-1),E(7),Vt(o._hasCheckboxAt("after")?15:o._hasRadioAt("after")?16:-1),E(2),Vt(o._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[Ba,rr],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--%NS%selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2}));let e=t;return e})(),_n=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵdir",k({type:t,selectors:[["","mat-subheader",""],["","matSubheader",""]],hostAttrs:[1,"mat-mdc-subheader","mdc-list-group__subheader"]}));let e=t;return e})(),vn=(()=>{const t=class t extends st{constructor(){super(...arguments);s(this,"_isNonInteractive",!1)}};s(t,"ɵfac",(()=>{let i;return function(o){return(i||(i=_t(t)))(o||t)}})()),s(t,"ɵcmp",J({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[ct([{provide:st,useExisting:t}]),tt],ngContentSelectors:Fe,decls:1,vars:0,template:function(r,o){r&1&&(vt(),x(0))},styles:[Fi],encapsulation:2}));let e=t;return e})();const sl={provide:os,useExisting:Ha(()=>bi),multi:!0};class ol{constructor(t,a){s(this,"source");s(this,"options");this.source=t,this.options=a}}let bi=(()=>{var t;const a=class a extends st{constructor(){super();s(this,"_element",m(ot));s(this,"_ngZone",m(Ue));s(this,"_renderer",m(se));s(this,"_initialized",!1);s(this,"_keyManager");s(this,"_listenerCleanups");s(this,"_destroyed",new at);s(this,"_isDestroyed",!1);s(this,"_onChange",r=>{});s(this,"_items");s(this,"selectionChange",new U);s(this,"color","accent");s(this,"compareWith",(r,o)=>r===o);s(this,"_multiple",!0);s(this,"_hideSingleSelectionIndicator",((t=this._defaultOptions)==null?void 0:t.hideSingleSelectionIndicator)??!1);s(this,"selectedOptions",new $i(this._multiple));s(this,"_value",null);s(this,"_onTouched",()=>{});s(this,"_changeDetectorRef",m(Ft));s(this,"_selectionListDisabled",w(!1));s(this,"_handleFocusout",()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})});s(this,"_handleFocusin",r=>{const o=this._items.toArray().findIndex(c=>c._elementRef.nativeElement.contains(r.target));o>-1?this._setActiveOption(o):this._resetActiveOption()});this._isNonInteractive=!1}get multiple(){return this._multiple}set multiple(r){const o=H(r);o!==this._multiple&&(this._multiple=o,this.selectedOptions=new $i(this._multiple,this.selectedOptions.selected))}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(r){this._hideSingleSelectionIndicator=H(r)}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(r){const o=r.disabled,c=r.disableRipple,l=r.hideSingleSelectionIndicator;(c&&!c.firstChange||o&&!o.firstChange||l&&!l.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){var r,o;(r=this._keyManager)==null||r.destroy(),(o=this._listenerCleanups)==null||o.forEach(c=>c()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(r){this._element.nativeElement.focus(r)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){const r=this._getSelectedOptionValues();this._onChange(r),this._value=r}}_emitChangeEvent(r){this.selectionChange.emit(new ol(this,r))}writeValue(r){this._value=r,this.options&&this._setOptionsFromValues(r||[])}setDisabledState(r){this.disabled=r,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(r){var o;this._selectionListDisabled.set(H(r)),this._selectionListDisabled()&&((o=this._keyManager)==null||o.setActiveItem(-1))}registerOnChange(r){this._onChange=r}registerOnTouched(r){this._onTouched=r}_watchForSelectionChange(){this.selectedOptions.changed.pipe(Yt(this._destroyed)).subscribe(r=>{for(let o of r.added)o.selected=!0;for(let o of r.removed)o.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(r){this.options.forEach(o=>o._setSelected(!1)),r.forEach(o=>{const c=this.options.find(l=>l.selected?!1:this.compareWith(l.value,o));c&&c._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(r=>r.selected).map(r=>r.value)}_markOptionsForCheck(){this.options&&this.options.forEach(r=>r._markForCheck())}_setAllOptionsSelected(r,o){const c=[];return this.options.forEach(l=>{(!o||!l.disabled)&&l._setSelected(r)&&c.push(l)}),c.length&&this._reportValueChange(),c}get options(){return this._items}_handleKeydown(r){const o=this._keyManager.activeItem;if(o&&(r.keyCode===is||r.keyCode===ns)){const c=Vi();if(!this._items.toArray().some(h=>h._elementRef.nativeElement===c)){r.preventDefault(),o.focus();return}}if((r.keyCode===ir||r.keyCode===nr)&&!this._keyManager.isTyping()&&o&&!o.disabled)r.preventDefault(),o._toggleOnInteraction();else if(r.keyCode===rs&&this.multiple&&!this._keyManager.isTyping()&&Jn(r,"ctrlKey","metaKey")){const c=this.options.some(l=>!l.disabled&&!l.selected);r.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(c,!0))}else this._keyManager.onKeydown(r)}_setupRovingTabindex(){this._keyManager=new ar(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>!1),this._resetActiveOption(),this._keyManager.change.subscribe(r=>this._setActiveOption(r)),this._items.changes.pipe(Yt(this._destroyed)).subscribe(()=>{const r=this._keyManager.activeItem;(!r||this._items.toArray().indexOf(r)===-1)&&this._resetActiveOption()})}_setActiveOption(r){this._items.forEach((o,c)=>{let l=-1;!this.disabled&&c===r&&(l=0),o._setTabindex(l)}),this._keyManager.updateActiveItem(r)}_resetActiveOption(){if(this.disabled){const o=this._items.find(l=>l.selected)||this._items.first,c=o?this._items.toArray().indexOf(o):-1;this._setActiveOption(c);return}const r=this._items.find(o=>o.selected&&!o.disabled)||this._items.first;this._setActiveOption(r?this._items.toArray().indexOf(r):-1)}_containsFocus(){const r=Vi();return r&&this._element.nativeElement.contains(r)}};s(a,"ɵfac",function(o){return new(o||a)}),s(a,"ɵcmp",J({type:a,selectors:[["mat-selection-list"]],contentQueries:function(o,c,l){if(o&1&&At(l,vi,5),o&2){let h;N(h=A())&&(c._items=h)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(o,c){o&1&&Pt("keydown",function(h){return c._handleKeydown(h)}),o&2&&Z("aria-multiselectable",c.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[ct([sl,{provide:st,useExisting:a},{provide:ra,useExisting:a}]),tt,Dt],ngContentSelectors:Fe,decls:1,vars:0,template:function(o,c){o&1&&(vt(),x(0))},styles:[Fi],encapsulation:2}));let e=a;return e})(),cl=(()=>{const t=class t{};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵmod",kt({type:t,imports:[Wi,Bi,Gi,gn,pn,vn,bi,fn,vi,_n,gi,fi,Le,Ee,pi],exports:[ft,gn,pn,vn,bi,fn,vi,gi,fi,_n,un,Le,Ee,pi]})),s(t,"ɵinj",Ct({imports:[Wi,Bi,Gi,ft,un]}));let e=t;return e})();const ll=`<mat-nav-list>
  @for (item of items; track item) {
    <ng-container
      *ngTemplateOutlet="navItem; context: { item: item, level: 1 }"
      >
    </ng-container>
  }
</mat-nav-list>
<ng-template #navItem let-item="item" let-level="level">
  @if (!item.children?.length) {
    <a
      mat-list-item
      [routerLink]="parseRoute(item.route)"
      [activated]="isActive(item)"
      [class.active]="isActive(item)"
      (click)="onItemClick()"
      [class]="'l' + level"
      >
      <div class="menu-item">
        <ng-container
        *ngTemplateOutlet="\r
          itemTemplate || defaultItemTemplate;\r
          context: { item: item }\r
        "\r
          />
        </div>
      </a>
    }
    @if (item.children?.length) {
      <mat-expansion-panel class="mat-elevation-z0">
        <mat-expansion-panel-header [class]="'l' + level">
          <mat-panel-title>
            <div class="menu-item">
              <ng-container
            *ngTemplateOutlet="\r
              itemTemplate || defaultItemTemplate;\r
              context: { item: item }\r
            "\r
                />
              </div>
            </mat-panel-title>
          </mat-expansion-panel-header>
          @for (child of item.children; track child) {
            <ng-container
              *ngTemplateOutlet="navItem; context: { item: child, level: level + 1 }"
              >
            </ng-container>
          }
        </mat-expansion-panel>
      }
    </ng-template>
    <ng-template #defaultItemTemplate let-item="item">
      <ng-container
    *ngTemplateOutlet="\r
      itemIconTemplate || defaultItemIconTemplate;\r
      context: { item: item }\r
    "\r
        />
        <ng-container
    *ngTemplateOutlet="\r
      itemTextTemplate || defaultItemTextTemplate;\r
      context: { item: item }\r
    "\r
          />
        </ng-template>
        <ng-template #defaultItemIconTemplate let-item="item">
          <mat-icon>{{ item.icon }}</mat-icon>
        </ng-template>
        <ng-template #defaultItemTextTemplate let-item="item">
          <span class="item__text">{{ item.text }}</span>
        </ng-template>
`,dl="a{cursor:pointer}a.l1{padding-left:16px}a.l2{padding-left:38px}a.l3{padding-left:60px}a.l4{padding-left:82px}a:hover{background:var(--ngbiz-nav-list-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:8px}mat-expansion-panel-header{border-radius:8px}mat-expansion-panel-header.mat-expanded:hover{background:var(--ngbiz-nav-list-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}a.active mat-icon{color:var(--ngbiz-primary, var(--mat-sys-primary, #76b82a))}a.active.l1{padding-left:16px}a.active.l2{padding-left:38px}a.active.l3{padding-left:60px}a.active.l4{padding-left:82px}mat-nav-list{padding-top:0;width:100%}mat-nav-list .mat-mdc-list-item{height:36px}mat-icon{width:18px;height:18px;font-size:18px;line-height:18px!important;color:#616161}.menu-item{display:flex;align-items:center;column-gap:6px}.menu-item>*{line-height:20px}mat-expansion-panel{border-radius:0;background-color:initial}mat-expansion-panel-header{padding:0 16px;height:36px!important}mat-expansion-panel-header.l2{padding-left:38px}mat-expansion-panel-header.l3{padding-left:60px}mat-expansion-panel-header.l4{padding-left:82px}mat-expansion-panel-header.mat-expanded{height:36px}.item__text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}";var wt;let ne=(wt=class{constructor(t,a,n){this.router=t,this.el=a,this.renderer=n,this.items=[],this.currentRoute=""}onItemClick(){var t;((t=this.sidenav)==null?void 0:t.mode)==="over"&&this.sidenav.close()}isActive(t){if(this.activeItemId)return this.activeItemId===t.id;let a=t.route;return a&&a[0]!=="/"&&(a="/"+a),a=a==null?void 0:a.split("?")[0],this.currentRoute===a}parseRoute(t){return t[0]==="/"?t:"/"+t}ngOnInit(){this.router.events.subscribe(t=>{t instanceof Y&&(this.currentRoute=t.urlAfterRedirects,this.currentRoute=this.currentRoute.split("?")[0])})}ngAfterViewChecked(){this.removeExpansionPanelPadding()}removeExpansionPanelPadding(){this.el.nativeElement.querySelectorAll(".mat-expansion-panel-body").forEach(a=>{this.renderer.setStyle(a,"padding","0")})}},wt.ctorParameters=()=>[{type:it},{type:ot},{type:se}],wt.propDecorators={sidenav:[{type:qe}],items:[{type:qe}],activeItemId:[{type:qe}],itemTemplate:[{type:He,args:["item"]}],itemIconTemplate:[{type:He,args:["itemIcon"]}],itemTextTemplate:[{type:He,args:["itemText"]}]},wt);ne=Zn([$a({selector:"ngbiz-nav-list",template:ll,changeDetection:Va.Eager,standalone:!1,styles:[dl]})],ne);let xi=class{};xi=Zn([Wa({declarations:[ne],imports:[Xn,si,Za,jc,ss,cl],exports:[ne]})],xi);/**
 * @license Angular v22.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */let ml=(()=>{const t=class t{static withRoutes(n,i){return{ngModule:t,providers:[{provide:jt,multi:!0,useValue:n},{provide:It,useValue:i||{}}]}}};s(t,"ɵfac",function(i){return new(i||t)}),s(t,"ɵmod",kt({type:t,exports:[si]})),s(t,"ɵinj",Ct({providers:[Yr,Ga(),Xr(fc).ɵproviders,{provide:jt,multi:!0,useValue:[]}],imports:[si]}));let e=t;return e})();const De=[{id:1,text:"Home",emoji:"🏠",icon:"home",route:"/home",children:[],color:"red"},{id:2,text:"Inbox",icon:"inbox",emoji:"📥",route:"/inbox",children:[],color:"blue"},{id:3,text:"Configuration",icon:"settings",emoji:"⚙️",route:"/config",color:"orange",children:[{id:4,text:"Credentials",icon:"key",emoji:"🔑",route:"/users",color:"magenta",children:[]},{id:5,text:"Devices",icon:"display_settings",emoji:"📺",route:"/roles",children:[],color:"green"}]}],Rl={title:"Components/NavList",tags:["autodocs"],component:ne,decorators:[ca({imports:[xi,Xn,ml]})]},ge={args:{activeItemId:1,items:De}},fe={render:e=>({props:e,template:`
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #item let-item="item">
          <span>{{item.emoji}}</span><i style="color: {{item.color}}">{{ item.text }}</i>
        </ng-template>
      </ngbiz-nav-list>
    `}),args:{activeItemId:1,items:De}},_e={render:e=>({props:e,template:`
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #itemText let-item="item">
          <i style="color: {{item.color}}">{{ item.text }}</i>
        </ng-template>
      </ngbiz-nav-list>
    `}),args:{activeItemId:1,items:De}},ve={render:e=>({props:e,template:`
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #itemIcon let-item="item">
          <span>{{item.emoji}}</span>
        </ng-template>
      </ngbiz-nav-list>
    `}),args:{activeItemId:1,items:De}};var bn,xn,yn;ge.parameters={...ge.parameters,docs:{...(bn=ge.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  args: {
    activeItemId: 1,
    items: demoItems
  }
}`,...(yn=(xn=ge.parameters)==null?void 0:xn.docs)==null?void 0:yn.source}}};var wn,Sn,kn;fe.parameters={...fe.parameters,docs:{...(wn=fe.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  render: (args: Partial<NavListComponent>) => ({
    props: args,
    template: \`
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #item let-item="item">
          <span>{{item.emoji}}</span><i style="color: {{item.color}}">{{ item.text }}</i>
        </ng-template>
      </ngbiz-nav-list>
    \`
  }),
  args: {
    activeItemId: 1,
    items: demoItems
  }
}`,...(kn=(Sn=fe.parameters)==null?void 0:Sn.docs)==null?void 0:kn.source}}};var Cn,Nn,An;_e.parameters={..._e.parameters,docs:{...(Cn=_e.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  render: (args: Partial<NavListComponent>) => ({
    props: args,
    template: \`
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #itemText let-item="item">
          <i style="color: {{item.color}}">{{ item.text }}</i>
        </ng-template>
      </ngbiz-nav-list>
    \`
  }),
  args: {
    activeItemId: 1,
    items: demoItems
  }
}`,...(An=(Nn=_e.parameters)==null?void 0:Nn.docs)==null?void 0:An.source}}};var Rn,In,Tn;ve.parameters={...ve.parameters,docs:{...(Rn=ve.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
  render: (args: Partial<NavListComponent>) => ({
    props: args,
    template: \`
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #itemIcon let-item="item">
          <span>{{item.emoji}}</span>
        </ng-template>
      </ngbiz-nav-list>
    \`
  }),
  args: {
    activeItemId: 1,
    items: demoItems
  }
}`,...(Tn=(In=ve.parameters)==null?void 0:In.docs)==null?void 0:Tn.source}}};const Il=["Default","ItemTemplate","ItemTexTemplate","ItemIconTemplate"];export{ge as Default,ve as ItemIconTemplate,fe as ItemTemplate,_e as ItemTexTemplate,Il as __namedExportsOrder,Rl as default};
