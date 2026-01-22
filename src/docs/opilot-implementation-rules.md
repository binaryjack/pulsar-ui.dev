
the absoute rules applies here too: 
E:\Sources\visual-schema-builder\packages\copiot-implementation-rules.md



- install tailwindcss for this project
- configure it
- in E:\Sources\visual-schema-builder\packages\atomos-prime.dev\src\design
  - define all that you need as tokens, sizes, utilities, and variants 
  

in E:\Sources\visual-schema-builder\packages\atomos-prime.dev\src\components

you will find folders with primitive components names 
- implement them using tailwind css prepared tokens, sizes, utilities, and variants as mentionned above
- by now there is :
   - [component]/
    - [component].tsx  <= this is the main component object `export const MyComponent = ({ ... }: IMyComponentProps) => {}`
      - the targeted framework is pulsar so do not use React even if all in all this component should be as agnostic as it's possible to be 
      - for styling variancy you will need to create a generic configuration object in order to avoid passing 1000 props
        - a common style contiguration object that contains variant naming, size, borders, transition, hover etc... 
          I let you see what could be interesting to have in it the definition should being considered as common 
        - name this object IComponentConfig
      
         
    - [component].type.ts  <= this is the main component object interface props `interface IMyComponentProps { ... }` 
    - only if it's pertinent:    
      - [component].[variant].factory.ts  <= therer are as many components as needed that are variants of the original but preconfigured, it wraps IComponentConfig preconfigurartion 
      
- in each [component].type.ts file you will find some directives to respect 


- first iteration fixes.
  - No mixed enums or types in interfces (extract them)
  - One Item per File !   
  - IComponentConfig should be an interface that's passed as a props and must not extends the component itself
    - create a builder pattern based class for it (remember how classes are built !)
    - example 
    - 
    ```tsx 
    
    const componentConfig: IComponentConfig = new CompoentnConfig('primary').size('sm').Build()
    <MyComponent id={`123`} config={componentConfig} />

    ```
  - Components 
    - extract the {...rest} of html dom elements away from components and use the same approache as be in React.
      - `interface IMyComponent extends React.ComponentProps<'div'> { ... }`  it will provide the ...rest properties regarding divs... 
      -  I want the same mecanics here. `Pulsar.HtmlExtends<'div'>`  <= you probably should create it in the pulsar itself no ? 
  
  -  in tsx files you have to write components in a tsx format using return with the actual HTML component (declarative) not imperative 
  -  implementation of a component exapmple: 
      //[component].type.ts
      ```ts
      
      export interface IMyComponent extends Pulsar.HtmlExtends<'div'> { 
        id: string
        name: string
      }
      
      ```
      //[component].tsx
      ```tsx
      import { IMyComponent } from './[component].type.ts'
      import { useState } from 'pulsar'

      export const MyComponent = ({id, name, ...rest}:IMyComponent) { 
          const [focus, setFocus] = useState<boolean>(false)
          const handleOnFocus = () => {
            setFocus(true)
          }
          const handleOnBlur = () => {
            setFocus(false)
          }
          return (<div id={id} onFocus={handleOnFocus} onFocus={handleOnBlur} {...rest}>{name()}</div>)
      }
      
      ```



- 2ND iteration observations: 
- the builder is malformed, wrong location (E:\Sources\visual-schema-builder\packages\atomos-prime.  dev\src\components\interfaces\prototype ) <= WTF!!!!
- and not done as I wanted it 
- here is how I want it!

example of what I want : 

- `E:\Sources\visual-schema-builder\packages\atomos-prime.dev\src\components\utils\component-config-builder\component-config.type.ts`

```typescript 

export interface IComponentConfig {
  // Visual style
  readonly variant?: ComponentVariant
  readonly color?: ComponentColor
  readonly size?: ComponentSize
  
  // Border
  //rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' ///<= VIOLATION!!!!
  readonly rounded? : ComponentRoundedSize


  readonly border?: boolean
  
  // Shadow
  ///readonly shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'///<= VIOLATION!!!!
    readonly shadow?: ComponentShadowSize
  // States
  readonly disabled?: boolean
  readonly loading?: boolean
  readonly fullWidth?: boolean
  
  // Transitions
  readonly transition?: boolean
  //readonly transitionDuration?: 'fast' | 'normal' | 'slow'///<= VIOLATION!!!!
  readonly transitionDuration?: TransitionDuration
  // Interactive states
  readonly hover?: boolean
  readonly focus?: boolean
  readonly active?: boolean
  
  // Additional styling
  readonly className?: string

}

```

- `E:\Sources\visual-schema-builder\packages\atomos-prime.dev\src\components\utils\component-config-builder\component-config-builder.type.ts`


```typescript 

export interface IComponentConfigBuilder {
    new (variant: ComponentVariant): IComponentConfigBuilder
    config: IComponentConfig 
    variant?: (variant: ComponentVariant) => IComponentConfigBuilder
    color?: (color?: ComponentColor) => IComponentConfigBuilder
    size?: (size?: ComponentSize) => IComponentConfigBuilder
    rounded?: (rounded? : ComponentRoundedSize) => IComponentConfigBuilder
    border?: (border?: boolean) => IComponentConfigBuilder
    shadow?: (shadow?: ComponentShadowSize) => IComponentConfigBuilder
    disabled?: (disabled?: boolean) => IComponentConfigBuilder
    loading?: (loading?: boolean) => IComponentConfigBuilder
    fullWidth?: (fullWidth?: boolean) => IComponentConfigBuilder
    transition?: (transition?: boolean) => IComponentConfigBuilder
    transitionDuration?: (transitionDuration?: TransitionDuration) => IComponentConfigBuilder
    hover?: (hover?: boolean) => IComponentConfigBuilder
    focus?: ( focus?: boolean) => IComponentConfigBuilder
    active?: (active?: boolean) => IComponentConfigBuilder
    className?: (className?: string) => IComponentConfigBuilder
    build?: () => IComponentConfig
}

```



