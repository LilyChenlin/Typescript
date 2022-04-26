// 构造签名
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E6%9E%84%E9%80%A0%E7%AD%BE%E5%90%8D-construct-signatures
type CallOrConstruct = {
    new(s: string): Date; // 构造签名
    (n?: number): number;  // 调用签名
}

function fn(ctor: CallOrConstruct) {
    return new ctor('hello');
}
