class Dong {
    name: string;
    
    constructor() {
        this.name = "dong";
    }
    hello(this: Dong) {
        return 'hello, I\m' + this.name; 
    }
}

const dong = new Dong();
dong.hello.call({ xxx: 1 });


type GetThisParameterType<T>
    = T extends (this: infer ThisType, ...args: any[]) => any
    ? ThisType
    : unknown;

type GetThisParameterTypeRes = GetThisParameterType<typeof dong.hello>