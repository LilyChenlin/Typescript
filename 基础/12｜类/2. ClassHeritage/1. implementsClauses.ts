// implements 语句

// 使用implements语句检查一个类是否满足一个特定的interface
interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping() {
        console.log("ping!");
    }
}

class Ball implements Pingable {
    pong() {
        console.log("pong!");
    }
}

// implements语句仅仅检查类是否按照接口类型实现，但它不会改变类的类型或者方法的类型
// 实现一个有可选属性的接口，并不会创建这个属性
interface A {
    x: number;
    y?: number;
}
class C implements A {
    x = 0;
}

const c = new C();
c.y = 10;