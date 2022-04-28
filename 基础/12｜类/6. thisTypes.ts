// this类型

// 在类中，有一个特殊的名为 this 的类型，会动态的引用当前类的类型
class Box {
    contents: string = "";
    set(value: string) {
        this.contents = value;
        return this;
    }
}

class ClearableBox extends Box {
    clear() {
        this.contents = "";
    }
}

const a = new ClearableBox();
const b = a.set("hello");

// 在参数类型注解中使用this
class Box1 {
    content: string = "";
    sameAs(other: this) {
        return other.content === this.content;
    }
}