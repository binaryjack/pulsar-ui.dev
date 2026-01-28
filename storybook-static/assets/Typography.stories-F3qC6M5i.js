import{T as R}from"./typography-BkbRYw2B.js";import{C as U,a as V}from"./component-styling-builder-DLTIWDZq.js";import"./jsx-runtime-standard-IlocL9rZ.js";import"./class-names-2dOUpm6k.js";import"./skeleton-BYH6nG6Z.js";const ra={title:"Atoms/Typography",tags:["autodocs"],render:a=>{const M=new U(a.variant||"primary").loading(a.loading||!1).className(a.className).build(),Q=new V().base("text-neutral-900").build();return R({config:M,styling:Q,tag:a.tag,variant:a.variant,truncate:a.truncate,noWrap:a.noWrap,userSelect:a.userSelect,children:a.children})},argTypes:{children:{control:"text"},tag:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div"]},variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body1","body2","caption","overline"]},truncate:{control:"boolean"},noWrap:{control:"boolean"},userSelect:{control:"boolean"},className:{control:"text"},loading:{control:"boolean"}},parameters:{docs:{description:{component:"Typography component - Atomic element for text rendering"}}}},r={args:{tag:"h1",variant:"h1",children:"Heading 1"}},e={args:{tag:"h2",variant:"h2",children:"Heading 2"}},n={args:{tag:"h3",variant:"h3",children:"Heading 3"}},t={args:{tag:"p",variant:"body1",children:"This is body1 text. Perfect for regular paragraphs and content."}},o={args:{tag:"p",variant:"body2",children:"This is body2 text. Slightly smaller for secondary content."}},s={args:{tag:"span",variant:"caption",children:"This is caption text for small annotations."}},i={args:{tag:"span",variant:"overline",children:"Overline Text"}},c={args:{tag:"p",variant:"body1",truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width",className:"max-w-xs"}},d={args:{tag:"span",variant:"body1",noWrap:!0,children:"This text will not wrap to a new line"}},l={args:{tag:"p",variant:"body1",children:"Custom colored text",className:"text-primary-600"}},p={args:{loading:!0}};var g,m,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tag: 'h1',
    variant: 'h1',
    children: 'Heading 1'
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,y,v;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tag: 'h2',
    variant: 'h2',
    children: 'Heading 2'
  }
}`,...(v=(y=e.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,b,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tag: 'h3',
    variant: 'h3',
    children: 'Heading 3'
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,S,f;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    variant: 'body1',
    children: 'This is body1 text. Perfect for regular paragraphs and content.'
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,H,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    variant: 'body2',
    children: 'This is body2 text. Slightly smaller for secondary content.'
  }
}`,...(N=(H=o.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var W,B,O;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    tag: 'span',
    variant: 'caption',
    children: 'This is caption text for small annotations.'
  }
}`,...(O=(B=s.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var A,L,P;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    tag: 'span',
    variant: 'overline',
    children: 'Overline Text'
  }
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var _,E,j;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    variant: 'body1',
    truncate: true,
    children: 'This is a very long text that will be truncated with an ellipsis when it exceeds the container width',
    className: 'max-w-xs'
  }
}`,...(j=(E=c.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var k,q,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tag: 'span',
    variant: 'body1',
    noWrap: true,
    children: 'This text will not wrap to a new line'
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var D,F,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    variant: 'body1',
    children: 'Custom colored text',
    className: 'text-primary-600'
  }
}`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var I,J,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ea=["Heading1","Heading2","Heading3","Body1","Body2","Caption","Overline","Truncated","NoWrap","CustomColor","Loading"];export{t as Body1,o as Body2,s as Caption,l as CustomColor,r as Heading1,e as Heading2,n as Heading3,p as Loading,d as NoWrap,i as Overline,c as Truncated,ea as __namedExportsOrder,ra as default};
