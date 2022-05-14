class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        console.log(`我的姓名是：${this.name}`)
        return this.name
    }

    setName(name: string) {
        console.log(`设置姓名为：${name}`)
        this.name = name
    }
}

class Child extends Person {
    tel: number
    constructor(name: string, age: number, tel: number) {
        super(name, age);
        this.tel = tel;
    }

    getTel() {
        console.log(`电话号码是${this.tel}`)
        return this.tel
    }
}

let res = new Child('lily', 7, 123456);
console.log(res);
console.log(res.age);
res.setName('lily222');
res.getName(); //我的姓名是：lily222
res.getTel(); // 电话号码是123456