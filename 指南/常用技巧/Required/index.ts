interface Person {
    name: string,
    age: number,
    beautiful?: boolean
}

const props1: Person = {
    name: 'lily',
    age: 18
}

const props2: Required<Person> = {
    name: 'lily',
    age: 18,
    beautiful: true
}