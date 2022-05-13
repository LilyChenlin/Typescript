type AProps = { a: string };
type Bprops = { b: number };


type allProps = AProps & Bprops;

const Info: allProps = {
    a: '小肚肚',
    b: 7
}