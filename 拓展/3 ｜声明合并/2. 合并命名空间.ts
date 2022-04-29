// 合并命名空间

// 对于命名空间的合并，模块导出的同名接口进行合并，构成单一命名空间内含合并后的接口。
namespace Animals {
    export class Zebra { };
}

namespace Animals {
    export interface Legged { numberOfLegs: number; };
    export class Dog { };
}

// 等同于
// namespace Animals {
//     export interface Legged { numberOfLegs: number };
//     export class Zebra { };
//     export class Dog { };
// }

// 非导出成员仅在其原有的（合并前的）命名空间内可见。这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。
namespace Animal {
    let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

namespace Animal {
    export function doAnimalsHaveMuscles() {
        return haveMuscles;
    }
}
