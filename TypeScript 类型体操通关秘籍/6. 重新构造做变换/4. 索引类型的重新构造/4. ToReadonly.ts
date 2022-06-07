type ToReadonly<T> = {
    readonly [Key in keyof T]: T[Key];
}
type ToReadonlyVal = ToReadonly<{a: 1, b: 1}>