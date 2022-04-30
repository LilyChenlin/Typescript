let sym1 = Symbol();
let sym2 = Symbol("key");

// 1. Symbols是不可改变且唯一的
let sym3 = Symbol("key");
let sym4 = Symbol("key");
sym2 === sym3; // false

// 2. symbols也可以被用作对象属性的键
const sym = Symbol();
let obj = {
    [sym]: "value"
}
console.log(obj[sym]); // value

// 3. Symbols也可以与计算出的属性名声明相结合来声明对象的属性和类成员
const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol]() {
        return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"