interface A {
    a: string
}

interface B extends A {
    b: number
}

// B {a: string, b: number}
const obj: B = { a: 'lily', b: 7 };

type C = {
    a: number
}

type D = C & {
    b: string
}

const obj1: D = { a: 1, b: 'lily' }

type E = { a: string }
interface F extends E {
    b: number
}
const obj2: F = {
    a: 'lily3',
    b: 2
}

interface G{ a: string }
type H = G & { b: number }
const obj3: H = {
    a: 'lily4',
    b: 7
}

