// 属性修饰符
// 可选属性
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

// readonly属性
interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    console.log(`prop has the value '${obj.prop}'.`);

    obj.prop = "hello";
}

interface Home {
    readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++; // OK
}

function evict(home: Home) {
    home.resident = {
        // Cannot assign to 'resident' because it is a read-only property.
        name: "Victor the Evictor",
        age: 42
    }
}

interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}
let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42
}

let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // 42
writablePerson.age++;
console.log(readonlyPerson.age); // 43

// 索引签名

interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: string; // name 的类型并不匹配字符串索引的类型，所以类型检查器会给出报错：
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}