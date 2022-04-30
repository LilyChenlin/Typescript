type EventType = MyMouseEvent | MyKeyEvent
interface TestEvent {
    timestamp: number
}
interface MyMouseEvent extends TestEvent {
    x: number
    y: number
}
interface MyKeyEvent extends TestEvent {
    keyCode: number
}
function listenEvent(event: EventType, handler: (n: TestEvent) => void): void {
    handler(event)
}
const mouseEvent: MyMouseEvent = {
    timestamp: 123,
    x: 123,
    y: 456
}
const keyEvent: MyKeyEvent = {
    timestamp: 456,
    keyCode: 789
}
// 不安全但好用又常见
listenEvent(mouseEvent, (e: MyMouseEvent) => console.log(e.x + ',' + e.y))
// 不安全的原因：可能有二傻子会传入一个不是MyMouseEvent但是又是Event的类型到listenEvent中，可能这可能导致该方法错误
listenEvent(keyEvent, (e: MyMouseEvent) =>
    console.log(e.x + ',' + e.y)
) // Error!
// 安全但不尽如人意的方案
listenEvent(mouseEvent, (e: TestEvent) =>
    console.log((e as MyMouseEvent).x + ',' + (e as MyMouseEvent).y)
)
listenEvent(mouseEvent, ((e: MyMouseEvent) =>
    console.log(e.x + ',' + e.y)) as (e: TestEvent) => void)
// 仍然禁止(显然错误)。 类型安全将拒绝完全不兼容的类型。
listenEvent(mouseEvent, (e: number) => console.log(e))
