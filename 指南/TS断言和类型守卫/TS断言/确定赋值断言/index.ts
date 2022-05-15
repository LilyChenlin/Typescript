// 在TS 2.7版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个 ! 号，以告诉TS该属性会被明确赋值。
let num: number;
let num1!: number;

const setNumber = () => num = 7;
const setNumber1 = () => num1 = 7;

setNumber();
setNumber1();

console.log(num)
console.log(num1)