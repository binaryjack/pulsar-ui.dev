import{a as m}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as l}from"./checkbox-size-classes-Bcen5LKc.js";import{c as G}from"./class-names-2dOUpm6k.js";import{S as H,r as I}from"./skeleton-BYH6nG6Z.js";import{C as T,a as j}from"./component-styling-builder-DLTIWDZq.js";const J=new T("primary").size("md").rounded("sm").build(),K=new j().base("border cursor-pointer focus:outline-none").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").background("bg-white checked:bg-primary-600 checked:border-primary-600").disabled("bg-neutral-100 cursor-not-allowed").build(),M=({config:e=J,styling:r=K,checked:o,defaultChecked:u,...q})=>{if(e.loading)return m(H,{width:e.size?l[e.size]:"w-5",height:e.size?l[e.size].split(" ")[1]:"h-5",rounded:e.rounded});const F=G(r.base,r.transition,r.border,r.focus,r.background,e.size?l[e.size]:"",e.disabled?r.disabled:"",e.rounded?I[e.rounded]:"",e.className,r.custom);return m("input",{type:"checkbox",className:F,checked:o!==void 0?!!o:void 0,defaultChecked:u!==void 0?!!u:void 0,disabled:e.disabled||!1,ariaBusy:e.loading?"true":"false",...q})},W={title:"Atoms/Checkbox",tags:["autodocs"],render:e=>{const r=new T(e.variant||"primary").size(e.size||"md").rounded(e.rounded||"sm").disabled(e.disabled||!1).loading(e.loading||!1).build(),o=new j().base("border cursor-pointer focus:outline-none").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").background("bg-white checked:bg-primary-600 checked:border-primary-600").disabled("bg-neutral-100 cursor-not-allowed").build();return M({config:r,styling:o,checked:e.checked,defaultChecked:e.defaultChecked})},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},checked:{control:"boolean"},defaultChecked:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"}},parameters:{docs:{description:{component:"Checkbox component - Atomic element for binary selections"}}}},s={args:{size:"md",rounded:"sm"}},a={args:{checked:!0}},d={args:{size:"sm"}},n={args:{size:"lg"}},c={args:{disabled:!0}},t={args:{disabled:!0,checked:!0}},i={args:{loading:!0}};var p,b,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'md',
    rounded: 'sm'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,k,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var z,C,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var x,y,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var D,v,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var L,A,N;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(N=(A=t.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var _,E,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const X=["Default","Checked","Small","Large","Disabled","DisabledChecked","Loading"];export{a as Checked,s as Default,c as Disabled,t as DisabledChecked,n as Large,i as Loading,d as Small,X as __namedExportsOrder,W as default};
