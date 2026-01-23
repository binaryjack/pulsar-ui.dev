//  * Header component implementation
//  * Framework: Pulsar
//  * Organism: Page header with logo, navigation, and actions
//  */

import { cn } from '@pulsar-framework/design-tokens'
import { Skeleton } from '../../atoms/skeleton'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type IHeaderProps } from './header.type'

// External to the component so it's compiled ONCE!
const headerDefaultConfig = new ComponentConfigBuilder('primary').build()

// External to the component so it's compiled ONCE!
const headerDefaultStyling = new ComponentStylingBuilder()
  .base('bg-white border-b border-neutral-200')
  .build()

/**
 * Header component
 * Creates a page header with logo, nav, and actions - organism component
 */
export const Header = ({
  config = headerDefaultConfig,
  styling = headerDefaultStyling,
  logo,
  navigation,
  actions,
  sticky = false,
  ...rest
}: IHeaderProps): HTMLElement => 
  config.loading ?
    <Skeleton width="w-full" height="h-16" rounded="none" /> :
    <header
      className={cn(
        styling.base,
        sticky ? 'sticky top-0 z-50' : '',
        config.className,
        styling.custom
      )}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {logo ? <div className="flex-shrink-0">{logo}</div> : null}
        {navigation ? <nav className="flex-1 mx-8">{navigation}</nav> : null}
        {actions ? <div className="flex-shrink-0">{actions}</div> : null}
      </div>
    </header>
