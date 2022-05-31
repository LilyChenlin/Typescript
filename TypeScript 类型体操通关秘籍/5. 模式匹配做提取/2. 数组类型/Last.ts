type GetLast<Arr extends unknown[]> =
    Arr extends [...unknown[], infer Last] ? Last : never;

type GetLastValue = GetLast<[1, 2, 3]>;