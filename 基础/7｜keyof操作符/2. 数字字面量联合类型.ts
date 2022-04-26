// 数字字面量联合类型
const NumericObject = {
    [1]: "1111",
    [2]: "2222",
    [3]: "3333"
}

type result = keyof typeof NumericObject;