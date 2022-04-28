// 类静态块
class Foo {
    static #count = 0;
    get count() {
        return Foo.#count;
    }
    static {
        try {
            const lastInstance = loadLastInstance();
            Foo.#count += lastInstance.length;
        }
    }
}