// 类可以 extend 一个基类。一个派生类有基类所有的属性和方法，还可以定义额外的成员。

class Animal {
    move() {
        console.log("Moving along!");
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
d.woof(3);
d.move();

// 覆写属性
// 一个派生类可以覆写一个基类的字段或属性
class Base {
    greet() {
        console.log("Hello, world!");
    }
}

class Derived extends Base {
    greet(name?: string) {
        if (name === undefined) {
            super.greet();
        } else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d1 = new Derived();
d1.greet();
d.greet("reader");

// 通过一个基类引用指向一个派生类实例
const b: Base = d1;
b.greet();
