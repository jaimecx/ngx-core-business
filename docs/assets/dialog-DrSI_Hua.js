var yt=Object.defineProperty;var Ct=(o,i,r)=>i in o?yt(o,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[i]=r;var t=(o,i,r)=>Ct(o,typeof i!="symbol"?i+"":i,r);import{b as tt,c as et,i as l,d as m,S as g,$ as it,a0 as at,a1 as v,a2 as vt,I as p,ɵ as nt,E as R,N as Dt,R as At,C as St,D as Ot,h as Tt,M as ot,v as T,a3 as st,z as E,a4 as xt,a5 as wt,a6 as kt,s as Ft,k as rt,a7 as j,j as C,a8 as It,y as N,a9 as Rt,aa as Et,ab as lt,J as ct,e as y,f as Nt,x as Lt,ac as Pt}from"./angular-platform-C_MM8IP_.js";import{P as u,_ as L,C as z,T as Bt,h as dt,B as jt,a as F}from"./portal-EpB8jNB0.js";import{A as H,F as zt,I as Ht}from"./_a11y-module-chunk-DZ1OjOC-.js";import{E as ht,F as Vt,a as x,b as V}from"./_style-loader-chunk-DMQOpoAK.js";import{P as Gt,a as mt}from"./_animation-chunk-Qpk-pkcu.js";import{O as S,a as Mt,c as Wt,b as Qt,d as ut,e as qt,f as gt,C as Ut}from"./_overlay-module-chunk-CecjDJNq.js";import{D as G,B as M}from"./bidi-l_WyJb_E.js";function Yt(o,i){}class b{constructor(){t(this,"viewContainerRef");t(this,"injector");t(this,"id");t(this,"role","dialog");t(this,"panelClass","");t(this,"hasBackdrop",!0);t(this,"backdropClass","");t(this,"disableClose",!1);t(this,"closePredicate");t(this,"width","");t(this,"height","");t(this,"minWidth");t(this,"minHeight");t(this,"maxWidth");t(this,"maxHeight");t(this,"positionStrategy");t(this,"data",null);t(this,"direction");t(this,"ariaDescribedBy",null);t(this,"ariaLabelledBy",null);t(this,"ariaLabel",null);t(this,"ariaModal",!1);t(this,"autoFocus","first-tabbable");t(this,"restoreFocus",!0);t(this,"scrollStrategy");t(this,"closeOnNavigation",!0);t(this,"closeOnDestroy",!0);t(this,"closeOnOverlayDetachments",!0);t(this,"disableAnimations",!1);t(this,"providers");t(this,"container");t(this,"templateContext");t(this,"bindings")}}let O=(()=>{const i=class i extends jt{constructor(){super();t(this,"_elementRef",l(R));t(this,"_focusTrapFactory",l(zt));t(this,"_config");t(this,"_interactivityChecker",l(Ht));t(this,"_ngZone",l(Dt));t(this,"_focusMonitor",l(Vt));t(this,"_renderer",l(At));t(this,"_changeDetectorRef",l(St));t(this,"_injector",l(m));t(this,"_platform",l(Gt));t(this,"_document",l(Ot));t(this,"_portalOutlet");t(this,"_focusTrapped",new g);t(this,"_focusTrap",null);t(this,"_elementFocusedBeforeDialogWasOpened",null);t(this,"_closeInteractionType",null);t(this,"_ariaLabelledByQueue",[]);t(this,"_isDestroyed",!1);t(this,"attachDomPortal",e=>{this._portalOutlet.hasAttached();const a=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),a});this._config=l(b,{optional:!0})||new b,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){const a=this._ariaLabelledByQueue.indexOf(e);a>-1&&(this._ariaLabelledByQueue.splice(a,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const a=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),a}attachTemplatePortal(e){this._portalOutlet.hasAttached();const a=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),a}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,a){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const s=()=>{c(),d(),e.removeAttribute("tabindex")},c=this._renderer.listen(e,"blur",s),d=this._renderer.listen(e,"mousedown",s)})),e.focus(a)}_focusByCssSelector(e,a){let s=this._elementRef.nativeElement.querySelector(e);s&&this._forceFocus(s,a)}_trapFocus(e){this._isDestroyed||Tt(()=>{var s;const a=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||a.focus(e);break;case!0:case"first-tabbable":((s=this._focusTrap)==null?void 0:s.focusInitialElement(e))||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){const e=this._config.restoreFocus;let a=null;if(typeof e=="string"?a=this._document.querySelector(e):typeof e=="boolean"?a=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(a=e),this._config.restoreFocus&&a&&typeof a.focus=="function"){const s=x(),c=this._elementRef.nativeElement;(!s||s===this._document.body||s===c||c.contains(s))&&(this._focusMonitor?(this._focusMonitor.focusVia(a,this._closeInteractionType),this._closeInteractionType=null):a.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){var a,s;(s=(a=this._elementRef.nativeElement).focus)==null||s.call(a,e)}_containsFocus(){const e=this._elementRef.nativeElement,a=x();return e===a||e.contains(a)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=x()))}};t(i,"ɵfac",function(a){return new(a||i)}),t(i,"ɵcmp",ot({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(a,s){if(a&1&&xt(F,7),a&2){let c;wt(c=kt())&&(s._portalOutlet=c.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(a,s){a&2&&E("id",s._config.id||null)("role",s._config.role)("aria-modal",s._config.ariaModal)("aria-labelledby",s._config.ariaLabel?null:s._ariaLabelledByQueue[0])("aria-label",s._config.ariaLabel)("aria-describedby",s._config.ariaDescribedBy||null)},features:[T],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(a,s){a&1&&st(0,Yt,0,0,"ng-template",0)},dependencies:[F],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1}));let o=i;return o})();class D{constructor(i,r){t(this,"overlayRef");t(this,"config");t(this,"componentInstance",null);t(this,"componentRef",null);t(this,"containerInstance");t(this,"disableClose");t(this,"closed",new g);t(this,"backdropClick");t(this,"keydownEvents");t(this,"outsidePointerEvents");t(this,"id");t(this,"_detachSubscription");this.overlayRef=i,this.config=r,this.disableClose=r.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=r.id,this.keydownEvents.subscribe(n=>{n.keyCode===ht&&!this.disableClose&&!dt(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{var n,e;!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):(e=(n=this.containerInstance)._recaptureFocus)==null||e.call(n)}),this._detachSubscription=i.detachments().subscribe(()=>{r.closeOnOverlayDetachments!==!1&&this.close()})}close(i,r){if(this._canClose(i)){const n=this.closed;this.containerInstance._closeInteractionType=(r==null?void 0:r.focusOrigin)||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",r=""){return this.overlayRef.updateSize({width:i,height:r}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){const r=this.config;return!!this.containerInstance&&(!r.closePredicate||r.closePredicate(i,r,this.componentInstance))}}const Zt=new p("DialogScrollStrategy",{providedIn:"root",factory:()=>{const o=l(m);return()=>gt(o)}}),$t=new p("DialogData"),Jt=new p("DefaultDialogConfig");function Kt(o){const i=Ft(o),r=new rt;return{valueSignal:i,get value(){return i()},change:r,ngOnDestroy(){r.complete()}}}let pt=(()=>{const i=class i{constructor(){t(this,"_injector",l(m));t(this,"_defaultOptions",l(Jt,{optional:!0}));t(this,"_parentDialog",l(i,{optional:!0,skipSelf:!0}));t(this,"_overlayContainer",l(Mt));t(this,"_idGenerator",l(L));t(this,"_openDialogsAtThisLevel",[]);t(this,"_afterAllClosedAtThisLevel",new g);t(this,"_afterOpenedAtThisLevel",new g);t(this,"_ariaHiddenElements",new Map);t(this,"_scrollStrategy",l(Zt));t(this,"afterAllClosed",it(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(at(void 0))))}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(n,e){e={...this._defaultOptions||new b,...e},e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);const s=this._getOverlayConfig(e),c=Wt(this._injector,s),d=new D(c,e),h=this._attachContainer(c,d,e);if(d.containerInstance=h,!this.openDialogs.length){const _=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(v(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(_)}):this._hideNonDialogContentFromAssistiveTechnology(_)}return this._attachDialogContent(n,d,h,e),this.openDialogs.push(d),d.closed.subscribe(()=>this._removeOpenDialog(d,!0)),this.afterOpened.next(d),d}closeAll(){w(this.openDialogs,n=>n.close())}getDialogById(n){return this.openDialogs.find(e=>e.id===n)}ngOnDestroy(){w(this._openDialogsAtThisLevel,n=>{n.config.closeOnDestroy===!1&&this._removeOpenDialog(n,!1)}),w(this._openDialogsAtThisLevel,n=>n.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(n){const e=new Qt({positionStrategy:n.positionStrategy||ut().centerHorizontally().centerVertically(),scrollStrategy:n.scrollStrategy||this._scrollStrategy(),panelClass:n.panelClass,hasBackdrop:n.hasBackdrop,direction:n.direction,minWidth:n.minWidth,minHeight:n.minHeight,maxWidth:n.maxWidth,maxHeight:n.maxHeight,width:n.width,height:n.height,disposeOnNavigation:n.closeOnNavigation,disableAnimations:n.disableAnimations});return n.backdropClass&&(e.backdropClass=n.backdropClass),e}_attachContainer(n,e,a){var f;const s=a.injector||((f=a.viewContainerRef)==null?void 0:f.injector),c=[{provide:b,useValue:a},{provide:D,useValue:e},{provide:qt,useValue:n}];let d;a.container?typeof a.container=="function"?d=a.container:(d=a.container.type,c.push(...a.container.providers(a))):d=O;const h=new z(d,a.viewContainerRef,m.create({parent:s||this._injector,providers:c}));return n.attach(h).instance}_attachDialogContent(n,e,a,s){if(n instanceof vt){const c=this._createInjector(s,e,a,void 0);let d={$implicit:s.data,dialogRef:e};s.templateContext&&(d={...d,...typeof s.templateContext=="function"?s.templateContext():s.templateContext}),a.attachTemplatePortal(new Bt(n,null,d,c))}else{const c=this._createInjector(s,e,a,this._injector),d=a.attachComponentPortal(new z(n,s.viewContainerRef,c,null,s.bindings));e.componentRef=d,e.componentInstance=d.instance}}_createInjector(n,e,a,s){var h;const c=n.injector||((h=n.viewContainerRef)==null?void 0:h.injector),d=[{provide:$t,useValue:n.data},{provide:D,useValue:e}];return n.providers&&(typeof n.providers=="function"?d.push(...n.providers(e,n,a)):d.push(...n.providers)),n.direction&&(!c||!c.get(G,null,{optional:!0}))&&d.push({provide:G,useValue:Kt(n.direction)}),m.create({parent:c||s,providers:d})}_removeOpenDialog(n,e){const a=this.openDialogs.indexOf(n);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,c)=>{s?c.setAttribute("aria-hidden",s):c.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(n){if(n.parentElement){const e=n.parentElement.children;for(let a=e.length-1;a>-1;a--){const s=e[a];s!==n&&s.nodeName!=="SCRIPT"&&s.nodeName!=="STYLE"&&!s.hasAttribute("aria-live")&&!s.hasAttribute("popover")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const n=this._parentDialog;return n?n._getAfterAllClosed():this._afterAllClosedAtThisLevel}};t(i,"ɵfac",function(e){return new(e||i)}),t(i,"ɵprov",nt({token:i,factory:i.ɵfac}));let o=i;return o})();function w(o,i){let r=o.length;for(;r--;)i(o[r])}let W=(()=>{const i=class i{};t(i,"ɵfac",function(e){return new(e||i)}),t(i,"ɵmod",tt({type:i,imports:[S,u,H,O],exports:[u,O]})),t(i,"ɵinj",et({providers:[pt],imports:[S,u,H,u]}));let o=i;return o})();function Xt(o,i){}class Q{constructor(){t(this,"viewContainerRef");t(this,"injector");t(this,"id");t(this,"role","dialog");t(this,"panelClass","");t(this,"hasBackdrop",!0);t(this,"backdropClass","");t(this,"disableClose",!1);t(this,"closePredicate");t(this,"width","");t(this,"height","");t(this,"minWidth");t(this,"minHeight");t(this,"maxWidth");t(this,"maxHeight");t(this,"position");t(this,"data",null);t(this,"direction");t(this,"ariaDescribedBy",null);t(this,"ariaLabelledBy",null);t(this,"ariaLabel",null);t(this,"ariaModal",!1);t(this,"autoFocus","first-tabbable");t(this,"restoreFocus",!0);t(this,"delayFocusTrap",!0);t(this,"scrollStrategy");t(this,"closeOnNavigation",!0);t(this,"enterAnimationDuration");t(this,"exitAnimationDuration");t(this,"bindings")}}const k="mdc-dialog--open",q="mdc-dialog--opening",U="mdc-dialog--closing",te=150,ee=75;let I=(()=>{const i=class i extends O{constructor(){super(...arguments);t(this,"_animationStateChanged",new rt);t(this,"_animationsEnabled",!mt());t(this,"_actionSectionCount",0);t(this,"_hostElement",this._elementRef.nativeElement);t(this,"_enterAnimationDuration",this._animationsEnabled?Z(this._config.enterAnimationDuration)??te:0);t(this,"_exitAnimationDuration",this._animationsEnabled?Z(this._config.exitAnimationDuration)??ee:0);t(this,"_animationTimer",null);t(this,"_finishDialogOpen",()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)});t(this,"_finishDialogClose",()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})})}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Y,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(q,k)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(k),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(k),this._animationsEnabled?(this._hostElement.style.setProperty(Y,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(U)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(q,U)}_waitForAnimationToComplete(e,a){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(a,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){const a=super.attachComponentPortal(e);return a.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),a}};t(i,"ɵfac",(()=>{let e;return function(s){return(e||(e=N(i)))(s||i)}})()),t(i,"ɵcmp",ot({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(a,s){a&2&&(lt("id",s._config.id),E("aria-modal",s._config.ariaModal)("role",s._config.role)("aria-labelledby",s._config.ariaLabel?null:s._ariaLabelledByQueue[0])("aria-label",s._config.ariaLabel)("aria-describedby",s._config.ariaDescribedBy||null),ct("_mat-animation-noopable",!s._animationsEnabled)("mat-mdc-dialog-container-with-actions",s._actionSectionCount>0))},features:[T],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(a,s){a&1&&(Rt(0,"div",0)(1,"div",1),st(2,Xt,0,0,"ng-template",2),Et()())},dependencies:[F],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1}));let o=i;return o})();const Y="--mat-dialog-transition-duration";function Z(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?V(o.substring(0,o.length-2)):o.endsWith("s")?V(o.substring(0,o.length-1))*1e3:o==="0"?0:null}var A=(function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o})(A||{});class P{constructor(i,r,n){t(this,"_ref");t(this,"_config");t(this,"_containerInstance");t(this,"componentInstance");t(this,"componentRef",null);t(this,"disableClose");t(this,"id");t(this,"_afterOpened",new j(1));t(this,"_beforeClosed",new j(1));t(this,"_result");t(this,"_closeFallbackTimeout");t(this,"_state",A.OPEN);t(this,"_closeInteractionType");this._ref=i,this._config=r,this._containerInstance=n,this.disableClose=r.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(C(e=>e.state==="opened"),v(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(C(e=>e.state==="closed"),v(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),It(this.backdropClick(),this.keydownEvents().pipe(C(e=>e.keyCode===ht&&!this.disableClose&&!dt(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),_t(this,e.type==="keydown"?"keyboard":"mouse"))})}close(i){const r=this._config.closePredicate;r&&!r(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(C(n=>n.state==="closing"),v(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=A.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let r=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?r.left(i.left):r.right(i.right):r.centerHorizontally(),i&&(i.top||i.bottom)?i.top?r.top(i.top):r.bottom(i.bottom):r.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",r=""){return this._ref.updateSize(i,r),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=A.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function _t(o,i,r){return o._closeInteractionType=i,o.close(r)}const ie=new p("MatMdcDialogData"),ae=new p("mat-mdc-dialog-default-options"),ne=new p("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{const o=l(m);return()=>gt(o)}});let B=(()=>{const i=class i{constructor(){t(this,"_defaultOptions",l(ae,{optional:!0}));t(this,"_scrollStrategy",l(ne));t(this,"_parentDialog",l(i,{optional:!0,skipSelf:!0}));t(this,"_idGenerator",l(L));t(this,"_injector",l(m));t(this,"_dialog",l(pt));t(this,"_animationsDisabled",mt());t(this,"_openDialogsAtThisLevel",[]);t(this,"_afterAllClosedAtThisLevel",new g);t(this,"_afterOpenedAtThisLevel",new g);t(this,"dialogConfigClass",Q);t(this,"_dialogRefConstructor");t(this,"_dialogContainerType");t(this,"_dialogDataToken");t(this,"afterAllClosed",it(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(at(void 0))));this._dialogRefConstructor=P,this._dialogContainerType=I,this._dialogDataToken=ie}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const n=this._parentDialog;return n?n._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(n,e){var c,d;let a;e={...this._defaultOptions||new Q,...e},e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();const s=this._dialog.open(n,{...e,positionStrategy:ut(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||((c=e.enterAnimationDuration)==null?void 0:c.toLocaleString())==="0"||((d=e.exitAnimationDuration)==null?void 0:d.toString())==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:b,useValue:e}]},templateContext:()=>({dialogRef:a}),providers:(h,_,f)=>(a=new this._dialogRefConstructor(h,e,f),a.updatePosition(e==null?void 0:e.position),[{provide:this._dialogContainerType,useValue:f},{provide:this._dialogDataToken,useValue:_.data},{provide:this._dialogRefConstructor,useValue:a},{provide:D,useValue:null}])});return a.componentRef=s.componentRef,a.componentInstance=s.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{const h=this.openDialogs.indexOf(a);h>-1&&(this.openDialogs.splice(h,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(n){return this.openDialogs.find(e=>e.id===n)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(n){let e=n.length;for(;e--;)n[e].close()}};t(i,"ɵfac",function(e){return new(e||i)}),t(i,"ɵprov",nt({token:i,factory:i.ɵfac}));let o=i;return o})(),$=(()=>{const i=class i{constructor(){t(this,"dialogRef",l(P,{optional:!0}));t(this,"_elementRef",l(R));t(this,"_dialog",l(B));t(this,"ariaLabel");t(this,"type","button");t(this,"dialogResult");t(this,"_matDialogClose")}ngOnInit(){this.dialogRef||(this.dialogRef=bt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(n){const e=n._matDialogClose;e&&(this.dialogResult=e.currentValue)}_onButtonClick(n){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&_t(this.dialogRef,n.screenX===0&&n.screenY===0?"keyboard":"mouse",this.dialogResult)}};t(i,"ɵfac",function(e){return new(e||i)}),t(i,"ɵdir",y({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,a){e&1&&Lt("click",function(c){return a._onButtonClick(c)}),e&2&&E("aria-label",a.ariaLabel||null)("type",a.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Nt]}));let o=i;return o})(),ft=(()=>{const i=class i{constructor(){t(this,"_dialogRef",l(P,{optional:!0}));t(this,"_elementRef",l(R));t(this,"_dialog",l(B))}ngOnInit(){this._dialogRef||(this._dialogRef=bt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){var e;((e=this._dialogRef)==null?void 0:e._containerInstance)&&Promise.resolve().then(()=>{this._onRemove()})}};t(i,"ɵfac",function(e){return new(e||i)}),t(i,"ɵdir",y({type:i}));let o=i;return o})(),J=(()=>{const i=class i extends ft{constructor(){super(...arguments);t(this,"id",l(L).getId("mat-mdc-dialog-title-"))}_onAdd(){var e,a;(a=(e=this._dialogRef._containerInstance)==null?void 0:e._addAriaLabelledBy)==null||a.call(e,this.id)}_onRemove(){var e,a,s;(s=(a=(e=this._dialogRef)==null?void 0:e._containerInstance)==null?void 0:a._removeAriaLabelledBy)==null||s.call(a,this.id)}};t(i,"ɵfac",(()=>{let e;return function(s){return(e||(e=N(i)))(s||i)}})()),t(i,"ɵdir",y({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(a,s){a&2&&lt("id",s.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[T]}));let o=i;return o})(),K=(()=>{const i=class i{};t(i,"ɵfac",function(e){return new(e||i)}),t(i,"ɵdir",y({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Pt([Ut])]}));let o=i;return o})(),X=(()=>{const i=class i extends ft{constructor(){super(...arguments);t(this,"align")}_onAdd(){var e,a;(a=(e=this._dialogRef._containerInstance)==null?void 0:e._updateActionSectionCount)==null||a.call(e,1)}_onRemove(){var e,a;(a=(e=this._dialogRef._containerInstance)==null?void 0:e._updateActionSectionCount)==null||a.call(e,-1)}};t(i,"ɵfac",(()=>{let e;return function(s){return(e||(e=N(i)))(s||i)}})()),t(i,"ɵdir",y({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(a,s){a&2&&ct("mat-mdc-dialog-actions-align-start",s.align==="start")("mat-mdc-dialog-actions-align-center",s.align==="center")("mat-mdc-dialog-actions-align-end",s.align==="end")},inputs:{align:"align"},features:[T]}));let o=i;return o})();function bt(o,i){let r=o.nativeElement.parentElement;for(;r&&!r.classList.contains("mat-mdc-dialog-container");)r=r.parentElement;return r?i.find(n=>n.id===r.id):null}let ue=(()=>{const i=class i{};t(i,"ɵfac",function(e){return new(e||i)}),t(i,"ɵmod",tt({type:i,imports:[W,S,u,I,$,J,X,K],exports:[M,I,$,J,X,K]})),t(i,"ɵinj",et({providers:[B],imports:[W,S,u,M]}));let o=i;return o})();export{P as M,ie as a,ue as b};
