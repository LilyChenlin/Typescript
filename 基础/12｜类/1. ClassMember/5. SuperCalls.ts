// Super调用
// 在JS中，如果你有一个基类，需要在任何this.成员之前，先在构造函数里调用super()
class Base {
    k = 4;
}
class Derived extends Base {
    constructor() {
        console.log(this.k);
        super();
    }
}