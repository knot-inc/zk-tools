"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeStringToBigInt = void 0;
// https://github.com/a16z/zkdocs/blob/main/zkdocs-lib/src/ZkDocSchema.ts
/**
 * Returns the string as an ascii encoded BigInt.
 */
const encodeStringToBigInt = (str) => {
    let codeArr = [];
    let numChars = str.length > 31 ? 31 : str.length;
    for (let i = 0; i < numChars; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode > 255) {
            console.error('string contains non-ascii characters');
            codeArr.push('00');
        }
        else {
            let hex = Number(charCode).toString(16);
            codeArr.push(hex);
        }
    }
    let hex = `0x${codeArr.join('')}`;
    return BigInt(hex);
};
exports.encodeStringToBigInt = encodeStringToBigInt;
