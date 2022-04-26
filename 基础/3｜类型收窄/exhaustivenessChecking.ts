// 穷尽检查 使用never
// https://ts.yayujs.com/handbook/Narrowing.html#%E7%A9%B7%E5%B0%BD%E6%A3%80%E6%9F%A5-exhaustiveness-checking 
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number
}

interface Triangle {
    kind: "triangle";
    sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            // Type 'Triangle' is not assignable to type 'never'.
            // default中类型被收窄为Triangle，但是任何类型都不能赋值给never类型，就会产生编译错误。通过这种方式，
            // 可以确保getArea函数总是穷尽了所有shape的可能性。
            return _exhaustiveCheck;
    }
}