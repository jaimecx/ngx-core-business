import{m as g}from"./chunk-KBKLVYEJ-B862JdNq.js";import"./iframe-CN0x9H_N.js";import{aM as d,a as b,ax as u,ay as f,az as C,aA as h,aB as y}from"./angular-platform-C_MM8IP_.js";import{M as D}from"./button-DdvBbqaS.js";import{M as x,a as T,b as _}from"./dialog-DrSI_Hua.js";import"./preload-helper-Dp1pzeXC.js";import"./_animation-chunk-Qpk-pkcu.js";import"./_style-loader-chunk-DMQOpoAK.js";import"./bidi-l_WyJb_E.js";import"./portal-EpB8jNB0.js";import"./_a11y-module-chunk-DZ1OjOC-.js";import"./private-CWuS7jdp.js";import"./observers-D8uFnVFL.js";import"./_overlay-module-chunk-CecjDJNq.js";const M=`<h2 mat-dialog-title>{{title}}</h2>
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
`,R="";var o;(function(i){i.RAISED="raised",i.STROKED="stroked",i.NORMAL="normal"})(o||(o={}));var n;let e=(n=class{constructor(t,r,m){this.dialogRef=t,this.inputData=r,this.sanitizer=m,this.title="Confirmar",this.message="",this.safeMessage="",this.actionText="ACEPTAR",this.yesText="SÍ",this.noText="NO",this.actionButtonColor="primary",this.actionButtonType=o.RAISED,this.cancelText="CANCELAR",this.options=[],this.suggested="none"}ngOnInit(){this.setPropsFromData()}setPropsFromData(){const t=this;Object.assign(t,t.inputData),t.safeMessage=t.sanitizer.bypassSecurityTrustHtml(t.message),t.options.length||t.setDefaultButtons()}setDefaultButtons(){const t=this;if(t.buttons=="yes_not"){t.options=t.getYesNotButtons();return}if(t.buttons=="confirm_cancel"||t.buttons=="cancel_confirm"){t.options=[{text:t.actionText,buttonColor:t.actionButtonColor?t.actionButtonColor:"primary",buttonType:o.RAISED,option:!0,suggested:t.suggested=="confirm"},{text:t.cancelText,buttonType:o.NORMAL,option:!1,suggested:t.suggested=="cancel"}],t.buttons=="cancel_confirm"&&t.options.reverse();return}t.buttons=="ok"&&(t.options=[{text:t.actionText,buttonColor:t.actionButtonColor?t.actionButtonColor:"primary",buttonType:o.RAISED,option:!0}])}getYesNotButtons(){const t=this;return[{text:t.yesText,buttonColor:"primary",buttonType:t.suggested=="yes"?o.RAISED:o.STROKED,option:!0},{text:t.noText,buttonColor:t.suggested=="no"?"primary":"warn",buttonType:t.suggested=="no"?o.RAISED:o.STROKED,option:!1}]}onOptionClick(t){this.dialogRef.close(t.option)}},n.ctorParameters=()=>[{type:x},{type:void 0,decorators:[{type:d,args:[T]}]},{type:b}],n);e=u([f({selector:"app-dialog",template:M,changeDetection:C.Eager,standalone:!1,styles:[R]})],e);let a=class{};a=u([h({declarations:[e],imports:[y,D,_],exports:[e]})],a);const w={title:"Components/Dialog",tags:["autodocs"],component:e,decorators:[g({imports:[a]})]},s={};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,w as default};
