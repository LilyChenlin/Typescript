// 推断
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E6%8E%A8%E6%96%AD-inference
function map<Input, OutPut>(arr: Input[], func: (arg: Input) => OutPut): OutPut[] {
    return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// parsed: number[]
// n: string