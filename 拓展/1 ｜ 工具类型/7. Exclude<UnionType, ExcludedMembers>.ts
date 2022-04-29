// Exclude<UnionType, ExcludedMembers>
// 用于构造一个类型，它是从UnionType联合类型里面排除了所有可以赋给ExcludedMembers的类型。
type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c";

type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // type T1 = "b"

type T2 = Exclude<string | number | (() => void), Function>; // type T2 = string | number