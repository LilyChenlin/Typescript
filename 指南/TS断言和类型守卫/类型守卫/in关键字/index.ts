interface Info {
    name: string
    age: number
}

interface Info1 {
    name: string
    flage: boolean
}

const setInfo = (data: Info | Info1) => {
    if ("age" in data) {
        console.log(`我的名字是：${data.name}，年龄是：${data.age}`)
    } else if ("flage" in data) {
        console.log(`我的名字是：${data.name}，年龄是：${data.flage}`)
    }
}

setInfo({ name: 'lily', age: 7 })
setInfo({ name: 'lily', flage: true})