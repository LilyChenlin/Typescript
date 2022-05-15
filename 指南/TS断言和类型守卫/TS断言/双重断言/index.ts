// 断言失效后可能会用到
interface Info {
    name: string;
    age: number;
}

const name2 = 'lily' as Info;
const name1 = 'lily' as any as Info;
