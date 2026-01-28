/**
 * Main Stepper component
 * Orchestrates multi-step forms with signal-based reactive validation
 */
import './stepper.css';
import { useEffect } from 'pulsar';
import { createStepperContext, type IStepperProviderProps } from './context';
import { StepperHeader } from './components/stepper-header';
import { StepperFooter } from './components/stepper-footer';

export interface IStepperProps extends IStepperProviderProps {
  children?: HTMLElement[];
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

export const Stepper = (props: IStepperProps): HTMLElement => {
  const {
    children = [],
    showHeader = true,
    showFooter = true,
    className = '',
    stepValidator,
    onSubmit,
    onStepChange,
  } = props;

  // Create context
  const context = createStepperContext({
    stepValidator,
    onSubmit,
    onStepChange,
  });

  // Container
  const container = document.createElement('div');
  container.className = `stepper-container ${className}`(
    // Store context for children
    container as any
  ).__stepperContext = context;

  // Build structure
  useEffect(() => {
    container.innerHTML = '';

    // Header
    if (showHeader && context.ready()) {
      const header = StepperHeader(context);
      container.appendChild(header);
    }

    // Steps content
    const stepsContainer = document.createElement('div');
    stepsContainer.className = 'stepper-steps';

    // Render children with context
    children.forEach((child) => {
      // Check if child has step metadata
      if (child && child.dataset && child.dataset.stepId) {
        const stepId = (child as any).__stepId;
        const stepLabel = (child as any).__stepLabel;
        const stepValidator = (child as any).__stepValidator;

        // Register step with context
        if (stepId !== undefined && stepLabel) {
          context.registerStep(stepId, stepLabel);
          if (stepValidator) {
            context.registerStepValidator(stepId, stepValidator);
          }
        }
      }
      stepsContainer.appendChild(child);
    });

    container.appendChild(stepsContainer);

    // Footer
    if (showFooter && context.ready()) {
      const footer = StepperFooter(context);
      container.appendChild(footer);
    }
  });

  return container;
};
