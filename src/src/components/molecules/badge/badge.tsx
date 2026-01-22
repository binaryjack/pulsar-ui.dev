/**
 * Badge component implementation
 * Framework: Pulsar
 * Molecule: Composes text and optional icon
 */

import { badgeSizeClasses, cn, roundedClasses } from '../../../design/utility'
import { Skeleton } from '../../atoms/skeleton'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type IBadgeProps } from './badge.type'

// External to the component so it's compiled ONCE!
const badgeDefaultConfig = new ComponentConfigBuilder('primary')
  .variant('solid')
  .size('sm')
  .rounded('md')
  .build()

// External to the component so it's compiled ONCE!
const badgeDefaultStyling = new ComponentStylingBuilder()
  .base('inline-flex items-center gap-1 font-medium')
  .background('bg-primary-100 text-primary-800')
  .border('border border-primary-200')
  .build()

/**
 * Badge component
 * Creates a badge with optional icon - molecule component (can contain multiple elements)
 */
export const Badge = ({
  config = badgeDefaultConfig,
  styling = badgeDefaultStyling,
  label,
  icon,
  iconPosition = 'left',
  dot = false,
  ...rest
}: IBadgeProps): HTMLElement => 
  config.loading ?
    <Skeleton width="w-16" height="h-6" rounded={config.rounded} /> :
    <span
      className={cn(
        styling.base,
        styling.background,
        styling.border,
        config.size ? badgeSizeClasses[config.size] : '',
        config.rounded ? roundedClasses[config.rounded] : '',
        config.className,
        styling.custom
      )}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      {dot ? <span className="w-1.5 h-1.5 rounded-full bg-current" /> : null}
      {iconPosition === 'left' && icon ? icon : null}
      {label}
      {iconPosition === 'right' && icon ? icon : null}
    </span>
