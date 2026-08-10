var et=Object.defineProperty;var at=(s,a,m)=>a in s?et(s,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):s[a]=m;var e=(s,a,m)=>at(s,typeof a!="symbol"?a+"":a,m);import{m as nt}from"./chunk-KBKLVYEJ-B862JdNq.js";import"./iframe-CN0x9H_N.js";import{I as Z,i as l,d as f,a2 as it,aJ as st,ɵ as rt,S as d,M as W,a9 as E,b0 as G,aa as b,U as ot,W as k,b1 as Q,Y as ct,N as lt,E as mt,C as dt,D as _t,h as N,ad as ht,v as ut,a3 as pt,aU as ft,z as bt,x as X,J as kt,a4 as vt,a5 as D,a6 as O,e as M,b as yt,c as gt,b2 as xt,b3 as At,a_ as P,b4 as St,aM as Bt,ax as J,ay as Ct,az as wt,aA as Rt,aB as Tt}from"./angular-platform-C_MM8IP_.js";import{a as Et,M as x}from"./button-DdvBbqaS.js";import{C as j,T as Mt,B as It,_ as Nt,a as F,P as z}from"./portal-EpB8jNB0.js";import{B as Dt,a as K,P as Ot}from"./_animation-chunk-Qpk-pkcu.js";import{B as L}from"./bidi-l_WyJb_E.js";import{L as Pt}from"./_a11y-module-chunk-DZ1OjOC-.js";import{b as jt,d as Ft,c as zt,O as H}from"./_overlay-module-chunk-CecjDJNq.js";import"./preload-helper-Dp1pzeXC.js";import"./_style-loader-chunk-DMQOpoAK.js";import"./private-CWuS7jdp.js";import"./observers-D8uFnVFL.js";const Lt={HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)"};function Ht(s,a){if(s&1){const m=xt();E(0,"div",1)(1,"button",2),X("click",function(){At(m);const t=P();return St(t.action())}),G(2),b()()}if(s&2){const m=P();k(2),Q(" ",m.data.action," ")}}const qt=["label"];function Ut(s,a){}const Vt=Math.pow(2,31)-1;class A{constructor(a,m){e(this,"_overlayRef");e(this,"instance");e(this,"containerInstance");e(this,"_afterDismissed",new d);e(this,"_afterOpened",new d);e(this,"_onAction",new d);e(this,"_durationTimeoutId");e(this,"_dismissedByAction",!1);this._overlayRef=m,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,Vt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}const I=new Z("MatSnackBarData");class v{constructor(){e(this,"politeness","polite");e(this,"announcementMessage","");e(this,"viewContainerRef");e(this,"duration",0);e(this,"panelClass");e(this,"direction");e(this,"data",null);e(this,"horizontalPosition","center");e(this,"verticalPosition","bottom")}}let S=(()=>{const a=class a{};e(a,"ɵfac",function(t){return new(t||a)}),e(a,"ɵdir",M({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]}));let s=a;return s})(),B=(()=>{const a=class a{};e(a,"ɵfac",function(t){return new(t||a)}),e(a,"ɵdir",M({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]}));let s=a;return s})(),C=(()=>{const a=class a{};e(a,"ɵfac",function(t){return new(t||a)}),e(a,"ɵdir",M({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]}));let s=a;return s})(),w=(()=>{const a=class a{constructor(){e(this,"snackBarRef",l(A));e(this,"data",l(I))}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}};e(a,"ɵfac",function(t){return new(t||a)}),e(a,"ɵcmp",W({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(E(0,"div",0),G(1),b(),ot(2,Ht,3,1,"div",1)),t&2&&(k(),Q(" ",n.data.message,`
`),k(),ct(n.hasAction?2:-1))},dependencies:[Et,S,B,C],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2}));let s=a;return s})();const y="_mat-snack-bar-enter",g="_mat-snack-bar-exit";let R=(()=>{const a=class a extends It{constructor(){super();e(this,"_ngZone",l(lt));e(this,"_elementRef",l(mt));e(this,"_changeDetectorRef",l(dt));e(this,"_platform",l(Ot));e(this,"_animationsDisabled",K());e(this,"snackBarConfig",l(v));e(this,"_document",l(_t));e(this,"_trackedModals",new Set);e(this,"_enterFallback");e(this,"_exitFallback");e(this,"_injector",l(f));e(this,"_announceDelay",150);e(this,"_announceTimeoutId");e(this,"_destroyed",!1);e(this,"_portalOutlet");e(this,"_onAnnounce",new d);e(this,"_onExit",new d);e(this,"_onEnter",new d);e(this,"_animationState","void");e(this,"_live");e(this,"_label");e(this,"_role");e(this,"_liveElementId",l(Nt).getId("mat-snack-bar-container-live-"));e(this,"attachDomPortal",t=>{this._assertNotAttached();const n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n});const t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();const n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();const n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}onAnimationEnd(t){t===g?this._completeExit():t===y&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?N(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(y)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(y)},200)))}exit(){return this._destroyed?ht(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?N(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(g)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(g),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){const t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(c=>t.classList.add(c)):t.classList.add(n)),this._exposeToModals();const r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){const t=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){const o=n[r],c=o.getAttribute("aria-owns");this._trackedModals.add(o),c?c.indexOf(t)===-1&&o.setAttribute("aria-owns",c+" "+t):o.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{const n=t.getAttribute("aria-owns");if(n){const r=n.replace(this._liveElementId,"").trim();r.length>0?t.setAttribute("aria-owns",r):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;const t=this._elementRef.nativeElement,n=t.querySelector("[aria-hidden]"),r=t.querySelector("[aria-live]");if(n&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),o==null||o.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}};e(a,"ɵfac",function(n){return new(n||a)}),e(a,"ɵcmp",W({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&vt(F,7)(qt,7),n&2){let o;D(o=O())&&(r._portalOutlet=o.first),D(o=O())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&X("animationend",function(c){return r.onAnimationEnd(c.animationName)})("animationcancel",function(c){return r.onAnimationEnd(c.animationName)}),n&2&&kt("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ut],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(E(0,"div",1)(1,"div",2,0)(3,"div",3),pt(4,Ut,0,0,"ng-template",4),b(),ft(5,"div"),b()()),n&2&&(k(5),bt("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[F],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1}));let s=a;return s})();const Zt=new Z("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new v});let $=(()=>{const a=class a{constructor(){e(this,"_live",l(Pt));e(this,"_injector",l(f));e(this,"_breakpointObserver",l(Dt));e(this,"_parentSnackBar",l(a,{optional:!0,skipSelf:!0}));e(this,"_defaultConfig",l(Zt));e(this,"_animationsDisabled",K());e(this,"_snackBarRefAtThisLevel",null);e(this,"simpleSnackBarComponent",w);e(this,"snackBarContainerComponent",R);e(this,"handsetCssClass","mat-mdc-snack-bar-handset")}get _openedSnackBarRef(){const i=this._parentSnackBar;return i?i._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(i){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=i:this._snackBarRefAtThisLevel=i}openFromComponent(i,t){return this._attach(i,t)}openFromTemplate(i,t){return this._attach(i,t)}open(i,t="",n){const r={...this._defaultConfig,...n};return r.data={message:i,action:t},r.announcementMessage===i&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(i,t){const n=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=f.create({parent:n||this._injector,providers:[{provide:v,useValue:t}]}),o=new j(this.snackBarContainerComponent,t.viewContainerRef,r),c=i.attach(o);return c.instance.snackBarConfig=t,c.instance}_attach(i,t){const n={...new v,...this._defaultConfig,...t},r=this._createOverlay(n),o=this._attachSnackBarContainer(r,n),c=new A(o,r);if(i instanceof it){const h=new Mt(i,null,{$implicit:n.data,snackBarRef:c});c.instance=o.attachTemplatePortal(h)}else{const h=this._createInjector(n,c),Y=new j(i,void 0,h),tt=o.attachComponentPortal(Y);c.instance=tt.instance}return this._breakpointObserver.observe(Lt.HandsetPortrait).pipe(st(r.detachments())).subscribe(h=>{r.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(c,n),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(i,t){i.afterDismissed().subscribe(()=>{this._openedSnackBarRef==i&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&i.afterOpened().subscribe(()=>i._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{i.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):i.containerInstance.enter()}_createOverlay(i){const t=new jt;t.direction=i.direction;const n=Ft(this._injector),r=i.direction==="rtl",o=i.horizontalPosition==="left"||i.horizontalPosition==="start"&&!r||i.horizontalPosition==="end"&&r,c=!o&&i.horizontalPosition!=="center";return o?n.left("0"):c?n.right("0"):n.centerHorizontally(),i.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,zt(this._injector,t)}_createInjector(i,t){const n=i&&i.viewContainerRef&&i.viewContainerRef.injector;return f.create({parent:n||this._injector,providers:[{provide:A,useValue:t},{provide:I,useValue:i.data}]})}};e(a,"ɵfac",function(t){return new(t||a)}),e(a,"ɵprov",rt({token:a,factory:a.ɵfac}));let s=a;return s})(),Wt=(()=>{const a=class a{};e(a,"ɵfac",function(t){return new(t||a)}),e(a,"ɵmod",yt({type:a,imports:[H,z,x,w,R,S,B,C],exports:[L,R,S,B,C]})),e(a,"ɵinj",gt({providers:[$],imports:[H,z,x,w,L]}));let s=a;return s})();const Gt=`<div [innerHTML]="data.html"></div>
@if (data.action) {
  <div class="text-right">
    <button mat-button (click)="snackBar.dismiss()">{{data.action}}</button>
  </div>
}
`,Qt="";var _;let u=(_=class{constructor(a,m){this.data=a,this.snackBar=m}},_.ctorParameters=()=>[{type:void 0,decorators:[{type:Bt,args:[I]}]},{type:$}],_);u=J([Ct({template:Gt,changeDetection:wt.Eager,standalone:!1,styles:[Qt]})],u);let T=class{};T=J([Rt({declarations:[u],imports:[Tt,x,Wt],exports:[u]})],T);const me={title:"Components/SnackBar",tags:["autodocs"],component:u,decorators:[nt({imports:[T]})]},p={};var q,U,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const de=["Default"];export{p as Default,de as __namedExportsOrder,me as default};
