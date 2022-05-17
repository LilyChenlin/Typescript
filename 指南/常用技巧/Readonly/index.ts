interface Person {
    name: string,
    age: number
}

let Info: Readonly<Person> = {
    name: 'lily',
    age: 7
}
Info.age = 8; // readonly只允许读取，不允许修改