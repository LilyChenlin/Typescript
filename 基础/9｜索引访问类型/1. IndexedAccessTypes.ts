// 索引访问类型
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // type Age = number;

// 使用联合、keyof或者其他类型
type I1 = Person["age" | "name"]; // type I1 = string | number;
type I2 = Person[keyof Person]; // type I2 = string | number | boolean;

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // type I3 = string | boolean;

type I4 = Person["girl"];

// 使用number来获取数组元素的类型
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
]

type Person1 = typeof MyArray[number]; 

type Age1 = typeof MyArray[number]["age"];

type Age2 = Person1["age"];

// 作为索引的只能是类型

// No
const key = "age";
type Age3 = Person[key];

// Yes
type keyYes = "age";
type AgeYes = Person[keyYes];

// 实战
// 一个页面要用在不同的 APP 里，比如淘宝、天猫、支付宝，根据所在 APP 的不同，调用的底层 API 会不同，我们可以这样写

// 1. 使用as const将数组变为readonly的元组类型
const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;

type appTypeOf = typeof APP; //type appTypeOf = readonly ["TaoBao", "Tmall", "Alipay"]
// 2. 通过typeof获取APP的类型，
type app = typeof APP[number];
function getPhoto(app: app) {

}
getPhoto('TaoBao');
getPhoto('whatever');