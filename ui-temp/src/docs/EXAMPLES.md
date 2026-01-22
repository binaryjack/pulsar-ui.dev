/**
 * Atomos Prime - Usage Examples
 * Demonstrating the new Builder Pattern API
 */

import {
    Button,
    ComponentConfig,
    DangerButton,
    Input,
    PrimaryButton
} from '@atomos/prime'

// ============================================
// Button Examples
// ============================================

// Example 1: Button with custom configuration using Builder Pattern
const customConfig = new ComponentConfig('primary')
  .size('lg')
  .shadow('md')
  .rounded('full')
  .fullWidth()
  .build()

const myButton = Button({
  id: 'my-custom-button',
  config: customConfig,
  label: 'Click Me',
  onclick: () => console.log('Button clicked!')
})

// Example 2: Using factory components
const primaryBtn = PrimaryButton({
  label: 'Save',
  onclick: () => console.log('Saving...')
})

const dangerBtn = DangerButton({
  label: 'Delete',
  onclick: () => console.log('Deleting...')
})

// Example 3: Button with icon
const iconConfig = new ComponentConfig('secondary')
  .variant('outline')
  .size('md')
  .build()

const iconButton = Button({
  config: iconConfig,
  label: 'Download',
  icon: '<svg>...</svg>',
  iconPosition: 'left'
})

// Example 4: Loading button
const loadingConfig = new ComponentConfig('primary')
  .loading()
  .build()

const loadingButton = Button({
  config: loadingConfig,
  label: 'Processing',
  loadingText: 'Please wait...'
})

// Example 5: Disabled button
const disabledConfig = new ComponentConfig('neutral')
  .disabled()
  .build()

const disabledButton = Button({
  config: disabledConfig,
  label: 'Unavailable'
})

// ============================================
// Input Examples
// ============================================

// Example 6: Basic input
const basicInput = Input({
  id: 'username',
  type: 'text',
  placeholder: 'Enter username',
  oninput: (e) => console.log((e.target as HTMLInputElement).value)
})

// Example 7: Input with custom configuration
const inputConfig = new ComponentConfig('primary')
  .size('lg')
  .rounded('lg')
  .fullWidth()
  .build()

const customInput = Input({
  config: inputConfig,
  type: 'email',
  placeholder: 'your@email.com',
  required: true
})

// Example 8: Input with error state
const errorInput = Input({
  id: 'password',
  type: 'password',
  error: true,
  errorMessage: 'Password must be at least 8 characters',
  value: 'short'
})

// Example 9: Input with prefix/suffix
const prefixedInput = Input({
  type: 'number',
  placeholder: '0.00',
  prefix: '$',
  suffix: 'USD'
})

// Example 10: Loading input (shows skeleton)
const loadingInputConfig = new ComponentConfig('primary')
  .loading()
  .fullWidth()
  .build()

const loadingInput = Input({
  config: loadingInputConfig
})

// ============================================
// Advanced Examples
// ============================================

// Example 11: Form with multiple components
const formConfig = new ComponentConfig('primary')
  .size('md')
  .rounded('md')
  .build()

const emailInput = Input({
  config: formConfig,
  id: 'email',
  type: 'email',
  placeholder: 'Email',
  required: true,
  'aria-label': 'Email address'
})

const passwordInput = Input({
  config: formConfig,
  id: 'password',
  type: 'password',
  placeholder: 'Password',
  required: true,
  minLength: 8,
  'aria-label': 'Password'
})

const submitButton = PrimaryButton({
  type: 'submit',
  label: 'Sign In',
  config: new ComponentConfig('primary').fullWidth().build()
})

// Example 12: Responsive button (ghost variant)
const responsiveConfig = new ComponentConfig('primary')
  .variant('ghost')
  .size('sm')
  .rounded('md')
  .build()

const ghostButton = Button({
  config: responsiveConfig,
  label: 'Options',
  icon: '⚙️',
  iconPosition: 'right'
})

