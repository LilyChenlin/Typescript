type UppercaseKey<Obj extends Object> = {
    [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key] 
}
type UppercaseKeyValue = UppercaseKey<{a: 1, b: 2}>