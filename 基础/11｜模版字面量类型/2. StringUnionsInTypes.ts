// 类型中的字符串联合类型

// 模版字面量最有用的地方在于你可以基于一个类型内部的信息，定义一个新的字符串

// 有这样一个函数 makeWatchedObject， 它会给传入的对象添加了一个 on 方法。在 JavaScript 中，它的调用看起来是这样：makeWatchedObject(baseObject)，我们假设这个传入对象为：
const passedObject = {
    firstTime: "Saoirse",
    lastTime: "Ronan",
    age: 26
}
Object.keys(passedObject).map(x => `${x}Changed`);


const result = makeWatchedObject(baseObject);
result.on(eventName, callBack);

const person = makeWatchedObject({
    firstTime: "Saoirse",
    lastTime: "Ronan",
    age: 26
})

person.on("firstNameChanged", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
})

// 由于我们传入的事件名名称，是对象属性名的联合，每个联合成功都还在最后拼接一个Changed字符，所以我们这样做
type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
}
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

// 1. 为什么要使用 string & keyof Type而不是keyof Type?

type PropEventSource1<Type> = {
    on(eventName: `${keyof Type}Changed`, callback: (newValue: any) => void): void;
}
// 原因
//      1. keyof会返回 number | string | symbol类型
//      2. 模版字面量的类型要求是 string | number | bigint | boolean | null | undefined

// 2. 解决方式
// 2.1 解法一
type PropEventSource2<Type> = {
    on(eventName: `${Exclude<keyof Type, symbol>}Changed`, callback: (newValue: any) => void): void;
}

// 2.2 解法二
type PropEventSource3<Type> = {
    on(eventName: `${Extract<keyof Type, string>}Changed`, callback: (newValue: any) => void): void;
}