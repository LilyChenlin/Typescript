type getValueType<P> = P extends Promise<infer Value> ? Value : never;
type getValueResult = getValueType<Promise<'lily'>>;