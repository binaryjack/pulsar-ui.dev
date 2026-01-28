/**
 * Tooltip component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { TooltipPlacement } from '../../enums/tooltip-placement.type';

export interface ITooltipProps extends Pulsar.HtmlExtends<'div'> {
  readonly content: string;
  readonly placement?: TooltipPlacement;
  readonly showDelay?: number;
  readonly hideDelay?: number;
  readonly children: JSX.Children;
}

/**
 * Tooltip component
 * Simple tooltip with placement and delay support
 */
export const Tooltip = ({
  content,
  placement = 'top',
  showDelay = 200,
  hideDelay = 0,
  children,
  className,
  ...rest
}: ITooltipProps): HTMLElement => {
  let showTimeout: number | null = null;
  let hideTimeout: number | null = null;
  let tooltipElement: HTMLElement | null = null;

  const placementClasses: Record<TooltipPlacement, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const showTooltip = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }

    showTimeout = setTimeout(() => {
      if (tooltipElement) {
        tooltipElement.classList.remove('opacity-0', 'pointer-events-none');
        tooltipElement.classList.add('opacity-100');
      }
    }, showDelay) as unknown as number;
  };

  const hideTooltip = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
      showTimeout = null;
    }

    hideTimeout = setTimeout(() => {
      if (tooltipElement) {
        tooltipElement.classList.remove('opacity-100');
        tooltipElement.classList.add('opacity-0', 'pointer-events-none');
      }
    }, hideDelay) as unknown as number;
  };

  return (
    <div
      className={cn('relative inline-block', className)}
      onmouseenter={showTooltip}
      onmouseleave={hideTooltip}
      {...rest}
    >
      {children}
      <div
        ref={(el) => (tooltipElement = el)}
        className={cn(
          'absolute z-50 px-2 py-1 text-sm text-white bg-neutral-900 rounded-md whitespace-nowrap',
          'transition-opacity duration-200 opacity-0 pointer-events-none',
          placementClasses[placement]
        )}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};
