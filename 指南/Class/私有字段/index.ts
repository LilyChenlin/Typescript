
class Info {
    #name: string;
    getName: string;

    constructor(name: string) {
        this.#name = name;
        this.getName = name;
    }

    setName() {
        return `我的名字是${this.#name}`
    }
}

let myName = new Info('lily');

console.log(myName.setName());
console.log(myName.getName);
console.log(myName.#name);
