type tuple1 = [1, 2];
type tuple2 = ['lily', 'chen'];

// 拼接成
type tupleZip = [[1, 'lily'], [2, 'chen']]


// 1. 合并两个数组
type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> =
    One extends [infer OneFirst, infer OneSecond]
    ? Other extends [infer OtherFirst, infer OtherSecond]
    ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]] : [] : [];

type ZipResult = Zip<tuple1, tuple2>

// 2. 合并多个数组
type Zip2<One extends unknown[], Other extends unknown[]> =
    One extends [infer OneFirst, ...infer OneRest]
    ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>] : []
    : [];

type Zip2Result = Zip2<[1, 2, 3, 4, 5], ['1', '2', '3', '4', '5']>;