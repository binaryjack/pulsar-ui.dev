/**
 * Stepper header component - breadcrumb navigation
 */
import { useEffect } from 'pulsar';
import type { IStepperContext } from '../context';

export const StepperHeader = (context: IStepperContext): HTMLElement => {
  const header = document.createElement('div');
  header.className = 'stepper-header';

  const breadcrumb = document.createElement('div');
  breadcrumb.className = 'stepper-breadcrumb';
  header.appendChild(breadcrumb);

  // Reactively rebuild breadcrumb
  useEffect(() => {
    const steps = context.steps();
    const currentId = context.currentStepId();

    breadcrumb.innerHTML = '';

    steps.forEach((step, index) => {
      const isActive = step.id === currentId;
      const isCompleted = step.hasBeenValidated && step.isValid;
      const isClickable = step.hasBeenValidated || step.id === currentId;

      // Breadcrumb item
      const item = document.createElement('div');
      item.className = `breadcrumb-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${!step.isVisible ? 'hidden' : ''}`;
      item.setAttribute('data-step-id', String(step.id));
      item.style.cursor = isClickable ? 'pointer' : 'default';

      if (isClickable) {
        item.onclick = () => context.goToStep(step.id);
      }

      // Step number
      const numberSpan = document.createElement('span');
      numberSpan.className = 'step-number';
      numberSpan.textContent = String(index + 1);
      item.appendChild(numberSpan);

      // Step label
      const labelSpan = document.createElement('span');
      labelSpan.className = 'step-label';
      labelSpan.textContent = step.label;
      item.appendChild(labelSpan);

      // Checkmark if completed
      if (isCompleted) {
        const checkSpan = document.createElement('span');
        checkSpan.className = 'step-checkmark';
        checkSpan.textContent = '✓';
        item.appendChild(checkSpan);
      }

      breadcrumb.appendChild(item);

      // Separator
      if (index < steps.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'breadcrumb-separator';
        separator.textContent = '→';
        breadcrumb.appendChild(separator);
      }
    });
  });

  return header;
};
