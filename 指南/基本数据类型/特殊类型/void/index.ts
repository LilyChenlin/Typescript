// 当一个函数，没有返回值时，TS会默认他的返回值为 void 类型
const setInfo = (): void => { }

const setInfo1 = (): void => { return '1' };
const setInfo2 = (): void => {return} 