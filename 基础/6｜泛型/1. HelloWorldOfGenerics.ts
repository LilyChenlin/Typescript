// 恒等函数 identity function


// Type允许我们捕获用户提供的类型
function identity<Type>(arg: Type): Type {
    return arg;
}
// 调用方式
let output = identity<string>("myString");
// 类型参数推断
let output1 = identity("myString");