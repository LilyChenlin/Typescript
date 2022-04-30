// 运行时的枚举
enum E {
    X, Y, Z
}

function f(obj: { X: number }) {
    return obj.X
}
f(E);

// 编译时的枚举
// 尽管一个枚举是在运行时真正存在的对象，但keyof关键字的行为与其作用在对象上时有所不同。
// 应该使用keyof typeof来获取一个表示枚举里所有字符串key的类型。
enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}
// 等同于 type LogLevelStrings = 'ERROR' | 'WART' | 'INFO' | 'DEBUG'
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}

// 反向映射
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

// const枚举
const enum Enum {
    A = 1,
    B = A * 2
}