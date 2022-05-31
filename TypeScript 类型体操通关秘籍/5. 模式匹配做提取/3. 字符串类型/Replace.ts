type ReplaceStr<
    Str extends string,
    From extends string,
    To extends string
    > = Str extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${Suffix}` : Str;

type ReplaceStrValue = ReplaceStr<'lily is a ?', '?', 'beautiful girl'>

type ReplaceStrValue1 = ReplaceStr<'lily is a ?', 'b', 'beautiful girl'>