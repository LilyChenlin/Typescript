// 获取一个对象给定属性名的值
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m");