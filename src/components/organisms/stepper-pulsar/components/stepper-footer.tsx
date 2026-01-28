/**
 * Stepper footer component - navigation buttons
 */
import { useEffect } from 'pulsar';
import type { IStepperContext } from '../context';

export const StepperFooter = (context: IStepperContext): HTMLElement => {
  const sibling = context.sibling();
  const canGoBack = context.canGoBack();
  const canGoNext = context.canGoNext();

  const footer = document.createElement('div');
  footer.className = 'stepper-footer';

  // Re-render on state changes
  useEffect(() => {
    const sib = sibling();
    const back = canGoBack();
    const next = canGoNext();

    footer.innerHTML = '';

    // Back button
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back';
    backBtn.className = 'stepper-btn stepper-btn-back';
    backBtn.disabled = !back;
    backBtn.onclick = () => context.goBack();
    footer.appendChild(backBtn);

    // Next/Submit button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'stepper-btn stepper-btn-next';

    if (sib?.isLast) {
      nextBtn.textContent = 'Submit';
      nextBtn.onclick = () => context.submit();
      nextBtn.disabled = !context.isValid();
    } else {
      nextBtn.textContent = 'Next';
      nextBtn.onclick = () => context.goNext();
      nextBtn.disabled = !next;
    }

    footer.appendChild(nextBtn);
  });

  return footer;
};
