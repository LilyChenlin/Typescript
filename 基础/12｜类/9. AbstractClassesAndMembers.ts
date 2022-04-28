// TypeScript 中，类、方法、字段都可以是抽象的（abstract）。

// 抽象方法或者抽象字段是不提供实现的。这些成员必须存在在一个抽象类中，这个抽象类也不能直接被实例化。

// 抽象类的作用是作为子类的基类，让子类实现所有的抽象成员。当一个类没有任何抽象成员，他就会被认为是具体的

abstract class Base {
    abstract getName(): string;
    
    printName() {
        console.log("Hello," + this.getName());
    }
}

//抽象类不能被实例化
const b = new Base();

// 写一个派生类，实现抽象成员
class Derived extends Base {
    getName() {
        return "world";
    }
}

const d = new Derived();
d.printName();

// 如果我们忘记实现基类的抽象成员，会得到一个报错
class Derived1 extends Base {
    
}