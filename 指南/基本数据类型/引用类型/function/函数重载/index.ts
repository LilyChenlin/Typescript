// 函数重载
// 使用相同名称和不同参数数量或类型创建多个方法的一种能力
let obj: any = {};
function setInfo(val: string): void;
function setInfo(val: number): void;
function setInfo(val: boolean): void;
function setInfo(val: boolean): void;
function setInfo(val: string | number | boolean): void {
    if (typeof val === "string") {
        obj.name = val;
    } else {
        obj.age = val
    }
}

setInfo("Domesy");
setInfo(7);
setInfo(true);