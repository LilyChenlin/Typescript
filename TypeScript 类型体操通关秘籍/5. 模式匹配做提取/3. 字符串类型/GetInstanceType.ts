// 提取构造器返回值的类型
interface Person {
    name: string;
}
interface PersonConstructor {
    new(name: string): Person
}

type GetInstanceType<
    ConstructorType extends new (...args: any) => any
    > = ConstructorType extends new (...args: any) => infer InstanceType
    ? InstanceType
    : any;