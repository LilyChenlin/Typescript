// Parameters<Type>
// 用于根据所有Type中函数类型的参数构造一个元祖类型。

// 元组类型：基础/对象类型/元组类型
// 元组类型是另外一种 Array 类型，当你明确知道数组包含多少个元素，并且每个位置元素的类型都明确知道的时候，就适合使用元组类型。

declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>; // type T0 = []
type T1 = Parameters<(s: string) => void>; // type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;  // type T2 = [arg: unknown];
type T3 = Parameters<typeof f1>; // type T3 = [arg: {a: number; b: string}]
type T4 = Parameters<any>; // type T4 = unknown[]
type t5 = Parameters<never>; // type T5 = never;
type T6 = Parameters<string>; 
type T7 = Parameters<Function>;