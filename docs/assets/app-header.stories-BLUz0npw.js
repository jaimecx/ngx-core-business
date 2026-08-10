var A=Object.defineProperty;var O=(e,t,m)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[t]=m;var o=(e,t,m)=>O(e,typeof t!="symbol"?t+"":t,m);import{m as U}from"./chunk-KBKLVYEJ-DWIpczdz.js";import"./iframe-TGmgDK9p.js";import{k as h,aw as s,av as D,aC as g,ax as M,ay as E,az as R,b as I,c as T,i as p,E as j,D as H,M as P,ao as L,ap as x,Z as Q,J as $,aP as F,a5 as W,a6 as G,e as J,aA as V,aB as q}from"./angular-platform-C_MM8IP_.js";import{M as Y}from"./button-DdvBbqaS.js";import{M as Z}from"./icon-C2gonzmO.js";import{B as v}from"./bidi-l_WyJb_E.js";import{P as K}from"./_animation-chunk-Qpk-pkcu.js";import{O as X}from"./_overlay-module-chunk-CecjDJNq.js";import{N as tt}from"./avatar.module-6EiPwm0A.js";import"./preload-helper-Dp1pzeXC.js";import"./_style-loader-chunk-DMQOpoAK.js";import"./private-CWuS7jdp.js";import"./portal-EpB8jNB0.js";const et=`<mat-toolbar role="heading" class="px-1">
  <button mat-icon-button class="menu-button" (click)="menuButtonClick.emit()">
    <mat-icon>menu</mat-icon>
  </button>
  <ng-content select="[beforeAppName]"></ng-content>
  @if (appName) {
    <span class="px-[6px]">{{ appName }}</span>
  }
  <ng-content select="[afterAppName]"></ng-content>
  <div class="flex-1 flex">
    <ng-content select="[content]"></ng-content>
  </div>
  <ng-content select="[beforeUser]"></ng-content>
  @if (showDefaultUserInfo) {
    <div
      cdkOverlayOrigin
      #trigger="cdkOverlayOrigin"
      class="flex cursor-pointer px-[6px]"
      >
      <ngbiz-avatar
        [src]="$safeNavigationMigration(user?.picture)"
        [name]="$safeNavigationMigration(user?.name)"
        [size]="avatarSize"
        (click)="showMenu = !showMenu"
      ></ngbiz-avatar>
      <!-- User menu -->
      <ng-template
        cdkConnectedOverlayHasBackdrop
        cdkConnectedOverlay
        [cdkConnectedOverlayOrigin]="trigger"
        [cdkConnectedOverlayOpen]="showMenu"
        cdkConnectedOverlayBackdropClass="cdk-overlay-dark-backdrop"
        (backdropClick)="showMenu = false"
        >
        <div class="modal-menu bg-gray-50 p-4 shadow-md mt-1 rounded flex">
          <ngbiz-avatar [src]="$safeNavigationMigration(user?.picture)" [name]="$safeNavigationMigration(user?.name)"></ngbiz-avatar>
          <div class="pl-3">
            <div class="min-h-8 flex flex-col justify-center">
              <div>{{ user?.name }}</div>
              @if (user?.email) {
                <div class="text-xs">{{ user?.email }}</div>
              }
            </div>
            <div class="mt-2 text-right">
              <button mat-button (click)="logoutButtonClick.emit()">
                <mat-icon>exit_to_app</mat-icon><span>{{ logoutText }}</span>
              </button>
            </div>
          </div>
        </div>
      </ng-template>
    </div>
  }
  <ng-content select="[afterUser]"></ng-content>
</mat-toolbar>
`,ot=":host{display:block;box-sizing:border-box;width:100%}mat-toolbar{background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);height:100%;font-size:13px;padding:0 6px}.mat-mdc-icon-button.menu-button{color:var(--mat-sys-on-primary);border-radius:0;width:36px;height:36px;padding:6px}.mat-mdc-icon-button.menu-button mat-icon{font-size:24px;height:24px;width:24px;margin:0}.ngbiz-username{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}.photo-url{width:24px;height:24px;border-radius:50%}.modal-menu{font-family:var(--mat-sys-body-medium-font);font-size:var(--mat-sys-body-medium-size)}.block-user-idenfication{display:flex;padding:0 16px;text-transform:uppercase;text-align:left;overflow:hidden}.block-user-idenfication .names-wrapper{display:flex;flex-direction:column;justify-content:center;margin-left:4px;overflow:hidden}.block-user-idenfication .names-wrapper>div{line-height:1.2;font-size:10px;text-overflow:ellipsis;overflow:hidden}.exit-button{font-size:12px}.exit-button mat-icon{font-size:19px;height:20px;width:20px}.separator{border-left:1px solid #fff;width:1px;height:22px}.abc{background-color:red}";var r;let l=(r=class{constructor(){this.menuButtonClick=new h,this.logoutButtonClick=new h,this.appName="",this.showDefaultUserInfo=!0,this.user=null,this.logoutText="Logout",this.height=36,this.showMenu=!1,this.avatarSize=24}},r.propDecorators={menuButtonClick:[{type:g}],logoutButtonClick:[{type:g}],appName:[{type:s}],showDefaultUserInfo:[{type:s}],user:[{type:s}],logoutText:[{type:s}],height:[{type:s},{type:D,args:["style.height.px"]}]},r);l=M([E({selector:"ngbiz-app-header",template:et,changeDetection:R.Eager,standalone:!1,styles:[ot]})],l);const at=["*",[["mat-toolbar-row"]]],nt=["*","mat-toolbar-row"];let u=(()=>{const t=class t{};o(t,"ɵfac",function(a){return new(a||t)}),o(t,"ɵdir",J({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}));let e=t;return e})(),w=(()=>{const t=class t{constructor(){o(this,"_elementRef",p(j));o(this,"_platform",p(K));o(this,"_document",p(H));o(this,"color");o(this,"_toolbarRows")}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};o(t,"ɵfac",function(a){return new(a||t)}),o(t,"ɵcmp",P({type:t,selectors:[["mat-toolbar"]],contentQueries:function(a,n,B){if(a&1&&F(B,u,5),a&2){let f;W(f=G())&&(n._toolbarRows=f)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,n){a&2&&(Q(n.color?"mat-"+n.color:""),$("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:nt,decls:2,vars:0,template:function(a,n){a&1&&(L(at),x(0),x(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2}));let e=t;return e})(),rt=(()=>{const t=class t{};o(t,"ɵfac",function(a){return new(a||t)}),o(t,"ɵmod",I({type:t,imports:[w,u],exports:[w,u,v]})),o(t,"ɵinj",T({imports:[v]}));let e=t;return e})(),b=class{};b=M([V({declarations:[l],imports:[q,X,Z,rt,Y,tt],exports:[l]})],b);const z={appName:"MY AWESOME APP",user:{email:"jhon.doe@example.com",name:"Jhon Doe"},menuButtonClick:()=>{alert("Menu button clicked")},logoutButtonClick:()=>{alert("Logout button clicked")}},yt={title:"Components/AppHeader",tags:["autodocs"],component:l,decorators:[U({imports:[b]})]},c={args:z},d={render:e=>({props:e,template:`
      <ngbiz-app-header
        [appName]="appName"
        [user]="user"
        (menuButtonClick)="menuButtonClick()"
        (logoutButtonClick)="logoutButtonClick()"
      >
        <div beforeAppName style="border: 1px dashed white;">-- beforeAppName --</div>
        <div afterAppName style="border: 1px dashed white;">-- afterAppName --</div>
        <div content style="border: 1px dashed white; width: 100%; text-align:center;">-- content --</div>
        <div beforeUser style="border: 1px dashed white;">-- beforeUser --</div>
        <div afterUser style="border: 1px dashed white;">-- afterUser --</div>
      </ngbiz-app-header>
    `}),args:z};var y,N,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var _,C,S;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    props: args,
    template: \`
      <ngbiz-app-header
        [appName]="appName"
        [user]="user"
        (menuButtonClick)="menuButtonClick()"
        (logoutButtonClick)="logoutButtonClick()"
      >
        <div beforeAppName style="border: 1px dashed white;">-- beforeAppName --</div>
        <div afterAppName style="border: 1px dashed white;">-- afterAppName --</div>
        <div content style="border: 1px dashed white; width: 100%; text-align:center;">-- content --</div>
        <div beforeUser style="border: 1px dashed white;">-- beforeUser --</div>
        <div afterUser style="border: 1px dashed white;">-- afterUser --</div>
      </ngbiz-app-header>
    \`
  }),
  args: defaultArgs
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Nt=["Default","WithCustomSlots"];export{c as Default,d as WithCustomSlots,Nt as __namedExportsOrder,yt as default};
