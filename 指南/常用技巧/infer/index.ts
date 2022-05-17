// 可以是使用为条件语句，可以用 infer 声明一个类型变量并且对它进行使用
type Info<T> = T extends { a: infer U, b: infer U } ? U : never;

type Props = Info<{ a: string, b: number }>; // type Props = string | number

type Props1 = Info<number>; // type Props = never