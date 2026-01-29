/**
 * RetractablePanel component implementation
 * Framework: Pulsar
 * Organism: Collapsible panel with header, body, and footer
 * Pattern: Fully declarative with CSS-only animations, controlled by parent
 */

import { cn, roundedClasses, shadowClasses } from '@pulsar-framework/design-tokens';
import { Button } from '../../molecules/button';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { type IRetractablePanelProps } from './retractable-panel.type';

// External to the component so it's compiled ONCE!
const panelDefaultConfig = new ComponentConfigBuilder('primary')
  .rounded('lg')
  .shadow('md')
  .build();

// External to the component so it's compiled ONCE!
const panelDefaultStyling = new ComponentStylingBuilder()
  .base('bg-white overflow-hidden')
  .border('border border-neutral-200')
  .build();

/**
 * RetractablePanel component
 * Creates a collapsible panel that can expand/collapse horizontally or vertically
 * Uses CSS transitions for smooth animations without imperative DOM manipulation
 * 
 * State is controlled by parent via isExpanded prop and onToggle callback
 */
export const RetractablePanel = ({
  config = panelDefaultConfig,
  styling = panelDefaultStyling,
  header,
  footer,
  children,
  direction = 'vertical',
  isExpanded = true,
  position = 'none',
  maxHeight = '400px',
  maxWidth = '400px',
  onToggle,
  showToggleButton = true,
  toggleIcon,
  animationDuration = 300,
  ...rest
}: IRetractablePanelProps): HTMLElement => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(!isExpanded);
    }
  };

  const positionClasses = {
    top: 'fixed top-0 left-0 right-0 z-50',
    right: 'fixed top-0 right-0 bottom-0 z-50',
    bottom: 'fixed bottom-0 left-0 right-0 z-50',
    left: 'fixed top-0 left-0 bottom-0 z-50',
    none: 'relative',
  };

  const className = cn(
    styling.base,
    styling.border,
    positionClasses[position],
    config.rounded ? roundedClasses[config.rounded] : '',
    config.shadow ? shadowClasses[config.shadow] : '',
    config.className,
    styling.custom
  );

  // Content wrapper classes - uses CSS for collapse animation
  const contentClassName = cn(
    'overflow-hidden transition-all',
    direction === 'vertical' ? 'flex flex-col' : 'flex flex-row'
  );

  // Build content style dynamically based on expanded state
  const transitionProp = direction === 'vertical' ? 'max-height' : 'max-width';
  const maxSize = direction === 'vertical' ? maxHeight : maxWidth;
  
  const contentStyle = [
    `transition-duration: ${animationDuration}ms`,
    `transition-property: ${transitionProp}`,
    'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',
    `${transitionProp}: ${isExpanded ? maxSize : '0'}`,
  ].join('; ');

  // Toggle icon rotation based on expanded state
  const iconRotation = isExpanded ? '0deg' : (direction === 'vertical' ? '-180deg' : '-90deg');

  // Default toggle icon (chevron) with rotation based on expanded state
  const defaultToggleIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={`transition: transform ${animationDuration}ms ease; transform: rotate(${iconRotation})`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className={className} {...rest}>
      {/* Header */}
      {header && (
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex-1">{header}</div>
          {showToggleButton && (
            <Button
              config={new ComponentConfigBuilder('primary').variant('ghost').size('sm').build()}
              onclick={handleToggle}
              aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
              aria-expanded={isExpanded ? 'true' : 'false'}
            >
              {toggleIcon || defaultToggleIcon}
            </Button>
          )}
        </div>
      )}

      {/* Body (collapsible content) - CSS-only animation */}
      <div className={contentClassName} style={contentStyle}>
        <div className="px-6 py-4">{children}</div>
      </div>

      {/* Footer - only shown when expanded */}
      {footer && isExpanded && (
        <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50">{footer}</div>
      )}
    </div>
  );
};
