// 函数重载
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD-function-overloads
// 通过写重载签名 (overlaod signatures) 说明一个函数的不同调用方法

// 重载签名
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// new Date(yyyy,mth,dd);
// new Date(ms);


// 实现签名
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3); // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.


// 重载签名和实现签名（Overload Signatures and the Implementation Signature）
// 1. 实现签名对外界来说是不可见的。当写一个重载函数的时候，你应该总是需要来两个或者更多的签名在实现签名之上。
// 2. 实现签名必须和重载签名必须兼容

function fn(x: boolean): void;
// Argument type isn't right
function fn(x: string): void;
// This overload signature is not compatible with its implementation signature.
function fn(x: boolean | string) { }

// 函数重载好的写法

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
    return x.length;
}

len("");
len([0]);
len(Math.random() > 0.5 ? "hello" : [0]);

// 不如使用
function len1(x: any[] | string) {
    return x.length;
}