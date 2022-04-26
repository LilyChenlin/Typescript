// 泛型类

// 在类名后面，使用尖括号<>包裹住类型参数列表
class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
}

// 使用number类型
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
}

// 使用string类型
let stringNumber = new GenericNumber<string>();
stringNumber.zeroValue = "";
stringNumber.add = function (x, y) {
    return x + y;
}
console.log(stringNumber.add(stringNumber.zeroValue, "test"));