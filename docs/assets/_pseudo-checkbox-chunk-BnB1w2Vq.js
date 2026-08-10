var p=Object.defineProperty;var _=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>_(r,typeof e!="symbol"?e+"":e,t);import{S as o,ae as b,l as f,j as k,m as x,s as l,o as I,aN as m,aO as u,q as y,M as g,J as A}from"./angular-platform-Cx1L7wmy.js";import{A as v,Z as S,d as E,N as C,P as w,e as N,f as T,H as P,L as D,R as L,U as K,D as M,T as O}from"./_style-loader-chunk-BcCZh8E_.js";import{h as R}from"./portal-C6NL6b3Y.js";import{a as U}from"./_animation-chunk-CzQ7AORy.js";const B=200;class F{constructor(e,t){i(this,"_letterKeyStream",new o);i(this,"_items",[]);i(this,"_selectedItemIndex",-1);i(this,"_pressedLetters",[]);i(this,"_skipPredicateFn");i(this,"_selectedItem",new o);i(this,"selectedItem",this._selectedItem);const s=typeof(t==null?void 0:t.debounceInterval)=="number"?t.debounceInterval:B;t!=null&&t.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(s)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){const t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=v&&t<=S||t>=E&&t<=C)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(b(t=>this._pressedLetters.push(t)),f(e),k(()=>this._pressedLetters.length>0),x(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{var s,a;for(let n=1;n<this._items.length+1;n++){const h=(this._selectedItemIndex+n)%this._items.length,c=this._items[h];if(!((s=this._skipPredicateFn)!=null&&s.call(this,c))&&((a=c.getLabel)==null?void 0:a.call(c).toLocaleUpperCase().trim().indexOf(t))===0){this._selectedItem.next(c);break}}this._pressedLetters=[]})}}class j{constructor(e,t){i(this,"_items");i(this,"_activeItemIndex",l(-1));i(this,"_activeItem",l(null));i(this,"_wrap",!1);i(this,"_typeaheadSubscription",I.EMPTY);i(this,"_itemChangesSubscription");i(this,"_vertical",!0);i(this,"_horizontal",null);i(this,"_allowedModifierKeys",[]);i(this,"_homeAndEnd",!1);i(this,"_pageUpAndDown",{enabled:!1,delta:10});i(this,"_effectRef");i(this,"_typeahead");i(this,"_skipPredicateFn",e=>e.disabled);i(this,"tabOut",new o);i(this,"change",new o);this._items=e,e instanceof m?this._itemChangesSubscription=e.changes.subscribe(s=>this._itemsChanged(s.toArray())):u(e)&&(this._effectRef=y(()=>this._itemsChanged(e()),{injector:t}))}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();const t=this._getItemsArray();return this._typeahead=new F(t,{debounceInterval:typeof e=="number"?e:void 0,skipPredicate:s=>this._skipPredicateFn(s)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(s=>{this.setActiveItem(s)}),this}cancelTypeahead(){var e;return(e=this._typeahead)==null||e.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){const t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){var n,h;const t=e.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(c=>!e[c]||this._allowedModifierKeys.indexOf(c)>-1);switch(t){case O:this.tabOut.next();return;case M:if(this._vertical&&a){this.setNextItemActive();break}else return;case K:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case L:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case D:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case P:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case T:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case N:if(this._pageUpAndDown.enabled&&a){const c=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(c>0?c:0,1);break}else return;case w:if(this._pageUpAndDown.enabled&&a){const c=this._activeItemIndex()+this._pageUpAndDown.delta,d=this._getItemsArray().length;this._setActiveItemByIndex(c<d?c:d-1,-1);break}else return;default:(a||R(e,"shiftKey"))&&((n=this._typeahead)==null||n.handleKey(e));return}(h=this._typeahead)==null||h.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){var n;const t=this._getItemsArray(),s=typeof e=="number"?e:t.indexOf(e),a=t[s];this._activeItem.set(a??null),this._activeItemIndex.set(s),(n=this._typeahead)==null||n.setCurrentSelectedItemIndex(s)}destroy(){var e,t,s;this._typeaheadSubscription.unsubscribe(),(e=this._itemChangesSubscription)==null||e.unsubscribe(),(t=this._effectRef)==null||t.destroy(),(s=this._typeahead)==null||s.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){const t=this._getItemsArray();for(let s=1;s<=t.length;s++){const a=(this._activeItemIndex()+e*s+t.length)%t.length,n=t[a];if(!this._skipPredicateFn(n)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){const s=this._getItemsArray();if(s[e]){for(;this._skipPredicateFn(s[e]);)if(e+=t,!s[e])return;this.setActiveItem(e)}}_getItemsArray(){return u(this._items)?this._items():this._items instanceof m?this._items.toArray():this._items}_itemsChanged(e){var s,a;(s=this._typeahead)==null||s.setItems(e);const t=this._activeItem();if(t){const n=e.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),(a=this._typeahead)==null||a.setCurrentSelectedItemIndex(n))}}}function G(r){return r!=null&&`${r}`!="false"}class Y{constructor(e=!1,t,s=!0,a){i(this,"_multiple");i(this,"_emitChanges");i(this,"compareWith");i(this,"_selection",new Set);i(this,"_deselectedToEmit",[]);i(this,"_selectedToEmit",[]);i(this,"_selected",null);i(this,"changed",new o);i(this,"bulk",{select:e=>this._select(e),deselect:e=>this._deselect(e),setSelection:e=>this._setSelection(e)});this._multiple=e,this._emitChanges=s,this.compareWith=a,t&&t.length&&(e?t.forEach(n=>this._markSelected(n)):this._markSelected(t[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...e){return this._select(e)}deselect(...e){return this._deselect(e)}setSelection(...e){return this._setSelection(e)}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();const t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_select(e){this._verifyValueAssignment(e),e.forEach(s=>this._markSelected(s));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(e){this._verifyValueAssignment(e),e.forEach(s=>this._unmarkSelected(s));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(e){this._verifyValueAssignment(e);const t=this.selected,s=new Set(e.map(n=>this._getConcreteValue(n)));e.forEach(n=>this._markSelected(n)),t.filter(n=>!s.has(this._getConcreteValue(n,s))).forEach(n=>this._unmarkSelected(n));const a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let s of t)if(this.compareWith(e,s))return s;return e}else return e}}let Z=(()=>{const e=class e{constructor(){i(this,"_animationsDisabled",U());i(this,"state","unchecked");i(this,"disabled",!1);i(this,"appearance","full")}};i(e,"ɵfac",function(a){return new(a||e)}),i(e,"ɵcmp",g({type:e,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(a,n){a&2&&A("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(a,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2}));let r=e;return r})();export{j as L,Z as M,Y as S,G as c};
