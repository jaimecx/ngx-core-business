import{m as p}from"./chunk-KBKLVYEJ-B862JdNq.js";import"./iframe-CN0x9H_N.js";import{aw as m,ax as n,ay as c,az as l,aA as d,aB as g}from"./angular-platform-C_MM8IP_.js";import{N as w}from"./data-error-view.module-DP62SMa_.js";import{N as u}from"./progress-view.module-Lg4r7Xai.js";import"./preload-helper-Dp1pzeXC.js";import"./button-DdvBbqaS.js";import"./_animation-chunk-Qpk-pkcu.js";import"./_style-loader-chunk-DMQOpoAK.js";import"./bidi-l_WyJb_E.js";import"./icon-C2gonzmO.js";import"./private-CWuS7jdp.js";import"./progress-bar-C1idGHSe.js";const _=`@if (view.shouldShowProgressView()) {
  <ngbiz-progress-view></ngbiz-progress-view>
}
@if (view.shouldShowErrorView()) {
  <ngbiz-data-error-view [status]="view.getErrorStatus()"
  (actionClick)="view.loadData()"></ngbiz-data-error-view>
}
<ng-content></ng-content>
`,C=":host{display:flex!important;flex-direction:column;height:100%}";var e;let t=(e=class{},e.propDecorators={view:[{type:m}]},e);t=n([c({selector:"ngbiz-view-content-wrapper",template:_,changeDetection:l.Eager,standalone:!1,styles:[C]})],t);let r=class{};r=n([d({declarations:[t],imports:[g,w,u],exports:[t]})],r);const W={title:"Components/ViewContentWrapper",tags:["autodocs"],component:t,decorators:[p({imports:[r]})]},o={};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,W as default};
