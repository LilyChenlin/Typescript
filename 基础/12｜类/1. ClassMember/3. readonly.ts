// 字段可以添加一个readonly前缀修饰符，这会阻止在构造函数之外的赋值
class Greeter {
    readonly name: string = "world";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    err() {
        this.name = "not ok";
    }
}

const g = new Greeter();
g.name = "also not ok";