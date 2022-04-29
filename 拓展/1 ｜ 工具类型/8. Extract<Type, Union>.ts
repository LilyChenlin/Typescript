// Extract<Type, Union>
// 用于构造一个类型，它是从Type类型里面提取了所有可以赋给Union的类型。
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // type T0 = "a";

type T1 = Extract<string | number | (() => void), Function>; // type T1 = "string" | "number";