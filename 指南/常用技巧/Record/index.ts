interface Person {
    name: string,
    age: number
}

type InfoProps = 'JS' | 'TS';

const Info: Record<InfoProps, Person> = {
    JS: {
        name: 'lily',
        age: 18
    },
    TS: {
        name: 'TypeScript',
        age: 20
    }
}