import{t as le,p as te,c as L}from"./create-store-Bg-CO8b9.js";import{a as h,s as N,u as ne}from"./jsx-runtime-standard-IlocL9rZ.js";function R(e,o){return le(e)}function pe(e,o){const[r,s]=te(o);return[r,n=>{s(t=>e(t,n))}]}var l=(e=>(e.INIT="INIT",e.RESET="RESET",e.ADD_STEP="ADD_STEP",e.SET_FIELDS="SET_FIELDS",e.GO_TO_STEP="GO_TO_STEP",e.COMPUTE_SIBLING="COMPUTE_SIBLING",e.COMPUTE_VALIDATION="COMPUTE_VALIDATION",e.SET_DATA="SET_DATA",e.SET_SUBMITTED_TIMES="SET_SUBMITTED_TIMES",e.SET_VISIBLE="SET_VISIBLE",e.NAVIGATION_REQUEST="NAVIGATION_REQUEST",e.ADD_ERROR="ADD_ERROR",e.SUBMIT_REQUEST="SUBMIT_REQUEST",e.REMOVE_ERROR="REMOVE_ERROR",e.CLEAR_ALL_ERRORS="CLEAR_ALL_ERRORS",e.SET_FIELD_DEFAULT_VALUE="SET_FIELD_DEFAULT_VALUE",e.SET_STEPPER_DEFAULT_VALUE="SET_STEPPER_DEFAULT_VALUE",e))(l||{});const de=(e,o)=>{const{type:r,payload:s}=o;switch(r){case l.ADD_STEP:{const n=s.value;return{...e,steps:[...e.steps,n],ready:e.steps.length>0}}case l.GO_TO_STEP:{const n=s.stepId;return{...e,previousStepId:e.currentStepId,currentStepId:n,steps:e.steps.map(t=>({...t,isActive:t.id===n}))}}case l.NAVIGATION_REQUEST:return{...e,navigationRequest:s.value,navigationRequestGoto:s.stepId};case l.SET_VISIBLE:{const{ids:n,visible:t}=s.value;return{...e,steps:e.steps.map(i=>n.includes(i.id)?{...i,isVisible:t}:i)}}case l.ADD_ERROR:return{...e,errors:[...e.errors,s.value]};case l.REMOVE_ERROR:{const{stepId:n,fieldName:t}=s.value;return{...e,errors:e.errors.filter(i=>!(i.stepId===n&&i.fieldName===t))}}case l.CLEAR_ALL_ERRORS:{const n=s.stepId;return{...e,errors:n?e.errors.filter(t=>t.stepId!==n):[]}}case l.SET_FIELDS:{const{stepId:n,value:t}=s;return{...e,steps:e.steps.map(i=>i.id===n?{...i,fields:t}:i)}}case l.COMPUTE_VALIDATION:{const n=e.currentStepId;return{...e,steps:e.steps.map(t=>({...t,hasBeenValidated:t.id<=n?!0:t.hasBeenValidated,isValid:t.id===n?e.errors.filter(i=>i.stepId===t.id).length===0:t.isValid})),isValid:e.errors.length===0}}case l.COMPUTE_SIBLING:{const n=e.currentStepId,t=e.steps.findIndex(d=>d.id===n),i=t>0?e.steps[t-1]:void 0,p=e.steps[t],c=t<e.steps.length-1?e.steps[t+1]:void 0;return{...e,sibling:{previousStep:i,currentStep:p,nextStep:c,canGoBack:!!i&&i.isVisible,canGoNext:!!c&&c.isVisible&&((p==null?void 0:p.isValid)??!1),isFirst:t===0,isLast:t===e.steps.length-1,direction:e.previousStepId!==void 0&&e.previousStepId>n?"backward":"forward"}}}case l.SUBMIT_REQUEST:return{...e,submitRequest:!0,submissionTimes:e.submissionTimes+1};case l.RESET:return{...e,currentStepId:0,previousStepId:void 0,errors:[],submitRequest:!1,steps:e.steps.map((n,t)=>({...n,isActive:t===0,isValid:!1,hasBeenValidated:!1}))};default:return e}},ce={steps:[],errors:[],sibling:void 0,data:"",submissionTimes:0,previousStepId:void 0,currentStepId:0,navigationRequest:"unset",navigationRequestGoto:void 0,touchedFields:[],dirtyFields:[],loaded:!1,isValid:!1,defaultValue:[],submitRequest:!1,ready:!1},ue=e=>{const[o,r]=pe(de,ce),[s,n]=te(new Map),t=()=>o().currentStepId,i=()=>o().steps,p=()=>o().sibling,c=()=>o().errors,d=()=>o().isValid,E=()=>o().ready,b=R(()=>{const a=t();if(c().filter(ie=>ie.stepId===a).length>0)return!1;const S=s().get(a);return S?S(a):e.stepValidator?e.stepValidator(a):!0}),O=R(()=>{const a=p();return a?a.canGoNext&&b():!1}),B=R(()=>{const a=p();return a?a.canGoBack:!1}),ae=(a,m)=>{const g={id:a,label:m,isValid:!1,isVisible:!0,isLocked:!1,isActive:a===0,isTouched:!1,isDirty:!1,hasBeenValidated:!1,fields:[]};r({type:l.ADD_STEP,payload:{stepId:a,value:g}}),setTimeout(()=>{r({type:l.COMPUTE_SIBLING,payload:{stepId:a}})},0)},oe=(a,m)=>{r({type:l.SET_FIELDS,payload:{stepId:a,value:m}})},re=(a,m)=>{r({type:l.SET_VISIBLE,payload:{stepId:0,value:{ids:a,visible:m}}}),r({type:l.COMPUTE_SIBLING,payload:{stepId:t()}})},se=(a,m)=>{const g=new Map(s());g.set(a,m),n(g)},A=()=>(r({type:l.COMPUTE_VALIDATION,payload:{stepId:t()}}),b()),_=a=>{a>t()&&!A()||(r({type:l.GO_TO_STEP,payload:{stepId:a}}),r({type:l.COMPUTE_SIBLING,payload:{stepId:a}}),e.onStepChange&&e.onStepChange(a))};return{currentStepId:t,steps:i,sibling:p,errors:c,isValid:d,ready:E,goToStep:_,goNext:()=>{if(!O())return;const a=p();a!=null&&a.nextStep&&_(a.nextStep.id)},goBack:()=>{if(!B())return;const a=p();a!=null&&a.previousStep&&_(a.previousStep.id)},registerStep:ae,registerStepFields:oe,setStepVisibility:re,currentStepValid:b,canGoNext:O,canGoBack:B,registerStepValidator:se,validateCurrentStep:A,addError:(a,m,g)=>{const S={stepId:a,fieldName:m,error:new Error(g)};r({type:l.ADD_ERROR,payload:{stepId:a,value:S}}),r({type:l.COMPUTE_VALIDATION,payload:{stepId:a}})},removeError:(a,m)=>{r({type:l.REMOVE_ERROR,payload:{stepId:a,value:{stepId:a,fieldName:m}}}),r({type:l.COMPUTE_VALIDATION,payload:{stepId:a}})},clearErrors:a=>{r({type:l.CLEAR_ALL_ERRORS,payload:{stepId:a??0}}),r({type:l.COMPUTE_VALIDATION,payload:{stepId:a??t()}})},submit:()=>{let a=!0;for(const m of i())if(c().filter(S=>S.stepId===m.id).length>0){a=!1;break}if(a&&(r({type:l.SUBMIT_REQUEST,payload:{stepId:0}}),e.onSubmit)){const m=i().reduce((g,S)=>(g[S.label]=S.fields,g),{});e.onSubmit(m)}},reset:()=>{r({type:l.RESET,payload:{stepId:0}}),r({type:l.COMPUTE_SIBLING,payload:{stepId:0}})},stepValidator:e.stepValidator}},me=e=>{const o=e.steps(),r=e.currentStepId();return h("div",{className:"stepper-header",children:h("div",{className:"stepper-breadcrumb",children:o.map((s,n)=>{const t=s.id===r,i=s.hasBeenValidated&&s.isValid,p=s.hasBeenValidated||s.id===r;return N(ne,{children:[N("div",{className:`breadcrumb-item ${t?"active":""} ${i?"completed":""} ${s.isVisible?"":"hidden"}`,"data-step-id":s.id,onClick:()=>p&&e.goToStep(s.id),style:{cursor:p?"pointer":"default"},children:[h("span",{className:"step-number",children:n+1}),h("span",{className:"step-label",children:s.label}),i&&h("span",{className:"step-checkmark",children:"✓"})]},s.id),n<o.length-1&&h("span",{className:"breadcrumb-separator",children:"→"})]})})})})},ge=e=>{const o=e.sibling(),r=e.canGoBack(),s=e.canGoNext(),n=document.createElement("div");return n.className="stepper-footer",L(()=>{const t=o(),i=r(),p=s();n.innerHTML="";const c=document.createElement("button");c.textContent="Back",c.className="stepper-btn stepper-btn-back",c.disabled=!i,c.onclick=()=>e.goBack(),n.appendChild(c);const d=document.createElement("button");d.className="stepper-btn stepper-btn-next",t!=null&&t.isLast?(d.textContent="Submit",d.onclick=()=>e.submit(),d.disabled=!e.isValid()):(d.textContent="Next",d.onclick=()=>e.goNext(),d.disabled=!p),n.appendChild(d)}),n},y=e=>{const{children:o=[],showHeader:r=!0,showFooter:s=!0,className:n="",stepValidator:t,onSubmit:i,onStepChange:p}=e,c=ue({stepValidator:t,onSubmit:i,onStepChange:p}),d=document.createElement("div");return d.className=`stepper-container ${n}`,L(()=>{if(d.innerHTML="",r&&c.ready()){const b=me(c);d.appendChild(b)}const E=document.createElement("div");if(E.className="stepper-steps",o.forEach(b=>{b.dataset.stepId&&E.appendChild(b)}),d.appendChild(E),s&&c.ready()){const b=ge(c);d.appendChild(b)}}),d},u=(e,o)=>{const{id:r,label:s,validator:n,children:t=[]}=e;L(()=>(o.registerStep(r,s),n&&o.registerStepValidator(r,n),()=>{}));const i=o.currentStepId()===r;return h("div",{className:"stepper-step","data-step-id":r,"data-active":i,style:{display:i?"block":"none"},children:i&&N(ne,{children:[h("h2",{className:"step-title",children:s}),h("div",{className:"step-content",children:t.map(p=>p)})]})})},Te={title:"Organisms/Stepper (Pulsar)",component:y},v=()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px",e.style.margin="0 auto";const o=y({onStepChange:r=>{console.log("Step changed to:",r)},onSubmit:r=>{console.log("Form submitted:",r),alert("Form submitted successfully! Check console for data.")},children:[u({id:0,label:"Personal Information"},{}),u({id:1,label:"Contact Details"},{}),u({id:2,label:"Review & Submit"},{})]});return e.appendChild(o),e},I=()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px",e.style.margin="0 auto";const o=document.createElement("p");o.textContent="Each step validates before allowing navigation to next step",o.style.marginBottom="20px",o.style.color="#666";const s=y({stepValidator:t=>(console.log("Validating step:",t),!0),onStepChange:t=>{console.log("Step changed to:",t),n.textContent=`Current step: ${t+1}`},onSubmit:t=>{console.log("Form submitted:",t),n.textContent="Form submitted successfully! ✓",n.style.color="green"},children:[u({id:0,label:"Account Setup"},{}),u({id:1,label:"Profile Details"},{}),u({id:2,label:"Preferences"},{})]}),n=document.createElement("div");return n.style.marginTop="20px",n.style.padding="10px",n.style.border="1px solid #ccc",n.style.borderRadius="4px",n.textContent="Current step: 1",e.appendChild(o),e.appendChild(s),e.appendChild(n),e},x=()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px",e.style.margin="0 auto";const o=document.createElement("p");o.innerHTML=`
    <strong>Step-specific validation:</strong><br>
    • Step 1: Always valid (no validator)<br>
    • Step 2: Custom validator (overrides global)<br>
    • Step 3: Uses global validator
  `,o.style.marginBottom="20px",o.style.color="#666";const r=t=>(console.log("Global validator for step:",t),!0),s=t=>(console.log("Step 2 custom validator"),!0),n=y({stepValidator:r,onStepChange:t=>{console.log("Navigated to step:",t)},onSubmit:t=>{alert("All steps validated and submitted!")},children:[u({id:0,label:"Basic Info"},{}),u({id:1,label:"Advanced Settings",validator:s},{}),u({id:2,label:"Confirmation"},{})]});return e.appendChild(o),e.appendChild(n),e},f=()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px",e.style.margin="0 auto";const o=document.createElement("p");o.textContent="Toggle step 2 visibility with the button below",o.style.marginBottom="20px",o.style.color="#666";const r=y({onSubmit:t=>{alert("Form submitted!")},children:[u({id:0,label:"Step 1"},{}),u({id:1,label:"Optional Step 2"},{}),u({id:2,label:"Step 3"},{})]}),s=document.createElement("button");s.textContent="Toggle Step 2 Visibility",s.style.marginTop="20px",s.style.padding="10px 20px",s.style.cursor="pointer";let n=!0;return s.onclick=()=>{n=!n,console.log("Step 2 visibility:",n)},e.appendChild(o),e.appendChild(r),e.appendChild(s),e},T=()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px",e.style.margin="0 auto";const o=document.createElement("div");return o.innerHTML=`
    <h3>Formular Integration Pattern</h3>
    <p style="color: #666;">This demonstrates how to integrate with Formular for field validation:</p>
    <pre style="background: #f5f5f5; padding: 15px; border-radius: 4px; overflow-x: auto;">
