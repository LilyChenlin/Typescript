// 抽象类
abstract class Person {
    constructor(public name: string) { }
    
    // 抽象方法
    abstract setAge(age: number): void
}


class Child extends Person {
    constructor(name: string) {
        super(name)
    }

    setAge(age: number): void {
        console.log(`我的名字是${this.name},年龄是${age}`);
    }
}

// 抽象类不能被实例化
let res = new Person('lily');

// 实现了所有抽象方法的子类才能被实例化
let res1 = new Child('lily222');
res1.setAge(7);