// 静态成员
// 类可以有静态成员，静态成员跟类实例没有关系，可以通过类本身访问到

class MyClass {
    static x = 0;
    static printX() {
        console.log(MyClass.x);
    }
}
console.log(MyClass.x);
MyClass.printX();

// 静态成员同样可以使用public protected 和 privater这些可见性修饰符
class MyClass1 {
    private static x = 0
}
console.log(MyClass1.x);


class Base {
    static getGreeting() {
        return "Hello wold"
    }
}
class Derived extends Base {
    myGreeting = Derived.getGreeting();
}

// 特殊静态名称
class S {
    static name = "S!";
}

// 为什么没有静态类
