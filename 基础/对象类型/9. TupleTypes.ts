// 元组类型 
// 元组类型是另外一种 Array 类型，当你明确知道数组包含多少个元素，并且每个位置元素的类型都明确知道的时候，就适合使用元组类型。
// https://ts.yayujs.com/handbook/ObjectTypes.html#%E5%85%83%E7%BB%84%E7%B1%BB%E5%9E%8B-tuple-types
type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
    const a = pair[0];
    console.log(a);
    const b = pair[1];
    console.log(b);
    const c = pair[2]; // Tuple type '[string, number]' of length '2' has no element at index '2'.
}
doSomething(["hello", 42]);
// 数组解构
function doSomething(stringHash: [string, number]) {
    const [inputString, hash] = stringHash;
    console.log(inputString);
    console.log(hash);
}

interface StringNumberPair1 {
    length: 2;
    0: string;
    1: number;

    slice(start?: number, end?: number): Array<string | number>;
}

// 可选属性
function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
}

// 等同于
function readButtonInput2(name: string, version: number, ...input: boolean[]) {

}