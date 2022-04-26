// 泛型类型

// 类型参数列表
function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;

// 类型参数可以使用不同的名字，只要数量和使用方式上一致即可
let myIdentity1: <Input>(arg: Input) => Input = identity;

// 以对象类型的调用签名的形式
let myIdentity2: { <Type>(arg: Type): Type } = identity;

// 第一个泛型接口
interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}
function identity3<Type>(arg: Type): Type {
    return arg;
}
let myIdentity3: GenericIdentityFn = identity;

// 将泛型参数作为整个接口的参数
interface GenericIdentityFn4<Type> {
    (arg: Type): Type;
}
function identity4<Type>(arg: Type): Type {
    return arg;
}
let myIdentity4: GenericIdentityFn4<number> = identity4;