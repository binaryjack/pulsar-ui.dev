import{a as u,s as G}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as H}from"./class-names-2dOUpm6k.js";import{S as I,r as J}from"./skeleton-BYH6nG6Z.js";import{C as P,a as _}from"./component-styling-builder-DLTIWDZq.js";const K={xs:"px-1.5 py-0.5 text-xs",sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-1 text-sm",lg:"px-3 py-1 text-base",xl:"px-4 py-1.5 text-lg"},Q=new P("primary").variant("solid").size("sm").rounded("md").build(),R=new _().base("inline-flex items-center gap-1 font-medium").background("bg-primary-100 text-primary-800").border("border border-primary-200").build(),U=({config:e=Q,styling:r=R,label:i,icon:d,iconPosition:m="left",dot:O=!1,children:T,...j})=>{if(e.loading)return u(I,{width:"w-16",height:"h-6",rounded:e.rounded});const q=H(r.base,r.background,r.border,e.size?K[e.size]:"",e.rounded?J[e.rounded]:"",e.className,r.custom),F=T||i;return G("span",{className:q,ariaBusy:e.loading?"true":"false",...j,children:[O&&u("span",{className:"w-1.5 h-1.5 rounded-full bg-current"}),m==="left"&&d,F,m==="right"&&d]})},$={title:"Molecules/Badge",tags:["autodocs"],render:e=>{const r=new P(e.variant||"primary").size(e.size||"md").rounded(e.rounded||"full").build(),i=new _().base("inline-flex items-center gap-1 font-medium").background("bg-primary-100 text-primary-800").build();return U({config:r,styling:i,label:e.label,dot:e.dot,iconPosition:e.iconPosition})},argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","secondary","success","error","warning"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},rounded:{control:"select",options:["sm","md","lg","full"]},dot:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]}},parameters:{docs:{description:{component:`Badge component - Molecule for labels and status indicators\r
\r
Composes icon + text with various styling options`}}}},a={args:{label:"Badge"}},s={args:{label:"Active",dot:!0}},o={args:{label:"Success",variant:"success"}},t={args:{label:"Error",variant:"error"}},n={args:{label:"Warning",variant:"warning"}},l={args:{label:"Small",size:"sm"}},c={args:{label:"Large",size:"lg"}};var p,g,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Badge'
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,S,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    dot: true
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,v,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Success',
    variant: 'success'
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,z,B;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    variant: 'error'
  }
}`,...(B=(z=t.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var C,D,W;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'warning'
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var E,k,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'sm'
  }
}`,...(L=(k=l.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,A,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    size: 'lg'
  }
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const ee=["Default","WithDot","Success","Error","Warning","Small","Large"];export{a as Default,t as Error,c as Large,l as Small,o as Success,n as Warning,s as WithDot,ee as __namedExportsOrder,$ as default};
