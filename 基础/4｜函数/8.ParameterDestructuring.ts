// 参数结构
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%84-parameter-destructuring

function sum({ a, b, c }: {a : number, b: number, c: number}) {
    console.log(a + b + c);
}

// 另一种写法
type ABC = { a: number; b: number; c: number };
function sum1({ a, b, c }: ABC) {
    console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });