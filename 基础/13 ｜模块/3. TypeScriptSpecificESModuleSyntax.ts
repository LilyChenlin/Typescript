// import { Cat, Dog } from "./animal.js";
// type Animals = Cat | Dog;

// 导入类型
// import type { createCatName } from "./animal.js";
// const name = createCatName();

// 内置类型导入
import { createCatName, type Cat, type Dog } from "./animal.js";
export type Animals = Cat | Dog;
const name = createCatName();
