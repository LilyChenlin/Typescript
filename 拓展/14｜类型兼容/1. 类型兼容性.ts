// // 类型兼容性
// interface Pet {
//     name: string;
// }
// class Dog {
//     name: string;
// }

// let pet: Pet;
// pet = new Dog();

// 如果x要兼容y，那么y至少具有与x相同的成员
interface Pet {
    name: string;
}
let pet: Pet;
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };

// dog类型是否可以赋值给pet类型 将检查pet的每个属性，并在dog中查看是否有对应的兼容属性
function greet(pet: Pet) {
    console.log("Hello, " + pet.name);
}
greet(dog);


// 比较两个函数
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error

// 处理返回值类型
// 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
let x1 = () => ({ name: "Alice" });
let y1 = () => ({ name: "Alice", location: "Seattle" });
x1 = y1;
y1 = x1;