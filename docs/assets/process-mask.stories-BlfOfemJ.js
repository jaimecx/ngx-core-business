var A=Object.defineProperty;var E=(n,r,s)=>r in n?A(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s;var i=(n,r,s)=>E(n,typeof r!="symbol"?r+"":r,s);import{m as O}from"./chunk-KBKLVYEJ-BdRgWarS.js";import"./iframe-C1pQtk4A.js";import{b as B,c as I,i as w,E as D,M as P,aS as z,P as u,a3 as L,a9 as m,aT as M,aU as R,aa as p,aV as j,aW as h,aX as G,W as d,z as l,X as v,aY as f,Z as Q,J as U,a4 as F,a5 as H,a6 as V,I as Z,aZ as X,a_ as $,aM as q,aw as J,ax as T,ay as K,az as Y}from"./angular-platform-Cx1L7wmy.js";import{_ as ee}from"./_animation-chunk-CzQ7AORy.js";import{B as b}from"./bidi-DITo3jCe.js";import{M as re,a as te}from"./dialog-c2ThsfZE.js";import"./preload-helper-Dp1pzeXC.js";import"./portal-C6NL6b3Y.js";import"./_a11y-module-chunk-D40E9W57.js";import"./_style-loader-chunk-BcCZh8E_.js";import"./private-C5-ka_BE.js";import"./observers-2QeGIBlC.js";import"./_overlay-module-chunk-CdLb_jDO.js";const ne=["determinateSpinner"];function ie(n,r){if(n&1&&(M(),m(0,"svg",11),R(1,"circle",12),p()),n&2){const s=$();l("viewBox",s._viewBox()),d(),v("stroke-dasharray",s._strokeCircumference(),"px")("stroke-dashoffset",s._strokeCircumference()/2,"px")("stroke-width",s._circleStrokeWidth(),"%"),l("r",s._circleRadius())}}const ae=new Z("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:W})}),W=100,se=10;let k=(()=>{const r=class r{constructor(){i(this,"_elementRef",w(D));i(this,"_noopAnimations");i(this,"_color");i(this,"_defaultColor","primary");i(this,"_determinateCircle");i(this,"mode");i(this,"_value",0);i(this,"_diameter",W);i(this,"_strokeWidth");const e=w(ae),a=ee(),t=this._elementRef.nativeElement;this._noopAnimations=a==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=t.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&a==="reduced-motion"&&t.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}get color(){return this._color||this._defaultColor}set color(e){this._color=e}get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_circleRadius(){return(this.diameter-se)/2}_viewBox(){const e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}};i(r,"ɵfac",function(a){return new(a||r)}),i(r,"ɵcmp",P({type:r,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(a,t){if(a&1&&F(ne,5),a&2){let c;H(c=V())&&(t._determinateCircle=c.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(a,t){a&2&&(l("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",t.mode==="determinate"?t.value:null)("mode",t.mode),Q("mat-"+t.color),v("width",t.diameter,"px")("height",t.diameter,"px")("--%NS%mat-progress-spinner-size",t.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",t.diameter+"px"),U("_mat-animation-noopable",t._noopAnimations)("mdc-circular-progress--indeterminate",t.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",u],diameter:[2,"diameter","diameter",u],strokeWidth:[2,"strokeWidth","strokeWidth",u]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(a,t){if(a&1&&(L(0,ie,2,8,"ng-template",null,0,X),m(2,"div",2,1),M(),m(4,"svg",3),R(5,"circle",4),p()(),j(),m(6,"div",5)(7,"div",6)(8,"div",7),h(9,8),p(),m(10,"div",9),h(11,8),p(),m(12,"div",10),h(13,8),p()()()),a&2){const c=G(1);d(4),l("viewBox",t._viewBox()),d(),v("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeDashOffset(),"px")("stroke-width",t._circleStrokeWidth(),"%"),l("r",t._circleRadius()),d(4),f("ngTemplateOutlet",c),d(2),f("ngTemplateOutlet",c),d(2),f("ngTemplateOutlet",c)}},dependencies:[z],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2}));let n=r;return n})();const S=k;let oe=(()=>{const r=class r{};i(r,"ɵfac",function(a){return new(a||r)}),i(r,"ɵmod",B({type:r,imports:[k,S],exports:[k,S,b]})),i(r,"ɵinj",I({imports:[b]}));let n=r;return n})();const ce=`<mat-spinner diameter="48"></mat-spinner>\r
<div class="message">{{message}}</div>\r
`,me=":host{display:flex;justify-items:center;flex-direction:column;text-align:center}";var o;let _=(o=class{constructor(r,s){this.dialogRef=r,this.inputData=s,this.message="";const e=this;e.inputData&&(e.message=e.inputData.message)}},o.ctorParameters=()=>[{type:re},{type:void 0,decorators:[{type:q,args:[te]}]}],o.propDecorators={message:[{type:J}]},o);_=T([K({template:ce,standalone:!1,styles:[me]})],_);let y=class{};y=T([Y({declarations:[_],imports:[oe],exports:[_]})],y);const Ce={title:"Components/ProcessMask",tags:["autodocs"],component:_,decorators:[O({imports:[y]})]},g={};var x,C,N;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(N=(C=g.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const Ne=["Default"];export{g as Default,Ne as __namedExportsOrder,Ce as default};
