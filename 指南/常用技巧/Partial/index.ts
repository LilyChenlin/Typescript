interface Person {
    name: string,
    age: number
}

const info: Person = {
    name: 'lily',
    age: 18
}

const info1: Partial<Person> = {
    name: 'xoox',
}
