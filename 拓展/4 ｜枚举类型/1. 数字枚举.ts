// 数字枚举
enum Direction {
    Up = 1, // 1
    Down, // 2
    Left, // 3
    Right // 4
}

// 也可以完全不适用初始化器
enum Direction1 {
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

// 通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
enum Response1 {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response1): void {

}

respond("Princess Caroline", Response1.Yes)

// 数字枚举可以被混入到计算过的和常量成员（如下所示）。 
// 简短地说，没有初始化器的成员要么在首位，要么必须在用数值常量或其他常量枚举成员初始化的数值枚举之后
enum E {
    A = getSomeValue(),
    B,
}