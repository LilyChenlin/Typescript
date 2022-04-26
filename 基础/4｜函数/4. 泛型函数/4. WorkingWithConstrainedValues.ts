// 泛型约束实战
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E7%BA%A6%E6%9D%9F-constraints

function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
        return obj;
    } else {
        return { length: minimum }; // 函数理应返回与传入参数相同类型的对象，而不仅仅是符合约束的对象
    }
}