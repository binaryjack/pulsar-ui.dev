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
const typographyDefaultStyling = new ComponentStylingBuilder()
  .base('text-neutral-900 transition-colors duration-200')
  .build();

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

  // Pulsar doesn't support dynamic component tags, so we need to explicitly render each
  switch (tag) {
    case 'h1':
      return (
        <h1 className={className} ariaBusy="false" {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className} ariaBusy="false" {...rest}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className} ariaBusy="false" {...rest}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className} ariaBusy="false" {...rest}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={className} ariaBusy="false" {...rest}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={className} ariaBusy="false" {...rest}>
          {children}
        </h6>
      );
    case 'p':
      return (
        <p className={className} ariaBusy="false" {...rest}>
          {children}
        </p>
      );
    case 'label':
      return (
        <label className={className} ariaBusy="false" {...rest}>
          {children}
        </label>
      );
    case 'div':
      return (
        <div className={className} ariaBusy="false" {...rest}>
          {children}
        </div>
      );
    case 'span':
    default:
      return (
        <span className={className} ariaBusy="false" {...rest}>
          {children}
        </span>
      );
  }
};
