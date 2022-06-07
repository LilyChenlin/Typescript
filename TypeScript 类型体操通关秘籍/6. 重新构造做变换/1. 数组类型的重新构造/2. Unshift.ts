type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr];
type UnshiftRes = Unshift<[1, 2, 3], 0>