// readonly 元组类型
function doSomething(pair: readonly [string, number]) {

}

// 推断成元组
let point = [3, 4] as const;
function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
distanceFromOrigin(point);

let point1 = [3, 4] as const;
function distanceFromOrigin1(pair: readonly [number, number]) {
    return Math.sqrt(pair[0] ** 2 + pair[1] ** 2);
}
distanceFromOrigin(point1);