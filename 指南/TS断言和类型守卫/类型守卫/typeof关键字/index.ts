const setInfo = (data: number | string | undefined) => {
    if (typeof data === 'string') {
        console.log(`我的名字是：${data}`)
    } 
    if (typeof data === "number") {
        console.log(`我的年龄是：${data}`)
    }

    if (typeof data === "undefined") {
        console.log(data)
    }
}

setInfo('LilyChenlin');
setInfo(7);
setInfo(undefined);