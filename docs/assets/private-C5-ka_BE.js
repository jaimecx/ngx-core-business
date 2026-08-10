var c=Object.defineProperty;var s=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var r=(e,n,t)=>s(e,typeof n!="symbol"?n+"":n,t);import{_ as l,M as d}from"./angular-platform-Cx1L7wmy.js";let w=(()=>{const n=class n{};r(n,"ɵfac",function(a){return new(a||n)}),r(n,"ɵcmp",d({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(a,f){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2}));let e=n;return e})(),o;function p(){if(o===void 0&&(o=null,typeof window<"u")){const e=window;if(e.trustedTypes!==void 0)try{o=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return o}function u(e){var n;return((n=p())==null?void 0:n.createHTML(e))||e}function g(e,n,t){const i=t.sanitize(l.HTML,n);e.innerHTML=u(i||"")}export{g as _,w as a,u as t};
