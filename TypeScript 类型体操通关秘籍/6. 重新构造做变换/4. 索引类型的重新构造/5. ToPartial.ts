type ToPartial<T> = {
    [Key in keyof T]?: T[Key];
}

type ToPartialVal = ToPartial<{ a: 1, b: 1 }>;