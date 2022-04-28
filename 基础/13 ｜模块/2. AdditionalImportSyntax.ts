// 附加导入语法
import { pi as π } from "./maths.js";
console.log(π);

// 混合使用
import RNGen, { pi as π1 } from "./maths.js";

RNGen;

// 接受所有的导出对象
import * as math from "./maths.js";
console.log(math.pi);
