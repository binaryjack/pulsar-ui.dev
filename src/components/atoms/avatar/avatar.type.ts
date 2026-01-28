/**
 * Avatar component props interface
 */

import type { Pulsar } from 'pulsar';
import type { AvatarSize } from '../enums';

export interface IAvatarProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Avatar size
   * @default 'md'
   */
  readonly size?: AvatarSize;

  /**
   * Image source URL
   */
  readonly src?: string;

  /**
   * Alt text for image
   */
  readonly alt?: string;

  /**
   * Name to generate initials from
   */
  readonly name?: string;

  /**
   * Show status indicator
   */
  readonly status?: 'online' | 'offline' | 'busy' | 'away';

  /**
   * Custom background color
   */
  readonly bg?: string;
}
