
// 成员可见性

// public
class Greeter {
    public greet() {
        console.log("hi!");
    }
}

const g = new Greeter();
g.greet();

// protect
// protect成员仅仅对子类可见

class Greeter1 {
    public greet() {
        console.log("Hello," + this.getName());
    }

    protected getName() {
        return "hi";
    }
}
class SpecialGreeter extends Greeter1 {
    public howdy() {
        console.log("Howdy," + this.getName());
    }
}

const g1 = new SpecialGreeter();
g.greet();
g.getName();

// 受保护成员的公开
class Base {
    protected m = 10;
}
class Derived extends Base {
    m = 15;
}

const d = new Derived();
console.log(d.m)

// 交叉登记受保护成员访问
class Base1 {
    protected x: number = 1;
}

class Derived1 extends Base1 {
    protected x: number = 5;
}

class Derived2 extends Base1 {
    f1(other: Derived2) {
        other.x = 10;
    }
    f2(other: Base) {
        other.x = 10;
    }
}

// private
// private不允许访问成员，即便是子类
class Base4 {
    private x = 0;
}
const b = new Base();
console.log(b.x);

class Derived4 extends Base4 {
    showX() {
        console.log(this.x);
    }
}

// 交叉实例私有成员访问
class A {
    private x = 10;

    public sameAs(other: A) {
        return other.x === this.x;
    }
}