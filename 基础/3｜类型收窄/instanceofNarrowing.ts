// https://ts.yayujs.com/handbook/Narrowing.html#instanceof-%E6%94%B6%E7%AA%84

function logValue(x: Date | string) {
    if (x instanceof Date) {
        // Date
    } else {
        // string
    }
}