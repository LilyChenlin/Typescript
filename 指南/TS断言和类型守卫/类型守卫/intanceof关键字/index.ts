// 用于判断一个实例是不是构造函数
class Name {
    name: string = 'lily';
}
class Age extends Name {
    age: number = 7;
}

const setInfo = (data: Name) => {
    if (data instanceof Age) {
        console.log(`我的年龄是${data.age}`);
    } else {
        console.log(`我的名字是${data.name}`);
    }
}

setInfo(new Name());
setInfo(new Age());