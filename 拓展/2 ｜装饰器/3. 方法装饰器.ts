// 方法装饰器

// 下面是一个方法装饰器（@enumerable）的例子，应用于Greeter类的方法上：

// 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
// 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2. 成员的名字。
// 3. 成员的_属性描述符_。
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello," + this.greeting;
    }
}