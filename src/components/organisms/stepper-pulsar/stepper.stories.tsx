/**
 * Stepper Storybook Stories
 * Demonstrates Pulsar-native Stepper with signal-based reactive validation
 */
import { Stepper, Step } from './index';
import type { StepValidator } from './context';

export default {
  title: 'Organisms/Stepper (Pulsar)',
  component: Stepper,
};

// Basic 3-Step Stepper
export const BasicStepper = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';

  const stepper = Stepper({
    onStepChange: (stepId) => {
      console.log('Step changed to:', stepId);
    },
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      alert('Form submitted successfully! Check console for data.');
    },
    children: [
      Step({
        id: 0,
        label: 'Personal Information',
      }),
      Step({
        id: 1,
        label: 'Contact Details',
      }),
      Step({
        id: 2,
        label: 'Review & Submit',
      }),
    ],
  });

  // Add some demo content to steps
  const stepContents = [
    `<div style="padding: 20px;">
      <p>This is step 1 - Personal Information</p>
      <p style="color: #666;">In a real form, you would have input fields here.</p>
    </div>`,
    `<div style="padding: 20px;">
      <p>This is step 2 - Contact Details</p>
      <p style="color: #666;">Add your contact form fields here.</p>
    </div>`,
    `<div style="padding: 20px;">
      <p>This is step 3 - Review & Submit</p>
      <p style="color: #666;">Review your information before submitting.</p>
    </div>`,
  ];

  container.appendChild(stepper);

  return container;
};

// Stepper with Validation
export const WithValidation = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';

  const description = document.createElement('p');
  description.textContent = 'Each step validates before allowing navigation to next step';
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  // Global validator - validates all steps
  const globalValidator: StepValidator = (stepId) => {
    console.log('Validating step:', stepId);
    // Simulate validation (all valid for demo)
    return true;
  };

  const stepper = Stepper({
    stepValidator: globalValidator,
    onStepChange: (stepId) => {
      console.log('Step changed to:', stepId);
      output.textContent = `Current step: ${stepId + 1}`;
    },
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      output.textContent = 'Form submitted successfully! ✓';
      output.style.color = 'green';
    },
    children: [
      Step({
        id: 0,
        label: 'Account Setup',
      }),
      Step({
        id: 1,
        label: 'Profile Details',
      }),
      Step({
        id: 2,
        label: 'Preferences',
      }),
    ],
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
};

// Stepper with Step-Specific Validators
export const WithStepSpecificValidation = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';

  const description = document.createElement('p');
  description.innerHTML = `
    <strong>Step-specific validation:</strong><br>
    • Step 1: Always valid (no validator)<br>
    • Step 2: Custom validator (overrides global)<br>
    • Step 3: Uses global validator
  `;
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  // Global validator
  const globalValidator: StepValidator = (stepId) => {
    console.log('Global validator for step:', stepId);
    return true;
  };

  // Step 2 custom validator (overrides global)
  const step2Validator: StepValidator = (stepId) => {
    console.log('Step 2 custom validator');
    // Custom validation logic for step 2
    return true;
  };

  const stepper = Stepper({
    stepValidator: globalValidator,
    onStepChange: (stepId) => {
      console.log('Navigated to step:', stepId);
    },
    onSubmit: (data) => {
      alert('All steps validated and submitted!');
    },
    children: [
      Step(
        {
          id: 0,
          label: 'Basic Info',
        },
        {} as any
      ),
      Step(
        {
          id: 1,
          label: 'Advanced Settings',
          validator: step2Validator, // Override!
        },
        {} as any
      ),
      Step(
        {
          id: 2,
          label: 'Confirmation',
        },
        {} as any
      ),
    ],
  });

  container.appendChild(description);
  container.appendChild(stepper);

  return container;
};

// Stepper with Dynamic Step Visibility
export const WithDynamicSteps = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';

  const description = document.createElement('p');
  description.textContent = 'Toggle step 2 visibility with the button below';
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  const stepper = Stepper({
    onSubmit: (data) => {
      alert('Form submitted!');
    },
    children: [
      Step(
        {
          id: 0,
          label: 'Step 1',
        },
        {} as any
      ),
      Step(
        {
          id: 1,
          label: 'Optional Step 2',
        },
        {} as any
      ),
      Step(
        {
          id: 2,
          label: 'Step 3',
        },
        {} as any
      ),
    ],
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
};

// Stepper with Formular Integration (Conceptual)
export const WithFormularIntegration = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';

  const description = document.createElement('div');
  description.innerHTML = `
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
  `;

  container.appendChild(description);

  return container;
};

// Compact Stepper (No Header)
export const CompactMode = () => {
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
    onSubmit: (data) => {
      alert('Submitted!');
    },
    children: [
      Step({ id: 0, label: 'Step 1' }),
      Step({ id: 1, label: 'Step 2' }),
      Step({ id: 2, label: 'Step 3' }),
    ],
  });

  container.appendChild(description);
  container.appendChild(stepper);

  return container;
};

// Custom Styled Stepper
export const CustomStyled = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';

  const stepper = Stepper({
    className: 'custom-stepper-theme',
    onSubmit: (data) => {
      alert('Submitted!');
    },
    children: [
      Step({ id: 0, label: '🎨 Style' }),
      Step({ id: 1, label: '⚙️ Configure' }),
      Step({ id: 2, label: '✅ Done' }),
    ],
  });

  // Add custom styles
  const style = document.createElement('style');
  style.textContent = `
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
  `;
  container.appendChild(style);
  container.appendChild(stepper);

  return container;
};
