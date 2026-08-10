import{m as d}from"./chunk-KBKLVYEJ-BdRgWarS.js";import"./iframe-C1pQtk4A.js";import{aM as g,a as b,ax as c,ay as f,az as C,aA as h}from"./angular-platform-Cx1L7wmy.js";import{M as x}from"./button-Yiz3maQU.js";import{M as y,a as D,b as T}from"./dialog-c2ThsfZE.js";import"./preload-helper-Dp1pzeXC.js";import"./_animation-chunk-CzQ7AORy.js";import"./_style-loader-chunk-BcCZh8E_.js";import"./bidi-DITo3jCe.js";import"./portal-C6NL6b3Y.js";import"./_a11y-module-chunk-D40E9W57.js";import"./private-C5-ka_BE.js";import"./observers-2QeGIBlC.js";import"./_overlay-module-chunk-CdLb_jDO.js";const _=`<h2 mat-dialog-title>{{title}}</h2>
<div mat-dialog-content [innerHTML]="safeMessage" [ngStyle]="{'max-width': maxWidth?maxWidth + 'px':null}"></div>
<mat-dialog-actions align="end" class="text-right">
  @for (option of options; track option) {
    @if (!option.buttonType) {
      <button (click)="onOptionClick(option)" mat-button
      [color]="option.buttonColor">{{option.text}}</button>
    }
    @if (option.buttonType == 'normal') {
      <button (click)="onOptionClick(option)" mat-button
      [color]="option.buttonColor">{{option.text}}</button>
    }
    @if (option.buttonType == 'raised') {
      <button (click)="onOptionClick(option)" mat-raised-button
      [color]="option.buttonColor">{{option.text}}</button>
    }
    @if (option.buttonType == 'stroked') {
      <button (click)="onOptionClick(option)" mat-stroked-button
      [color]="option.buttonColor">{{option.text}}</button>
    }
  }
</mat-dialog-actions>
`,M="";var o;(function(i){i.RAISED="raised",i.STROKED="stroked",i.NORMAL="normal"})(o||(o={}));var n;let e=(n=class{constructor(t,r,m){this.dialogRef=t,this.inputData=r,this.sanitizer=m,this.title="Confirmar",this.message="",this.safeMessage="",this.actionText="ACEPTAR",this.yesText="SÍ",this.noText="NO",this.actionButtonColor="primary",this.actionButtonType=o.RAISED,this.cancelText="CANCELAR",this.options=[],this.suggested="none"}ngOnInit(){this.setPropsFromData()}setPropsFromData(){const t=this;Object.assign(t,t.inputData),t.safeMessage=t.sanitizer.bypassSecurityTrustHtml(t.message),t.options.length||t.setDefaultButtons()}setDefaultButtons(){const t=this;if(t.buttons=="yes_not"){t.options=t.getYesNotButtons();return}if(t.buttons=="confirm_cancel"||t.buttons=="cancel_confirm"){t.options=[{text:t.actionText,buttonColor:t.actionButtonColor?t.actionButtonColor:"primary",buttonType:o.RAISED,option:!0,suggested:t.suggested=="confirm"},{text:t.cancelText,buttonType:o.NORMAL,option:!1,suggested:t.suggested=="cancel"}],t.buttons=="cancel_confirm"&&t.options.reverse();return}t.buttons=="ok"&&(t.options=[{text:t.actionText,buttonColor:t.actionButtonColor?t.actionButtonColor:"primary",buttonType:o.RAISED,option:!0}])}getYesNotButtons(){const t=this;return[{text:t.yesText,buttonColor:"primary",buttonType:t.suggested=="yes"?o.RAISED:o.STROKED,option:!0},{text:t.noText,buttonColor:t.suggested=="no"?"primary":"warn",buttonType:t.suggested=="no"?o.RAISED:o.STROKED,option:!1}]}onOptionClick(t){this.dialogRef.close(t.option)}},n.ctorParameters=()=>[{type:y},{type:void 0,decorators:[{type:g,args:[D]}]},{type:b}],n);e=c([f({selector:"app-dialog",template:_,standalone:!1,styles:[M]})],e);let a=class{};a=c([C({declarations:[e],imports:[h,x,T],exports:[e]})],a);const j={title:"Components/Dialog",tags:["autodocs"],component:e,decorators:[d({imports:[a]})]},s={};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,j as default};
