import{T as b}from"./typography-BkbRYw2B.js";import{s as A,B as w}from"./button-CFulZPHs.js";import{a as c,s as G}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as I}from"./class-names-2dOUpm6k.js";import{S as J,r as K}from"./skeleton-BYH6nG6Z.js";import{C as o,a as _}from"./component-styling-builder-DLTIWDZq.js";const L=new o("primary").rounded("lg").shadow("md").build(),M=new _().base("bg-white overflow-hidden").border("border border-neutral-200").build(),P=({config:e=L,styling:t=M,header:d,footer:a,elevation:s=!0,bordered:n=!0,children:r,...k})=>{if(e.loading)return c(J,{width:"w-full",height:"h-64",rounded:e.rounded});const q=I(t.base,n?t.border:"",s&&e.shadow?A[e.shadow]:"",e.rounded?K[e.rounded]:"",e.className,t.custom);return G("div",{className:q,ariaBusy:e.loading?"true":"false",...k,children:[d&&c("div",{className:"px-6 py-4 border-b border-neutral-200",children:d}),c("div",{className:"px-6 py-4",children:r}),a&&c("div",{className:"px-6 py-4 border-t border-neutral-200 bg-neutral-50",children:a})]})},Z={title:"Organisms/Card",tags:["autodocs"],render:e=>{const t=new o("primary").rounded(e.rounded||"lg").build(),d=new _().base("bg-white").border("border border-neutral-200").build();let a;if(e.showHeader){const r=document.createElement("div");r.className="px-6 py-4 border-b border-neutral-200",r.appendChild(b({tag:"h3",variant:"h6",config:new o("primary").build(),children:"Card Title"})),a=r}let s;if(e.showFooter){const r=document.createElement("div");r.className="px-6 py-4 border-t border-neutral-200 flex justify-end gap-2",r.appendChild(w({config:new o("secondary").size("sm").build(),children:"Cancel"})),r.appendChild(w({config:new o("primary").size("sm").build(),children:"Save"})),s=r}const n=document.createElement("div");return n.className="px-6 py-4",n.appendChild(b({tag:"p",variant:"body1",config:new o("primary").build(),children:e.content||"Card content goes here. This is the main body of the card."})),P({config:t,styling:d,header:a,footer:s,elevation:e.elevation,bordered:e.bordered,children:n})},argTypes:{content:{control:"text"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},elevation:{control:"boolean"},bordered:{control:"boolean"},rounded:{control:"select",options:["none","sm","md","lg","xl"]}},parameters:{docs:{description:{component:`Card component - Organism for content containers\r
\r
Supports header, body (children), and footer sections`}}}},i={args:{content:"Basic card with just body content."}},l={args:{content:"Card with header section.",showHeader:!0}},u={args:{content:"Card with footer actions.",showFooter:!0}},m={args:{content:"Complete card with header, body, and footer.",showHeader:!0,showFooter:!0}},p={args:{content:"Card with shadow elevation.",showHeader:!0,elevation:!0}},h={args:{content:"Card with border.",showHeader:!0,bordered:!0}};var g,C,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: 'Basic card with just body content.'
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var y,v,H;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 'Card with header section.',
    showHeader: true
  }
}`,...(H=(v=l.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var S,x,B;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    content: 'Card with footer actions.',
    showFooter: true
  }
}`,...(B=(x=u.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var F,N,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    content: 'Complete card with header, body, and footer.',
    showHeader: true,
    showFooter: true
  }
}`,...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,W,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    content: 'Card with shadow elevation.',
    showHeader: true,
    elevation: true
  }
}`,...(T=(W=p.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var j,O,z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'Card with border.',
    showHeader: true,
    bordered: true
  }
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const $=["Default","WithHeader","WithFooter","Complete","WithElevation","Bordered"];export{h as Bordered,m as Complete,i as Default,p as WithElevation,u as WithFooter,l as WithHeader,$ as __namedExportsOrder,Z as default};
