// 类和接口

// 类使用keyof
class Person {
    name: '羽哥你好正！'
}

type result = keyof Person;


class Person2 {
    [1]: string = "羽哥你超正的";
}

type result2 = keyof Person2;

// 接口使用keyof
interface Person3 {
    name: "string";
}

type result3 = keyof Person;