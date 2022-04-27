// 深入探索


// 根据对象是否有pii属性返回true/false
type ExctractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
}

type DBFields = {
    id: { format: "incrementing" };
    name: { type: string, pii: true };
}

type ObjectsNeedingGDPRDeletion = ExctractPII<DBFields>;

// type ObjectsNeedingGDPRDeletion = {
//     id: false,
//     name: true
// }