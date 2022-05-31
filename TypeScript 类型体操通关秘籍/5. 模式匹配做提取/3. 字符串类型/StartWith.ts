// 判断字符串是否以某个前缀开头
type StartWith<Str extends string, Prefix extends string> = 
    Str extends `${Prefix}${string}` ? true : false;

type StartWithVal = StartWith<'Chenlily', 'Chen'>;
type StartWithVal1 = StartWith<'Chenlily', 'lily'>;