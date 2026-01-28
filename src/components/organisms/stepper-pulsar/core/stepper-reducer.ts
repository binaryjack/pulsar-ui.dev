/**
 * Stepper reducer implementation
 * Simplified version with essential actions
 */
import type { IStepperAction, IStepperState } from './stepper.types';
import { StepperActionsKind } from './stepper-actions.enum';

export const stepperReducer = (state: IStepperState, action: IStepperAction): IStepperState => {
  const { type, payload } = action;

  switch (type) {
    case StepperActionsKind.ADD_STEP: {
      const step = payload.value;
      return {
        ...state,
        steps: [...state.steps, step],
        ready: state.steps.length > 0,
      };
    }

    case StepperActionsKind.GO_TO_STEP: {
      const targetId = payload.stepId;
      return {
        ...state,
        previousStepId: state.currentStepId,
        currentStepId: targetId,
        steps: state.steps.map((s) => ({
          ...s,
          isActive: s.id === targetId,
        })),
      };
    }

    case StepperActionsKind.NAVIGATION_REQUEST: {
      return {
        ...state,
        navigationRequest: payload.value,
        navigationRequestGoto: payload.stepId,
      };
    }

    case StepperActionsKind.SET_VISIBLE: {
      const { ids, visible } = payload.value;
      return {
        ...state,
        steps: state.steps.map((s) => (ids.includes(s.id) ? { ...s, isVisible: visible } : s)),
      };
    }

    case StepperActionsKind.ADD_ERROR: {
      return {
        ...state,
        errors: [...state.errors, payload.value],
      };
    }

    case StepperActionsKind.REMOVE_ERROR: {
      const { stepId, fieldName } = payload.value;
      return {
        ...state,
        errors: state.errors.filter((e) => !(e.stepId === stepId && e.fieldName === fieldName)),
      };
    }

    case StepperActionsKind.CLEAR_ALL_ERRORS: {
      const stepId = payload.stepId;
      return {
        ...state,
        errors: stepId ? state.errors.filter((e) => e.stepId !== stepId) : [],
      };
    }

    case StepperActionsKind.SET_FIELDS: {
      const { stepId, value } = payload;
      return {
        ...state,
        steps: state.steps.map((s) => (s.id === stepId ? { ...s, fields: value } : s)),
      };
    }

    case StepperActionsKind.COMPUTE_VALIDATION: {
      // Mark current and previous steps as validated
      const currentId = state.currentStepId;
      return {
        ...state,
        steps: state.steps.map((s) => ({
          ...s,
          hasBeenValidated: s.id <= currentId ? true : s.hasBeenValidated,
          isValid:
            s.id === currentId
              ? state.errors.filter((e) => e.stepId === s.id).length === 0
              : s.isValid,
        })),
        isValid: state.errors.length === 0,
      };
    }

    case StepperActionsKind.COMPUTE_SIBLING: {
      const currentId = state.currentStepId;
      const currentIndex = state.steps.findIndex((s) => s.id === currentId);
      const previousStep = currentIndex > 0 ? state.steps[currentIndex - 1] : undefined;
      const currentStep = state.steps[currentIndex];
      const nextStep =
        currentIndex < state.steps.length - 1 ? state.steps[currentIndex + 1] : undefined;

      return {
        ...state,
        sibling: {
          previousStep,
          currentStep,
          nextStep,
          canGoBack: !!previousStep && previousStep.isVisible,
          canGoNext: !!nextStep && nextStep.isVisible && (currentStep?.isValid ?? false),
          isFirst: currentIndex === 0,
          isLast: currentIndex === state.steps.length - 1,
          direction:
            state.previousStepId !== undefined && state.previousStepId > currentId
              ? 'backward'
              : 'forward',
        },
      };
    }

    case StepperActionsKind.SUBMIT_REQUEST: {
      return {
        ...state,
        submitRequest: true,
        submissionTimes: state.submissionTimes + 1,
      };
    }

    case StepperActionsKind.RESET: {
      return {
        ...state,
        currentStepId: 0,
        previousStepId: undefined,
        errors: [],
        submitRequest: false,
        steps: state.steps.map((s, index) => ({
          ...s,
          isActive: index === 0,
          isValid: false,
          hasBeenValidated: false,
        })),
      };
    }

    default:
      return state;
  }
};
