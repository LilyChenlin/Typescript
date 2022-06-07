type DropSubStr<Str extends string, DeleteStr extends string> =
    Str extends `${infer Prefix}${DeleteStr}${infer Suffix}` ?
    DropSubStr<`${Prefix}${Suffix}`, DeleteStr> : Str;

type dropSubStrVal = DropSubStr<'lily~~~~~', '~'>