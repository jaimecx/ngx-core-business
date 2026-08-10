import{m as p}from"./chunk-KBKLVYEJ-B862JdNq.js";import"./iframe-CN0x9H_N.js";import{k as m,aC as u,aw as t,ax as c,ay as d,az as l,aA as g,aB as b}from"./angular-platform-C_MM8IP_.js";import{M as y}from"./icon-C2gonzmO.js";import{M as _}from"./button-DdvBbqaS.js";import"./preload-helper-Dp1pzeXC.js";import"./private-CWuS7jdp.js";import"./bidi-l_WyJb_E.js";import"./_animation-chunk-Qpk-pkcu.js";import"./_style-loader-chunk-DMQOpoAK.js";const f=`<button [type]="submit?'submit':'button'" [disabled]="disabled || activeProcess" mat-raised-button [color]="color"
  [class.rounded]="rounded" (click)="onButtonClick.emit()">
  @if (activeProcess) {
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  }
  @if (icon&&!activeProcess) {
    <mat-icon [svgIcon]="icon"></mat-icon>
    }{{activeProcess ? activeProcessText: text}}
  </button>
`,h=":host{display:inline-block}.spinner-grow{margin-right:8px;margin-top:-2px}mat-icon{margin-right:4px}.rounded{border-radius:18px!important}";var o;let e=(o=class{constructor(){this.submit=!0,this.rounded=!1,this.activeProcess=!1,this.disabled=!1,this.color="primary",this.onButtonClick=new m}},o.propDecorators={text:[{type:t}],submit:[{type:t}],icon:[{type:t}],rounded:[{type:t}],activeProcess:[{type:t}],disabled:[{type:t}],activeProcessText:[{type:t}],color:[{type:t}],onButtonClick:[{type:u}]},o);e=c([d({selector:"ngbiz-process-button",template:f,changeDetection:l.Eager,standalone:!1,styles:[h]})],e);let a=class{};a=c([g({declarations:[e],imports:[b,_,y],exports:[e]})],a);const z={title:"Components/ProcessButton",tags:["autodocs"],component:e,decorators:[p({imports:[a]})]},s={};var r,n,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,z as default};
