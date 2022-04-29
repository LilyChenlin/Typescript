// 参数装饰器，然后依次是_方法装饰器_，访问符装饰器，或_属性装饰器_应用到每个实例成员。
// 参数装饰器，然后依次是_方法装饰器_，访问符装饰器，或_属性装饰器_应用到每个静态成员。
// _参数装饰器_应用到构造函数。
// _类装饰器_应用到类。

// function sealed(target) {
//     // do something with "target" ...
// }


// function sealed(constructor: Function) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }
// // 类装饰器
// @sealed
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }


function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
