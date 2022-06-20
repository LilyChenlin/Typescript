// 实现一个提取不确定层数的Promise中的value类型的高级类型

type DeepPromiseValueType<P extends Promise<unknown>> =
    P extends Promise<infer ValueType>
    ? ValueType extends Promise<unknown>
    ? DeepPromiseValueType<ValueType>
    : ValueType
    : never;

type ttt = Promise<Promise<Promise<Record<string, any>>>>;
type DeepPromiseValueType1 = DeepPromiseValueType<ttt>;

// 进一步简化
type DeepPromiseValueType2<T> =
    T extends Promise<infer ValueType>
    ? DeepPromiseValueType2<ValueType>
    : T;

type ttt1 = Promise<Promise<Promise<Promise<number>>>>;
type DeepPromiseValueType22 = DeepPromiseValueType2<ttt1>;