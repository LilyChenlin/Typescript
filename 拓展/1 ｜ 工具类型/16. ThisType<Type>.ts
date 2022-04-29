// ThisType<Type>
// 这个类型不返回一个转换过的类型，它被用作标记一个上下文的this类型。
type ObjectDescription<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>;
}

function makeObject<D, M>(desc: ObjectDescription<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
        }
    }
})