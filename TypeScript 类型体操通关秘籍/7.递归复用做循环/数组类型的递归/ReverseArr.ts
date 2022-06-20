type arr = [1, 2, 3, 4, 5]; 

// 提取 构造   固定数组长度的情况下
type ReverseArr<Arr extends unknown[]> =
    Arr extends [infer One, infer Two, infer Three, infer Four, infer Five]
    ? [Five, Four, Three, Two, One]
    : never;

type ReverseArrResult = ReverseArr<arr>

// 数组长度不确定
type ReverseArrNext<Arr extends unknown[]>
    = Arr extends [infer First, ...infer Rest]
    ? [...ReverseArrNext<Rest>, First]
    : Arr;

type ReverseArrNextResult = ReverseArrNext<arr>;