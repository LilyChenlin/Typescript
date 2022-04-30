// 导入一个模块中的某个导出内容
// import { ZipCodeValidator } from "./ZipCodeValidator";
// let myValidator = new ZipCodeValidator();

// 对导入内容重命名
// import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
// let myValidator = new ZCV();

// 将整个模块导入到一个变量
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();

// 具有副作用的导入模块