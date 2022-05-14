class Person {
    public name: string
    protected age: number
    private tel: number

    constructor(name: string, age: number, tel: number) {
        this.name = name
        this.age = age
        this.tel = tel
    }
}


class Child extends Person {
    constructor(name: string, age: number, tel: number) {
        super(name, age, tel);
    }

    getName() {
        console.log(`我的名字是${this.name}, 年龄是${this.age}`);
    }

    getTel() {
        console.log(`电话号码是${this.tel}`)
    }
}

const res = new Child('lily', 7, 123456)
console.log(res.name) // ok Domesy
console.log(res.age) // error
console.log(res.tel) // error
