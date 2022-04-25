// 交叉类型
// https://ts.yayujs.com/handbook/ObjectTypes.html#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B-intersection-types

interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
    console.log(circle.color);
    console.log(circle.radius);
}
draw({color: "blue", radius: 42})
