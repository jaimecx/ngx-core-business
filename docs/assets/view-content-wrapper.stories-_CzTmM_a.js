import{m as p}from"./chunk-KBKLVYEJ-BdRgWarS.js";import"./iframe-C1pQtk4A.js";import{aw as m,ax as n,ay as l,az as c,aA as d}from"./angular-platform-Cx1L7wmy.js";import{N as w}from"./data-error-view.module-ByjtI5fX.js";import{N as g}from"./progress-view.module-DwrwQ83H.js";import"./preload-helper-Dp1pzeXC.js";import"./button-Yiz3maQU.js";import"./_animation-chunk-CzQ7AORy.js";import"./_style-loader-chunk-BcCZh8E_.js";import"./bidi-DITo3jCe.js";import"./icon-DQTuCTWf.js";import"./private-C5-ka_BE.js";import"./progress-bar-DGTSsQbP.js";const u=`@if (view.shouldShowProgressView()) {
  <ngbiz-progress-view></ngbiz-progress-view>
}
@if (view.shouldShowErrorView()) {
  <ngbiz-data-error-view [status]="view.getErrorStatus()"
  (actionClick)="view.loadData()"></ngbiz-data-error-view>
}
<ng-content></ng-content>
`,_=":host{display:flex!important;flex-direction:column;height:100%}";var e;let o=(e=class{},e.propDecorators={view:[{type:m}]},e);o=n([l({selector:"ngbiz-view-content-wrapper",template:u,standalone:!1,styles:[_]})],o);let r=class{};r=n([c({declarations:[o],imports:[d,w,g],exports:[o]})],r);const R={title:"Components/ViewContentWrapper",tags:["autodocs"],component:o,decorators:[p({imports:[r]})]},t={};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,R as default};
