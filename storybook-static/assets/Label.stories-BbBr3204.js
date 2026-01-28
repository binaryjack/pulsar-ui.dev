import{a,s as b}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as O}from"./class-names-2dOUpm6k.js";import{S as j}from"./skeleton-BYH6nG6Z.js";import{T as m}from"./typography-BkbRYw2B.js";import{C as r,a as A}from"./component-styling-builder-DLTIWDZq.js";const z=new r("primary").build(),G=new A().base("block mb-2").build(),J=({config:e=z,styling:t=G,text:u,htmlFor:I,required:M=!1,disabled:U=!1,helperText:p,errorText:h,..._})=>e.loading?a(j,{width:"w-32",height:"h-5",rounded:"sm"}):b("label",{htmlFor:I,className:O(t.base,U?"opacity-50 cursor-not-allowed":"cursor-pointer",e.className,t.custom),ariaBusy:e.loading?"true":"false",..._,children:[b(m,{variant:"body2",config:new r("primary").build(),children:[u,M&&a("span",{className:"text-error-600 ml-1",children:"*"})]}),h?a(m,{variant:"caption",config:new r("primary").className("text-error-600 mt-1").build(),children:h}):p?a(m,{variant:"caption",config:new r("primary").className("text-neutral-500 mt-1").build(),children:p}):null]}),Z={title:"Molecules/Label",tags:["autodocs"],render:e=>{const t=new r(e.variant||"primary").loading(e.loading||!1).build(),u=new A().base("block mb-2").build();return J({config:t,styling:u,text:e.text,htmlFor:e.htmlFor,required:e.required,disabled:e.disabled,helperText:e.helperText,errorText:e.errorText})},argTypes:{text:{control:"text"},htmlFor:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},helperText:{control:"text"},errorText:{control:"text"},loading:{control:"boolean"}},parameters:{docs:{description:{component:"Label component - Molecule for form field labels"}}}},o={args:{text:"Email Address",htmlFor:"email-input"}},s={args:{text:"Full Name",htmlFor:"name-input",required:!0}},n={args:{text:"Username",htmlFor:"username-input",helperText:"Choose a unique username between 3-20 characters"}},l={args:{text:"Password",htmlFor:"password-input",errorText:"Password must be at least 8 characters"}},i={args:{text:"Phone Number",htmlFor:"phone-input",required:!0,helperText:"Include your country code"}},c={args:{text:"Disabled Field",htmlFor:"disabled-input",disabled:!0,helperText:"This field is currently disabled"}},d={args:{loading:!0}};var x,g,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Email Address',
    htmlFor: 'email-input'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,F,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Full Name',
    htmlFor: 'name-input',
    required: true
  }
}`,...(T=(F=s.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var w,q,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'Username',
    htmlFor: 'username-input',
    helperText: 'Choose a unique username between 3-20 characters'
  }
}`,...(S=(q=n.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var N,D,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Password',
    htmlFor: 'password-input',
    errorText: 'Password must be at least 8 characters'
  }
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var P,W,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'Phone Number',
    htmlFor: 'phone-input',
    required: true,
    helperText: 'Include your country code'
  }
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var L,v,H;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'Disabled Field',
    htmlFor: 'disabled-input',
    disabled: true,
    helperText: 'This field is currently disabled'
  }
}`,...(H=(v=c.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var R,k,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const $=["Default","Required","WithHelperText","WithError","RequiredWithHelper","Disabled","Loading"];export{o as Default,c as Disabled,d as Loading,s as Required,i as RequiredWithHelper,l as WithError,n as WithHelperText,$ as __namedExportsOrder,Z as default};
