import{av as i,aw as a,ax as n,ay as p,az as h,aA as g}from"./angular-platform-Cx1L7wmy.js";import{M as c}from"./icon-DQTuCTWf.js";const d=`@if (getAvarType()=='image') {
  <img [src]="src" alt="Avatar" />
}
@if (getAvarType()=='text') {
  <span class="avatar-name" [style]="{'lineHeigth.px':size }">
    <span class="initials">{{getInitials()}}</span>
  </span>
}`,m=":host{display:inline-block;border-radius:50%;position:relative}:host img{width:100%;height:100%;border-radius:50%}.avatar-name{display:flex;border-radius:50%;background:#616161;color:#fff;width:100%;height:100%;font-size:12px}.avatar-name .initials{height:100%;width:100%;top:0;justify-content:center;display:flex;align-items:center;left:0}";var t;let e=(t=class{constructor(){this.size=32}get height(){return this.size}get width(){return this.size}getAvarType(){return this.src?"image":"text"}getInitials(){if(this.name){const o=this.name.split(" ");let s="";return o.forEach(l=>{s+=l[0]}),s}return""}},t.propDecorators={src:[{type:a}],name:[{type:a}],size:[{type:a}],height:[{type:i,args:["style.height.px"]}],width:[{type:i,args:["style.width.px"]}]},t);e=n([p({selector:"ngbiz-avatar",template:d,standalone:!1,styles:[m]})],e);let r=class{};r=n([h({declarations:[e],imports:[g,c],exports:[e]})],r);export{e as A,r as N};
