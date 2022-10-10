declare type TParseInput<T extends string> = {
    [key in T]?: string | TParseInput<T> | Array<string | TParseInput<T>>;
} & {
    [key: string]: string | TParseInput<T> | Array<string | TParseInput<T>>;
};
export declare class Pog<M extends string, A extends string> {
    readonly modifiers: Set<M>;
    readonly atoms: Set<A>;
    constructor(modifiers: Set<M>, atoms: Set<A>);
    protected formatString(str: string): string;
    protected addKeyToString(key: string, value: string, modifier?: boolean): string;
    protected formatArray(arr: Array<string | Record<string, unknown>>): string;
    protected addKeyToArray(key: string, arr: Array<string | Record<string, unknown>>, modifier?: boolean): string;
    parse(content: TParseInput<M> | string | Array<string | TParseInput<M>>, modifier?: boolean): string;
}
export {};
