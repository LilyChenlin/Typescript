type TrimStrRight<Str extends string> =
    Str extends `${infer Rest}${' ' | '\n' | '\t'}`
    ? TrimStrRight<Rest> : Str;

type TrimStrLeft<Str extends string> =
    Str extends `${' ' | '\n' | '\t'}${infer Rest}`
    ? TrimStrLeft<Rest> : Str;

type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>

type TrimStrValue = TrimStr<'         lily    '>