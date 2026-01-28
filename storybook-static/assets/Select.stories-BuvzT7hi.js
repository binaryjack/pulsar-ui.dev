import{a as m,s as Q}from"./jsx-runtime-standard-IlocL9rZ.js";import{c as X}from"./class-names-2dOUpm6k.js";import{i as Z}from"./input-size-classes-BzP02qzH.js";import{S as $,r as ee}from"./skeleton-BYH6nG6Z.js";import{C as j,a as q}from"./component-styling-builder-DLTIWDZq.js";const le=new j("primary").size("md").rounded("md").build(),ae=new q().base("block border font-medium focus:outline-none appearance-none bg-white pr-10").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").disabled("bg-neutral-100 text-neutral-500 cursor-not-allowed").build(),ne=({config:e=le,styling:l=ae,options:b,value:H,defaultValue:I,placeholder:n,onChange:v,ariaLabel:g,...J})=>{if(e.loading)return m($,{width:e.fullWidth?"w-full":"w-64",height:"h-10",rounded:e.rounded});const M=X(l.base,l.transition,l.border,l.focus,e.size?Z[e.size]:"",e.disabled?l.disabled:"",e.rounded?ee[e.rounded]:"",e.fullWidth?"w-full":"",e.className,l.custom);return Q("select",{className:M,value:H??I,disabled:e.disabled,title:g||n||"Select an option",ariaLabel:g||n||"Select an option",ariaBusy:e.loading?"true":"false",onchange:a=>{v&&v(a.target.value)},...J,children:[n&&m("option",{value:"",disabled:!0,children:n}),b.map(a=>m("option",{value:a.value,disabled:a.disabled,children:a.label}))]})},ie={title:"Organisms/Select",tags:["autodocs"],render:e=>{const l=new j(e.variant||"primary").size(e.size||"md").rounded(e.rounded||"md").disabled(e.disabled||!1).loading(e.loading||!1).fullWidth(e.fullWidth||!1).build(),b=new q().base("block border font-medium focus:outline-none appearance-none bg-white pr-10").transition("transition-colors duration-200").border("border-neutral-300").focus("focus:ring-2 focus:ring-primary-500 focus:border-primary-600").disabled("bg-neutral-100 text-neutral-500 cursor-not-allowed").build();return ne({config:l,styling:b,options:e.options,placeholder:e.placeholder,value:e.value})},argTypes:{placeholder:{control:"text"},size:{control:"select",options:["xs","sm","md","lg","xl"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}},parameters:{docs:{description:{component:"Select component - Organism for dropdown selections"}}}},o={args:{placeholder:"Select an option",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]}},r={args:{placeholder:"Select your country",options:[{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Canada",value:"ca"},{label:"Australia",value:"au"},{label:"Germany",value:"de"},{label:"France",value:"fr"}]}},t={args:{placeholder:"Select a color",defaultValue:"blue",options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"},{label:"Yellow",value:"yellow"}]}},s={args:{placeholder:"Select a plan",options:[{label:"Free Plan",value:"free"},{label:"Pro Plan",value:"pro"},{label:"Enterprise Plan (Contact Sales)",value:"enterprise",disabled:!0}]}},u={args:{size:"sm",placeholder:"Small select",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]}},i={args:{size:"lg",placeholder:"Large select",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]}},d={args:{fullWidth:!0,placeholder:"Full width select",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]}},c={args:{disabled:!0,placeholder:"Disabled select",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]}},p={args:{loading:!0}};var f,h,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }]
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var O,w,y;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select your country',
    options: [{
      label: 'United States',
      value: 'us'
    }, {
      label: 'United Kingdom',
      value: 'uk'
    }, {
      label: 'Canada',
      value: 'ca'
    }, {
      label: 'Australia',
      value: 'au'
    }, {
      label: 'Germany',
      value: 'de'
    }, {
      label: 'France',
      value: 'fr'
    }]
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var W,C,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a color',
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
    }, {
      label: 'Yellow',
      value: 'yellow'
    }]
  }
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var z,F,P;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a plan',
    options: [{
      label: 'Free Plan',
      value: 'free'
    }, {
      label: 'Pro Plan',
      value: 'pro'
    }, {
      label: 'Enterprise Plan (Contact Sales)',
      value: 'enterprise',
      disabled: true
    }]
  }
}`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var x,L,k;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small select',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }]
  }
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var B,G,U;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large select',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }]
  }
}`,...(U=(G=i.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,E,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    placeholder: 'Full width select',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }]
  }
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var K,N,R;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled select',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }]
  }
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var Y,_,T;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(T=(_=p.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const de=["Default","Countries","WithDefaultValue","WithDisabledOptions","Small","Large","FullWidth","Disabled","Loading"];export{r as Countries,o as Default,c as Disabled,d as FullWidth,i as Large,p as Loading,u as Small,t as WithDefaultValue,s as WithDisabledOptions,de as __namedExportsOrder,ie as default};
