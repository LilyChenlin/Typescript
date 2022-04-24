// https://ts.yayujs.com/handbook/Narrowing.html#%E6%8E%A7%E5%88%B6%E6%B5%81%E5%88%86%E6%9E%90-control-flow-analysis

function example() {
    let x: string | number | boolean;
    x = Math.random() < 0.5;
    console.log(x); // boolean

    if (Math.random() < 0.5) {
        x = "cll";
        console.log(x); // string
    } else {
        x = 10;
        console.log(x); // number
    }

    return x; // string | number
}