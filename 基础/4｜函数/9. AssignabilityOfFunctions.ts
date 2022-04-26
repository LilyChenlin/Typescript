// 函数的可赋值性
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%AF%E8%B5%8B%E5%80%BC%E6%80%A7-assignability-of-functions

type voidFunc = () => void;
const f1: voidFunc = () => {
    return true;
}
const f2: voidFunc = () => true;

const f3: voidFunc = function () {
    return true;
}