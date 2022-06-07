type CamelCase<Str extends string> =
    Str extends `${infer Left}${'_'}${infer Right} ${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}` : Str;

type CamelCaseVal = CamelCase<'lily_chen_lin'>;