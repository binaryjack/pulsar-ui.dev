import{a as p}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as H}from"./class-names-2dOUpm6k.js";import{S as I,r as J}from"./skeleton-BYH6nG6Z.js";import{C as _,a as j}from"./component-styling-builder-DLTIWDZq.js";const K={xs:"px-2 py-1 text-xs min-h-16",sm:"px-2.5 py-1.5 text-sm min-h-20",md:"px-3 py-2 text-base min-h-24",lg:"px-4 py-2.5 text-lg min-h-32",xl:"px-5 py-3 text-xl min-h-40"},M=new _("primary").size("md").rounded("md").build(),P=new j().base("block border font-medium focus:outline-none resize-y").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").background("bg-white text-neutral-900").readOnly("bg-neutral-50 cursor-default").disabled("bg-neutral-100 text-neutral-500 cursor-not-allowed").build(),Q=({config:e=M,styling:r=P,value:a,defaultValue:m,rows:q=4,...c})=>{if(e.loading)return p(I,{width:e.fullWidth?"w-full":"w-64",height:"h-24",rounded:e.rounded});const G=H(r.base,r.transition,r.border,r.focus,e.size?K[e.size]:"",e.disabled?r.disabled:"readOnly"in c&&c.readOnly?r.readOnly:r.background,e.rounded?J[e.rounded]:"",e.fullWidth?"w-full":"",e.className,r.custom);return p("textarea",{rows:q,className:G,value:a!==void 0?String(a):void 0,defaultValue:m!==void 0?String(m):void 0,disabled:e.disabled||!1,ariaBusy:e.loading?"true":"false",...c})},$={title:"Atoms/Textarea",tags:["autodocs"],render:e=>{const r=new _(e.variant||"primary").size(e.size||"md").rounded(e.rounded||"md").disabled(e.disabled||!1).loading(e.loading||!1).fullWidth(e.fullWidth||!1).build(),a=new j().base("block border font-medium focus:outline-none resize-y").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").background("bg-white text-neutral-900").readOnly("bg-neutral-50 cursor-default").disabled("bg-neutral-100 text-neutral-500 cursor-not-allowed").build();return Q({config:r,styling:a,placeholder:e.placeholder,value:e.value,rows:e.rows,readOnly:e.readOnly})},argTypes:{placeholder:{control:"text"},value:{control:"text"},rows:{control:"number"},size:{control:"select",options:["xs","sm","md","lg","xl"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},disabled:{control:"boolean"},readOnly:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}},parameters:{docs:{description:{component:"Textarea component - Atomic element for multi-line text input"}}}},o={args:{placeholder:"Enter your text here...",rows:4}},t={args:{value:"This is a sample text in the textarea component.",rows:4}},s={args:{size:"sm",placeholder:"Small textarea",rows:3}},n={args:{size:"lg",placeholder:"Large textarea",rows:6}},l={args:{fullWidth:!0,placeholder:"Full width textarea",rows:4}},d={args:{disabled:!0,value:"This textarea is disabled"}},i={args:{readOnly:!0,value:"This textarea is read-only"}},u={args:{loading:!0}};var b,x,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text here...',
    rows: 4
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,f,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'This is a sample text in the textarea component.',
    rows: 4
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,S,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small textarea',
    rows: 3
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var z,O,W;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large textarea',
    rows: 6
  }
}`,...(W=(O=n.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var T,C,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    placeholder: 'Full width textarea',
    rows: 4
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,L,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'This textarea is disabled'
  }
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var B,E,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 'This textarea is read-only'
  }
}`,...(A=(E=i.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var N,R,V;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const ee=["Default","WithValue","Small","Large","FullWidth","Disabled","ReadOnly","Loading"];export{o as Default,d as Disabled,l as FullWidth,n as Large,u as Loading,i as ReadOnly,s as Small,t as WithValue,ee as __namedExportsOrder,$ as default};
