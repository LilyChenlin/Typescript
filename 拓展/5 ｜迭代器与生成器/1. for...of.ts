let someArray = [1, "string", false];
for (let entry of someArray) {
    console.log(entry);
}

// for...of 对比 for...in
// for...in 迭代的是对象的键列表
// for...of 迭代对象的键对应的值
let list = [4, 5, 6];
for (let i in list) {
    console.log(i); // "0" "1" "2"
}

for (let i of list) {
    console.log(i); // "4" "5" "6"
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat" "Dog" "Hamster"
}