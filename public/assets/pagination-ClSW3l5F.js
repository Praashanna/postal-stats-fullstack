import{j as e,f as i}from"./index-Zj0G14S6.js";import{b as l}from"./button-De-R7E4a.js";import{c as s}from"./createLucideIcon-D9ZVc89k.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);function f({className:a,...n}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:i("mx-auto flex w-full justify-center",a),...n})}function g({className:a,...n}){return e.jsx("ul",{"data-slot":"pagination-content",className:i("flex flex-row items-center gap-1",a),...n})}function h({...a}){return e.jsx("li",{"data-slot":"pagination-item",...a})}function t({className:a,isActive:n,size:o="icon",...r}){return e.jsx("a",{"aria-current":n?"page":void 0,"data-slot":"pagination-link","data-active":n,className:i(l({variant:n?"outline":"ghost",size:o}),a),...r})}function j({className:a,...n}){return e.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:i("gap-1 px-2.5 sm:pl-2.5",a),...n,children:[e.jsx(c,{}),e.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function N({className:a,...n}){return e.jsxs(t,{"aria-label":"Go to next page",size:"default",className:i("gap-1 px-2.5 sm:pr-2.5",a),...n,children:[e.jsx("span",{className:"hidden sm:block",children:"Next"}),e.jsx(p,{})]})}function y({className:a,...n}){return e.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:i("flex size-9 items-center justify-center",a),...n,children:[e.jsx(u,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More pages"})]})}export{f as P,g as a,h as b,j as c,y as d,t as e,N as f};
