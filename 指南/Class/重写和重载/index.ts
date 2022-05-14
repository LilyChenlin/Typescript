// 【重写】子类重写继承自父类中的方法
// 【重载】指为同一个函数提供多个类型定义，与上述函数的重载类似

// 重写
class Person {
    setName(name: string) {
        return `我的名字叫${name}`
    }
}

class Child extends Person {
    setName(name: string) {
        return `孩子的名字叫${name}`
    }
}

const myName = new Child();
console.log(myName.setName('lily'))  // 孩子的名字叫lily

//重载
class Person1 {
    setNameAge(name: string): void;
    setNameAge(name: number): void;
    setNameAge(name: string | number) {
        if (typeof name === 'string') {
            console.log(`我的名字是${name}`)
        } else {
            console.log(`我的年龄是${name}`)
        }
    }
}

const res = new Person1();
res.setNameAge('lily');
res.setNameAge(7);