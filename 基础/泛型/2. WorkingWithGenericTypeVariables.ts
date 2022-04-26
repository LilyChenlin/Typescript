// 使用泛型类型变量

function identity<Type>(arg: Type): Type {
    console.log(arg.length)
    return arg;
}

function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentity1<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length);
    return arg;
}