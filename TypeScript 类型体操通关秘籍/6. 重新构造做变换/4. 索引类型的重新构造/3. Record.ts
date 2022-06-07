type UppercaseKey<Obj extends Record<string, any>> = {
    [Key in keyof Obj as Uppercase<Key & string>] : Obj[Key]
}

type UppercaseKeyVal = UppercaseKey<{a: 1, b:2}>