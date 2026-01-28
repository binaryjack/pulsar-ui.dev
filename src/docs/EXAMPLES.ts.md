/**
 * Pulsar UI - Usage Examples
 * Demonstrating the new Builder Pattern API
 */

import {
    Button,
    ComponentConfigBuilder,
    Input
} from '../index'

// ============================================
// Button Examples (Atomic - Single Element)
// ============================================

// Example 1: Button with custom configuration using Builder Pattern
const customConfig = new ComponentConfigBuilder('primary')
  .size('lg')
  .shadow('md')
  .rounded('full')
  .fullWidth()
  .build()

const myButton = Button({
  config: customConfig,
  onclick: () => console.log('Button clicked!')
})

// Example 2: Simple buttons with different configs
const primaryBtn = Button({
  config: new ComponentConfigBuilder('primary').build(),
  onclick: () => console.log('Saving...')
})

const dangerBtn = Button({
  config: new ComponentConfigBuilder('primary').variant('solid').build(),
  onclick: () => console.log('Deleting...')
})

// Example 3: Button with outline variant
const iconConfig = new ComponentConfigBuilder('secondary')
  .variant('outline')
  .size('md')
  .build()

const outlineButton = Button({
  config: iconConfig,
  onclick: () => console.log('Download')
})

// Example 4: Loading button (shows skeleton)
const loadingConfig = new ComponentConfigBuilder('primary')
  .loading()
  .build()

const loadingButton = Button({
  config: loadingConfig
})

// Example 5: Disabled button
const disabledConfig = new ComponentConfigBuilder('neutral')
  .disabled()
  .build()

const disabledButton = Button({
  config: disabledConfig
})

// ============================================
// Input Examples
// ============================================

// Example 6: Basic input
const basicInput = Input({
  type: 'text',
  placeholder: 'Enter username',
  oninput: (e: Event) => console.log((e.target as HTMLInputElement).value)
})

// Example 7: Input with custom configuration
const inputConfig = new ComponentConfigBuilder('primary')
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
  type: 'password',
  value: 'short'
})

// Example 9: Input with prefix/suffix (removed - not supported)
// Prefix/suffix removed per architectural rules

// Example 10: Loading input (shows skeleton)
const loadingInputConfig = new ComponentConfigBuilder('primary')
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
const formConfig = new ComponentConfigBuilder('primary')
  .size('md')
  .rounded('md')
  .build()

const emailInput = Input({
  config: formConfig,
  type: 'email',
  placeholder: 'Email',
  required: true,
  ariaLabel: 'Email address'
})

const passwordInput = Input({
  config: formConfig,
  type: 'password',
  placeholder: 'Password',
  required: true,
  minLength: 8,
  ariaLabel: 'Password'
})

const submitButton = Button({
  type: 'submit',
  config: new ComponentConfigBuilder('primary').fullWidth().build(),
  onclick: () => console.log('Sign in')
})

// Example 12: Responsive button (ghost variant)
const responsiveConfig = new ComponentConfigBuilder('primary')
  .variant('ghost')
  .size('sm')
  .rounded('md')
  .build()

const ghostButton = Button({
  config: responsiveConfig,
  onclick: () => console.log('Options')
})

// Example 13: Button with transition effects
const transitionButton = Button({
  config: new ComponentConfigBuilder('secondary')
    .transition(true)
    .transitionDuration('fast')
    .build(),
  onclick: () => console.log('Clicked')
})

// Example 14: Chaining multiple builder methods
const complexConfig = new ComponentConfigBuilder('success')
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
  onclick: () => console.log('Complex button clicked')
})

export {
    basicInput, complexButton, customInput, dangerBtn, disabledButton, emailInput, ghostButton, loadingButton,
    loadingInput, myButton, outlineButton, passwordInput, primaryBtn, submitButton, transitionButton
}

