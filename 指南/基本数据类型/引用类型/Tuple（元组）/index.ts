// 限制元素的类型并且限制个数

let t: [number, string] = [1, "2"];
let t1: [number, string] = [1, 2];

let t2: [number, string] = [1];

let t3: [number, string] = [1, '1', true]

// 在TS中, 是允许对 Tuple 扩增的（也就是允许使用 push方法），但在访问上不允许

let t4: [number, string] = [1, '1'];
t4.push(2); // [1, '1', 2]


let a = t[0]; // 1
let b = t[1]; // '1'
let c = t[2]; // error