// 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：

// 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2. 成员的名字。

class Greeter {
    @formData("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}