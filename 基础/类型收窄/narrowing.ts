// 类型收窄
// 实现一个函数padLeft
// 1. 如果参数 padding 是一个数字，我们就在 input 前面添加同等数量的空格，
// 2. 而如果 padding 是一个字符串，我们就直接添加到 input 前面。

function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(' ') + input;
    } else {
        return padding + input;
    }
}

console.log(padLeft(2, 'cll'));