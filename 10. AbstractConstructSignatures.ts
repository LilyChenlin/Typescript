// 抽象构造签名

abstract class Base {
    abstract getName(): string;
    
    printName() {
        console.log("Hello," + this.getName());
    }
}

class Derived extends Base {
    getName() {
        return "world";
    }
}
// 继承一些抽象类产生一个类的实例
function greet(ctor: typeof Base) {
    const instance = new ctor();
    instance.printName();
}

greet(Base);


// 写一个函数接受传入一个构造签名
function greet1(ctor: new () => Base) {
    const instance = new ctor();
    instance.printName();
}

greet1(Derived);
greet1(Base);