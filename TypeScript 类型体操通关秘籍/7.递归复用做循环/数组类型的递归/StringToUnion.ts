// 将字符串字面量类型的每个字符都提取出来组成联合类型 dong -> 'd' | 'o' | 'n' | 'g'

type StringToUnion<Str extends string> =
    Str extends `${infer One}${infer Two}${infer Three}${infer Four}`
    ? One | Two | Three | Four
    : never;

type StringToUnionResult = StringToUnion<'dong'>

// 字符串长度不确定
type StringToUnion1<Str extends string>
    = Str extends `${infer One}${infer Rest}`
    ? One | StringToUnion1<Rest>
    : never;

type StringToUnion1Result = StringToUnion1<'lily'>;