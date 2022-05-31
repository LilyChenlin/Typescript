type ShiftArr<Arr extends unknown[]> = Arr extends [] ? []
    : Arr extends [unknown, ...infer Rest] ? Rest : never;
    
type ShiftArrValue = ShiftArr<[1, 2, 3]>;