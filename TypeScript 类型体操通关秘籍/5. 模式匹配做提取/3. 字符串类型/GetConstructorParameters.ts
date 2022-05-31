// 取构造器的参数类型
type GetConstructorParameters<
    ConstructorType extends new (...args: any) => any
    > = ConstructorType extends new (...args: infer ParametersType) => any
    ? ParametersType
    : never;


interface PersonConstructor {
    new(name: string): Person;
}

type GetConstructorParametersRes = GetConstructorParameters<PersonConstructor>;