// unknow会对值进行检测，而类型any不会做检测操作，
// any类型可以赋值给任何类型，但unknow只能赋值给unknow和any类型

let u: unknown;
let a: any;

u = '1';
u = 1;
u = true;
u = [1, 2, 3];

let value: any = u;
let value1: any = a;
let value2: unknown = u;
let value3: unknown = a;

let value4: string = u; // error
let value5: string = a;

u.set();
a.set();