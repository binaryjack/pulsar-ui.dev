import{B as A}from"./button-CFulZPHs.js";import{C as _,a as j}from"./component-styling-builder-DLTIWDZq.js";import"./jsx-runtime-standard-IlocL9rZ.js";import"./class-names-2dOUpm6k.js";import"./skeleton-BYH6nG6Z.js";const G={title:"Atoms/Button",tags:["autodocs"],render:e=>{const P=new _(e.variant||"primary").size(e.size||"md").rounded(e.rounded||"md").disabled(e.disabled||!1).loading(e.loading||!1).fullWidth(e.fullWidth||!1).build(),w=new j().base("inline-flex items-center justify-center font-medium transition-colors").background("bg-primary-600 hover:bg-primary-700").build();return A({config:P,styling:w,type:e.type||"button",children:e.label})},argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","secondary","success","error","warning"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}},parameters:{docs:{description:{component:"Button component - Atomic element for user actions"}}}},r={args:{label:"Primary Button",variant:"primary",size:"md",rounded:"md"}},a={args:{label:"Secondary Button",variant:"secondary",size:"md"}},o={args:{label:"Small Button",size:"sm"}},t={args:{label:"Large Button",size:"lg"}},n={args:{label:"Disabled Button",disabled:!0}},s={args:{label:"Loading Button",loading:!0}},l={args:{label:"Full Width Button",fullWidth:!0}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
    rounded: 'md'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Small Button',
    size: 'sm'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,f,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    size: 'lg'
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,z,W;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...(W=(z=n.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var L,v,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Loading Button',
    loading: true
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,D,F;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Button',
    fullWidth: true
  }
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const H=["Primary","Secondary","Small","Large","Disabled","Loading","FullWidth"];export{n as Disabled,l as FullWidth,t as Large,s as Loading,r as Primary,a as Secondary,o as Small,H as __namedExportsOrder,G as default};
