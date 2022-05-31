type GetRefProps<Props> =
    'ref' extends keyof Props
    ? Props extends { ref?: infer Value | undefined }
    ? Value
    : never
    : never;

type GetRefPropsRes = GetRefProps<{ ref?: 1, name: 'dong' }>;

type GetRefPropsRes1 = GetRefProps<{ ref?: undefined, name: 'dong' }>;