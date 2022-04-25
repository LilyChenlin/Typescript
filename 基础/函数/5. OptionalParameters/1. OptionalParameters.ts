//可选参数
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0-optional-parameters

function f(x?: number) {
    console.log(x);
}
f(10); // ok
f(); // ok

declare function f1(x?: number): void;
f1(10);
f1();
f1(undefined);
