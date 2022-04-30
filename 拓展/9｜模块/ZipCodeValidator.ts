import { StringValidator } from './StringValidator';
export const numberRegexp = /^[0-9]+$/;
// export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }
// 由于我们可能需要对导出的部分重命名，所以我们可以进行重写
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };