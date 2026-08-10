var Qi=Object.defineProperty;var Zi=(o,t,l)=>t in o?Qi(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l;var n=(o,t,l)=>Zi(o,typeof t!="symbol"?t+"":t,l);import{m as Ji}from"./chunk-KBKLVYEJ-BdRgWarS.js";import"./iframe-C1pQtk4A.js";import{i as m,D as Ot,aq as en,ɵ as Ze,N as me,S as z,O as tn,j as Be,bb as nn,aJ as D,E as T,C as ee,bS as Ie,p as dt,bT as an,s as Je,q as on,a0 as ht,m as ut,b9 as sn,a8 as be,bU as rn,M as E,aS as ln,ao as te,a3 as fe,a9 as p,x as H,U as x,ap as k,aa as _,W as u,J as P,Y as S,w as L,I as O,bV as dn,a4 as he,bW as At,a5 as b,a6 as y,bX as cn,aP as et,aU as j,a_ as w,e as g,o as mn,T as pt,Q as oe,V as se,R as Tt,ab as ki,z as U,aZ as fn,b0 as G,aY as I,bY as Ne,aX as tt,k as Q,aO as Ni,g as R,b1 as X,$ as hn,an as Di,a1 as un,f as De,P as ie,aT as re,d as it,ba as zt,b2 as nt,b3 as ve,b4 as xe,Z as Oi,au as ue,h as ne,bZ as pn,b as at,c as ot,a7 as Ti,aV as _n,b_ as gn,b$ as bn,c0 as yn,c1 as vn,c2 as xn,aw as ge,ax as Fi,ay as Sn,b8 as Ii,bh as wn,b6 as Cn,ad as Pt,aG as ct,b7 as Rn,a2 as Oe,y as F,v as N,aW as V,c3 as Ei,c4 as Ai,X as st,bd as kn,be as Nn,t as Dn,az as On,aA as Tn}from"./angular-platform-Cx1L7wmy.js";import{D as rt,B as le}from"./bidi-DITo3jCe.js";import{L as Fn,c as _t,M as In,S as En}from"./_pseudo-checkbox-chunk-BnB1w2Vq.js";import{P as lt,a as Te,M as An}from"./_animation-chunk-CzQ7AORy.js";import{_ as Fe,h as ye,C as zn}from"./portal-C6NL6b3Y.js";import{_ as Le,V as zi,g as Pn,h as Lt,i as Mt,j as Pi,S as Ln,k as Mn,c as Bn,l as Bt,O as Ht,m as Vt,n as Hn,o as Vn,p as mt}from"./_overlay-module-chunk-CdLb_jDO.js";import{a as Wn,V as Un,b as Gn,c as jn}from"./forms-DxR5ycz0.js";import{_ as Li,d as $n,e as Yn,M as qn}from"./button-Yiz3maQU.js";import{a as Mi}from"./private-C5-ka_BE.js";import{_ as Ft,j as He,S as Ve,A as Kn,E as Bi,h as Xn,D as Wt,U as Ut,L as Qn,R as Zn,F as Hi,b as Gt}from"./_style-loader-chunk-BcCZh8E_.js";import{L as Jn,A as jt}from"./_a11y-module-chunk-D40E9W57.js";import{M as ea}from"./icon-DQTuCTWf.js";import"./preload-helper-Dp1pzeXC.js";import"./observers-2QeGIBlC.js";class ta extends Fn{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}}const Vi=" ";function ia(o,t,l){const e=We(o,t);l=l.trim(),!e.some(i=>i.trim()===l)&&(e.push(l),o.setAttribute(t,e.join(Vi)))}function na(o,t,l){const e=We(o,t);l=l.trim();const i=e.filter(a=>a!==l);i.length?o.setAttribute(t,i.join(Vi)):o.removeAttribute(t)}function We(o,t){const l=o.getAttribute(t);return(l==null?void 0:l.match(/\S+/g))??[]}const Wi="cdk-describedby-message",Ee="cdk-describedby-host";let gt=0,Ui=(()=>{const t=class t{constructor(){n(this,"_platform",m(lt));n(this,"_document",m(Ot));n(this,"_messageRegistry",new Map);n(this,"_messagesContainer",null);n(this,"_id",`${gt++}`);m(Ft).load(Mi),this._id=m(en)+"-"+gt++}describe(e,i,a){if(!this._canBeDescribed(e,i))return;const r=ft(i,a);typeof i!="string"?($t(i,this._id),this._messageRegistry.set(r,{messageElement:i,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(i,a),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,i,a){var s;if(!i||!this._isElementNode(e))return;const r=ft(i,a);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof i=="string"){const d=this._messageRegistry.get(r);d&&d.referenceCount===0&&this._deleteMessageElement(r)}((s=this._messagesContainer)==null?void 0:s.childNodes.length)===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){var i;const e=this._document.querySelectorAll(`[${Ee}="${this._id}"]`);for(let a=0;a<e.length;a++)this._removeCdkDescribedByReferenceIds(e[a]),e[a].removeAttribute(Ee);(i=this._messagesContainer)==null||i.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){const a=this._document.createElement("div");$t(a,this._id),a.textContent=e,i&&a.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(ft(e,i),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){var i,a;(a=(i=this._messageRegistry.get(e))==null?void 0:i.messageElement)==null||a.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;const e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<i.length;r++)i[r].remove();const a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(e),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){const i=We(e,"aria-describedby").filter(a=>a.indexOf(Wi)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){const a=this._messageRegistry.get(i);ia(e,"aria-describedby",a.messageElement.id),e.setAttribute(Ee,this._id),a.referenceCount++}_removeMessageReference(e,i){const a=this._messageRegistry.get(i);a.referenceCount--,na(e,"aria-describedby",a.messageElement.id),e.removeAttribute(Ee)}_isElementDescribedByMessage(e,i){const a=We(e,"aria-describedby"),r=this._messageRegistry.get(i),s=r&&r.messageElement.id;return!!s&&a.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;const a=i==null?"":`${i}`.trim(),r=e.getAttribute("aria-label");return a?!r||r.trim()!==a:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵprov",Ze({token:t,factory:t.ɵfac}));let o=t;return o})();function ft(o,t){return typeof o=="string"?`${t||""}/${o}`:o}function $t(o,t){o.id||(o.id=`${Wi}-${t}-${gt++}`)}const aa=`<table mat-table [dataSource]="data" matSort [ngClass]="getTableCls()">
  <caption></caption>
  <!-- Fila de cabecezas-->
  <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true;"></tr>

  <!-- Fila de cuerpo -->
  <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="selectedRowIndex = row.id"
  [ngClass]="{'row-selected': selectedRowIndex == row.id}"></tr>

  <!-- Columns -->
  @for (col of cols; track col) {
    <ng-container [matColumnDef]="col.name" [stickyEnd]="col.stickyEnd">
      @if (col.type==='data') {
        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{col.text}}</th>
        <td mat-cell *matCellDef="let row; let i=index;">
          @if(col.field=='_rowNumber'){
            {{getItemNumber(i)}}
            }@else{
            {{row[col.field]}}
          }
        </td>
      } @else if(col.type==='actions') {
        <th mat-header-cell *matHeaderCellDef class="row-actions-header-cell">
          <div>
            <div [style.width.px]="getActionsColWidth(col)">{{col.text}}</div>
          </div>
        </th>
        <td mat-cell *matCellDef="let row; let i=index;" class="row-actions-cell">
          <div class="row-actions-container">
            @for (action of col.actions; track action) {
              <button mat-icon-button [class]="'row-action-button' + action.cls"
                (click)="action.handler(row)" [matTooltip]="action.tooltip||''">
                <mat-icon>{{action.icon}}</mat-icon>
              </button>
            }
          </div>
        </td>
      }
    </ng-container>
  }
</table>
`,oa="";class sa{constructor(t){n(this,"_box");n(this,"_destroyed",new z);n(this,"_resizeSubject",new z);n(this,"_resizeObserver");n(this,"_elementObservables",new Map);this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(l=>this._resizeSubject.next(l)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new tn(l=>{var i;const e=this._resizeSubject.subscribe(l);return(i=this._resizeObserver)==null||i.observe(t,{box:this._box}),()=>{var a;(a=this._resizeObserver)==null||a.unobserve(t),e.unsubscribe(),this._elementObservables.delete(t)}}).pipe(Be(l=>l.some(e=>e.target===t)),nn({bufferSize:1,refCount:!0}),D(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}}let ra=(()=>{const t=class t{constructor(){n(this,"_cleanupErrorListener");n(this,"_observers",new Map);n(this,"_ngZone",m(me))}ngOnDestroy(){var e;for(const[,i]of this._observers)i.destroy();this._observers.clear(),(e=this._cleanupErrorListener)==null||e.call(this)}observe(e,i){const a=(i==null?void 0:i.box)||"content-box";return this._observers.has(a)||this._observers.set(a,new sa(a)),this._observers.get(a).observe(e)}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵprov",Ze({token:t,factory:t.ɵfac}));let o=t;return o})();const la=["notch"],da=["*"],Yt=["iconPrefixContainer"],qt=["textPrefixContainer"],Kt=["iconSuffixContainer"],Xt=["textSuffixContainer"],ca=["textField"],ma=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],fa=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ha(o,t){o&1&&j(0,"span",21)}function ua(o,t){if(o&1&&(p(0,"label",20),k(1,1),x(2,ha,1,0,"span",21),_()),o&2){const l=w(2);I("floating",l._shouldLabelFloat())("monitorResize",l._hasOutline())("id",l._labelId),U("for",l._control.disableAutomaticLabeling?null:l._control.id),u(2),S(!l.hideRequiredMarker&&l._control.required?2:-1)}}function pa(o,t){if(o&1&&x(0,ua,3,5,"label",20),o&2){const l=w();S(l._hasFloatingLabel()?0:-1)}}function _a(o,t){o&1&&j(0,"div",7)}function ga(o,t){}function ba(o,t){if(o&1&&fe(0,ga,0,0,"ng-template",13),o&2){w(2);const l=tt(1);I("ngTemplateOutlet",l)}}function ya(o,t){if(o&1&&(p(0,"div",9),x(1,ba,1,1,null,13),_()),o&2){const l=w();I("matFormFieldNotchedOutlineOpen",l._shouldLabelFloat()),u(),S(l._forceDisplayInfixLabel()?-1:1)}}function va(o,t){o&1&&(p(0,"div",10,2),k(2,2),_())}function xa(o,t){o&1&&(p(0,"div",11,3),k(2,3),_())}function Sa(o,t){}function wa(o,t){if(o&1&&fe(0,Sa,0,0,"ng-template",13),o&2){w();const l=tt(1);I("ngTemplateOutlet",l)}}function Ca(o,t){o&1&&(p(0,"div",14,4),k(2,4),_())}function Ra(o,t){o&1&&(p(0,"div",15,5),k(2,5),_())}function ka(o,t){o&1&&j(0,"div",16)}function Na(o,t){o&1&&(p(0,"div",18),k(1,6),_())}function Da(o,t){if(o&1&&(p(0,"mat-hint",22),G(1),_()),o&2){const l=w(2);I("id",l._hintLabelId),u(),Ne(l.hintLabel)}}function Oa(o,t){if(o&1&&(p(0,"div",19),x(1,Da,2,2,"mat-hint",22),k(2,7),j(3,"div",23),k(4,8),_()),o&2){const l=w();u(),S(l.hintLabel?1:-1)}}let Qt=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["mat-label"]]}));let o=t;return o})();const Ta=new O("MatError");let Zt=(()=>{const t=class t{constructor(){n(this,"align","start");n(this,"id",m(Fe).getId("mat-mdc-hint-"))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,a){i&2&&(ki("id",a.id),U("align",null),P("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}}));let o=t;return o})();const Fa=new O("MatPrefix"),Ia=new O("MatSuffix"),Gi=new O("FloatingLabelParent");let Jt=(()=>{const t=class t{constructor(){n(this,"_elementRef",m(T));n(this,"_floating",!1);n(this,"_monitorResize",!1);n(this,"_resizeObserver",m(ra));n(this,"_ngZone",m(me));n(this,"_parent",m(Gi));n(this,"_resizeSubscription",new mn)}get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ea(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,a){i&2&&P("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}}));let o=t;return o})();function Ea(o){const t=o;if(t.offsetParent!==null)return t.scrollWidth;const l=t.cloneNode(!0);l.style.setProperty("position","absolute"),l.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(l);const e=l.scrollWidth;return l.remove(),e}const ei="mdc-line-ripple--active",Ae="mdc-line-ripple--deactivating";let ti=(()=>{const t=class t{constructor(){n(this,"_elementRef",m(T));n(this,"_cleanupTransitionEnd");n(this,"_handleTransitionEnd",e=>{const i=this._elementRef.nativeElement.classList,a=i.contains(Ae);e.propertyName==="opacity"&&a&&i.remove(ei,Ae)});const e=m(me),i=m(Tt);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){const e=this._elementRef.nativeElement.classList;e.remove(Ae),e.add(ei)}deactivate(){this._elementRef.nativeElement.classList.add(Ae)}ngOnDestroy(){this._cleanupTransitionEnd()}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]}));let o=t;return o})(),ii=(()=>{const t=class t{constructor(){n(this,"_elementRef",m(T));n(this,"_ngZone",m(me));n(this,"open",!1);n(this,"_notch")}ngAfterViewInit(){const e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){const i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,a){if(i&1&&he(la,5),i&2){let r;b(r=y())&&(a._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,a){i&2&&P("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:da,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,a){i&1&&(te(),pt(0,"div",1),oe(1,"div",2,0),k(3),se(),pt(4,"div",3))},encapsulation:2}));let o=t;return o})(),ji=(()=>{const t=class t{constructor(){n(this,"value",null);n(this,"stateChanges");n(this,"id");n(this,"placeholder");n(this,"ngControl",null);n(this,"focused",!1);n(this,"empty",!1);n(this,"shouldLabelFloat",!1);n(this,"required",!1);n(this,"disabled",!1);n(this,"errorState",!1);n(this,"controlType");n(this,"autofilled");n(this,"userAriaDescribedBy");n(this,"disableAutomaticLabeling");n(this,"describedByIds")}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t}));let o=t;return o})();const $i=new O("MatFormField"),Aa=new O("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ni="fill",za="auto",ai="fixed",Pa="translateY(-50%)";let La=(()=>{const t=class t{constructor(){n(this,"_elementRef",m(T));n(this,"_changeDetectorRef",m(ee));n(this,"_platform",m(lt));n(this,"_idGenerator",m(Fe));n(this,"_ngZone",m(me));n(this,"_defaults",m(Aa,{optional:!0}));n(this,"_currentDirection");n(this,"_textField");n(this,"_iconPrefixContainer");n(this,"_textPrefixContainer");n(this,"_iconSuffixContainer");n(this,"_textSuffixContainer");n(this,"_floatingLabel");n(this,"_notchedOutline");n(this,"_lineRipple");n(this,"_iconPrefixContainerSignal",Ie("iconPrefixContainer"));n(this,"_textPrefixContainerSignal",Ie("textPrefixContainer"));n(this,"_iconSuffixContainerSignal",Ie("iconSuffixContainer"));n(this,"_textSuffixContainerSignal",Ie("textSuffixContainer"));n(this,"_prefixSuffixContainers",dt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e==null?void 0:e.nativeElement).filter(e=>e!==void 0)));n(this,"_formFieldControl");n(this,"_prefixChildren");n(this,"_suffixChildren");n(this,"_errorChildren");n(this,"_hintChildren");n(this,"_labelChild",an(Qt));n(this,"_hideRequiredMarker",!1);n(this,"color","primary");n(this,"_floatLabel");n(this,"_appearanceSignal",Je(ni));n(this,"_subscriptSizing",null);n(this,"_hintLabel","");n(this,"_hasIconPrefix",!1);n(this,"_hasTextPrefix",!1);n(this,"_hasIconSuffix",!1);n(this,"_hasTextSuffix",!1);n(this,"_labelId",this._idGenerator.getId("mat-mdc-form-field-label-"));n(this,"_hintLabelId",this._idGenerator.getId("mat-mdc-hint-"));n(this,"_describedByIds");n(this,"_destroyed",new z);n(this,"_isFocused",null);n(this,"_explicitFormFieldControl");n(this,"_previousControl",null);n(this,"_previousControlValidatorFn",null);n(this,"_stateChanges");n(this,"_valueChanges");n(this,"_describedByChanges");n(this,"_outlineLabelOffsetResizeObserver",null);n(this,"_animationsDisabled",Te());n(this,"getLabelId",dt(()=>this._hasFloatingLabel()?this._labelId:null));n(this,"_hasFloatingLabel",dt(()=>!!this._labelChild()));const e=this._defaults,i=m(rt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!(e!=null&&e.hideRequiredMarker),e.color&&(this.color=e.color)),on(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=_t(e)}get floatLabel(){var e;return this._floatLabel||((e=this._defaults)==null?void 0:e.floatLabel)||za}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearanceSignal()}set appearance(e){var a;const i=e||((a=this._defaults)==null?void 0:a.appearance)||ni;this._appearanceSignal.set(i)}get subscriptSizing(){var e;return this._subscriptSizing||((e=this._defaults)==null?void 0:e.subscriptSizing)||ai}set subscriptSizing(e){var i;this._subscriptSizing=e||((i=this._defaults)==null?void 0:i.subscriptSizing)||ai}get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){var e,i,a,r;(e=this._outlineLabelOffsetResizeObserver)==null||e.disconnect(),(i=this._stateChanges)==null||i.unsubscribe(),(a=this._valueChanges)==null||a.unsubscribe(),(r=this._describedByChanges)==null||r.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){var r,s,d;const i=this._control,a="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(a+i.controlType),(r=this._stateChanges)==null||r.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),(s=this._describedByChanges)==null||s.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ht([void 0,void 0]),ut(()=>[i.errorState,i.userAriaDescribedBy]),sn(),Be(([[c,f],[h,v]])=>c!==h||f!==v)).subscribe(()=>this._syncDescribedByIds()),(d=this._valueChanges)==null||d.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(D(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),be(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){var i,a,r;const e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,(i=this._lineRipple)==null||i.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,(a=this._lineRipple)==null||a.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),(r=this._textField)==null||r.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){rn({earlyRead:()=>{var e;if(this._appearanceSignal()!=="outline")return(e=this._outlineLabelOffsetResizeObserver)==null||e.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||(this._outlineLabelOffsetResizeObserver=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())}));for(const i of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(i,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){const i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){var e,i;!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?(e=this._notchedOutline)==null||e._setNotchWidth(0):(i=this._notchedOutline)==null||i._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){const r=this._hintChildren?this._hintChildren.find(d=>d.align==="start"):null,s=this._hintChildren?this._hintChildren.find(d=>d.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));const i=this._control.describedByIds;let a;if(i){const r=this._describedByIds||e;a=e.concat(i.filter(s=>s&&!r.includes(s)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){var pe,B,A,_e;if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;const e=(pe=this._iconPrefixContainer)==null?void 0:pe.nativeElement,i=(B=this._textPrefixContainer)==null?void 0:B.nativeElement,a=(A=this._iconSuffixContainer)==null?void 0:A.nativeElement,r=(_e=this._textSuffixContainer)==null?void 0:_e.nativeElement,s=(e==null?void 0:e.getBoundingClientRect().width)??0,d=(i==null?void 0:i.getBoundingClientRect().width)??0,c=(a==null?void 0:a.getBoundingClientRect().width)??0,f=(r==null?void 0:r.getBoundingClientRect().width)??0,h=this._currentDirection==="rtl"?"-1":"1",v=`${s+d}px`,K=`calc(${h} * (${v} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,M=`var(--mat-mdc-form-field-label-transform, ${Pa} translateX(${K}))`,W=s+d+c+f;return[M,W]}_writeOutlinedLabelStyles(e){var i;if(e!==null){const[a,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=a),r!==null&&((i=this._notchedOutline)==null||i._setMaxWidth(r))}}_isAttachedToDom(){const e=this._elementRef.nativeElement;if(e.getRootNode){const i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,a,r){if(i&1&&(cn(r,a._labelChild,Qt,5),et(r,ji,5)(r,Fa,5)(r,Ia,5)(r,Ta,5)(r,Zt,5)),i&2){At();let s;b(s=y())&&(a._formFieldControl=s.first),b(s=y())&&(a._prefixChildren=s),b(s=y())&&(a._suffixChildren=s),b(s=y())&&(a._errorChildren=s),b(s=y())&&(a._hintChildren=s)}},viewQuery:function(i,a){if(i&1&&(dn(a._iconPrefixContainerSignal,Yt,5)(a._textPrefixContainerSignal,qt,5)(a._iconSuffixContainerSignal,Kt,5)(a._textSuffixContainerSignal,Xt,5),he(ca,5)(Yt,5)(qt,5)(Kt,5)(Xt,5)(Jt,5)(ii,5)(ti,5)),i&2){At(4);let r;b(r=y())&&(a._textField=r.first),b(r=y())&&(a._iconPrefixContainer=r.first),b(r=y())&&(a._textPrefixContainer=r.first),b(r=y())&&(a._iconSuffixContainer=r.first),b(r=y())&&(a._textSuffixContainer=r.first),b(r=y())&&(a._floatingLabel=r.first),b(r=y())&&(a._notchedOutline=r.first),b(r=y())&&(a._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,a){i&2&&P("mat-mdc-form-field-label-always-float",a._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",a._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",a._hasIconSuffix)("mat-form-field-invalid",a._control.errorState)("mat-form-field-disabled",a._control.disabled)("mat-form-field-autofilled",a._control.autofilled)("mat-form-field-appearance-fill",a.appearance=="fill")("mat-form-field-appearance-outline",a.appearance=="outline")("mat-form-field-hide-placeholder",a._hasFloatingLabel()&&!a._shouldLabelFloat())("mat-primary",a.color!=="accent"&&a.color!=="warn")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("ng-untouched",a._shouldForward("untouched"))("ng-touched",a._shouldForward("touched"))("ng-pristine",a._shouldForward("pristine"))("ng-dirty",a._shouldForward("dirty"))("ng-valid",a._shouldForward("valid"))("ng-invalid",a._shouldForward("invalid"))("ng-pending",a._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[L([{provide:$i,useExisting:t},{provide:Gi,useExisting:t}])],ngContentSelectors:fa,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,a){if(i&1&&(te(ma),fe(0,pa,1,1,"ng-template",null,0,fn),p(2,"div",6,1),H("click",function(s){return a._control.onContainerClick(s)}),x(4,_a,1,0,"div",7),p(5,"div",8),x(6,ya,2,2,"div",9),x(7,va,3,0,"div",10),x(8,xa,3,0,"div",11),p(9,"div",12),x(10,wa,1,1,null,13),k(11),_(),x(12,Ca,3,0,"div",14),x(13,Ra,3,0,"div",15),_(),x(14,ka,1,0,"div",16),_(),p(15,"div",17),x(16,Na,2,0,"div",18)(17,Oa,5,1,"div",19),_()),i&2){let r;u(2),P("mdc-text-field--filled",!a._hasOutline())("mdc-text-field--outlined",a._hasOutline())("mdc-text-field--no-label",!a._hasFloatingLabel())("mdc-text-field--disabled",a._control.disabled)("mdc-text-field--invalid",a._control.errorState),u(2),S(!a._hasOutline()&&!a._control.disabled?4:-1),u(2),S(a._hasOutline()?6:-1),u(),S(a._hasIconPrefix?7:-1),u(),S(a._hasTextPrefix?8:-1),u(2),S(!a._hasOutline()||a._forceDisplayInfixLabel()?10:-1),u(2),S(a._hasTextSuffix?12:-1),u(),S(a._hasIconSuffix?13:-1),u(),S(a._hasOutline()?-1:14),u(),P("mat-mdc-form-field-subscript-dynamic-size",a.subscriptSizing==="dynamic");const s=a._getSubscriptMessageType();u(),S((r=s)==="error"?16:r==="hint"?17:-1)}},dependencies:[Jt,ii,ln,ti,Zt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2}));let o=t;return o})();class Ma{applyChanges(t,l,e,i,a){t.forEachOperation((r,s,d)=>{let c,f;if(r.previousIndex==null){const h=e(r,s,d);c=l.createEmbeddedView(h.templateRef,h.context,h.index),f=Le.INSERTED}else d==null?(l.remove(s),f=Le.REMOVED):(c=l.get(s),l.move(c,d),f=Le.MOVED);a&&a({context:c==null?void 0:c.context,operation:f,record:r})})}detach(){}}/**
 * @license Angular v22.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */const Ba=new O(""),Ha=["text"],Va=[[["mat-icon"]],"*"],Wa=["mat-icon","*"];function Ua(o,t){if(o&1&&j(0,"mat-pseudo-checkbox",1),o&2){const l=w();I("disabled",l.disabled)("state",l.selected?"checked":"unchecked")}}function Ga(o,t){if(o&1&&j(0,"mat-pseudo-checkbox",3),o&2){const l=w();I("disabled",l.disabled)}}function ja(o,t){if(o&1&&(p(0,"span",4),G(1),_()),o&2){const l=w();u(),X("(",l.group.label,")")}}const Yi=new O("MAT_OPTION_PARENT_COMPONENT"),qi=new O("MatOptgroup");class $a{constructor(t,l=!1){n(this,"source");n(this,"isUserInput");this.source=t,this.isUserInput=l}}let Ki=(()=>{const t=class t{constructor(){n(this,"_element",m(T));n(this,"_changeDetectorRef",m(ee));n(this,"_parent",m(Yi,{optional:!0}));n(this,"group",m(qi,{optional:!0}));n(this,"_signalDisableRipple",!1);n(this,"_selected",!1);n(this,"_active",!1);n(this,"_mostRecentViewValue","");n(this,"value");n(this,"id",m(Fe).getId("mat-option-"));n(this,"_disabled",Je(!1));n(this,"onSelectionChange",new Q);n(this,"_text");n(this,"_stateChanges",new z);const e=m(Ft);e.load(Li),e.load(Mi),this._signalDisableRipple=!!this._parent&&Ni(this._parent.disableRipple)}get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}get disableRipple(){var e;return this._signalDisableRipple?this._parent.disableRipple():!!((e=this._parent)!=null&&e.disableRipple)}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}get active(){return this._active}get viewValue(){var e;return(((e=this._text)==null?void 0:e.nativeElement.textContent)||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){const a=this._getHostElement();typeof a.focus=="function"&&a.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===He||e.keyCode===Ve)&&!ye(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){const e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new $a(this,e))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["mat-option"]],viewQuery:function(i,a){if(i&1&&he(Ha,7),i&2){let r;b(r=y())&&(a._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,a){i&1&&H("click",function(){return a._selectViaInteraction()})("keydown",function(s){return a._handleKeydown(s)}),i&2&&(ki("id",a.id),U("aria-selected",a.selected)("aria-disabled",a.disabled.toString()),P("mdc-list-item--selected",a.selected)("mat-mdc-option-multiple",a.multiple)("mat-mdc-option-active",a.active)("mdc-list-item--disabled",a.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",R]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Wa,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,a){i&1&&(te(Va),x(0,Ua,1,2,"mat-pseudo-checkbox",1),k(1),p(2,"span",2,0),k(4,1),_(),x(5,Ga,1,1,"mat-pseudo-checkbox",3),x(6,ja,2,1,"span",4),j(7,"div",5)),i&2&&(S(a.multiple?0:-1),u(5),S(!a.multiple&&a.selected&&!a.hideSingleSelectionIndicator?5:-1),u(),S(a.group&&a.group._inert?6:-1),u(),I("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disabled||a.disableRipple))},dependencies:[In,$n],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2}));let o=t;return o})();function Ya(o,t,l){if(l.length){let e=t.toArray(),i=l.toArray(),a=0;for(let r=0;r<o+1;r++)e[r].group&&e[r].group===i[a]&&a++;return a}return 0}function qa(o,t,l,e){return o<l?o:o+t>l+e?Math.max(0,o-e+t):l}let Ka=(()=>{const t=class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;const i=e().invalid(),a=e().touched();return i&&a}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵprov",Ze({token:t,factory:t.ɵfac}));let o=t;return o})();class Xa{constructor(t,l,e,i,a){n(this,"_defaultMatcher");n(this,"_parentFormGroup");n(this,"_parentForm");n(this,"_stateChanges");n(this,"errorState",!1);n(this,"matcher");n(this,"ngControl");n(this,"formField");this._defaultMatcher=t,this._parentFormGroup=e,this._parentForm=i,this._stateChanges=a,l?Ni(l.field)&&!l.updateValueAndValidity?(this.formField=l,this.ngControl=null):(this.formField=null,this.ngControl=l):this.ngControl=this.formField=null}updateErrorState(){const t=this.errorState,l=this._getCurrentErrorState(this.matcher||this._defaultMatcher);l!==t&&(this.errorState=l,this._stateChanges.next())}_getCurrentErrorState(t){if(this.formField&&(t!=null&&t.isSignalErrorState))return t.isSignalErrorState(this.formField.field())??!1;const l=this._parentFormGroup||this._parentForm,e=this.ngControl?this.ngControl.control:null;return(t==null?void 0:t.isErrorState(e,l))??!1}}const Qa=["trigger"],Za=["panel"],Ja=[[["mat-select-trigger"]],"*"],eo=["mat-select-trigger","*"];function to(o,t){if(o&1&&(p(0,"span",4),G(1),_()),o&2){const l=w();u(),Ne(l.placeholder)}}function io(o,t){o&1&&k(0)}function no(o,t){if(o&1&&(p(0,"span",11),G(1),_()),o&2){const l=w(2);u(),Ne(l.triggerValue)}}function ao(o,t){if(o&1&&(p(0,"span",5),x(1,io,1,0)(2,no,2,1,"span",11),_()),o&2){const l=w();u(),S(l.customTrigger?1:2)}}function oo(o,t){var l,e,i,a;if(o&1){const r=nt();p(0,"div",12,1),H("keydown",function(d){ve(r);const c=w();return xe(c._handleKeydown(d))}),k(2,1),_()}if(o&2){const r=w();Oi(r.panelClass),P("mat-select-panel-animations-enabled",!r._animationsDisabled)("mat-primary",((l=r._parentFormField)==null?void 0:l.color)==="primary")("mat-accent",((e=r._parentFormField)==null?void 0:e.color)==="accent")("mat-warn",((i=r._parentFormField)==null?void 0:i.color)==="warn")("mat-undefined",!((a=r._parentFormField)!=null&&a.color)),U("id",r.id+"-panel")("aria-multiselectable",r.multiple)("aria-label",r.ariaLabel||null)("aria-labelledby",r._getPanelAriaLabelledby())}}const so=new O("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{const o=m(it);return()=>Pi(o)}}),ro=new O("MAT_SELECT_CONFIG"),lo=new O("MatSelectTrigger");class co{constructor(t,l){n(this,"source");n(this,"value");this.source=t,this.value=l}}let mo=(()=>{var t,l,e,i;const a=class a{constructor(){n(this,"_viewportRuler",m(zi));n(this,"_changeDetectorRef",m(ee));n(this,"_elementRef",m(T));n(this,"_dir",m(rt,{optional:!0}));n(this,"_idGenerator",m(Fe));n(this,"_renderer",m(Tt));n(this,"_parentFormField",m($i,{optional:!0}));n(this,"ngControl",m(Wn,{self:!0,optional:!0}));n(this,"_liveAnnouncer",m(Jn));n(this,"_defaultOptions",m(ro,{optional:!0}));n(this,"_animationsDisabled",Te());n(this,"_popoverLocation");n(this,"_initialized",new z);n(this,"_cleanupDetach");n(this,"options");n(this,"optionGroups");n(this,"customTrigger");n(this,"_positions",[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}]);n(this,"_scrollStrategyFactory",m(so));n(this,"_panelOpen",!1);n(this,"_compareWith",(s,d)=>s===d);n(this,"_uid",this._idGenerator.getId("mat-select-"));n(this,"_triggerAriaLabelledBy",null);n(this,"_previousControl");n(this,"_destroy",new z);n(this,"_errorStateTracker");n(this,"stateChanges",new z);n(this,"disableAutomaticLabeling",!0);n(this,"userAriaDescribedBy");n(this,"_selectionModel");n(this,"_keyManager");n(this,"_preferredOverlayOrigin");n(this,"_overlayWidth");n(this,"_onChange",()=>{});n(this,"_onTouched",()=>{});n(this,"_valueId",this._idGenerator.getId("mat-select-value-"));n(this,"_scrollStrategy");n(this,"_overlayPanelClass",((t=this._defaultOptions)==null?void 0:t.overlayPanelClass)||"");n(this,"_focused",!1);n(this,"controlType","mat-select");n(this,"trigger");n(this,"panel");n(this,"_overlayDir");n(this,"panelClass");n(this,"disabled",!1);n(this,"_disableRipple",Je(!1));n(this,"tabIndex",0);n(this,"_hideSingleSelectionIndicator",((l=this._defaultOptions)==null?void 0:l.hideSingleSelectionIndicator)??!1);n(this,"_placeholder");n(this,"_required");n(this,"_multiple",!1);n(this,"disableOptionCentering",((e=this._defaultOptions)==null?void 0:e.disableOptionCentering)??!1);n(this,"_value");n(this,"ariaLabel","");n(this,"ariaLabelledby");n(this,"typeaheadDebounceInterval");n(this,"sortComparator");n(this,"_id");n(this,"panelWidth",this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto");n(this,"canSelectNullableOptions",((i=this._defaultOptions)==null?void 0:i.canSelectNullableOptions)??!1);n(this,"optionSelectionChanges",hn(()=>{const s=this.options;return s?s.changes.pipe(ht(s),zt(()=>be(...s.map(d=>d.onSelectionChange)))):this._initialized.pipe(zt(()=>this.optionSelectionChanges))}));n(this,"openedChange",new Q);n(this,"_openedStream",this.openedChange.pipe(Be(s=>s),ut(()=>{})));n(this,"_closedStream",this.openedChange.pipe(Be(s=>!s),ut(()=>{})));n(this,"selectionChange",new Q);n(this,"valueChange",new Q);n(this,"_skipPredicate",s=>this.panelOpen?!1:s.disabled);var C;const s=m(Ka),d=m(Gn,{optional:!0}),c=m(jn,{optional:!0}),f=m(new Di("tabindex"),{optional:!0}),h=m(Pn,{optional:!0}),v=m(Ba,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),((C=this._defaultOptions)==null?void 0:C.typeaheadDebounceInterval)!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Xa(s,v||this.ngControl,c,d,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=f==null?0:parseInt(f)||0,this._popoverLocation=(h==null?void 0:h.usePopover)===!1?null:"inline",this.id=this.id}_scrollOptionIntoView(s){const d=this.options.toArray()[s];if(d){const c=this.panel.nativeElement,f=Ya(s,this.options,this.optionGroups),h=d._getHostElement();s===0&&f===1?c.scrollTop=0:c.scrollTop=qa(h.offsetTop,h.offsetHeight,c.scrollTop,c.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(s){return new co(this,s)}get focused(){return this._focused||this._panelOpen}get disableRipple(){return this._disableRipple()}set disableRipple(s){this._disableRipple.set(s)}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(s){this._hideSingleSelectionIndicator=s,this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(s){this._placeholder=s,this.stateChanges.next()}get required(){var s,d;return this._required??((d=(s=this.ngControl)==null?void 0:s.control)==null?void 0:d.hasValidator(Un.required))??!1}set required(s){this._required=s,this.stateChanges.next()}get multiple(){return this._multiple}set multiple(s){this._selectionModel,this._multiple=s}get compareWith(){return this._compareWith}set compareWith(s){this._compareWith=s,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(s){this._assignValue(s)&&this._onChange(s)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(s){this._errorStateTracker.matcher=s}get id(){return this._id}set id(s){this._id=s||this._uid,this.stateChanges.next()}get errorState(){return this._errorStateTracker.errorState}set errorState(s){this._errorStateTracker.errorState=s}ngOnInit(){this._selectionModel=new En(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(D(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(D(this._destroy)).subscribe(s=>{s.added.forEach(d=>d.select()),s.removed.forEach(d=>d.deselect())}),this.options.changes.pipe(ht(null),D(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const s=this._getTriggerAriaLabelledby(),d=this.ngControl;if(s!==this._triggerAriaLabelledBy){const c=this._elementRef.nativeElement;this._triggerAriaLabelledBy=s,s?c.setAttribute("aria-labelledby",s):c.removeAttribute("aria-labelledby")}d&&(this._previousControl!==d.control&&(this._previousControl!==void 0&&d.disabled!==null&&d.disabled!==this.disabled&&(this.disabled=d.disabled),this._previousControl=d.control),this.updateErrorState())}ngOnChanges(s){(s.disabled||s.userAriaDescribedBy)&&this.stateChanges.next(),s.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),s.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){var s,d;(s=this._cleanupDetach)==null||s.call(this),(d=this._keyManager)==null||d.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){var s;this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),(s=this._cleanupDetach)==null||s.call(this),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(un(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){var f;if(this._animationsDisabled||!this.panel){this._detachOverlay();return}(f=this._cleanupDetach)==null||f.call(this),this._cleanupDetach=()=>{d(),clearTimeout(c),this._cleanupDetach=void 0};const s=this.panel.nativeElement,d=this._renderer.listen(s,"animationend",h=>{var v;h.animationName==="_mat-select-exit"&&((v=this._cleanupDetach)==null||v.call(this),this._detachOverlay())}),c=setTimeout(()=>{var h;(h=this._cleanupDetach)==null||h.call(this),this._detachOverlay()},200);s.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(s){this._assignValue(s)}registerOnChange(s){this._onChange=s}registerOnTouched(s){this._onTouched=s}setDisabledState(s){this.disabled=s,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){var s,d;return this.multiple?((s=this._selectionModel)==null?void 0:s.selected)||[]:(d=this._selectionModel)==null?void 0:d.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const s=this._selectionModel.selected.map(d=>d.viewValue);return this._isRtl()&&s.reverse(),s.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(s){this.disabled||(this.panelOpen?this._handleOpenKeydown(s):this._handleClosedKeydown(s))}_handleClosedKeydown(s){const d=s.keyCode,c=d===Wt||d===Ut||d===Qn||d===Zn,f=d===He||d===Ve,h=this._keyManager;if(!h.isTyping()&&f&&!ye(s)||(this.multiple||s.altKey)&&c)s.preventDefault(),this.open();else if(!this.multiple){const v=this.selected;h.onKeydown(s);const C=this.selected;C&&v!==C&&this._liveAnnouncer.announce(C.viewValue,1e4)}}_handleOpenKeydown(s){const d=this._keyManager,c=s.keyCode,f=c===Wt||c===Ut,h=d.isTyping();if(f&&s.altKey)s.preventDefault(),this.close();else if(!h&&(c===He||c===Ve)&&d.activeItem&&!ye(s))s.preventDefault(),d.activeItem._selectViaInteraction();else if(!h&&this._multiple&&c===Kn&&s.ctrlKey){s.preventDefault();const v=this.options.some(C=>!C.disabled&&!C.selected);this.options.forEach(C=>{C.disabled||(v?C.select():C.deselect())})}else{const v=d.activeItemIndex;d.onKeydown(s),this._multiple&&f&&s.shiftKey&&d.activeItem&&d.activeItemIndex!==v&&d.activeItem._selectViaInteraction()}}_handleOverlayKeydown(s){s.keyCode===Bi&&!ye(s)&&(s.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){var s;this._focused=!1,(s=this._keyManager)==null||s.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(s){if(this.options.forEach(d=>d.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&s)s.forEach(d=>this._selectOptionByValue(d)),this._sortValues();else{const d=this._selectOptionByValue(s);d?this._keyManager.updateActiveItem(d):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(s){const d=this.options.find(c=>{if(this._selectionModel.isSelected(c))return!1;try{return(c.value!=null||this.canSelectNullableOptions)&&this._compareWith(c.value,s)}catch{return!1}});return d&&this._selectionModel.select(d),d}_assignValue(s){return s!==this._value||this._multiple&&Array.isArray(s)?(this.options&&this._setSelectionByValue(s),this._value=s,!0):!1}_getOverlayWidth(s){return this.panelWidth==="auto"?(s instanceof Lt?s.elementRef:s||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(const s of this.options)s._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ta(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const s=be(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(D(s)).subscribe(d=>{this._onSelect(d.source,d.isUserInput),d.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),be(...this.options.map(d=>d._stateChanges)).pipe(D(s)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(s,d){const c=this._selectionModel.isSelected(s);!this.canSelectNullableOptions&&s.value==null&&!this._multiple?(s.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(s.value)):(c!==s.selected&&(s.selected?this._selectionModel.select(s):this._selectionModel.deselect(s)),d&&this._keyManager.setActiveItem(s),this.multiple&&(this._sortValues(),d&&this.focus())),c!==this._selectionModel.isSelected(s)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const s=this.options.toArray();this._selectionModel.sort((d,c)=>this.sortComparator?this.sortComparator(d,c,s):s.indexOf(d)-s.indexOf(c)),this.stateChanges.next()}}_propagateChanges(s){let d;this.multiple?d=this.selected.map(c=>c.value):d=this.selected?this.selected.value:s,this._value=d,this.valueChange.emit(d),this._onChange(d),this.selectionChange.emit(this._getChangeEvent(d)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let s=-1;for(let d=0;d<this.options.length;d++)if(!this.options.get(d).disabled){s=d;break}this._keyManager.setActiveItem(s)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){var s;return!this._panelOpen&&!this.disabled&&((s=this.options)==null?void 0:s.length)>0&&!!this._overlayDir}focus(s){this._elementRef.nativeElement.focus(s)}_getPanelAriaLabelledby(){var c;if(this.ariaLabel)return null;const s=((c=this._parentFormField)==null?void 0:c.getLabelId())||null,d=s?s+" ":"";return this.ariaLabelledby?d+this.ariaLabelledby:s}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){var d;if(this.ariaLabel)return null;let s=((d=this._parentFormField)==null?void 0:d.getLabelId())||"";return this.ariaLabelledby&&(s+=" "+this.ariaLabelledby),s||(s=this._valueId),s}get describedByIds(){const d=this._elementRef.nativeElement.getAttribute("aria-describedby");return(d==null?void 0:d.split(" "))||[]}setDescribedByIds(s){const d=this._elementRef.nativeElement;s.length?d.setAttribute("aria-describedby",s.join(" ")):d.removeAttribute("aria-describedby")}onContainerClick(s){const d=Xn(s);d&&(d.tagName==="MAT-OPTION"||d.classList.contains("cdk-overlay-backdrop")||d.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}};n(a,"ɵfac",function(d){return new(d||a)}),n(a,"ɵcmp",E({type:a,selectors:[["mat-select"]],contentQueries:function(d,c,f){if(d&1&&et(f,lo,5)(f,Ki,5)(f,qi,5),d&2){let h;b(h=y())&&(c.customTrigger=h.first),b(h=y())&&(c.options=h),b(h=y())&&(c.optionGroups=h)}},viewQuery:function(d,c){if(d&1&&he(Qa,5)(Za,5)(Mt,5),d&2){let f;b(f=y())&&(c.trigger=f.first),b(f=y())&&(c.panel=f.first),b(f=y())&&(c._overlayDir=f.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(d,c){d&1&&H("keydown",function(h){return c._handleKeydown(h)})("focus",function(){return c._onFocus()})("blur",function(){return c._onBlur()}),d&2&&(U("id",c.id)("tabindex",c.disabled?-1:c.tabIndex)("aria-controls",c.panelOpen?c.id+"-panel":null)("aria-expanded",c.panelOpen)("aria-label",c.ariaLabel||null)("aria-required",c.required.toString())("aria-disabled",c.disabled.toString())("aria-invalid",c.errorState)("aria-activedescendant",c._getAriaActiveDescendant()),P("mat-mdc-select-disabled",c.disabled)("mat-mdc-select-invalid",c.errorState)("mat-mdc-select-required",c.required)("mat-mdc-select-empty",c.empty)("mat-mdc-select-multiple",c.multiple)("mat-select-open",c.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",R],disableRipple:[2,"disableRipple","disableRipple",R],tabIndex:[2,"tabIndex","tabIndex",s=>s==null?0:ie(s)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",R],placeholder:"placeholder",required:[2,"required","required",R],multiple:[2,"multiple","multiple",R],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",R],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ie],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",R]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[L([{provide:ji,useExisting:a},{provide:Yi,useExisting:a}]),De],ngContentSelectors:eo,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(d,c){if(d&1&&(te(Ja),p(0,"div",2,0),H("click",function(){return c.open()}),p(3,"div",3),x(4,to,2,1,"span",4)(5,ao,3,1,"span",5),_(),p(6,"div",6)(7,"div",7),re(),p(8,"svg",8),j(9,"path",9),_()()()(),fe(10,oo,3,16,"ng-template",10),H("detach",function(){return c.close()})("backdropClick",function(){return c.close()})("overlayKeydown",function(h){return c._handleOverlayKeydown(h)})),d&2){const f=tt(1);u(3),U("id",c._valueId),u(),S(c.empty?4:5),u(6),I("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",c._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",c._scrollStrategy)("cdkConnectedOverlayOrigin",c._preferredOverlayOrigin||f)("cdkConnectedOverlayPositions",c._positions)("cdkConnectedOverlayWidth",c._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",c._popoverLocation)}},dependencies:[Lt,Mt],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2}));let o=a;return o})();const fo=["tooltip"],ho=20,uo=new O("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{const o=m(it);return()=>Pi(o,{scrollThrottle:ho})}}),po=new O("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})}),oi="tooltip-panel",_o={passive:!0},go=8,bo=8,yo=24,vo=200;let bt=(()=>{const t=class t{constructor(){n(this,"_elementRef",m(T));n(this,"_ngZone",m(me));n(this,"_platform",m(lt));n(this,"_ariaDescriber",m(Ui));n(this,"_focusMonitor",m(Hi));n(this,"_dir",m(rt));n(this,"_injector",m(it));n(this,"_viewContainerRef",m(ue));n(this,"_mediaMatcher",m(An));n(this,"_document",m(Ot));n(this,"_renderer",m(Tt));n(this,"_animationsDisabled",Te());n(this,"_defaultOptions",m(po,{optional:!0}));n(this,"_overlayRef",null);n(this,"_tooltipInstance",null);n(this,"_overlayPanelClass");n(this,"_portal");n(this,"_position","below");n(this,"_positionAtOrigin",!1);n(this,"_disabled",!1);n(this,"_tooltipClass");n(this,"_viewInitialized",!1);n(this,"_pointerExitEventsInitialized",!1);n(this,"_tooltipComponent",yt);n(this,"_viewportMargin",8);n(this,"_currentPosition");n(this,"_cssClassPrefix","mat-mdc");n(this,"_ariaDescriptionPending",!1);n(this,"_dirSubscribed",!1);n(this,"_showDelay");n(this,"_hideDelay");n(this,"touchGestures","auto");n(this,"_message","");n(this,"_eventCleanups",[]);n(this,"_touchstartTimeout",null);n(this,"_destroyed",new z);n(this,"_isDestroyed",!1);n(this,"_overlayEventPredicate",e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===Bi&&!ye(e):!0);const e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=go}get position(){return this._position}set position(e){var i;e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),(i=this._tooltipInstance)==null||i.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=_t(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){const i=_t(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Gt(e)}get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Gt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(e){const i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(D(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){var s;if(this.disabled||!this.message||this._isTooltipVisible()){(s=this._tooltipInstance)==null||s._cancelPendingAnimations();return}const a=this._createOverlay(i);this._detach(),this._portal=this._portal||new zn(this._tooltipComponent,this._viewContainerRef);const r=this._tooltipInstance=a.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(D(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){const i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){var s;if(this._overlayRef){const d=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&d._origin instanceof T)return this._overlayRef;this._detach()}const i=this._injector.get(Ln).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${oi}`,r=Mn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return r.positionChanges.pipe(D(this._destroyed)).subscribe(d=>{this._updateCurrentPositionClass(d.connectionPair),this._tooltipInstance&&d.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Bn(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(uo)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(D(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(D(this._destroyed)).subscribe(()=>{var d;return(d=this._tooltipInstance)==null?void 0:d._handleBodyInteraction()}),this._overlayRef.keydownEvents().pipe(D(this._destroyed)).subscribe(d=>{d.preventDefault(),d.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),(s=this._defaultOptions)!=null&&s.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(D(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){const i=e.getConfig().positionStrategy,a=this._getOrigin(),r=this._getOverlayPosition();i.withPositions([this._addOffset({...a.main,...r.main}),this._addOffset({...a.fallback,...r.fallback})])}_addOffset(e){const i=bo,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=a?-i:i:e.originX==="end"&&(e.offsetX=a?i:-i),e}_getOrigin(){const e=!this._dir||this._dir.value=="ltr",i=this.position;let a;i=="above"||i=="below"?a={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?a={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(a={originX:"end",originY:"center"});const{x:r,y:s}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:r,originY:s}}}_getOverlayPosition(){const e=!this._dir||this._dir.value=="ltr",i=this.position;let a;i=="above"?a={overlayX:"center",overlayY:"bottom"}:i=="below"?a={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});const{x:r,y:s}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:r,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ne(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){const{overlayY:i,originX:a,originY:r}=e;let s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=a==="end"?"left":"right":s=a==="start"?"left":"right":s=i==="bottom"&&r==="top"?"above":"below",s!==this._currentPosition){const d=this._overlayRef;if(d){const c=`${this._cssClassPrefix}-${oi}-`;d.removePanelClass(c+this._currentPosition),d.addPanelClass(c+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{var s,d;const i=(s=e.targetTouches)==null?void 0:s[0],a=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);const r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},((d=this._defaultOptions)==null?void 0:d.touchLongPressShowDelay)??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{var a;const i=e.relatedTarget;(!i||!((a=this._overlayRef)!=null&&a.overlayElement.contains(i)))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){const i=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;i!==a&&!a.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();const e=()=>{var i;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide((i=this._defaultOptions)==null?void 0:i.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,_o))}_isTouchPlatform(){var i;const e=(i=this._defaultOptions)==null?void 0:i.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){const e=this.touchGestures;if(e!=="off"){const i=this._elementRef.nativeElement,a=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!i.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||ne({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,a){i&2&&P("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]}));let o=t;return o})(),yt=(()=>{const t=class t{constructor(){n(this,"_changeDetectorRef",m(ee));n(this,"_elementRef",m(T));n(this,"_isMultiline",!1);n(this,"message");n(this,"tooltipClass");n(this,"_showTimeoutId");n(this,"_hideTimeoutId");n(this,"_triggerElement");n(this,"_mouseLeaveHideDelay");n(this,"_animationsDisabled",Te());n(this,"_tooltip");n(this,"_closeOnInteraction",!1);n(this,"_isVisible",!1);n(this,"_onHide",new z);n(this,"_showAnimation","mat-mdc-tooltip-show");n(this,"_hideAnimation","mat-mdc-tooltip-hide")}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){const e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>yo&&e.width>=vo}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){const i=this._tooltip.nativeElement,a=this._showAnimation,r=this._hideAnimation;if(i.classList.remove(e?r:a),i.classList.add(e?a:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){const s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,a){if(i&1&&he(fo,7),i&2){let r;b(r=y())&&(a._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,a){i&1&&H("mouseleave",function(s){return a._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,a){i&1&&(oe(0,"div",1,0),pn("animationend",function(s){return a._handleAnimationEnd(s)}),oe(2,"div",2),G(3),se()()),i&2&&(Oi(a.tooltipClass),P("mdc-tooltip--multiline",a._isMultiline),u(3),Ne(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2}));let o=t;return o})(),xo=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵmod",at({type:t,imports:[jt,Ht,bt,yt],exports:[bt,yt,le,Bt]})),n(t,"ɵinj",ot({imports:[jt,Ht,le,Bt]}));let o=t;return o})();function So(o,t){if(o&1&&(p(0,"mat-option",17),G(1),_()),o&2){const l=t.$implicit;I("value",l),u(),X(" ",l," ")}}function wo(o,t){if(o&1){const l=nt();p(0,"mat-form-field",14)(1,"mat-select",16,0),H("selectionChange",function(i){ve(l);const a=w(2);return xe(a._changePageSize(i.value))}),gn(3,So,2,2,"mat-option",17,bn),_(),p(5,"div",18),H("click",function(){ve(l);const i=tt(2);return xe(i.open())}),_()()}if(o&2){const l=w(2);I("appearance",l._formFieldAppearance)("color",l.color),u(),I("value",l.pageSize)("disabled",l.disabled),yn("aria-labelledby",l._pageSizeLabelId),I("panelClass",l.selectConfig.panelClass||"")("disableOptionCentering",l.selectConfig.disableOptionCentering),u(2),vn(l._displayedPageSizeOptions)}}function Co(o,t){if(o&1&&(p(0,"div",15),G(1),_()),o&2){const l=w(2);u(),Ne(l.pageSize)}}function Ro(o,t){if(o&1&&(p(0,"div",3)(1,"div",13),G(2),_(),x(3,wo,6,7,"mat-form-field",14),x(4,Co,2,1,"div",15),_()),o&2){const l=w();u(),U("id",l._pageSizeLabelId),u(),X(" ",l._intl.itemsPerPageLabel," "),u(),S(l._displayedPageSizeOptions.length>1?3:-1),u(),S(l._displayedPageSizeOptions.length<=1?4:-1)}}function ko(o,t){if(o&1){const l=nt();p(0,"button",19),H("click",function(){ve(l);const i=w();return xe(i._buttonClicked(0,i._previousButtonsDisabled()))}),re(),p(1,"svg",8),j(2,"path",20),_()()}if(o&2){const l=w();I("matTooltip",l._intl.firstPageLabel)("matTooltipDisabled",l._previousButtonsDisabled())("disabled",l._previousButtonsDisabled())("tabindex",l._previousButtonsDisabled()?-1:null),U("aria-label",l._intl.firstPageLabel)}}function No(o,t){if(o&1){const l=nt();p(0,"button",21),H("click",function(){ve(l);const i=w();return xe(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),re(),p(1,"svg",8),j(2,"path",22),_()()}if(o&2){const l=w();I("matTooltip",l._intl.lastPageLabel)("matTooltipDisabled",l._nextButtonsDisabled())("disabled",l._nextButtonsDisabled())("tabindex",l._nextButtonsDisabled()?-1:null),U("aria-label",l._intl.lastPageLabel)}}let Do=(()=>{const t=class t{constructor(){n(this,"changes",new z);n(this,"itemsPerPageLabel","Items per page:");n(this,"nextPageLabel","Next page");n(this,"previousPageLabel","Previous page");n(this,"firstPageLabel","First page");n(this,"lastPageLabel","Last page");n(this,"getRangeLabel",(e,i,a)=>{if(a==0||i==0)return`0 of ${a}`;a=Math.max(a,0);const r=e*i,s=r<a?Math.min(r+i,a):r+i;return`${r+1} – ${s} of ${a}`})}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵprov",Ze({token:t,factory:t.ɵfac}));let o=t;return o})();const Oo=50,To=new O("MAT_PAGINATOR_DEFAULT_OPTIONS");let Fo=(()=>{const t=class t{constructor(){n(this,"_intl",m(Do));n(this,"_changeDetectorRef",m(ee));n(this,"_formFieldAppearance");n(this,"_pageSizeLabelId",m(Fe).getId("mat-paginator-page-size-label-"));n(this,"_intlChanges");n(this,"_isInitialized",!1);n(this,"_initializedStream",new Ti(1));n(this,"color");n(this,"_pageIndex",0);n(this,"_length",0);n(this,"_pageSize");n(this,"_pageSizeOptions",[]);n(this,"hidePageSize",!1);n(this,"showFirstLastButtons",!1);n(this,"selectConfig",{});n(this,"disabled",!1);n(this,"page",new Q);n(this,"_displayedPageSizeOptions");n(this,"initialized",this._initializedStream);const e=this._intl,i=m(To,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){const{pageSize:a,pageSizeOptions:r,hidePageSize:s,showFirstLastButtons:d}=i;a!=null&&(this._pageSize=a),r!=null&&(this._pageSizeOptions=r),s!=null&&(this.hidePageSize=s),d!=null&&(this.showFirstLastButtons=d)}this._formFieldAppearance=(i==null?void 0:i.formFieldAppearance)||"outline"}get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>ie(i,0)),this._updateDisplayedPageSizeOptions()}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){const e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){const i=this.pageIndex*this.pageSize,a=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(a)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Oo),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){const i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",ie],length:[2,"length","length",ie],pageSize:[2,"pageSize","pageSize",ie],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",R],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",R],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",R]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(i,a){i&1&&(p(0,"div",1)(1,"div",2),x(2,Ro,5,4,"div",3),p(3,"div",4)(4,"div",5),G(5),_(),x(6,ko,3,5,"button",6),p(7,"button",7),H("click",function(){return a._buttonClicked(a.pageIndex-1,a._previousButtonsDisabled())}),re(),p(8,"svg",8),j(9,"path",9),_()(),_n(),p(10,"button",10),H("click",function(){return a._buttonClicked(a.pageIndex+1,a._nextButtonsDisabled())}),re(),p(11,"svg",8),j(12,"path",11),_()(),x(13,No,3,5,"button",12),_()()()),i&2&&(u(2),S(a.hidePageSize?-1:2),u(3),X(" ",a._intl.getRangeLabel(a.pageIndex,a.pageSize,a.length)," "),u(),S(a.showFirstLastButtons?6:-1),u(),I("matTooltip",a._intl.previousPageLabel)("matTooltipDisabled",a._previousButtonsDisabled())("disabled",a._previousButtonsDisabled())("tabindex",a._previousButtonsDisabled()?-1:null),U("aria-label",a._intl.previousPageLabel),u(3),I("matTooltip",a._intl.nextPageLabel)("matTooltipDisabled",a._nextButtonsDisabled())("disabled",a._nextButtonsDisabled())("tabindex",a._nextButtonsDisabled()?-1:null),U("aria-label",a._intl.nextPageLabel),u(3),S(a.showFirstLastButtons?13:-1))},dependencies:[La,mo,Ki,Yn,bt],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2}));let o=t;return o})();var ae;let Se=(ae=class{constructor(){this.data=[],this.size="medium",this.displayedColumns=[],this.selectedRowIndex=-1,this.cols=[],this.pageIndex=0,this.pageSize=10}set columns(t){this.cols=t.map(l=>(l.field?(l.type="data",l.name=l.field):l.type="actions",l)),this.displayedColumns=Array.from(this.cols,l=>l.name)}getTableCls(){return["ngbiz-custom-material__mat-table--lite",this.size]}getActionsColWidth(t){return t.actions.length*48}getPageIndex(){return this.paginator?this.paginator.pageIndex:this.pageIndex}getPageSize(){return this.paginator?this.paginator.pageSize:this.pageSize}getItemNumber(t){return this.getPageIndex()*this.getPageSize()+t+1}},ae.propDecorators={data:[{type:ge}],size:[{type:ge}],columns:[{type:ge}],pageIndex:[{type:ge}],pageSize:[{type:ge}],paginator:[{type:xn,args:[Fo]}]},ae);Se=Fi([Sn({selector:"ngbiz-grid",template:aa,standalone:!1,styles:[oa]})],Se);const Io=[[["caption"]],[["colgroup"],["col"]],"*"],Eo=["caption","colgroup, col","*"];function Ao(o,t){o&1&&k(0,2)}function zo(o,t){o&1&&(p(0,"thead",0),V(1,1),_(),p(2,"tbody",0),V(3,2)(4,3),_(),p(5,"tfoot",0),V(6,4),_())}function Po(o,t){o&1&&V(0,1)(1,2)(2,3)(3,4)}function Lo(o,t){if(o&1&&(p(0,"th",3),G(1),_()),o&2){const l=w();st("text-align",l.justify),u(),X(" ",l.headerText," ")}}function Mo(o,t){if(o&1&&(p(0,"td",4),G(1),_()),o&2){const l=t.$implicit,e=w();st("text-align",e.justify),u(),X(" ",e.dataAccessor(l,e.name)," ")}}const q=new O("CDK_TABLE"),Bo=new O("text-column-options");let Z=(()=>{const t=class t{constructor(){n(this,"template",m(Oe))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","cdkCellDef",""]]}));let o=t;return o})(),J=(()=>{const t=class t{constructor(){n(this,"template",m(Oe))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","cdkHeaderCellDef",""]]}));let o=t;return o})(),we=(()=>{const t=class t{constructor(){n(this,"template",m(Oe))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","cdkFooterCellDef",""]]}));let o=t;return o})(),$=(()=>{const t=class t{constructor(){n(this,"_table",m(q,{optional:!0}));n(this,"_hasStickyChanged",!1);n(this,"_name");n(this,"_sticky",!1);n(this,"_stickyEnd",!1);n(this,"cell");n(this,"headerCell");n(this,"footerCell");n(this,"cssClassFriendlyName");n(this,"_columnCssClassName")}get name(){return this._name}set name(e){this._setNameInput(e)}get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}hasStickyChanged(){const e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,a,r){if(i&1&&et(r,Z,5)(r,J,5)(r,we,5),i&2){let s;b(s=y())&&(a.cell=s.first),b(s=y())&&(a.headerCell=s.first),b(s=y())&&(a.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",R],stickyEnd:[2,"stickyEnd","stickyEnd",R]}}));let o=t;return o})();class It{constructor(t,l){l.nativeElement.classList.add(...t._columnCssClassName)}}let Ue=(()=>{const t=class t extends It{constructor(){super(m($),m(T))}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[N]}));let o=t;return o})(),vt=(()=>{const t=class t extends It{constructor(){var r;const e=m($),i=m(T);super(e,i);const a=(r=e._table)==null?void 0:r._getCellRole();a&&i.nativeElement.setAttribute("role",a)}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[N]}));let o=t;return o})(),Ge=(()=>{const t=class t extends It{constructor(){var r;const e=m($),i=m(T);super(e,i);const a=(r=e._table)==null?void 0:r._getCellRole();a&&i.nativeElement.setAttribute("role",a)}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[N]}));let o=t;return o})(),Et=(()=>{const t=class t{constructor(){n(this,"template",m(Oe));n(this,"_differs",m(Ii));n(this,"columns");n(this,"_columnsDiffer")}ngOnChanges(e){if(!this._columnsDiffer){const i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof de?e.headerCell.template:this instanceof ce?e.footerCell.template:e.cell.template}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,features:[De]}));let o=t;return o})(),de=(()=>{const t=class t extends Et{constructor(){super(...arguments);n(this,"_table",m(q,{optional:!0}));n(this,"_hasStickyChanged",!1);n(this,"_sticky",!1)}get sticky(){return this._sticky}set sticky(i){i!==this._sticky&&(this._sticky=i,this._hasStickyChanged=!0)}ngOnChanges(i){super.ngOnChanges(i)}hasStickyChanged(){const i=this._hasStickyChanged;return this.resetStickyChanged(),i}resetStickyChanged(){this._hasStickyChanged=!1}};n(t,"ɵfac",(()=>{let i;return function(r){return(i||(i=F(t)))(r||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",R]},features:[N,De]}));let o=t;return o})(),ce=(()=>{const t=class t extends Et{constructor(){super(...arguments);n(this,"_table",m(q,{optional:!0}));n(this,"_hasStickyChanged",!1);n(this,"_sticky",!1)}get sticky(){return this._sticky}set sticky(i){i!==this._sticky&&(this._sticky=i,this._hasStickyChanged=!0)}ngOnChanges(i){super.ngOnChanges(i)}hasStickyChanged(){const i=this._hasStickyChanged;return this.resetStickyChanged(),i}resetStickyChanged(){this._hasStickyChanged=!1}};n(t,"ɵfac",(()=>{let i;return function(r){return(i||(i=F(t)))(r||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",R]},features:[N,De]}));let o=t;return o})(),Ce=(()=>{const t=class t extends Et{constructor(){super(...arguments);n(this,"_table",m(q,{optional:!0}));n(this,"when")}};n(t,"ɵfac",(()=>{let i;return function(r){return(i||(i=F(t)))(r||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[N]}));let o=t;return o})(),Y=(()=>{const t=class t{constructor(){n(this,"_viewContainer",m(ue));n(this,"cells");n(this,"context");t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}};n(t,"mostRecentCellOutlet",null),n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","cdkCellOutlet",""]]}));let o=t;return o})(),je=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,a){i&1&&V(0,0)},dependencies:[Y],encapsulation:2,changeDetection:1}));let o=t;return o})(),$e=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,a){i&1&&V(0,0)},dependencies:[Y],encapsulation:2,changeDetection:1}));let o=t;return o})(),Ye=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,a){i&1&&V(0,0)},dependencies:[Y],encapsulation:2,changeDetection:1}));let o=t;return o})(),Re=(()=>{const t=class t{constructor(){n(this,"templateRef",m(Oe));n(this,"_contentClassNames",["cdk-no-data-row","cdk-row"]);n(this,"_cellClassNames",["cdk-cell","cdk-no-data-cell"]);n(this,"_cellSelector","td, cdk-cell, [cdk-cell], .cdk-cell")}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}));let o=t;return o})();const si=["top","bottom","left","right"];class Ho{constructor(t,l,e=!0,i=!0,a,r,s){n(this,"_isNativeHtmlTable");n(this,"_stickCellCss");n(this,"_isBrowser");n(this,"_needsPositionStickyOnElement");n(this,"direction");n(this,"_positionListener");n(this,"_tableInjector");n(this,"_elemSizeCache",new WeakMap);n(this,"_resizeObserver",globalThis!=null&&globalThis.ResizeObserver?new globalThis.ResizeObserver(t=>this._updateCachedSizes(t)):null);n(this,"_updatedStickyColumnsParamsToReplay",[]);n(this,"_stickyColumnsReplayTimeout",null);n(this,"_cachedCellWidths",[]);n(this,"_borderCellCss");n(this,"_destroyed",!1);this._isNativeHtmlTable=t,this._stickCellCss=l,this._isBrowser=e,this._needsPositionStickyOnElement=i,this.direction=a,this._positionListener=r,this._tableInjector=s,this._borderCellCss={top:`${l}-border-elem-top`,bottom:`${l}-border-elem-bottom`,left:`${l}-border-elem-left`,right:`${l}-border-elem-right`}}clearStickyPositioning(t,l){(l.includes("left")||l.includes("right"))&&this._removeFromStickyColumnReplayQueue(t);const e=[];for(const i of t)i.nodeType===i.ELEMENT_NODE&&e.push(i,...Array.from(i.children));ne({write:()=>{for(const i of e)this._removeStickyStyle(i,l)}},{injector:this._tableInjector})}updateStickyColumns(t,l,e,i=!0,a=!0){var W,pe;if(!t.length||!this._isBrowser||!(l.some(B=>B)||e.some(B=>B))){(W=this._positionListener)==null||W.stickyColumnsUpdated({sizes:[]}),(pe=this._positionListener)==null||pe.stickyEndColumnsUpdated({sizes:[]});return}const r=t[0],s=r.children.length,d=this.direction==="rtl",c=d?"right":"left",f=d?"left":"right",h=l.lastIndexOf(!0),v=e.indexOf(!0);let C,K,M;a&&this._updateStickyColumnReplayQueue({rows:[...t],stickyStartStates:[...l],stickyEndStates:[...e]}),ne({earlyRead:()=>{C=this._getCellWidths(r,i),K=this._getStickyStartColumnPositions(C,l),M=this._getStickyEndColumnPositions(C,e)},write:()=>{for(const B of t)for(let A=0;A<s;A++){const _e=B.children[A];l[A]&&this._addStickyStyle(_e,c,K[A],A===h),e[A]&&this._addStickyStyle(_e,f,M[A],A===v)}this._positionListener&&C.some(B=>!!B)&&(this._positionListener.stickyColumnsUpdated({sizes:h===-1?[]:C.slice(0,h+1).map((B,A)=>l[A]?B:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:v===-1?[]:C.slice(v).map((B,A)=>e[A+v]?B:null).reverse()}))}},{injector:this._tableInjector})}stickRows(t,l,e){if(!this._isBrowser)return;const i=e==="bottom"?t.slice().reverse():t,a=e==="bottom"?l.slice().reverse():l,r=[],s=[],d=[];ne({earlyRead:()=>{for(let c=0,f=0;c<i.length;c++){if(!a[c])continue;r[c]=f;const h=i[c];d[c]=this._isNativeHtmlTable?Array.from(h.children):[h];const v=this._retrieveElementSize(h).height;f+=v,s[c]=v}},write:()=>{var f,h;const c=a.lastIndexOf(!0);for(let v=0;v<i.length;v++){if(!a[v])continue;const C=r[v],K=v===c;for(const M of d[v])this._addStickyStyle(M,e,C,K)}e==="top"?(f=this._positionListener)==null||f.stickyHeaderRowsUpdated({sizes:s,offsets:r,elements:d}):(h=this._positionListener)==null||h.stickyFooterRowsUpdated({sizes:s,offsets:r,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(t,l){this._isNativeHtmlTable&&ne({write:()=>{const e=t.querySelector("tfoot");e&&(l.some(i=>!i)?this._removeStickyStyle(e,["bottom"]):this._addStickyStyle(e,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){var t;this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),(t=this._resizeObserver)==null||t.disconnect(),this._destroyed=!0}_removeStickyStyle(t,l){if(!t.classList.contains(this._stickCellCss))return;for(const i of l)t.style[i]="",t.classList.remove(this._borderCellCss[i]);si.some(i=>l.indexOf(i)===-1&&t.style[i])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,l,e,i){t.classList.add(this._stickCellCss),i&&t.classList.add(this._borderCellCss[l]),t.style[l]=`${e}px`,t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){const l={top:100,bottom:10,left:1,right:1};let e=0;for(const i of si)t.style[i]&&(e+=l[i]);return e?`${e}`:""}_getCellWidths(t,l=!0){if(!l&&this._cachedCellWidths.length)return this._cachedCellWidths;const e=[],i=t.children;for(let a=0;a<i.length;a++){const r=i[a];e.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=e,e}_getStickyStartColumnPositions(t,l){const e=[];let i=0;for(let a=0;a<t.length;a++)l[a]&&(e[a]=i,i+=t[a]);return e}_getStickyEndColumnPositions(t,l){const e=[];let i=0;for(let a=t.length;a>0;a--)l[a]&&(e[a]=i,i+=t[a]);return e}_retrieveElementSize(t){const l=this._elemSizeCache.get(t);if(l)return l;const e=t.getBoundingClientRect(),i={width:e.width,height:e.height};return this._resizeObserver&&(this._elemSizeCache.set(t,i),this._resizeObserver.observe(t,{box:"border-box"})),i}_updateStickyColumnReplayQueue(t){this._removeFromStickyColumnReplayQueue(t.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(t)}_removeFromStickyColumnReplayQueue(t){const l=new Set(t);for(const e of this._updatedStickyColumnsParamsToReplay)e.rows=e.rows.filter(i=>!l.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(e=>!!e.rows.length)}_updateCachedSizes(t){var e,i;let l=!1;for(const a of t){const r=(e=a.borderBoxSize)!=null&&e.length?{width:a.borderBoxSize[0].inlineSize,height:a.borderBoxSize[0].blockSize}:{width:a.contentRect.width,height:a.contentRect.height};r.width!==((i=this._elemSizeCache.get(a.target))==null?void 0:i.width)&&Vo(a.target)&&(l=!0),this._elemSizeCache.set(a.target,r)}l&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(const a of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(a.rows,a.stickyStartStates,a.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}}function Vo(o){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(t=>o.classList.contains(t))}const Me=new O("STICKY_POSITIONING_LISTENER");let ri=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["cdk-table","recycleRows",""],["table","cdk-table","","recycleRows",""]]}));let o=t;return o})(),qe=(()=>{const t=class t{constructor(){n(this,"viewContainer",m(ue));n(this,"elementRef",m(T));const e=m(q);e._rowOutlet=this,e._outletAssigned()}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","rowOutlet",""]]}));let o=t;return o})(),Ke=(()=>{const t=class t{constructor(){n(this,"viewContainer",m(ue));n(this,"elementRef",m(T));const e=m(q);e._headerRowOutlet=this,e._outletAssigned()}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","headerRowOutlet",""]]}));let o=t;return o})(),Xe=(()=>{const t=class t{constructor(){n(this,"viewContainer",m(ue));n(this,"elementRef",m(T));const e=m(q);e._footerRowOutlet=this,e._outletAssigned()}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","footerRowOutlet",""]]}));let o=t;return o})(),Qe=(()=>{const t=class t{constructor(){n(this,"viewContainer",m(ue));n(this,"elementRef",m(T));const e=m(q);e._noDataRowOutlet=this,e._outletAssigned()}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["","noDataRowOutlet",""]]}));let o=t;return o})(),ke=(()=>{const t=class t{constructor(){n(this,"_differs",m(Ii));n(this,"_changeDetectorRef",m(ee));n(this,"_elementRef",m(T));n(this,"_dir",m(rt,{optional:!0}));n(this,"_platform",m(lt));n(this,"_viewRepeater");n(this,"_viewportRuler",m(zi));n(this,"_injector",m(it));n(this,"_virtualScrollViewport",m(Hn,{optional:!0,host:!0}));n(this,"_positionListener",m(Me,{optional:!0})||m(Me,{optional:!0,skipSelf:!0}));n(this,"_document",m(Ot));n(this,"_data");n(this,"_renderedRange");n(this,"_onDestroy",new z);n(this,"_renderRows");n(this,"_renderChangeSubscription",null);n(this,"_columnDefsByName",new Map);n(this,"_rowDefs");n(this,"_headerRowDefs");n(this,"_footerRowDefs");n(this,"_dataDiffer");n(this,"_defaultRowDef",null);n(this,"_customColumnDefs",new Set);n(this,"_customRowDefs",new Set);n(this,"_customHeaderRowDefs",new Set);n(this,"_customFooterRowDefs",new Set);n(this,"_customNoDataRow",null);n(this,"_headerRowDefChanged",!0);n(this,"_footerRowDefChanged",!0);n(this,"_stickyColumnStylesNeedReset",!0);n(this,"_forceRecalculateCellWidths",!0);n(this,"_cachedRenderRowsMap",new Map);n(this,"_isNativeHtmlTable");n(this,"_stickyStyler");n(this,"stickyCssClass","cdk-table-sticky");n(this,"needsPositionStickyOnElement",!0);n(this,"_isServer");n(this,"_isShowingNoDataRow",!1);n(this,"_hasAllOutlets",!1);n(this,"_hasInitialized",!1);n(this,"_headerRowStickyUpdates",new z);n(this,"_footerRowStickyUpdates",new z);n(this,"_disableVirtualScrolling",!1);n(this,"_cellRoleInternal");n(this,"_trackByFn");n(this,"_dataSource");n(this,"_dataSourceChanges",new z);n(this,"_dataStream",new z);n(this,"_multiTemplateDataRows",!1);n(this,"_fixedLayout",!1);n(this,"recycleRows",!1);n(this,"contentChanged",new Q);n(this,"viewChange",new wn({start:0,end:Number.MAX_VALUE}));n(this,"_rowOutlet");n(this,"_headerRowOutlet");n(this,"_footerRowOutlet");n(this,"_noDataRowOutlet");n(this,"_contentColumnDefs");n(this,"_contentRowDefs");n(this,"_contentHeaderRowDefs");n(this,"_contentFooterRowDefs");n(this,"_noDataRow");m(new Di("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,a)=>this.trackBy?this.trackBy(a.dataIndex,a.data):a)}_getCellRole(){if(this._cellRoleInternal===void 0){const e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}get renderedRows(){return this._renderRows}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(D(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Vn:new Ma,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){var e,i,a,r;(e=this._stickyStyler)==null||e.destroy(),[(i=this._rowOutlet)==null?void 0:i.viewContainer,(a=this._headerRowOutlet)==null?void 0:a.viewContainer,(r=this._footerRowOutlet)==null?void 0:r.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(s=>{s==null||s.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),mt(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}const i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(a,r,s)=>this._getEmbeddedViewArgs(a.item,s),a=>a.item.data,a=>{a.operation===Le.INSERTED&&a.context&&this._renderCellTemplateForItem(a.record.item.rowDef,a.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(a=>{const r=i.get(a.currentIndex);r.context.$implicit=a.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){const a=li(this._headerRowOutlet,"thead");a&&(a.style.display=e.length?"":"none")}const i=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){const a=li(this._footerRowOutlet,"tfoot");a&&(a.style.display=e.length?"":"none")}const i=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),a=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...a],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,s)=>{this._addStickyColumnStyles([r],this._headerRowDefs[s])}),this._rowDefs.forEach(r=>{const s=[];for(let d=0;d<i.length;d++)this._renderRows[d].rowDef===r&&s.push(i[d]);this._addStickyColumnStyles(s,r)}),a.forEach((r,s)=>{this._addStickyColumnStyles([r],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){var i;(i=this._positionListener)==null||i.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){var i;(i=this._positionListener)==null||i.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){var i;this._headerRowStickyUpdates.next(e),(i=this._positionListener)==null||i.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){var i;this._footerRowStickyUpdates.next(e),(i=this._positionListener)==null||i.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;const i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];const e=[],i=Math.min(this._data.length,this._renderedRange.end),a=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<i;r++){const s=this._data[r],d=this._getRenderRowsForData(s,r,a.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<d.length;c++){let f=d[c];const h=this._cachedRenderRowsMap.get(f.data);h.has(f.rowDef)?h.get(f.rowDef).push(f):h.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,i,a){return this._getRowDefs(e,i).map(s=>{const d=a&&a.has(s)?a.get(s):[];if(d.length){const c=d.shift();return c.dataIndex=i,c}else return{data:e,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),ze(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=ze(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=ze(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=ze(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(s,d)=>{const c=!!d.getColumnsDiff();return s||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();const a=this._headerRowDefs.reduce(e,!1);a&&this._forceRenderHeaderRows();const r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),i||a||r}_switchDataSource(e){this._data=[],mt(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;mt(this.dataSource)?e=this.dataSource.connect(this):Cn(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Pt(this.dataSource)),this._renderChangeSubscription=ct([e,this.viewChange]).pipe(D(this._onDestroy)).subscribe(([i,a])=>{this._data=i||[],this._renderedRange=a,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){const a=Array.from((i==null?void 0:i.columns)||[]).map(d=>this._columnDefsByName.get(d)),r=a.map(d=>d.sticky),s=a.map(d=>d.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const i=[];for(let a=0;a<e.viewContainer.length;a++){const r=e.viewContainer.get(a);i.push(r.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let a=[];if(this.multiTemplateDataRows)a=this._rowDefs.filter(r=>!r.when||r.when(i,e));else{let r=this._rowDefs.find(s=>s.when&&s.when(i,e))||this._defaultRowDef;r&&a.push(r)}return a.length,a}_getEmbeddedViewArgs(e,i){const a=e.rowDef,r={$implicit:e.data};return{templateRef:a.template,context:r,index:i}}_renderRow(e,i,a,r={}){const s=e.viewContainer.createEmbeddedView(i.template,r,a);return this._renderCellTemplateForItem(i,r),s}_renderCellTemplateForItem(e,i){for(let a of this._getCellTemplates(e))Y.mostRecentCellOutlet&&Y.mostRecentCellOutlet._viewContainer.createEmbeddedView(a,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let i=0,a=e.length;i<a;i++){const s=e.get(i).context;s.count=a,s.first=i===0,s.last=i===a-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{const a=this._columnDefsByName.get(i);return e.extractCellTemplate(a)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(i,a)=>i||a.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){const e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new Ho(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:Pt()).pipe(D(this._onDestroy)).subscribe(a=>{this._stickyStyler.direction=a,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){const i=typeof requestAnimationFrame<"u"?kn:Nn;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Rn(0,i),D(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(a,r)=>this._measureRangeSize(a,r)}),ct([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(D(this._onDestroy)).subscribe(([a,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let s=0;s<r.elements.length;s++){const d=r.elements[s];if(d){const c=r.offsets[s],f=a!==0?Math.max(a-c,c):-c;for(const h of d)h.style.top=`${-f}px`}}}),ct([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(D(this._onDestroy)).subscribe(([a,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let s=0;s<r.elements.length;s++){const d=r.elements[s];if(d)for(const c of d)c.style.bottom=`${a+r.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;const a=this._noDataRowOutlet.viewContainer;if(i){const r=a.createEmbeddedView(e.templateRef),s=r.rootNodes[0];if(r.rootNodes.length===1&&(s==null?void 0:s.nodeType)===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);const d=s.querySelectorAll(e._cellSelector);for(let c=0;c<d.length;c++)d[c].classList.add(...e._cellClassNames)}}else a.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){var C,K;if(e.start>=e.end||i!=="vertical")return 0;const a=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<a.start||e.end>a.end;const s=e.start-a.start,d=e.end-e.start;let c,f;for(let M=0;M<d;M++){const W=r.get(M+s);if(W&&W.rootNodes.length){c=f=W.rootNodes[0];break}}for(let M=d-1;M>-1;M--){const W=r.get(M+s);if(W&&W.rootNodes.length){f=W.rootNodes[W.rootNodes.length-1];break}}const h=(C=c==null?void 0:c.getBoundingClientRect)==null?void 0:C.call(c),v=(K=f==null?void 0:f.getBoundingClientRect)==null?void 0:K.call(f);return h&&v?v.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,a,r){if(i&1&&et(r,Re,5)(r,$,5)(r,Ce,5)(r,de,5)(r,ce,5),i&2){let s;b(s=y())&&(a._noDataRow=s.first),b(s=y())&&(a._contentColumnDefs=s),b(s=y())&&(a._contentRowDefs=s),b(s=y())&&(a._contentHeaderRowDefs=s),b(s=y())&&(a._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,a){i&2&&P("cdk-table-fixed-layout",a.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",R],fixedLayout:[2,"fixedLayout","fixedLayout",R],recycleRows:[2,"recycleRows","recycleRows",R]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[L([{provide:q,useExisting:t},{provide:Me,useValue:null}])],ngContentSelectors:Eo,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,a){i&1&&(te(Io),k(0),k(1,1),x(2,Ao,1,0),x(3,zo,7,0)(4,Po,4,0)),i&2&&(u(2),S(a._isServer?2:-1),u(),S(a._isNativeHtmlTable?3:4))},dependencies:[Ke,qe,Qe,Xe],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1}));let o=t;return o})();function ze(o,t){return o.concat(Array.from(t))}function li(o,t){const l=t.toUpperCase();let e=o.viewContainer.element.nativeElement;for(;e;){const i=e.nodeType===1?e.nodeName:null;if(i===l)return e;if(i==="TABLE")break;e=e.parentNode}return null}let xt=(()=>{const t=class t{constructor(){n(this,"_table",m(ke,{optional:!0}));n(this,"_options",m(Bo,{optional:!0}));n(this,"_name");n(this,"headerText");n(this,"dataAccessor");n(this,"justify","start");n(this,"columnDef");n(this,"cell");n(this,"headerCell");this._options=this._options||{}}get name(){return this._name}set name(e){this._name=e,this._syncColumnDefName()}ngOnInit(){this._syncColumnDefName(),this.headerText===void 0&&(this.headerText=this._createDefaultHeaderText()),this.dataAccessor||(this.dataAccessor=this._options.defaultDataAccessor||((e,i)=>e[i])),this._table&&(this.columnDef.cell=this.cell,this.columnDef.headerCell=this.headerCell,this._table.addColumnDef(this.columnDef))}ngOnDestroy(){this._table&&this._table.removeColumnDef(this.columnDef)}_createDefaultHeaderText(){const e=this.name;return this._options&&this._options.defaultHeaderTextTransform?this._options.defaultHeaderTextTransform(e):e[0].toUpperCase()+e.slice(1)}_syncColumnDefName(){this.columnDef&&(this.columnDef.name=this.name)}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["cdk-text-column"]],viewQuery:function(i,a){if(i&1&&he($,7)(Z,7)(J,7),i&2){let r;b(r=y())&&(a.columnDef=r.first),b(r=y())&&(a.cell=r.first),b(r=y())&&(a.headerCell=r.first)}},inputs:{name:"name",headerText:"headerText",dataAccessor:"dataAccessor",justify:"justify"},decls:3,vars:0,consts:[["cdkColumnDef",""],["cdk-header-cell","",3,"text-align",4,"cdkHeaderCellDef"],["cdk-cell","",3,"text-align",4,"cdkCellDef"],["cdk-header-cell",""],["cdk-cell",""]],template:function(i,a){i&1&&(Ei(0,0),fe(1,Lo,2,3,"th",1)(2,Mo,2,3,"td",2),Ai())},dependencies:[$,J,Ue,Z,Ge],encapsulation:2,changeDetection:1}));let o=t;return o})(),di=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵmod",at({type:t,imports:[Vt,ke,Ce,Z,Y,J,we,$,Ge,Ye,Ue,vt,je,de,$e,ce,qe,Ke,Xe,xt,Re,ri,Qe],exports:[ke,Ce,Z,Y,J,we,$,Ge,Ye,Ue,vt,je,de,$e,ce,qe,Ke,Xe,xt,Re,ri,Qe]})),n(t,"ɵinj",ot({imports:[Vt]}));let o=t;return o})();const Wo=[[["caption"]],[["colgroup"],["col"]],"*"],Uo=["caption","colgroup, col","*"];function Go(o,t){o&1&&k(0,2)}function jo(o,t){o&1&&(p(0,"thead",0),V(1,1),_(),p(2,"tbody",2),V(3,3)(4,4),_(),p(5,"tfoot",0),V(6,5),_())}function $o(o,t){o&1&&V(0,1)(1,3)(2,4)(3,5)}function Yo(o,t){if(o&1&&(p(0,"th",3),G(1),_()),o&2){const l=w();st("text-align",l.justify),u(),X(" ",l.headerText," ")}}function qo(o,t){if(o&1&&(p(0,"td",4),G(1),_()),o&2){const l=t.$implicit,e=w();st("text-align",e.justify),u(),X(" ",e.dataAccessor(l,e.name)," ")}}let ci=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵdir",g({type:t,selectors:[["mat-table","recycleRows",""],["table","mat-table","","recycleRows",""]]}));let o=t;return o})(),mi=(()=>{const t=class t extends ke{constructor(){super(...arguments);n(this,"stickyCssClass","mat-mdc-table-sticky");n(this,"needsPositionStickyOnElement",!1)}};n(t,"ɵfac",(()=>{let i;return function(r){return(i||(i=F(t)))(r||t)}})()),n(t,"ɵcmp",E({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(a,r){a&2&&P("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[L([{provide:ke,useExisting:t},{provide:q,useExisting:t},{provide:Me,useValue:null}]),N],ngContentSelectors:Uo,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(a,r){a&1&&(te(Wo),k(0),k(1,1),x(2,Go,1,0),x(3,jo,7,0)(4,$o,4,0)),a&2&&(u(2),S(r._isServer?2:-1),u(),S(r._isNativeHtmlTable?3:4))},dependencies:[Ke,qe,Qe,Xe],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1}));let o=t;return o})(),St=(()=>{const t=class t extends Z{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","matCellDef",""]],features:[L([{provide:Z,useExisting:t}]),N]}));let o=t;return o})(),wt=(()=>{const t=class t extends J{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","matHeaderCellDef",""]],features:[L([{provide:J,useExisting:t}]),N]}));let o=t;return o})(),fi=(()=>{const t=class t extends we{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","matFooterCellDef",""]],features:[L([{provide:we,useExisting:t}]),N]}));let o=t;return o})(),Ct=(()=>{const t=class t extends ${get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[L([{provide:$,useExisting:t}]),N]}));let o=t;return o})(),Rt=(()=>{const t=class t extends Ue{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[N]}));let o=t;return o})(),hi=(()=>{const t=class t extends vt{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["mat-footer-cell"],["td","mat-footer-cell",""]],hostAttrs:[1,"mat-mdc-footer-cell","mdc-data-table__cell"],features:[N]}));let o=t;return o})(),kt=(()=>{const t=class t extends Ge{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[N]}));let o=t;return o})(),ui=(()=>{const t=class t extends de{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",R]},features:[L([{provide:de,useExisting:t}]),N]}));let o=t;return o})(),pi=(()=>{const t=class t extends ce{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","matFooterRowDef",""]],inputs:{columns:[0,"matFooterRowDef","columns"],sticky:[2,"matFooterRowDefSticky","sticky",R]},features:[L([{provide:ce,useExisting:t}]),N]}));let o=t;return o})(),_i=(()=>{const t=class t extends Ce{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵdir",g({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[L([{provide:Ce,useExisting:t}]),N]}));let o=t;return o})(),gi=(()=>{const t=class t extends je{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵcmp",E({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[L([{provide:je,useExisting:t}]),N],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,a){i&1&&V(0,0)},dependencies:[Y],encapsulation:2,changeDetection:1}));let o=t;return o})(),bi=(()=>{const t=class t extends $e{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵcmp",E({type:t,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-mdc-footer-row","mdc-data-table__row"],exportAs:["matFooterRow"],features:[L([{provide:$e,useExisting:t}]),N],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,a){i&1&&V(0,0)},dependencies:[Y],encapsulation:2,changeDetection:1}));let o=t;return o})(),yi=(()=>{const t=class t extends Ye{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵcmp",E({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[L([{provide:Ye,useExisting:t}]),N],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,a){i&1&&V(0,0)},dependencies:[Y],encapsulation:2,changeDetection:1}));let o=t;return o})(),vi=(()=>{const t=class t extends Re{constructor(){super();n(this,"_cellSelector","td, mat-cell, [mat-cell], .mat-cell");this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}};n(t,"ɵfac",function(a){return new(a||t)}),n(t,"ɵdir",g({type:t,selectors:[["ng-template","matNoDataRow",""]],features:[L([{provide:Re,useExisting:t}]),N]}));let o=t;return o})(),xi=(()=>{const t=class t extends xt{};n(t,"ɵfac",(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})()),n(t,"ɵcmp",E({type:t,selectors:[["mat-text-column"]],features:[N],decls:3,vars:0,consts:[["matColumnDef",""],["mat-header-cell","",3,"text-align",4,"matHeaderCellDef"],["mat-cell","",3,"text-align",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""]],template:function(i,a){i&1&&(Ei(0,0),fe(1,Yo,2,3,"th",1)(2,qo,2,3,"td",2),Ai())},dependencies:[Ct,wt,Rt,St,kt],encapsulation:2,changeDetection:1}));let o=t;return o})(),Ko=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵmod",at({type:t,imports:[di,mi,ci,wt,ui,Ct,St,_i,fi,pi,Rt,kt,hi,gi,yi,bi,vi,xi],exports:[le,mi,ci,wt,ui,Ct,St,_i,fi,pi,Rt,kt,hi,gi,yi,bi,vi,xi]})),n(t,"ɵinj",ot({imports:[di,le]}));let o=t;return o})();const Xo=["*",[["","matSortHeaderIcon",""]]],Qo=["*","[matSortHeaderIcon]"];function Zo(o,t){o&1&&(re(),oe(0,"svg",3),pt(1,"path",4),se())}function Jo(o,t){o&1&&(oe(0,"div",2),k(1,1,null,Zo,2,0),se())}const Xi=new O("MAT_SORT_DEFAULT_OPTIONS");let Nt=(()=>{const t=class t{constructor(e){n(this,"_defaultOptions");n(this,"_initializedStream",new Ti(1));n(this,"sortables",new Map);n(this,"_stateChanges",new z);n(this,"active");n(this,"start","asc");n(this,"_direction","");n(this,"disableClear");n(this,"disabled",!1);n(this,"sortChange",new Q);n(this,"initialized",this._initializedStream);this._defaultOptions=e}get direction(){return this._direction}set direction(e){this._direction=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){var s;if(!e)return"";const i=(e==null?void 0:e.disableClear)??this.disableClear??!!((s=this._defaultOptions)!=null&&s.disableClear);let a=es(e.start||this.start,i),r=a.indexOf(this.direction)+1;return r>=a.length&&(r=0),a[r]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}};n(t,"ɵfac",function(i){return new(i||t)(Dn(Xi,8))}),n(t,"ɵdir",g({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",R],disabled:[2,"matSortDisabled","disabled",R]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[De]}));let o=t;return o})();function es(o,t){let l=["asc","desc"];return o=="desc"&&l.reverse(),t||l.push(""),l}let Si=(()=>{const t=class t{constructor(){n(this,"_sort",m(Nt,{optional:!0}));n(this,"_columnDef",m($,{optional:!0}));n(this,"_changeDetectorRef",m(ee));n(this,"_focusMonitor",m(Hi));n(this,"_elementRef",m(T));n(this,"_ariaDescriber",m(Ui,{optional:!0}));n(this,"_renderChanges");n(this,"_animationsDisabled",Te());n(this,"_recentlyCleared",Je(null));n(this,"_sortButton");n(this,"id");n(this,"arrowPosition","after");n(this,"start");n(this,"disabled",!1);n(this,"_sortActionDescription","Sort");n(this,"disableClear");m(Ft).load(Li);const e=m(Xi,{optional:!0});this._sort,e!=null&&e.arrowPosition&&(this.arrowPosition=e==null?void 0:e.arrowPosition)}get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=be(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){var e,i;this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),(e=this._renderChanges)==null||e.unsubscribe(),this._sortButton&&((i=this._ariaDescriber)==null||i.removeDescription(this._sortButton,this._sortActionDescription))}_toggleOnInteraction(){if(!this._isDisabled()){const e=this._isSorted(),i=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?i:null)}}_handleKeydown(e){(e.keyCode===Ve||e.keyCode===He)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){var i,a;this._sortButton&&((i=this._ariaDescriber)==null||i.removeDescription(this._sortButton,this._sortActionDescription),(a=this._ariaDescriber)==null||a.describe(this._sortButton,e)),this._sortActionDescription=e}};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵcmp",E({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(i,a){i&1&&H("click",function(){return a._toggleOnInteraction()})("keydown",function(s){return a._handleKeydown(s)})("mouseleave",function(){return a._recentlyCleared.set(null)}),i&2&&(U("aria-sort",a._getAriaSortAttribute()),P("mat-sort-header-disabled",a._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",R],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",R]},exportAs:["matSortHeader"],ngContentSelectors:Qo,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(i,a){i&1&&(te(Xo),oe(0,"div",0)(1,"div",1),k(2),se(),x(3,Jo,3,0,"div",2),se()),i&2&&(P("mat-sort-header-sorted",a._isSorted())("mat-sort-header-position-before",a.arrowPosition==="before")("mat-sort-header-descending",a._sort.direction==="desc")("mat-sort-header-ascending",a._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",a._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",a._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",a._animationsDisabled),U("tabindex",a._isDisabled()?null:0)("role",a._isDisabled()?null:"button"),u(3),S(a._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2}));let o=t;return o})(),ts=(()=>{const t=class t{};n(t,"ɵfac",function(i){return new(i||t)}),n(t,"ɵmod",at({type:t,imports:[Nt,Si],exports:[Nt,Si,le]})),n(t,"ɵinj",ot({imports:[le]}));let o=t;return o})(),Dt=class{};Dt=Fi([On({declarations:[Se],imports:[Tn,qn,ea,ts,Ko,xo],exports:[Se]})],Dt);const vs={title:"Components/Grid",tags:["autodocs"],component:Se,decorators:[Ji({imports:[Dt]})]},Pe={};var wi,Ci,Ri;Pe.parameters={...Pe.parameters,docs:{...(wi=Pe.parameters)==null?void 0:wi.docs,source:{originalSource:"{}",...(Ri=(Ci=Pe.parameters)==null?void 0:Ci.docs)==null?void 0:Ri.source}}};const xs=["Default"];export{Pe as Default,xs as __namedExportsOrder,vs as default};
