import{a as h}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as K}from"./class-names-2dOUpm6k.js";import{i as M}from"./input-size-classes-BzP02qzH.js";import{S as Q,r as U}from"./skeleton-BYH6nG6Z.js";import{C as G,a as H}from"./component-styling-builder-DLTIWDZq.js";const X=new G("primary").size("md").rounded("md").build(),Y=new H().base("block border font-medium focus:outline-none").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").background("bg-white text-neutral-900").readOnly("bg-neutral-50 cursor-default").disabled("bg-neutral-100 text-neutral-500 cursor-not-allowed").build(),Z=({config:e=X,styling:r=Y,type:c="text",value:m,defaultValue:b,...p})=>{if(e.loading)return h(Q,{width:e.fullWidth?"w-full":"w-64",height:"h-10",rounded:e.rounded});const J=K(r.base,r.transition,r.border,r.focus,e.size?M[e.size]:"",e.disabled?r.disabled:"readOnly"in p&&p.readOnly?r.readOnly:r.background,e.rounded?U[e.rounded]:"",e.fullWidth?"w-full":"",e.className,r.custom);return h("input",{type:c,className:J,value:m!==void 0?String(m):void 0,defaultValue:b!==void 0?String(b):void 0,disabled:e.disabled||!1,ariaBusy:e.loading?"true":"false",...p})},te={title:"Atoms/Input",tags:["autodocs"],render:e=>{const r=new G("primary").size(e.size||"md").rounded(e.rounded||"md").disabled(e.disabled||!1).loading(e.loading||!1).fullWidth(e.fullWidth||!1).build(),c=new H().base("border font-medium").border("border-neutral-300").focus("focus:outline-none focus:ring-2 focus:ring-primary-500").background(e.readOnly?"bg-neutral-100":"bg-white").readOnly(e.readOnly?"cursor-not-allowed":"").build();return Z({config:r,styling:c,type:e.type||"text",placeholder:e.placeholder,value:e.value,readOnly:e.readOnly})},argTypes:{placeholder:{control:"text"},value:{control:"text"},type:{control:"select",options:["text","password","email","number","tel","url"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},disabled:{control:"boolean"},loading:{control:"boolean"},readOnly:{control:"boolean"},fullWidth:{control:"boolean"}},parameters:{docs:{description:{component:`Input component - Text input field\r
\r
Canonical implementation following architectural pattern`}}}},a={args:{placeholder:"Enter text..."}},o={args:{value:"Sample text",placeholder:"Enter text..."}},t={args:{type:"password",placeholder:"Enter password..."}},l={args:{type:"email",placeholder:"Enter email..."}},s={args:{placeholder:"Disabled input",disabled:!0}},n={args:{value:"Read-only value",readOnly:!0}},d={args:{placeholder:"Small input",size:"sm"}},u={args:{placeholder:"Large input",size:"lg"}},i={args:{placeholder:"Full width input",fullWidth:!0}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,S,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...'
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var O,v,z;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password...'
  }
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var E,W,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter email...'
  }
}`,...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,k,F;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(F=(k=s.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var L,R,B;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 'Read-only value',
    readOnly: true
  }
}`,...(B=(R=n.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var I,N,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    size: 'sm'
  }
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var T,V,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    size: 'lg'
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var A,j,q;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    fullWidth: true
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const le=["Default","WithValue","Password","Email","Disabled","ReadOnly","Small","Large","FullWidth"];export{a as Default,s as Disabled,l as Email,i as FullWidth,u as Large,t as Password,n as ReadOnly,d as Small,o as WithValue,le as __namedExportsOrder,te as default};
