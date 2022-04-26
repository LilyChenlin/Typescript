// 对象类型
// https://ts.yayujs.com/handbook/ObjectTypes.html#%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B-object-types
function greet(person: { name: string; age: number }) {
    return "Hello" + person.name;
}

// 写法二
interface Person {
    name: string;
    age: number
}
function greet1(person: Person) {
    return "Hello" + person.name;
}

// 写法三
type Person3 = {
    name: string;
    age: number;
}
function greet3(person: Person) {
    return "Hello" + person.name;
}