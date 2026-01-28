import{a as u}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as F}from"./class-names-2dOUpm6k.js";import{C as E,a as O}from"./component-styling-builder-DLTIWDZq.js";import{S as G}from"./skeleton-BYH6nG6Z.js";const l={xs:"w-8 h-4",sm:"w-10 h-5",md:"w-11 h-6",lg:"w-14 h-7",xl:"w-16 h-8"},H=new E("primary").size("md").rounded("full").build(),I=new O().base("relative inline-flex items-center rounded-full cursor-pointer focus:outline-none transition-colors duration-200").focus("focus:ring-2 focus:ring-primary-500 focus:ring-offset-2").background("bg-neutral-300 aria-checked:bg-primary-600").disabled("opacity-50 cursor-not-allowed").build(),J=({config:e=H,styling:r=I,checked:i=!1,...j})=>{if(e.loading)return u(G,{width:e.size?l[e.size].split(" ")[0]:"w-11",height:e.size?l[e.size].split(" ")[1]:"h-6",rounded:"full"});const q=F(r.base,r.focus,r.background,e.size?l[e.size]:"",e.disabled?r.disabled:"",e.className,r.custom);return u("button",{type:"button",role:"switch",ariaChecked:i?"true":"false",className:q,disabled:e.disabled||!1,ariaBusy:e.loading?"true":"false",...j})},R={title:"Atoms/Toggle",tags:["autodocs"],render:e=>{const r=new E(e.variant||"primary").size(e.size||"md").rounded("full").disabled(e.disabled||!1).loading(e.loading||!1).build(),i=new O().base("relative inline-flex items-center rounded-full cursor-pointer focus:outline-none transition-colors duration-200").focus("focus:ring-2 focus:ring-primary-500 focus:ring-offset-2").background("bg-neutral-300 aria-checked:bg-primary-600").disabled("opacity-50 cursor-not-allowed").build();return J({config:r,styling:i,checked:e.checked})},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},checked:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"}},parameters:{docs:{description:{component:"Toggle component - Atomic element for on/off selections"}}}},s={args:{size:"md"}},a={args:{checked:!0}},o={args:{size:"sm"}},t={args:{size:"lg"}},n={args:{disabled:!0}},c={args:{disabled:!0,checked:!0}},d={args:{loading:!0}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,f,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,z,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var S,C,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var x,D,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var T,v,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var A,N,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const U=["Default","Checked","Small","Large","Disabled","DisabledChecked","Loading"];export{a as Checked,s as Default,n as Disabled,c as DisabledChecked,t as Large,d as Loading,o as Small,U as __namedExportsOrder,R as default};
