type ToRequired<T> = {
    [Key in keyof T]-?: T[Key]
}

type ToRequiredVal = ToRequired<{
    name?: string,
    age?: number
}>