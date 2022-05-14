class Info {
    // 静态属性
    static name1: string = 'lily'

    name2: string = 'Hello'
    name3: string // error
    name4!: string

    constructor(_name: string) {
        this.name4 = _name;
    }

    static getName = () => {
        return '我是静态方法'
    }

    getName4 = () => {
        return `我是成员方法: ${this.name4}`
    }

    get name5() {
        return this.name4
    }

    set name5(name5) {
        this.name4 = name5
    }
}

const setName = new Info('你好');

console.log(Info.name1) //  "lily" 
console.log(Info.getName()) // "我是静态方法" 
console.log(setName.getName4()) // "我是成员方法:你好" 
