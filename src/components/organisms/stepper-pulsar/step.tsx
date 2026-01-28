/**
 * Step component
 * Registers itself with Stepper context and renders content conditionally
 */
import { useEffect } from 'pulsar';
import type { IStepProps } from './step.types';
import type { IStepperContext } from './context';

export interface IStepComponentProps extends IStepProps {
  context?: IStepperContext;
}

export const Step = (props: IStepComponentProps): HTMLElement => {
  const { id, label, validator, children = [], context } = props;

  const container = document.createElement('div');
  container.className = 'stepper-step';
  container.dataset.stepId = String(id);

  // Store step metadata on element for Stepper to read
  (container as any).__stepId = id;
  (container as any).__stepLabel = label;
  (container as any).__stepValidator = validator;

  // Content container
  const contentEl = document.createElement('div');
  contentEl.className = 'step-content';
  children.forEach((child) => contentEl.appendChild(child));

  // Title
  const titleEl = document.createElement('h2');
  titleEl.className = 'step-title';
  titleEl.textContent = label;

  container.appendChild(titleEl);
  container.appendChild(contentEl);

  // Register step on mount if context is provided
  useEffect(() => {
    if (context && context.registerStep) {
      context.registerStep(id, label);

      // Register validator if provided (overrides parent)
      if (validator) {
        context.registerStepValidator(id, validator);
      }
    }

    return () => {
      // Cleanup if needed
    };
  });

  // Reactively update visibility based on current step
  useEffect(() => {
    const isActive = context && context.currentStepId() === id;
    container.style.display = isActive ? 'block' : 'none';
    container.setAttribute('data-active', String(isActive));
  });

  return container;
};
