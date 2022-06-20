type Includes<Arr extends unknown[], FindItem> =
    Arr extends [infer First, ...infer Rest]
    ? IsEqual<First, FindItem> extends true
    ? true
    : Includes<Rest, FindItem>
    : false;

type IsEqual<A, B> = (A extends B ? true : false)
    & (B extends A ? true : false);

type IncludesResult = Includes<[1, 2, 3, 4, 5], 4>;
type IncludesResult1 = Includes<[1, 2, 3, 4, 5], 6>;