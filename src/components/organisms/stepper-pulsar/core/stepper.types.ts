/**
 * Stepper core types
 */
import type { StepperActionsKind } from './stepper-actions.enum';

export type StepperNavigationRequest = 'back' | 'next' | 'goto' | 'unset';

export interface IStepField {
  name: string;
  defaultValue?: string;
}

export interface IStepperDefaultValue {
  name: string;
  value: any;
}

export interface IStepperError {
  stepId: number;
  fieldName: string;
  error: Error;
}

export interface IStepItem {
  id: number;
  label: string;
  isValid: boolean;
  isVisible: boolean;
  isLocked: boolean;
  isActive: boolean;
  isTouched: boolean;
  isDirty: boolean;
  hasBeenValidated: boolean;
  fields: IStepField[];
}

export interface IStepperSibling {
  previousStep?: IStepItem;
  currentStep?: IStepItem;
  nextStep?: IStepItem;
  canGoBack: boolean;
  canGoNext: boolean;
  isLast: boolean;
  isFirst: boolean;
  direction: 'forward' | 'backward';
}

export interface IStepperState {
  steps: IStepItem[];
  sibling?: IStepperSibling;
  errors: IStepperError[];
  data: string;
  submissionTimes: number;
  previousStepId?: number;
  currentStepId: number;
  touchedFields: string[];
  dirtyFields: string[];
  navigationRequest: StepperNavigationRequest;
  navigationRequestGoto?: number;
  loaded: boolean;
  isValid: boolean;
  defaultValue: IStepperDefaultValue[];
  submitRequest: boolean;
  ready: boolean;
}

export interface IStepperAction {
  type: StepperActionsKind;
  payload: any;
}

export interface IStepsVisibility {
  ids: number[];
  visible: boolean;
}
