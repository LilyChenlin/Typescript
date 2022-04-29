// Readonly<Type> 用于构造一个Type下面的属性全都设置为只读的类型
interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: "Delete inactive users"
}

todo.title = "Hello";