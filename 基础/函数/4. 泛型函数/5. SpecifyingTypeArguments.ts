// 声明类型参数
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F%E5%AE%9E%E6%88%98-working-with-constrained-values

// 1. 类型参数下移
// good
function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

// bad
function firstElement2<Type extends any[]>(arr: Type[]) {
    return arr[0];
}

// 2.使用更少的类型参数

// 3. 类型参数应该出现两次

