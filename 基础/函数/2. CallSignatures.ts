// 调用签名
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E8%A1%A8%E8%BE%BE%E5%BC%8F-function-type-expressions
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + "returned" + fn(6));
}
