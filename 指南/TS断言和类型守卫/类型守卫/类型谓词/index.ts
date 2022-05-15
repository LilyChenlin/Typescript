function isNumber(x: any): x is number {
    return typeof x === 'number';
}

console.log(isNumber(7));
console.log(isNumber('7'));
console.log(isNumber(true));