/**
 * Utility functions for class name composition
 */
/**
 * Combine multiple class names into a single string
 */
export declare function cn(...classes: (string | undefined | null | false)[]): string;
/**
 * Create a class name based on a condition
 */
export declare function conditional(condition: boolean, truthyClass: string, falsyClass?: string): string;
/**
 * Build class names from a configuration object
 */
export declare function buildClasses(config: Record<string, boolean>): string;
//# sourceMappingURL=class-names.d.ts.map