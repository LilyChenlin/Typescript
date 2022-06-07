type FilterByValueType<
    Obj extends Record<string, any>,
    ValueType
> = {
        [Key in keyof Obj
            as ValueType extends Obj[Key] ? Key : never]
        : Obj[Key]
    }
interface Person {
    name: string;
    age: number;
    hobby: string[];
}
type FilterByValueTypeRes = FilterByValueType<Person, string | number>;