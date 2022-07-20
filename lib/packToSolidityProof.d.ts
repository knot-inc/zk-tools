import { Proof, SolidityProof } from './types';
/**
 * Makes a proof compatible with the Verifier.sol method inputs.
 * @param proof The proof generated with SnarkJS.
 * @returns The Solidity compatible proof.
 */
export declare const packToSolidityProof: (proof: Proof) => SolidityProof;
