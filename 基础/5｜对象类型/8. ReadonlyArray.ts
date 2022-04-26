// ReadonlyArray类型
// https://ts.yayujs.com/handbook/ObjectTypes.html#readonlyarray-%E7%B1%BB%E5%9E%8B-the-readonlyarray-type
function doStuff(values: ReadonlyArray<string>) {
    const copy = values.slice();
    values.push("hello!");
}

const roArray: ReadonlyArray<string> = ["red", "yellow", "blue"];

// 简短写法
function doStuff1(values: readonly String[]) {
    const copy = values.slice();
    values.push("hello");
}