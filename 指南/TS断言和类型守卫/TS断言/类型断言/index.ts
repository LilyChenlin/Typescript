// 尖括号
let num: any = 'lilyChen'
let res1: number = (<string>num).length;

// as语法
let str: any = 'Chen';
let res: number = (str as string).length;

// 尖括号语法在react中会报错，原因是与JSX语法产生冲突