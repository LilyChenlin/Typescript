// 方法
// 类中的函数属性被称为方法
class Point {
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x += n;
        this.y += n;
    }
}

// 在一个方法体内，它依然可以通过this.访问字段和其他的方法。 
let x: number = 0;
class C {
    x: string = "hello";
    m() {
        x = "world";
    }
}

// 如果方法体内有一个没有明确是该作用域内的名称，那么他总是指向外层作用域（闭包作用域）