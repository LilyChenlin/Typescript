enum numberType {
    A,
    B,
    C = 7,
    D
}

let num = numberType.A; // 0
let num0 = numberType[0]; // "A"
let num1 = numberType[1]; // "B"
let num2 = numberType[2]; // undefined
let num3 = numberType[3]; // undefined