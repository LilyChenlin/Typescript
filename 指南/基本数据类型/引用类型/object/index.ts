let obj1: object = { a: 1, b: 2 };
obj1.a = 3; // error

let obj2: {
    a: number,
    b: number
} = {
    a: 1,
    b: 2
}


let obj: Object;
obj = 1;
obj = '1';
obj = true;
obj = false;
obj = null; // Type 'null' is not assignable to type 'Object'.(2322)