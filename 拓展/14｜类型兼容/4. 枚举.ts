// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status1 = Status.Ready;
status1 = Color.Green; // Error