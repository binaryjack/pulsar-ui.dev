/**
 * Footer component implementation
 * Framework: Pulsar
 * Organism: Page footer with copyright and links
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Skeleton } from '../../atoms/skeleton';
import { Typography } from '../../atoms/typography';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { type IFooterProps } from './footer.type';

// External to the component so it's compiled ONCE!
const footerDefaultConfig = new ComponentConfigBuilder('primary').build();

// External to the component so it's compiled ONCE!
const footerDefaultStyling = new ComponentStylingBuilder()
  .base('bg-neutral-50/95 backdrop-blur-sm border-t border-neutral-200 transition-all duration-300')
  .build();

/**
 * Footer component
 * Creates a page footer with copyright and links - organism component
 */
export const Footer = ({
  config = footerDefaultConfig,
  styling = footerDefaultStyling,
  copyright,
  links,
  ...rest
}: IFooterProps): HTMLElement =>
  config.loading ? (
    <Skeleton width="w-full" height="h-32" rounded="none" />
  ) : (
    <footer
      className={cn(styling.base, config.className, styling.custom)}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      <div className="container mx-auto px-4 py-8">
        {links ? <div className="mb-4">{links}</div> : null}
        {copyright ? (
          <Typography
            variant="caption"
            config={new ComponentConfigBuilder('primary').className('text-neutral-500').build()}
          >
            {copyright}
          </Typography>
        ) : null}
      </div>
    </footer>
  );
