// 可选参数
const setInfo1 = (name: string, age?: number) => console.log(name, age);
setInfo1('Domesy');
setInfo1('Domesy', 7)


// 默认参数
const setInfo2 = (name: string, age: number = 11) => console.log(name, age);
setInfo2('lily'); // lily 11
setInfo2('lily', 7); // lily 7

// 剩余参数
const allCount = (...numbers: number[]) => console.log(numbers.reduce((total, cur) => total += cur, 0))