type numProps = Exclude<1 | 2 | 3, 1 | 2>; //3
type numProps1 = Exclude<1 | 2, 7> // type numProps = 1 | 2
type numProps2 = Exclude<1, 3 | 2> // type numProps = 1
type numProps3 = Exclude<1, 1 | 2> // type numProps = never


type info = "name" | "age" | "sex";
type info1 = "name"
type info2 = Exclude<info, info1>; // type info = "name" | "age"


type typeProps = Exclude<string | number | (() => void), Function> // type typeProps = string | number
