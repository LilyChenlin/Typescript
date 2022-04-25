// 泛型函数
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0-generic-functions
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const s = firstElement(["a", "b", "c"]); // string

const n = firstElement([1, 2, 3]); // number

const u = firstElement([]); // undefined
