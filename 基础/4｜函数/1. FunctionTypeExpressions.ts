// 函数类型表达式
// https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E5%87%BD%E6%95%B0-more-on-functions
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}
greeter(printToConsole);

// 类型别名
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {

}