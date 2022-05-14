// readonly

class Info {
    public readonly name: string;
    name1: string;

    constructor(name: string) {
        this.name = name;
        this.name1 = name;
    }

    setName(name: string) {
        this.name = name; // readonly 不可赋值
        this.name1 = name;
    }
}