/**
 * Stepper Component - Multi-Step Form Management
 * Form-library agnostic component for complex form flows
 */

// Main Components
export { default as Step } from './'
export { default as Stepper, useStepperContext } from './'
export type { StepperContext, StepperProps } from './'
export { default as StepperSummary } from './'

// Core Types & Interfaces
export type {
    CustomValidation,
    FormCommon, StepField, StepItem, StepperDefaultValue, StepperError, StepperOptions, StepperSibling, StepperState, ValidationMode
} from './core/models'

// Form Adapter
export type { FormAdapter, FormState, SetValueOptions } from './core/formAdapter'

// Adapters
export { createRHFAdapter } from './adapters/rhfAdapter'

// Utilities
export { newStepAction, newVisibilitySkipPattern } from './core/helpers'
export type { IStepAvailabilityTriggeredBy, ITrigger } from './core/models'

