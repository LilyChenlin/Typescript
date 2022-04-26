// 泛型约束
interface Lengthwise {
    length: number;
}

// 使用接口和extends关键词实现了约束
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}

loggingIdentity(3); // 被约束了
loggingIdentity([1, 2, 3]);
loggingIdentity({length: 10, value: 3});