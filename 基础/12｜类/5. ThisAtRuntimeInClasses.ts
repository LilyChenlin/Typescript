// 类运行时的this
class MyClass {
    name = "MyClass";
    getName() {
        return this.name;
    }
}

const c = new MyClass();
const obj = {
    name: "obj",
    getName: c.getName,
}

console.log(obj.getName()); // this指向obj

// 箭头函数

class MyClass1 {
    name = "MyClass";
    getName = () => {
        return this.name;
    }
}

const c1 = new MyClass1();
const g = c.getName; // MyClass
console.log(g());