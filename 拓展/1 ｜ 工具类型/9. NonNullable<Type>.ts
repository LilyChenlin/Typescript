// NonNullable<Type>

// 用于构造一个类型，这个类型从Type中排除了所有的null、undefined的类型。
type T0 = NonNullable<string | number | undefined>; // type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>; // type T1 = string[]