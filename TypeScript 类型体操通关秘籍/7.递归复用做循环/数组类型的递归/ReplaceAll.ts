type ReplaceAll<
    Str extends string,
    From extends string,
    To extends string
    > = Str extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${ReplaceAll<Right, From, To>}`
    : Str;

type ReplaceAllResult = ReplaceAll<'guang, guang guang', 'guang', 'dong'>;
