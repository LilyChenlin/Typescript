// https://ts.yayujs.com/handbook/Narrowing.html#%E7%9C%9F%E5%80%BC%E6%94%B6%E7%AA%84-truthiness-narrowing
// 使用 switch 语句和等值检查比如 === !== == != 去收窄类型

interface Container {
    value: number | null | undefined;
}


function multipleValue(container: Container, factor: number) {
    if (container.value !== null) {
        // number
        console.log(container.value);
        container.value * factor;
    } else {
        // null | undefined
    }
}