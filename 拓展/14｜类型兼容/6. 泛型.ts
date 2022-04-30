interface Empty<T>{ }
let x: Empty<number>;
let y: Empty<string>;
x = y;

interface NotEmpty<T> {
    data: T
}

let x1: NotEmpty<number>;
let y2: NotEmpty<string>;
x1 = y2;

// 未指定泛型类型的泛型参数时，会把所有泛型参数当作any比较
let identity = function <T>(x: T): T {
    
}

let reverse = function <U>(y: U): U {

}
identity = reverse;