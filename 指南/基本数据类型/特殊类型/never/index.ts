// 表示一个函数永远不存在返回值，TS会认为类型为 never，那么与 void 相比,
// never应该是 void子集， 因为 void实际上的返回值为 undefined，而 never 连 undefined也不行


let error = (): never => {
    throw new Error("error");
}

let error1 = (): never => {
    while(true){}
}