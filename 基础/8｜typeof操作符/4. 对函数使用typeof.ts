// 对函数使用typeof
function identity<Type>(arg: Type): Type {
    return arg;
}

type result = typeof identity;