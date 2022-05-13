// 除了数字类型和字符串类型之外，还有一种特殊的类型，那就是常量枚组，也就是通过const去定义enum，但这种类型不会编译成任何 JS, 只会编译对应的值
const enum numberType {
    A,
    B,
    C = 7,
    D
}

let num = numberType.A; // 0
let num2 = numberType.C; // 7

