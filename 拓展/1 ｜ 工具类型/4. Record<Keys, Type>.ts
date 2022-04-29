// Record<Keys, Type>
// 用于构造一个对象类型，它所有的key(键)都是Keys类型，它所有的value(值)都是Type类型。
// 这个工具类型可以被用于映射一个类型的属性到另一个类型。

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Conn" },
    mordred: {age: 16, breed: "British Shorthair"},
}