&lt;Stepper
  stepValidator={(stepId) => {
    // Formular validates the step's fields
    return formular.validateStep(\`step-\${stepId}\`)
  }}
&gt;
  &lt;Step id={0} label="User Info"&gt;
    &lt;FInputField name="email" /&gt;
    &lt;FInputField name="name" /&gt;
  &lt;/Step&gt;
  
  &lt;Step 
    id={1} 
    label="Custom Validation"
    validator={() => customLogic()} // Override!
  &gt;
    &lt;FInputField name="password" /&gt;
  &lt;/Step&gt;
&lt;/Stepper&gt;
    </pre>
    <p style="color: #666; margin-top: 15px;">
      <strong>Key features:</strong><br>
      • Stepper provides validation events<br>
      • Formular subscribes via stepValidator<br>
      • Each Step can override with custom validator<br>
      • Reactive: canGoNext() recomputes automatically
    </p>
  `,e.appendChild(o),e},C=()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px",e.style.margin="0 auto";const o=document.createElement("p");o.textContent="Stepper without header breadcrumb",o.style.marginBottom="20px",o.style.color="#666";const r=y({showHeader:!1,onSubmit:s=>{alert("Submitted!")},children:[u({id:0,label:"Step 1"},{}),u({id:1,label:"Step 2"},{}),u({id:2,label:"Step 3"},{})]});return e.appendChild(o),e.appendChild(r),e},V=()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px",e.style.margin="0 auto";const o=y({className:"custom-stepper-theme",onSubmit:s=>{alert("Submitted!")},children:[u({id:0,label:"🎨 Style"},{}),u({id:1,label:"⚙️ Configure"},{}),u({id:2,label:"✅ Done"},{})]}),r=document.createElement("style");return r.textContent=`
    .custom-stepper-theme {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 30px;
      border-radius: 12px;
      color: white;
    }
    .custom-stepper-theme .stepper-header {
      margin-bottom: 30px;
    }
    .custom-stepper-theme .breadcrumb-item {
      color: rgba(255, 255, 255, 0.7);
    }
    .custom-stepper-theme .breadcrumb-item.active {
      color: white;
      font-weight: bold;
    }
    .custom-stepper-theme .stepper-btn {
      background: white;
      color: #667eea;
      border: none;
      padding: 10px 24px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .custom-stepper-theme .stepper-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .custom-stepper-theme .stepper-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,e.appendChild(r),e.appendChild(o),e};var w,F,D;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  const stepper = Stepper({
    onStepChange: stepId => {
      console.log('Step changed to:', stepId);
    },
    onSubmit: data => {
      console.log('Form submitted:', data);
      alert('Form submitted successfully! Check console for data.');
    },
    children: [Step({
      id: 0,
      label: 'Personal Information'
    }, {} as any), Step({
      id: 1,
      label: 'Contact Details'
    }, {} as any), Step({
      id: 2,
      label: 'Review & Submit'
    }, {} as any)]
  });

  // Add some demo content to steps
  const stepContents = [\`<div style="padding: 20px;">
      <p>This is step 1 - Personal Information</p>
      <p style="color: #666;">In a real form, you would have input fields here.</p>
    </div>\`, \`<div style="padding: 20px;">
      <p>This is step 2 - Contact Details</p>
      <p style="color: #666;">Add your contact form fields here.</p>
    </div>\`, \`<div style="padding: 20px;">
      <p>This is step 3 - Review & Submit</p>
      <p style="color: #666;">Review your information before submitting.</p>
    </div>\`];
  container.appendChild(stepper);
  return container;
}`,...(D=(F=v.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var U,P,M;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  const description = document.createElement('p');
  description.textContent = 'Each step validates before allowing navigation to next step';
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  // Global validator - validates all steps
  const globalValidator: StepValidator = stepId => {
    console.log('Validating step:', stepId);
    // Simulate validation (all valid for demo)
    return true;
  };
  const stepper = Stepper({
    stepValidator: globalValidator,
    onStepChange: stepId => {
      console.log('Step changed to:', stepId);
      output.textContent = \`Current step: \${stepId + 1}\`;
    },
    onSubmit: data => {
      console.log('Form submitted:', data);
      output.textContent = 'Form submitted successfully! ✓';
      output.style.color = 'green';
    },
    children: [Step({
      id: 0,
      label: 'Account Setup'
    }, {} as any), Step({
      id: 1,
      label: 'Profile Details'
    }, {} as any), Step({
      id: 2,
      label: 'Preferences'
    }, {} as any)]
  });
  const output = document.createElement('div');
  output.style.marginTop = '20px';
  output.style.padding = '10px';
  output.style.border = '1px solid #ccc';
  output.style.borderRadius = '4px';
  output.textContent = 'Current step: 1';
  container.appendChild(description);
  container.appendChild(stepper);
  container.appendChild(output);
  return container;
}`,...(M=(P=I.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var k,G,W;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  const description = document.createElement('p');
  description.innerHTML = \`
    <strong>Step-specific validation:</strong><br>
    • Step 1: Always valid (no validator)<br>
    • Step 2: Custom validator (overrides global)<br>
    • Step 3: Uses global validator
  \`;
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  // Global validator
  const globalValidator: StepValidator = stepId => {
    console.log('Global validator for step:', stepId);
    return true;
  };

  // Step 2 custom validator (overrides global)
  const step2Validator: StepValidator = stepId => {
    console.log('Step 2 custom validator');
    // Custom validation logic for step 2
    return true;
  };
  const stepper = Stepper({
    stepValidator: globalValidator,
    onStepChange: stepId => {
      console.log('Navigated to step:', stepId);
    },
    onSubmit: data => {
      alert('All steps validated and submitted!');
    },
    children: [Step({
      id: 0,
      label: 'Basic Info'
    }, {} as any), Step({
      id: 1,
      label: 'Advanced Settings',
      validator: step2Validator // Override!
    }, {} as any), Step({
      id: 2,
      label: 'Confirmation'
    }, {} as any)]
  });
  container.appendChild(description);
  container.appendChild(stepper);
  return container;
}`,...(W=(G=x.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var H,$,q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  const description = document.createElement('p');
  description.textContent = 'Toggle step 2 visibility with the button below';
  description.style.marginBottom = '20px';
  description.style.color = '#666';
  const stepper = Stepper({
    onSubmit: data => {
      alert('Form submitted!');
    },
    children: [Step({
      id: 0,
      label: 'Step 1'
    }, {} as any), Step({
      id: 1,
      label: 'Optional Step 2'
    }, {} as any), Step({
      id: 2,
      label: 'Step 3'
    }, {} as any)]
  });
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Step 2 Visibility';
  toggleButton.style.marginTop = '20px';
  toggleButton.style.padding = '10px 20px';
  toggleButton.style.cursor = 'pointer';
  let step2Visible = true;
  toggleButton.onclick = () => {
    step2Visible = !step2Visible;
    // Note: In real usage, you'd call context.setStepVisibility([1], step2Visible)
    console.log('Step 2 visibility:', step2Visible);
  };
  container.appendChild(description);
  container.appendChild(stepper);
  container.appendChild(toggleButton);
  return container;
}`,...(q=($=f.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var Q,Y,j;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  const description = document.createElement('div');
  description.innerHTML = \`
    <h3>Formular Integration Pattern</h3>
    <p style="color: #666;">This demonstrates how to integrate with Formular for field validation:</p>
    <pre style="background: #f5f5f5; padding: 15px; border-radius: 4px; overflow-x: auto;">
&lt;Stepper
  stepValidator={(stepId) => {
    // Formular validates the step's fields
    return formular.validateStep(\\\`step-\\\${stepId}\\\`)
  }}
&gt;
  &lt;Step id={0} label="User Info"&gt;
    &lt;FInputField name="email" /&gt;
    &lt;FInputField name="name" /&gt;
  &lt;/Step&gt;
  
  &lt;Step 
    id={1} 
    label="Custom Validation"
    validator={() => customLogic()} // Override!
  &gt;
    &lt;FInputField name="password" /&gt;
  &lt;/Step&gt;
&lt;/Stepper&gt;
    </pre>
    <p style="color: #666; margin-top: 15px;">
      <strong>Key features:</strong><br>
      • Stepper provides validation events<br>
      • Formular subscribes via stepValidator<br>
      • Each Step can override with custom validator<br>
      • Reactive: canGoNext() recomputes automatically
    </p>
  \`;
  container.appendChild(description);
  return container;
}`,...(j=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var z,J,X;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  const description = document.createElement('p');
  description.textContent = 'Stepper without header breadcrumb';
  description.style.marginBottom = '20px';
  description.style.color = '#666';
  const stepper = Stepper({
    showHeader: false,
    onSubmit: data => {
      alert('Submitted!');
    },
    children: [Step({
      id: 0,
      label: 'Step 1'
    }, {} as any), Step({
      id: 1,
      label: 'Step 2'
    }, {} as any), Step({
      id: 2,
      label: 'Step 3'
    }, {} as any)]
  });
  container.appendChild(description);
  container.appendChild(stepper);
  return container;
}`,...(X=(J=C.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,K,ee;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  const stepper = Stepper({
    className: 'custom-stepper-theme',
    onSubmit: data => {
      alert('Submitted!');
    },
    children: [Step({
      id: 0,
      label: '🎨 Style'
    }, {} as any), Step({
      id: 1,
      label: '⚙️ Configure'
    }, {} as any), Step({
      id: 2,
      label: '✅ Done'
    }, {} as any)]
  });

  // Add custom styles
  const style = document.createElement('style');
  style.textContent = \`
    .custom-stepper-theme {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 30px;
      border-radius: 12px;
      color: white;
    }
    .custom-stepper-theme .stepper-header {
      margin-bottom: 30px;
    }
    .custom-stepper-theme .breadcrumb-item {
      color: rgba(255, 255, 255, 0.7);
    }
    .custom-stepper-theme .breadcrumb-item.active {
      color: white;
      font-weight: bold;
    }
    .custom-stepper-theme .stepper-btn {
      background: white;
      color: #667eea;
      border: none;
      padding: 10px 24px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .custom-stepper-theme .stepper-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .custom-stepper-theme .stepper-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  \`;
  container.appendChild(style);
  container.appendChild(stepper);
  return container;
}`,...(ee=(K=V.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};const Ce=["BasicStepper","WithValidation","WithStepSpecificValidation","WithDynamicSteps","WithFormularIntegration","CompactMode","CustomStyled"];export{v as BasicStepper,C as CompactMode,V as CustomStyled,f as WithDynamicSteps,T as WithFormularIntegration,x as WithStepSpecificValidation,I as WithValidation,Ce as __namedExportsOrder,Te as default};
