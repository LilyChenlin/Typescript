// 接口继承与交叉类型
// https://ts.yayujs.com/handbook/ObjectTypes.html#%E6%8E%A5%E5%8F%A3%E7%BB%A7%E6%89%BF%E4%B8%8E%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B-interfaces-vs-intersections
interface Colorful {
    color: string;
}

// 使用继承重写类型会导致编译错误
interface ColorfulSub extends Colorful {
    color: number;
}

// 但是交叉类型不会
type ColorfulSub1 = Colorful & {
    color: number
}