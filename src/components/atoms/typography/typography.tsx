/**
 * Typography component implementation
 * Framework: Pulsar
 */

import { cn, typographyVariantClasses } from '@pulsar-framework/design-tokens';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { Skeleton } from '../skeleton';
import { type ITypographyProps } from './typography.type';

// External to the component so it's compiled ONCE!
const typographyDefaultConfig = new ComponentConfigBuilder('primary').build();

// External to the component so it's compiled ONCE!
const typographyDefaultStyling = new ComponentStylingBuilder().base('text-neutral-900').build();

/**
 * Typography component
 * Creates a text element with variant styling - atomic component (single element output)
 */
export const Typography = ({
  config = typographyDefaultConfig,
  styling = typographyDefaultStyling,
  tag = 'span',
  variant = 'body1',
  truncate = false,
  noWrap = false,
  userSelect = true,
  children,
  ...rest
}: ITypographyProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-full" height="h-6" rounded={config.rounded} />;
  }

  const className = cn(
    styling.base,
    variant ? typographyVariantClasses[variant] : '',
    truncate ? 'truncate' : '',
    noWrap ? 'whitespace-nowrap' : '',
    userSelect === false ? 'select-none' : '',
    config.className,
    styling.custom
  );

  const Element = tag as keyof JSX.IntrinsicElements;

  return (
    <Element className={className} ariaBusy="false" {...rest}>
      {children}
    </Element>
  );
};
