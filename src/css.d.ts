/**
 * Type declarations for CSS imports
 * Allows importing CSS files as side-effect imports without TypeScript errors
 */

declare module '*.css' {
  const content: void;
  export default content;
}

declare module './showcase-styles.css';
declare module './styles/design-system.css';
declare module './styles/showcase-base.css';
declare module './styles/transitions.css';
