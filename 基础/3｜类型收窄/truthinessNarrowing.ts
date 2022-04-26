// 真值收窄
// https://ts.yayujs.com/handbook/Narrowing.html#%E7%9C%9F%E5%80%BC%E6%94%B6%E7%AA%84-truthiness-narrowing
// 在.typeGuard.ts中，由于typeof null === 'object' 所以会造成报错。我们可以通过真值收窄来避免这个错误

function printAll2(str: string | string[] | null) {
    if (str && typeof str === 'object') {
        for (const s of str) {
            console.log(s);
        }
    } else if (str && typeof str === 'string') {

    } else {
        // do nothing
    }
}

// 方式二 通过!操作符来通过真值检查收窄类型的方式
function multipleAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return undefined;
    } else {
        return values.map(item => item * factor);
    }
}