// 字面量类型：在TS中，我们可以指定参数的类型是什么，目前支持字符串、数字、布尔三种类型。
// 比如说我定义了 str 的类型是 '小杜杜' 那么str的值只能是小杜杜

let str: '小肚肚';
let num: 1 | 2 | 3 = 1;
let flag = true;

str = '小肚肚';
str = 'Donmesy'; 

num = 2;
num = 7;

flag = true;
flag = false;