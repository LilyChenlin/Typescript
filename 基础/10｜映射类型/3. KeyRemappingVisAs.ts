// 通过as实现键名重新映射
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties];
}

// 利用「模板字面量类型 (opens new window)」，基于之前的属性名创建一个新属性名：
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
}

interface Person {
    name: string;
    age: number;
    location: string;
}
type LazyPerson = Getters<Person>;

// 利用条件类型返回一个never从而过滤掉某些属性
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
}

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
// type KindlessCircle = {
//     radius: number;
// }

// 遍历任何联合类型
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

// square: (event: SquareEvent) => void
// circle: (event: CircleEvent) => void