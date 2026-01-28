/**
 * Stepper context types
 */
import type {
  IStepItem,
  IStepField,
  IStepperError,
  IStepperSibling,
  IStepsVisibility,
} from '../core';

export type StepValidator = (stepId: number) => boolean;

export interface IStepperContext {
  // Reactive state accessors
  currentStepId: () => number;
  steps: () => IStepItem[];
  sibling: () => IStepperSibling | undefined;
  errors: () => IStepperError[];
  isValid: () => boolean;
  ready: () => boolean;

  // Navigation
  goToStep: (id: number) => void;
  goNext: () => void;
  goBack: () => void;

  // Step management
  registerStep: (id: number, label: string) => void;
  registerStepFields: (stepId: number, fields: IStepField[]) => void;
  setStepVisibility: (ids: number[], visible: boolean) => void;

  // Validation (reactive signals)
  currentStepValid: () => boolean;
  canGoNext: () => boolean;
  canGoBack: () => boolean;
  registerStepValidator: (stepId: number, validator: StepValidator) => void;
  validateCurrentStep: () => boolean;

  // Error management
  addError: (stepId: number, fieldName: string, message: string) => void;
  removeError: (stepId: number, fieldName: string) => void;
  clearErrors: (stepId?: number) => void;

  // Submission
  submit: () => void;
  reset: () => void;

  // Global step validator (can be overridden per step)
  stepValidator?: StepValidator;
}

export interface IStepperProviderProps {
  // Default validator for all steps (can be overridden per step)
  stepValidator?: StepValidator;
  onSubmit?: (data: any) => void;
  onStepChange?: (stepId: number) => void;
}
