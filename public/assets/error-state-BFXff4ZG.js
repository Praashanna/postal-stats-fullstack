import{j as e}from"./index-DM8EUVPt.js";import{c}from"./createLucideIcon-TOyp2N4j.js";import{M as i}from"./mail-CrgiuGms.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=c("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function d({error:t,message:a="Failed to load server data",type:s="default"}){const r=()=>{switch(s){case"mail":return e.jsx(i,{className:"mx-auto h-12 w-12 text-destructive"});case"default":default:return e.jsx(l,{className:"mx-auto h-12 w-12 text-destructive"})}};return e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsxs("div",{className:"text-center",children:[r(),e.jsx("h2",{className:"mt-2 text-xl font-semibold",children:"Error Loading Data"}),e.jsx("p",{className:"mt-1 text-muted-foreground",children:t instanceof Error?t.message:a})]})})}export{l as C,d as E};
