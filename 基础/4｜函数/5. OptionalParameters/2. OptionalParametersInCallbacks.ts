// 回调中的可选参数
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0-optional-parameters


function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a, i) => {
    console.log(a)
})