// 其他需要知道的类型
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%85%B6%E4%BB%96%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E7%B1%BB%E5%9E%8B-other-types-to-know-about
// void
// object
// unknown
// never
function fn(x: string | number) {
    if (typeof x === "string") {

    } else if (typeof x === "number") {

    } else {
        x; // x: never
    }
}