import{R as _}from"./radio-DA4CyiGc.js";import{C as E,a as O}from"./component-styling-builder-DLTIWDZq.js";import"./jsx-runtime-standard-IlocL9rZ.js";import"./checkbox-size-classes-Bcen5LKc.js";import"./class-names-2dOUpm6k.js";import"./skeleton-BYH6nG6Z.js";const I={title:"Atoms/Radio",tags:["autodocs"],render:e=>{const A=new E(e.variant||"primary").size(e.size||"md").rounded("full").disabled(e.disabled||!1).loading(e.loading||!1).build(),B=new O().base("border cursor-pointer focus:outline-none rounded-full").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").background("bg-white checked:bg-primary-600 checked:border-primary-600").disabled("bg-neutral-100 cursor-not-allowed").build();return _({config:A,styling:B,name:e.name||"radio-example",value:e.value||"option",checked:e.checked,defaultChecked:e.defaultChecked})},argTypes:{name:{control:"text"},value:{control:"text"},size:{control:"select",options:["xs","sm","md","lg","xl"]},checked:{control:"boolean"},defaultChecked:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"}},parameters:{docs:{description:{component:"Radio component - Atomic element for single selections within a group"}}}},o={args:{size:"md",name:"radio-demo",value:"option1"}},r={args:{checked:!0,name:"radio-demo",value:"option1"}},a={args:{size:"sm",name:"radio-demo",value:"option1"}},n={args:{size:"lg",name:"radio-demo",value:"option1"}},s={args:{disabled:!0,name:"radio-demo",value:"option1"}},d={args:{disabled:!0,checked:!0,name:"radio-demo",value:"option1"}},t={args:{loading:!0}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'md',
    name: 'radio-demo',
    value: 'option1'
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true,
    name: 'radio-demo',
    value: 'option1'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    name: 'radio-demo',
    value: 'option1'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,k,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    name: 'radio-demo',
    value: 'option1'
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,S,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    name: 'radio-demo',
    value: 'option1'
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var y,x,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    name: 'radio-demo',
    value: 'option1'
  }
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var w,L,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(R=(L=t.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const J=["Default","Checked","Small","Large","Disabled","DisabledChecked","Loading"];export{r as Checked,o as Default,s as Disabled,d as DisabledChecked,n as Large,t as Loading,a as Small,J as __namedExportsOrder,I as default};
