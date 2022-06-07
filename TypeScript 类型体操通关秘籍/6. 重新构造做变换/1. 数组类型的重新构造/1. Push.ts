type tuple = [1, 2, 3];
type Push<Arr extends unknown[], Ele> = [...Arr, Ele];

type PushResult = Push<[1, 2, 3], 4>;