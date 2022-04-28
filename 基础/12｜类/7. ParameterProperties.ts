// 参数属性
class Params {
    constructor(
        public readonly x: number,
        protected y: number,
        private z: number
    ) {

    }
}

const a = new Params(1, 2, 3);
console.log(a.x);
console.log(a.z);