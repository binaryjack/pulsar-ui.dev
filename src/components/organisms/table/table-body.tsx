/**
 * TableBody component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITableBodyProps } from './table-body.type';

/**
 * TableBody component
 * Table body section
 */
export const TableBody = ({
  children,
  class: className,
  ...rest
}: ITableBodyProps & { striped?: boolean; hoverable?: boolean }): HTMLElement => {
  const striped = rest.striped;
  const hoverable = rest.hoverable;

  // Clone children to pass row index for striping
  const enhancedChildren = children.map((child, index) => {
    if (child && typeof child === 'object' && 'props' in child) {
      return {
        ...child,
        props: {
          ...child.props,
          isEven: index % 2 === 0,
          striped,
          hoverable,
        },
      };
    }
    return child;
  });

  return (
    <tbody className={cn(className)} {...rest}>
      {enhancedChildren}
    </tbody>
  );
};