- `E:\Sources\visual-schema-builder\packages\atomos-prime.dev\src\components\utils\component-config-builder\component-config-builder.ts`

```typescript 

imoprte {variant} from './prototype/variant'
... other imports

export const ComponentConfigBuilder = (this:IComponentConfigBuilder, variant: ComponentVariant ) {    
    this.config = {variant: variant}
} as unknown as IComponentConfigBuilder
    
// import them from 
// - `E:\Sources\visual-schema-builder\packages\atomos-prime.dev\src\components\utils\component-config-builder\prototype\...

Object.apply(ComponentConfigBuilder.prototype,{ 
    variant,
    color,
    size,
    rounded,
    border,
    shadow,
    disabled,
    loading,
    fullWidth,
    transition,
    transitionDuration,
    hover,
    focus,
    active,
    className,
    build
})

```

in your example E:\Sources\visual-schema-builder\packages\atomos-prime.dev\EXAMPLES.ts you gave imperative usages add declarative usages too !

- becarefull to add/import/use in this project: pulsar.d.ts types in order to avoid `JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.`


in the Input component: 

this violates !
* [COPILOT] can have a default skeletton behavior on Loading (reuse available skeletton component) that replaces the actual component in loading time

```tsx  
   // If loading, return skeleton
  if (finalConfig.loading) {
    return (
      <div
        className={cn(
          'animate-pulse bg-neutral-200 rounded-md',
          componentSizes[finalConfig.size].padding,
          finalConfig.fullWidth ? 'w-full' : 'w-64'
        )}
        style={{ height: componentSizes[finalConfig.size].height }}
        role="status"
        aria-label="Loading"
      />
    )
  }
  
```



for this following you have to create a component Styling builder  following the same principle I've explained above for ComponentConfigBuilder

- do never create or use Data Oriented Static items into a component: so this should be externalized to the component!

```tsx 
  // Base input classes
  const inputClasses = cn(
    // Base styles
    'block border font-medium focus:outline-none',
    'transition-colors duration-200',
    
    // Size
    sizeConfig.padding,
    sizeConfig.fontSize,
    finalConfig.fullWidth ? 'w-full' : '',
    
    // Border radius
    finalConfig.rounded === 'none' ? 'rounded-none' : '',
    finalConfig.rounded === 'sm' ? 'rounded-sm' : '',
    finalConfig.rounded === 'md' ? 'rounded-md' : '',
    finalConfig.rounded === 'lg' ? 'rounded-lg' : '',
    finalConfig.rounded === 'xl' ? 'rounded-xl' : '',
    finalConfig.rounded === '2xl' ? 'rounded-2xl' : '',
    finalConfig.rounded === 'full' ? 'rounded-full' : '',
    
    // States
    error 
      ? 'border-error-600 bg-error-50 text-error-900 placeholder-error-400 focus:ring-2 focus:ring-error-500 focus:border-error-600'
      : 'border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-600',
    
    finalConfig.disabled 
      ? 'bg-neutral-100 text-neutral-500 cursor-not-allowed' 
      : '',
    
    rest.readOnly 
      ? 'bg-neutral-50 cursor-default' 
      : '',
    
    // Prefix/suffix padding
    prefix ? 'pl-10' : '',
    suffix ? 'pr-10' : '',
    
    // Custom classes
    finalConfig.className
  )
  ```



  Here's how I want you to make the components 


```tsx

  prefix, //<= this violates the  * [COPILOT] this is an unique component so NO!
  suffix, //<= this violates the  * [COPILOT] this is an unique component so NO!

/**
 * Input component
 * Creates an accessible text input with various states and validation <= NO VALIDATIONS BECAUSE WE WILL INTRODUCE THEM OTHER WAY!
 */

// external to the component so it's compiled ONCE!
const inputDefaultConfig = config || new ComponentConfigBuilder('primary').build()
  // external to the component so it's compiled ONCE!
const inputDefaultStyling = config || new ComponentStylingBuilder('primary').build()

export const Input = ({
  config = inputDefaultConfig, 
  styling = inputDefaultStyling, 
  type = 'text',
  value,
  defaultValue,
  ...rest
}: IInputProps): HTMLElement => {

  // If loading, return skeleton
config.loading
const sizeConfig = componentSizes[config.size]

  //  * [COPILOT] this is an unique component <= means as output from atoms it should only be ONE component !
  // what you did with prefix and suffix is for from molecules components NOT ATOMS!
return 
  {
    config.loading ? 
    <Skeletton /> :

    
    <input
        type={type}
        className={inputClasses}
        value={value}
        defaultValue={defaultValue}
        disabled={config.disabled}
        aria-busy={config.loading}
        {...rest}
      />
    }
}
  
  
  ```