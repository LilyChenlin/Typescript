// Symbol
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol();

const symbolToNumberMap = {
    [sym1]: 1,
    [sym2]: 2,
    [sym3]: 3
}

type KS = keyof typeof symbolToNumberMap;

function useKey<T, K extends keyof T>(o: T, k: K) {
    var name: string = k; 
    // Type 'string | number | symbol' is not assignable to type 'string'.
}

function useKey1<T, K extends Extract<keyof T, string>>(o: T, k: K) {
    var name: string = k;
}

function useKey2<T, K extends keyof T>(o: T, k: K) {
    var name: string | number | symbol = k;
}

