"use strict";(self.webpackChunkdevscribe_docs=self.webpackChunkdevscribe_docs||[]).push([[9278],{49722:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(74848),i=n(28453);const r={},o="Code To HTML",d={type:"api",id:"code-to-html",title:"Code To HTML",description:"",slug:"/code-to-html",frontMatter:{},api:{tags:["Code Snippets"],operationId:"Code To HTML",requestBody:{content:{"application/json":{schema:{type:"object",properties:{code:{type:"string",nullable:!0},language:{type:"string",nullable:!0},theme:{type:"string",nullable:!0}},additionalProperties:!1}}},required:!0},responses:{200:{description:"Success"}},description:"Code To HTML",method:"post",path:"/code-snippet/toHtml",parameters:[],servers:[{url:"https://backend.devscribe.email",description:"Production API Server"}],security:[{ApiKey:[]}],securitySchemes:{ApiKey:{type:"apiKey",name:"X-API-Key",in:"header"}},jsonRequestBodyExample:{code:"string",language:"string",theme:"string"},info:{title:"DevScribe.Api",version:"1.0"},postman:{name:"Code To HTML",description:{type:"text/plain"},url:{path:["code-snippet","toHtml"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "code": "<string>",\n    "language": "<string>",\n    "theme": "<string>"\n}'}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/code-to-html",next:{title:"List Languages",permalink:"/api/list-languages"}},c=[];function l(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"code-to-html",children:"Code To HTML"})}),"\n",(0,s.jsx)(t.p,{children:"Code To HTML"}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"code"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"language"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"theme"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})})]})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Success"})})]}),(0,s.jsx)("div",{})]})})})]})]})}function a(e){void 0===e&&(e={});const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);