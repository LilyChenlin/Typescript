enum typeData {
    A,
    B,
    C = "C",
    D = "D",
    E = 7,
    F
}

let num = typeData.A; // 0
let num1 = typeData[0]; // 'A'
let num2 = typeData[1]; // 'B'
let num3 = typeData[2]; // undefined
let num4 = typeData['C']; // 'C'