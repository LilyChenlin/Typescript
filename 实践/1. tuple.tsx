// T 泛型 捕获参数类型
// T extends string[] 泛型约束 传入的参数需要是一个数组，数组中的元素需要是string类型
const tuple = <T extends string[]>(...args: T) => args;

// const ButtonHTMLTypes: ["submit", "button", "reset"]
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');

type ButtonHTMLType = typeof ButtonHTMLTypes[number];
type ButtonHTMLType1 = typeof ButtonHTMLTypes;


// 方法二
const obj = {
    name: 'lily',
    age: 17,
    sex: 'girl'
};

type objType = keyof typeof obj;

// 方法三
const arr = ['name', 'age', 'sex'] as const;
type ArrType = typeof arr;
type ArrType1 = typeof arr[number];