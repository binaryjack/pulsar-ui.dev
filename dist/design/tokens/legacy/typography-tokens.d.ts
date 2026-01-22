/**
 * Design tokens - Typography
 */
export interface ITypographyTokens {
    readonly fontFamily: {
        readonly sans: string;
        readonly serif: string;
        readonly mono: string;
    };
    readonly fontSize: {
        readonly xs: string;
        readonly sm: string;
        readonly base: string;
        readonly lg: string;
        readonly xl: string;
        readonly '2xl': string;
        readonly '3xl': string;
        readonly '4xl': string;
        readonly '5xl': string;
    };
    readonly fontWeight: {
        readonly light: string;
        readonly normal: string;
        readonly medium: string;
        readonly semibold: string;
        readonly bold: string;
    };
    readonly lineHeight: {
        readonly tight: string;
        readonly normal: string;
        readonly relaxed: string;
    };
}
export declare const typographyTokens: ITypographyTokens;
//# sourceMappingURL=typography-tokens.d.ts.map