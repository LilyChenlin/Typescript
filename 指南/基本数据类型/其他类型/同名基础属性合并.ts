type AProps = { a: string, c: number };

type BProps = { b: number, c: string };

type allProps = AProps & BProps;


// 此时c的类型是 number&string  没有这种类型。所以是never
const info: allProps = {
    a: 'lily',
    b: 17,
    c: 5,
    c: 'xixi'
}
