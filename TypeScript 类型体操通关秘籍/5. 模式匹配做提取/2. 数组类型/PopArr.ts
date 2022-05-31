type PopArr<Arr extends unknown[]> = Arr extends [] ?
    [] : Arr extends [...infer Rest, unknown] ? Rest : never;

type PopArrResult = PopArr<[1, 2, 3]>;