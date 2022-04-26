// 泛型对象类型

interface Box<Type> {
    contents: Type;
}

interface StringBox {
    contents: string;
}
let boxA: Box<string> = { contents: "hello" };
boxA.contents;