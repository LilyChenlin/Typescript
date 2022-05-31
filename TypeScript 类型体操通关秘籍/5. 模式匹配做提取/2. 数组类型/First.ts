type GetFirstArr<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never;

type GetFirstResult = GetFirstArr<[1, 2, 3]>;
type GetFirstResult1 = GetFirstArr<[]>;