"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPoseidonHash = void 0;
/**
 * Creates a Poseidon big number hash.
 * @param values The list of values to hash.
 * @returns The big number hash.
 */
const createPoseidonHash = (poseidonModule, values) => {
    const bigintvalues = values.map(v => BigInt(v));
    return poseidonModule.F.toString(poseidonModule(bigintvalues));
};
exports.createPoseidonHash = createPoseidonHash;
