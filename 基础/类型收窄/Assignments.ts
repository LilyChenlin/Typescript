let x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;
console.log(x); // number

x = "cll";
console.log(x); // string

x = true; // Type 'boolean' is not assignable to type 'string | number'.
console.log(x);