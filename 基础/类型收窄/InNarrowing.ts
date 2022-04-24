// https://ts.yayujs.com/handbook/Narrowing.html#in-%E6%93%8D%E4%BD%9C%E7%AC%A6%E6%94%B6%E7%AA%84

type Fish = { swim: () => void };
type Bird = { swim: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        // Fish | Human
    } else {
        // Bird | Human
    }
}