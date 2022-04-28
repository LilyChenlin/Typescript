// 构造函数
class Point {
    x: number;
    y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Point1 {
    constructor(x: number, y: string);
    constructor(x: string);
    constructor(xs: any, y?: any) {
        
    }
}