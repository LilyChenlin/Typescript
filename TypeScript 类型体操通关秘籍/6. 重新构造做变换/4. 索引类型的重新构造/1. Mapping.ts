type Mapping<Obj extends object> = {
    [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]];
}

type MappingVal = Mapping<{a: 1, b: 2}>