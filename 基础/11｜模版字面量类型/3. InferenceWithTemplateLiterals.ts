// 模版字面量的推断
// https://ts.yayujs.com/handbook/TemplateLiteralTypes.html#%E6%A8%A1%E6%9D%BF%E5%AD%97%E9%9D%A2%E9%87%8F%E7%9A%84%E6%8E%A8%E6%96%AD-inference-with-template-literals

// 回调函数传入的值的类型与对应的属性值的类型相同
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
})

person.on("firstNameChanged", newName => { // newName: string
    console.log(`new name is ${newName.toUpperCase()}`);
})


person.on("ageChanged", newAge => { // newAge: string
    
})
