type ToMutable<T> = {
    -readonly [Key in keyof T]: T[Key]
}
type ToMutableResult = ToMutable<{
    readonly name: string;
    age: number
}>;