// Example 13: Button with ripple effect
const rippleButton = Button({
  config: new ComponentConfig('secondary').build(),
  label: 'Click for Ripple',
  ripple: true,
  onclick: (e) => console.log('Ripple effect triggered!')
})

// Example 14: Chaining multiple builder methods
const complexConfig = new ComponentConfig('success')
  .variant('soft')
  .size('xl')
  .rounded('2xl')
  .shadow('lg')
  .transition()
  .transitionDuration('slow')
  .fullWidth()
  .className('my-custom-class')
  .build()

const complexButton = Button({
  config: complexConfig,
  label: 'Complex Styled Button'
})

// ============================================
// Declarative TSX Examples
// ============================================

/**
 * The examples above use the imperative approach (function calls).
 * Below are the same examples using declarative TSX syntax.
 * Both approaches are valid and produce the same results.
 */

// Declarative Example 1: Basic button with TSX
const declarativeButton = (
  <Button
    id="my-declarative-button"
    config={new ComponentConfig('primary').size('lg').build()}
    label="Click Me"
    onclick={() => console.log('Clicked!')}
  />
)

// Declarative Example 2: Input with error (new styling builder)
import { ComponentStylingBuilder } from '../components/utils'

const errorStyling = new ComponentStylingBuilder()
  .base('block border font-medium')
  .border('border-error-600 bg-error-50')
  .focus('focus:ring-2 focus:ring-error-500')
  .build()

const declarativeErrorInput = (
  <Input
    id="email-input"
    type="email"
    styling={errorStyling}
    placeholder="your@email.com"
    required={true}
    aria-invalid={true}
  />
)

// Declarative Example 3: Loading skeleton
const declarativeLoadingInput = (
  <Input
    config={new ComponentConfig('primary').loading().fullWidth().build()}
    type="text"
  />
)

// Declarative Example 4: Button with custom styling
const customBtnStyling = new ComponentStylingBuilder()
  .base('inline-flex items-center justify-center font-bold')
  .hover('hover:scale-105')
  .transition('transition-transform duration-200')
  .build()

const declarativeStyledButton = (
  <Button
    config={new ComponentConfig('secondary').size('md').rounded('full').build()}
    styling={customBtnStyling}
    label="Hover Me"
  />
)

// Declarative Example 5: Form with TSX
const declarativeForm = (
  <form onsubmit={(e) => { e.preventDefault(); console.log('Form submitted') }}>
    <Input
      id="username"
      type="text"
      config={new ComponentConfig('primary').fullWidth().rounded('md').build()}
      placeholder="Username"
      required={true}
    />
    <Input
      id="password"
      type="password"
      config={new ComponentConfig('primary').fullWidth().rounded('md').build()}
      placeholder="Password"
      required={true}
      minLength={8}
    />
    <Button
      type="submit"
      config={new ComponentConfig('primary').fullWidth().size('lg').build()}
      label="Sign In"
    />
  </form>
)

// Declarative Example 6: Skeleton component
import { Skeleton } from '../components/atoms/skeleton'

const declarativeSkeleton = (
  <Skeleton
    width="w-full"
    height="h-12"
    rounded="md"
  />
)

// Declarative Example 7: Multiple skeletons in a list
const declarativeSkeletonList = (
  <div className="flex flex-col gap-3">
    <Skeleton width="w-full" height="h-10" rounded="md" />
    <Skeleton width="w-full" height="h-10" rounded="md" />
    <Skeleton width="w-3/4" height="h-10" rounded="md" />
  </div>
)

export {
    basicInput, complexButton, customInput, dangerBtn, declarativeButton, declarativeErrorInput, declarativeForm,
    declarativeLoadingInput, declarativeSkeleton, declarativeSkeletonList, declarativeStyledButton, disabledButton, emailInput, errorInput, ghostButton, iconButton,
    loadingButton, loadingInput, myButton, passwordInput, prefixedInput, primaryBtn, rippleButton, submitButton
}

