// ThisParameterType<Type>
// 用于提取一个函数类型Type的this (opens new window)参数类型，
// 如果这个函数类型没有this参数那么就返回unknown(opens new window)
function toHex(this: Number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}