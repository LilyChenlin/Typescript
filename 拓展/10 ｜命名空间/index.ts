// 定义几个简单的字符串验证器

interface StringValidator {
    isAcceptable(s: string): boolean;
}

let letterRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return letterRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
let strings = ["Hello", "98052", "101"];

let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}