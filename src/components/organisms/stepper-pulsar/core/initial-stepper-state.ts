/**
 * Initial stepper state
 */
import type { IStepperState } from './stepper.types';

export const INITIAL_STEPPER_STATE: IStepperState = {
  steps: [],
  errors: [],
  sibling: undefined,
  data: '',
  submissionTimes: 0,
  previousStepId: undefined,
  currentStepId: 0,
  navigationRequest: 'unset',
  navigationRequestGoto: undefined,
  touchedFields: [],
  dirtyFields: [],
  loaded: false,
  isValid: false,
  defaultValue: [],
  submitRequest: false,
  ready: false,
};
