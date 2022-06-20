//  传入5和元素类型，构造一个长度为5的该元素类型构成的数组
type BuildArray<Length extends number,
    Ele = unknown,
    Arr extends unknown[] = []
    > = Arr['length'] extends Length
    ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;

type BuildArrayResult = BuildArray<5>
type BuildArrayResult1 = BuildArray<5, number>
type BuildArrayResult2 = BuildArray<5, number, [1, 2]>
