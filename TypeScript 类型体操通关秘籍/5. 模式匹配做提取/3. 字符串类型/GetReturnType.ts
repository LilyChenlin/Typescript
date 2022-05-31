type GetReturnType<Func extends Function> =
    Func extends (...args: any[]) => infer ReturnType
    ? ReturnType : never;

type GetReturnTypeValue = GetReturnType<(name: string, age: number) => string>
type GetReturnTypeValue1 = GetReturnType<() => 'dong'>
