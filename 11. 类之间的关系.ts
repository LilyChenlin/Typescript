// 类之间的关系
class Point1 {
    x = 0;
    y = 0;
}

class Point2 {
    x = 0;
    y = 0;
}
const p: Point1 = new Point2();

// 类的子类型之间可以建立关系
class Person {
    name: string;
    age: number;
}

class Employee {
    name: string;
    age: number;
    salary: number;
}

const p: Person = new Employee();