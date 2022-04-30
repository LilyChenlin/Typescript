// 类有静态部分和实例部分的类型
class Animal {
    feet: number;
    constructor(name: string, numFeet: number){}
}

class Size {
    feet: number;
    constructor(numFeet: number){}
}

let a: Animal;
let s: Size;
a = s;
s = a;