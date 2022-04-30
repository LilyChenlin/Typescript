// 固有元素

declare namespace JSX {
    interface IntrinsicElements {
        foo: any
    }
}
<foo/>; // 正确
    < bar />; // 错误


declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}

// 基于值的元素
// 函数组件
interface FooProp {
    name: string;
    X: number;
    Y: number;
}

declare function AnotherComponent(prop: { name: string });
function ComponentFoo(prop: FooProp) {
    return <AnotherComponent name={prop.name}/>
}
const Button = (prop: { value: string }, context: { color: string }) => <button />

// 由于函数组件是简单的JS函数，所以我们还可以利用函数重载
interface ClickableProps {
    children: JSX.Element[] | JSX.Element
}

interface HomeProps extends ClickableProps {
    home: JSX.IntrinsicElements;
}

interface SideProps extends ClickableProps {
    side: JSX.Element | string;
}

// 类组件
class MyComponent {
    render() {}
}
var myComponent = new MyComponent();

function MyFactoryFunction() {
    return {
        render: () => {}
    }
}
var myComponent = MyFactoryFunction();