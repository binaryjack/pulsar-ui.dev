import{a as n,s as A}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as b}from"./class-names-2dOUpm6k.js";import{R as F}from"./radio-DA4CyiGc.js";import{S as H}from"./skeleton-BYH6nG6Z.js";import{T as U}from"./typography-BkbRYw2B.js";import{C as d,a as L}from"./component-styling-builder-DLTIWDZq.js";import"./checkbox-size-classes-Bcen5LKc.js";const _=new d("primary").build(),j=new L().base("flex gap-4").build(),q=({config:e=_,styling:l=j,name:c,options:M,value:p,defaultValue:W,orientation:E="vertical",onChange:m,...N})=>e.loading?n(H,{width:"w-full",height:"h-24",rounded:"md"}):n("div",{className:b(l.base,E==="vertical"?"flex-col":"flex-row",e.className,l.custom),role:"radiogroup",ariaBusy:e.loading?"true":"false",...N,children:M.map(a=>A("label",{className:b("flex items-center gap-2 cursor-pointer",a.disabled?"opacity-50 cursor-not-allowed":""),children:[n(F,{name:c,value:a.value,checked:p?p===a.value:void 0,defaultChecked:W===a.value,config:new d("primary").disabled(a.disabled||e.disabled).build(),onchange:T=>{m&&T.target.checked&&m(a.value)}}),n(U,{variant:"body2",config:new d("primary").build(),children:a.label})]}))}),$={title:"Molecules/RadioGroup",tags:["autodocs"],render:e=>{const l=new d(e.variant||"primary").disabled(e.disabled||!1).loading(e.loading||!1).build(),c=new L().base("flex gap-4").build();return q({config:l,styling:c,name:e.name||"radio-group",options:e.options,value:e.value,orientation:e.orientation})},argTypes:{name:{control:"text"},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},loading:{control:"boolean"}},parameters:{docs:{description:{component:"RadioGroup component - Molecule for grouped radio selections"}}}},o={args:{name:"plan-selection",orientation:"vertical",options:[{label:"Free Plan",value:"free"},{label:"Pro Plan",value:"pro"},{label:"Enterprise Plan",value:"enterprise"}]}},r={args:{name:"size-selection",orientation:"horizontal",options:[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}]}},t={args:{name:"color-selection",orientation:"vertical",defaultValue:"blue",options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}]}},i={args:{name:"tier-selection",orientation:"vertical",options:[{label:"Basic",value:"basic"},{label:"Premium (Coming Soon)",value:"premium",disabled:!0},{label:"Ultimate (Coming Soon)",value:"ultimate",disabled:!0}]}},s={args:{name:"disabled-group",orientation:"vertical",disabled:!0,options:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}]}},u={args:{loading:!0}};var v,g,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'plan-selection',
    orientation: 'vertical',
    options: [{
      label: 'Free Plan',
      value: 'free'
    }, {
      label: 'Pro Plan',
      value: 'pro'
    }, {
      label: 'Enterprise Plan',
      value: 'enterprise'
    }]
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'size-selection',
    orientation: 'horizontal',
    options: [{
      label: 'Small',
      value: 'sm'
    }, {
      label: 'Medium',
      value: 'md'
    }, {
      label: 'Large',
      value: 'lg'
    }]
  }
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,P,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'color-selection',
    orientation: 'vertical',
    defaultValue: 'blue',
    options: [{
      label: 'Red',
      value: 'red'
    }, {
      label: 'Blue',
      value: 'blue'
    }, {
      label: 'Green',
      value: 'green'
    }]
  }
}`,...(C=(P=t.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var O,x,D;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: 'tier-selection',
    orientation: 'vertical',
    options: [{
      label: 'Basic',
      value: 'basic'
    }, {
      label: 'Premium (Coming Soon)',
      value: 'premium',
      disabled: true
    }, {
      label: 'Ultimate (Coming Soon)',
      value: 'ultimate',
      disabled: true
    }]
  }
}`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var z,B,G;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'disabled-group',
    orientation: 'vertical',
    disabled: true,
    options: [{
      label: 'Option 1',
      value: 'opt1'
    }, {
      label: 'Option 2',
      value: 'opt2'
    }, {
      label: 'Option 3',
      value: 'opt3'
    }]
  }
}`,...(G=(B=s.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var R,V,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(k=(V=u.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const ee=["Vertical","Horizontal","WithDefaultValue","WithDisabledOption","AllDisabled","Loading"];export{s as AllDisabled,r as Horizontal,u as Loading,o as Vertical,t as WithDefaultValue,i as WithDisabledOption,ee as __namedExportsOrder,$ as default};
