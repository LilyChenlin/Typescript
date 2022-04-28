// 字段 Fields
class Point {
    x: number;
    y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

// 字段设置初始值
class Point1 {
    x = 0;
    y = 0;
}
const pt1 = new Point();
console.log(`${pt.x}, ${pt.y}`); // 0 0