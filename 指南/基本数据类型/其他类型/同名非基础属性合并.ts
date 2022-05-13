interface A{ a: number }
interface B{ b: string }

interface C{
    x: A
}

interface D{
    x: B
}

type allProps = C & D;

let obj: allProps = {
    x: {
        a: 7,
        b: 'xx'
    }
}