// ConstructorParameters<Type>
// 用于根据Type构造函数类型来构造一个元祖或数组类型，
// 它产生一个带着所有参数类型的元组（或者返回never如果Type不是一个函数）。

type T0 = ConstructorParameters<ErrorConstructor>; // type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>; // type T1 = string[];
type T2 = ConstructorParameters<RegExpConstructor>; // type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>; // type T3 = unknown[]
