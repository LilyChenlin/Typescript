type AppendArguments<Func extends Function, Arg> =
    Func extends (...args: infer Args) => infer ReturnType
    ? (...args: [...Args, Arg]) => ReturnType : never;

type AppendArgumentsRes = AppendArguments<(name: string) => boolean, number>