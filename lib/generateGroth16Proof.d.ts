import { FullProof, Witness } from './types';
export declare const generateGroth16Proof: ({ witness, wasmFilePath, finalZKeyPath, }: {
    witness: Witness;
    wasmFilePath: string;
    finalZKeyPath: string;
}) => Promise<FullProof>;
