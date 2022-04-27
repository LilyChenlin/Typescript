// 内置字符操作类型
// Uppercase 把每个字符转为大写形式
type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>; // type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">; // type MainID = ID-MY_APP

// Lowercase 把每个字符转为小写形式
type Greeting2 = "Hello, world";
type QuietGreeting = Lowercase<Greeting2>; // type QuietGreeting = "hello, world"

type ASCIICacheKey2<Str extends string> = `id-${Lowercase<Str>}`;
type MainID2 = ASCIICacheKey2<"my_app">; // type MainID2 = id-my_app

// Capitalize 把字符串的第一个字符转为大写形式
type LowercaseGreeting = "hello, world";
type Greeting3 = Capitalize<LowercaseGreeting>; // type Greeting3 = "Hello, world"

// Uncapitalize 把字符串的第一个字符转换为小写形式
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>; // type UncomfortableGreeting = "hELLO WORLD"
    

