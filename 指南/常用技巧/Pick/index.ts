interface Person {
    name: string,
    age: number,
    beautiful: boolean
}

type person1Props = Pick<Person, 'name' | 'age'>;

const person1: person1Props = {
    name: 'lily',
    age: 28,
    // beautiful: true
}