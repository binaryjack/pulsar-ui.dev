/**
 * Toast options interface
 */

import type { AlertVariant } from '../../enums/alert-variant.type';

export interface ToastOptions {
  readonly message: string;
  readonly variant?: AlertVariant;
  readonly duration?: number;
}
