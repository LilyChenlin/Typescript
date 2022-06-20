type obj = {
    a: {
        b: {
            c: {
                f: () => 'lily',
                d: {
                    e: {
                        guang: string
                    }
                }
            }
        }
    }
}

type DeepReadonly<Obj extends Record<string, any>> = 
    Obj extends any ? {
    readonly [Key in keyof Obj]:
    Obj[Key] extends object
        ? Obj[Key] extends Function
            ? Obj[Key] : DeepReadonly<Obj[Key]>
        : Obj[Key]
    }
    : never;


type DeepReadonlyResult = DeepReadonly<obj>['a']['b']
