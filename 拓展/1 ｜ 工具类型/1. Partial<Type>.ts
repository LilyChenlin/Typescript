// 用于构造一个Type下面的所有属性都设置为可选的类型，这个工具类型会返回代表给定的一个类型的子集的类型。

// Partial <Todo> 返回Todo类型的子集的类型
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter"
}

const todo2 = updateTodo(todo1, {
    description: "throw out trash"
})