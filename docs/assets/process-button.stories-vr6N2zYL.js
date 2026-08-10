import{m as p}from"./chunk-KBKLVYEJ-BdRgWarS.js";import"./iframe-C1pQtk4A.js";import{k as m,aB as u,aw as t,ax as c,ay as d,az as l,aA as b}from"./angular-platform-Cx1L7wmy.js";import{M as g}from"./icon-DQTuCTWf.js";import{M as _}from"./button-Yiz3maQU.js";import"./preload-helper-Dp1pzeXC.js";import"./private-C5-ka_BE.js";import"./bidi-DITo3jCe.js";import"./_animation-chunk-CzQ7AORy.js";import"./_style-loader-chunk-BcCZh8E_.js";const y=`<button [type]="submit?'submit':'button'" [disabled]="disabled || activeProcess" mat-raised-button [color]="color"
  [class.rounded]="rounded" (click)="onButtonClick.emit()">
  @if (activeProcess) {
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  }
  @if (icon&&!activeProcess) {
    <mat-icon [svgIcon]="icon"></mat-icon>
    }{{activeProcess ? activeProcessText: text}}
  </button>
`,f=":host{display:inline-block}.spinner-grow{margin-right:8px;margin-top:-2px}mat-icon{margin-right:4px}.rounded{border-radius:18px!important}";var o;let e=(o=class{constructor(){this.submit=!0,this.rounded=!1,this.activeProcess=!1,this.disabled=!1,this.color="primary",this.onButtonClick=new m}},o.propDecorators={text:[{type:t}],submit:[{type:t}],icon:[{type:t}],rounded:[{type:t}],activeProcess:[{type:t}],disabled:[{type:t}],activeProcessText:[{type:t}],color:[{type:t}],onButtonClick:[{type:u}]},o);e=c([d({selector:"ngbiz-process-button",template:y,standalone:!1,styles:[f]})],e);let r=class{};r=c([l({declarations:[e],imports:[b,_,g],exports:[e]})],r);const z={title:"Components/ProcessButton",tags:["autodocs"],component:e,decorators:[p({imports:[r]})]},s={};var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,z as default};
