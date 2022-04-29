// Required<Type> 用于构造一个Type下面的所有属性全都设置为必填的类型，
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 };