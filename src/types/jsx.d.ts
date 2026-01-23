/**
 * Global JSX namespace for Pulsar UI
 */

declare global {
  namespace JSX {
    interface Element extends Node {}
    type Child = string | number | boolean | null | undefined | Element;
    type Children = Child | Child[];
    
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export { };
