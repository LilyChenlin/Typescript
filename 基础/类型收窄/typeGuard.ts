// typeof类型保护
function printAll(str: string | string[] | null) {
    if (typeof str === 'object') {
        console.log(str); // null也会输出在这里面，会造成for...of...报错
        for (const s of str) {
            console.log(s);
        }
    } else if (typeof str === 'string') {

    } else {
        // do nothing
    }
}