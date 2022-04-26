// 剩余参数
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0-rest-parameters-and-arguments

function multiply(n: number, ...m: number[]) {
    return m.map(x => n * x);
}
const a = multiply(10, 1, 2, 3, 4);