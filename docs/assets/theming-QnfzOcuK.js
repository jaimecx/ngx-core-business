import{u as t,j as e,M as l}from"./blocks-CqxzOeDj.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-TGmgDK9p.js";import"./angular-platform-C_MM8IP_.js";const i="#76b82a";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Theming"}),`
`,e.jsx(n.h1,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.p,{children:["This library integrates seamlessly with the ",e.jsx(n.strong,{children:"Angular Material theming system"}),", enabling you to use prebuilt or custom themes. It also introduces ",e.jsx(n.strong,{children:"design tokens"}),", which provide a flexible and centralized approach to styling components consistently across your application."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"the-ngbiz-theming-system",children:"The NgBiz Theming System"}),`
`,e.jsxs(n.p,{children:["Theming in ",e.jsx(n.strong,{children:"NgBiz"})," is based on a cascading priority system to ensure predictable styling behavior:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Defined Design Tokens"}),": Tokens explicitly declared in your stylesheets take precedence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Angular Material Theme"}),": If no token is defined, the Angular Material theme values are applied."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default Values"}),": When neither tokens nor theme values are defined, the library falls back to predefined default values."]}),`
`]}),`
`,e.jsx(n.p,{children:"This structure ensures that your application retains a consistent appearance while offering maximum customization flexibility."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.p,{children:["The following design token is available to customize the color scheme of ",e.jsx(n.strong,{children:"NgBiz"})," components:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token Name"}),e.jsx(n.th,{children:"Token Variable"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Primary Color"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--ngbiz-primary"})}),e.jsxs(n.td,{children:["The main color applied to all ",e.jsx(n.strong,{children:"NgBiz"})," components."]})]})})]}),`
`,e.jsx(n.h3,{id:"components",children:"Components"}),`
`,e.jsx(n.h4,{id:"navlist",children:"NavList"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token Name"}),e.jsx(n.th,{children:"Token Variable"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Hover Color"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--ngbiz-nav-list-item-hover-state-layer-color"})}),e.jsx(n.td,{children:"The color applied to the hover state of list items."})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"how-to-use-design-tokens",children:"How to Use Design Tokens"}),`
`,e.jsxs(n.p,{children:["You can define your custom design tokens by adding them to your global styles file (",e.jsx(n.code,{children:"styles.scss"})," or ",e.jsx(n.code,{children:"styles.css"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --ngbiz-primary: #ff4081;
}
`})}),`
`,e.jsx(n.h2,{id:"default-values",children:"Default Values"}),`
`,e.jsx(n.h3,{id:"colors-1",children:"Colors"}),`
`,e.jsx(n.p,{children:"When design tokens or themes are not specified, the following default value is applied:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token name"}),e.jsx(n.th,{children:"Value"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Primary color"})}),e.jsx(n.td,{children:e.jsx("div",{style:{background:i,color:"#fff",padding:"4px 8px",borderRadius:"4px",display:"inline-block"},children:e.jsx(n.strong,{children:i})})})]})})]}),`
`,e.jsx(n.hr,{})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
