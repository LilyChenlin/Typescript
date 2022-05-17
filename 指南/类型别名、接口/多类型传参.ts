const calcArray = <T, U>(name: T, age: U): { name: T, age: U } => {
    const res: { name: T, age: U } = { name, age };
    return res;
}

const res = calcArray<string, number>('lili', 7);
console.log(res)