import{u as t,j as n,M as i}from"./blocks-DZcaNMVi.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C1pQtk4A.js";import"./angular-platform-Cx1L7wmy.js";function s(r){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"introduction",children:"Introduction"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ngx-core-business"})," is an Angular library in active development, built on top of ",n.jsx(e.code,{children:"@angular/material"}),". It aims to provide reusable, enterprise-grade UI components and utilities to streamline the development of scalable Angular applications."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": This library is a work in progress. Some features and components are not yet implemented but are planned for future releases. Contributions and feedback are welcome as we shape the library together!"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"current-features",children:"Current Features"}),`
`,n.jsx(e.p,{children:"While the library is evolving, here’s what’s available so far:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusable Components"}),": A growing collection of UI components for Angular applications."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Integration with Angular Material"}),": Extends Angular Material components with additional functionality and styling."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"planned-features",children:"Planned Features"}),`
`,n.jsx(e.p,{children:"Here’s what we’re working on and planning to add in future updates:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Advanced UI Components"}),": Components like data tables, modals, and form controls with built-in validation and customization options."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layouts"}),": Pre-defined layouts for dashboards and business workflows."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CRUD Utilities"}),": Simplified patterns for Create, Read, Update, and Delete operations."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Theming"}),": Enhanced support for Angular Material's theming system."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive Design"}),": Improved layouts and components optimized for various screen sizes."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["You can get started with ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"ngx-core-business"})})," and share your feedback as you go by following these steps:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Install the NgBiz"}),`:\r
Install NgBiz by running the following command:`,`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install ngx-core-business
`})}),`
`]}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Install Angular Material(If not already installed)"}),n.jsx(e.br,{}),`
`,"Install Angular Material by running the following command:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`ng add @angular/material
`})}),`
`,`For more detailed guidance on setting up Angular Material, you can refer to the\r
official documentation `,n.jsx(e.a,{href:"https://material.angular.io/guide/getting-started",rel:"nofollow",children:"here"})]}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Start Using NgBiz"}),n.jsx(e.br,{}),`
`,"Let’s test out a component! Import the NgBizAvatarModule into your standalone component’s imports and use the ng-biz-avatar component in the template:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:` import { NgBizAvatarModule } from 'ngx-core-business';\r
\r
 @Component({\r
 selector: 'app-root',\r
 standalone: true,\r
 imports: [\r
     NgBizAvatarModule\r
 ],\r
 template: \`<ng-biz-avatar name="John Doe"></ng-biz-avatar>\`\r
 })\r
 export class AppComponent {}
`})}),`
`]}),`
`]})]})}function h(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{h as default};
