// 可辨别联合
// https://ts.yayujs.com/handbook/Narrowing.html#%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD%E5%BC%8F-type-predicates

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number
}

type Shape = Circle | Square;
function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
}