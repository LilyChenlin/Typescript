type CapitalizeStr<Str extends string> =
    Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}` : Str;

type CapitalizeStrRes = CapitalizeStr<'lily'>;
