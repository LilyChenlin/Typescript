// typeof 类型操作符
let s = "hello";
let n: typeof s;

// 传入一个函数类型，ReturnType<T> 会返回该函数的返回值的类型
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;// type K = boolean;

function f() {
    return { x: 10, y: 3 };
}
// 报错
type P = ReturnType<f>; 

type P1 = ReturnType<typeof f>;