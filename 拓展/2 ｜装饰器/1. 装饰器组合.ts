// 同样的，在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：

// 由上至下依次对装饰器表达式求值。
// 求值的结果会被当作函数，由下至上依次调用。
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() { }
}


// f(): evaluated
// g(): evaluated
// g(): called
// f(): called