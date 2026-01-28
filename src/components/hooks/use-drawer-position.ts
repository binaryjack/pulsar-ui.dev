import { useMemo, useEffect, useState } from '@pulsar-framework/pulsar.dev';

interface UseDrawerPositionOptions {
  containerRef: { current: HTMLElement | null };
  isOpen: boolean;
  desiredWidth: string;
  desiredHeight: string;
}

interface DrawerStyle {
  position: 'absolute' | 'fixed';
  width: string;
  height: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex: number;
}

/**
 * Hook to calculate drawer positioning based on container position
 * and available space in the viewport
 */
export function useDrawerPosition({
  containerRef,
  isOpen,
  desiredWidth,
  desiredHeight,
}: UseDrawerPositionOptions): () => DrawerStyle {
  const [style, setStyle] = useState<DrawerStyle>(() => ({
    position: 'absolute',
    width: desiredWidth,
    height: desiredHeight,
    top: '100%',
    left: '0',
    zIndex: 1000,
  }));

  useEffect(() => {
    if (!isOpen || !containerRef.current) {
      return;
    }

    const updatePosition = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Parse numeric values
      const drawerHeight = parseInt(desiredHeight);
      const drawerWidth = parseInt(desiredWidth);

      // Check space below
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Determine if drawer should open above or below
      const openAbove = spaceBelow < drawerHeight && spaceAbove > spaceBelow;

      // Determine horizontal position
      const spaceRight = viewportWidth - rect.left;
      const alignRight = spaceRight < drawerWidth;

      setStyle({
        position: 'absolute',
        width: desiredWidth,
        height: desiredHeight,
        top: openAbove ? undefined : '100%',
        bottom: openAbove ? '100%' : undefined,
        left: alignRight ? undefined : '0',
        right: alignRight ? '0' : undefined,
        zIndex: 1000,
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  });

  return () => style();
}
