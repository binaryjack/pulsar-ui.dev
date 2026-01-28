/**
 * Stepper context implementation with signal-based reactivity
 */
import { useState, useMemo, useReducer } from 'pulsar';
import {
  stepperReducer,
  INITIAL_STEPPER_STATE,
  StepperActionsKind,
  type IStepItem,
  type IStepField,
} from '../core';
import type {
  IStepperContext,
  IStepperProviderProps,
  StepValidator,
} from './stepper-context.types';

export const createStepperContext = (props: IStepperProviderProps): IStepperContext => {
  const [state, dispatch] = useReducer(stepperReducer, INITIAL_STEPPER_STATE);

  // Store per-step validators
  const [stepValidators, setStepValidators] = useState<Map<number, StepValidator>>(new Map());

  // Reactive accessors
  const currentStepId = () => state().currentStepId;
  const steps = () => state().steps;
  const sibling = () => state().sibling;
  const errors = () => state().errors;
  const isValid = () => state().isValid;
  const ready = () => state().ready;

  // Current step validation (reactive)
  const currentStepValid = useMemo(() => {
    const stepId = currentStepId();
    const stepErrors = errors().filter((e) => e.stepId === stepId);

    // Check if there are errors
    if (stepErrors.length > 0) return false;

    // Check validator
    const validators = stepValidators();
    const stepValidator = validators.get(stepId);

    if (stepValidator) {
      return stepValidator(stepId);
    }

    // Use global validator if no step-specific validator
    if (props.stepValidator) {
      return props.stepValidator(stepId);
    }

    // No errors and no validator = valid
    return true;
  });

  // Can navigate? (reactive)
  const canGoNext = useMemo(() => {
    const sib = sibling();
    return sib ? sib.canGoNext && currentStepValid() : false;
  });

  const canGoBack = useMemo(() => {
    const sib = sibling();
    return sib ? sib.canGoBack : false;
  });

  // Register step (called by Step component on mount)
  const registerStep = (id: number, label: string) => {
    const step: IStepItem = {
      id,
      label,
      isValid: false,
      isVisible: true,
      isLocked: false,
      isActive: id === 0,
      isTouched: false,
      isDirty: false,
      hasBeenValidated: false,
      fields: [],
    };

    dispatch({ type: StepperActionsKind.ADD_STEP, payload: { stepId: id, value: step } });

    // Recompute sibling after adding step
    setTimeout(() => {
      dispatch({ type: StepperActionsKind.COMPUTE_SIBLING, payload: { stepId: id } });
    }, 0);
  };

  // Register step fields
  const registerStepFields = (stepId: number, fields: IStepField[]) => {
    dispatch({
      type: StepperActionsKind.SET_FIELDS,
      payload: { stepId, value: fields },
    });
  };

  // Set step visibility
  const setStepVisibility = (ids: number[], visible: boolean) => {
    dispatch({
      type: StepperActionsKind.SET_VISIBLE,
      payload: { stepId: 0, value: { ids, visible } },
    });
    // Recompute sibling
    dispatch({ type: StepperActionsKind.COMPUTE_SIBLING, payload: { stepId: currentStepId() } });
  };

  // Register validator for specific step
  const registerStepValidator = (stepId: number, validator: StepValidator) => {
    const validators = new Map(stepValidators());
    validators.set(stepId, validator);
    setStepValidators(validators);
  };

  // Validate current step
  const validateCurrentStep = (): boolean => {
    dispatch({ type: StepperActionsKind.COMPUTE_VALIDATION, payload: { stepId: currentStepId() } });
    return currentStepValid();
  };

  // Navigation
  const goToStep = (id: number) => {
    // Validate before navigation if moving forward
    if (id > currentStepId()) {
      if (!validateCurrentStep()) {
        return;
      }
    }

    dispatch({ type: StepperActionsKind.GO_TO_STEP, payload: { stepId: id } });
    dispatch({ type: StepperActionsKind.COMPUTE_SIBLING, payload: { stepId: id } });

    if (props.onStepChange) {
      props.onStepChange(id);
    }
  };

  const goNext = () => {
    if (!canGoNext()) return;

    const sib = sibling();
    if (sib?.nextStep) {
      goToStep(sib.nextStep.id);
    }
  };

  const goBack = () => {
    if (!canGoBack()) return;

    const sib = sibling();
    if (sib?.previousStep) {
      goToStep(sib.previousStep.id);
    }
  };

  // Error management
  const addError = (stepId: number, fieldName: string, message: string) => {
    const error = {
      stepId,
      fieldName,
      error: new Error(message),
    };
    dispatch({ type: StepperActionsKind.ADD_ERROR, payload: { stepId, value: error } });
    dispatch({ type: StepperActionsKind.COMPUTE_VALIDATION, payload: { stepId } });
  };

  const removeError = (stepId: number, fieldName: string) => {
    dispatch({
      type: StepperActionsKind.REMOVE_ERROR,
      payload: { stepId, value: { stepId, fieldName } },
    });
    dispatch({ type: StepperActionsKind.COMPUTE_VALIDATION, payload: { stepId } });
  };

  const clearErrors = (stepId?: number) => {
    dispatch({ type: StepperActionsKind.CLEAR_ALL_ERRORS, payload: { stepId: stepId ?? 0 } });
    dispatch({
      type: StepperActionsKind.COMPUTE_VALIDATION,
      payload: { stepId: stepId ?? currentStepId() },
    });
  };

  // Submission
  const submit = () => {
    // Validate all steps
    let allValid = true;
    for (const step of steps()) {
      const stepErrors = errors().filter((e) => e.stepId === step.id);
      if (stepErrors.length > 0) {
        allValid = false;
        break;
      }
    }

    if (allValid) {
      dispatch({ type: StepperActionsKind.SUBMIT_REQUEST, payload: { stepId: 0 } });

      if (props.onSubmit) {
        // Gather data from all steps
        const data = steps().reduce((acc, step) => {
          acc[step.label] = step.fields;
          return acc;
        }, {} as any);

        props.onSubmit(data);
      }
    }
  };

  const reset = () => {
    dispatch({ type: StepperActionsKind.RESET, payload: { stepId: 0 } });
    dispatch({ type: StepperActionsKind.COMPUTE_SIBLING, payload: { stepId: 0 } });
  };

  return {
    currentStepId,
    steps,
    sibling,
    errors,
    isValid,
    ready,
    goToStep,
    goNext,
    goBack,
    registerStep,
    registerStepFields,
    setStepVisibility,
    currentStepValid,
    canGoNext,
    canGoBack,
    registerStepValidator,
    validateCurrentStep,
    addError,
    removeError,
    clearErrors,
    submit,
    reset,
    stepValidator: props.stepValidator,
  };
};
