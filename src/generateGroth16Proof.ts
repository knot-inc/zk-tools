import { groth16 } from 'snarkjs';
import { FullProof, Witness } from './types';

export const generateGroth16Proof = async ({
  witness,
  wasmFilePath,
  finalZKeyPath,
}: {
  witness: Witness;
  wasmFilePath: string;
  finalZKeyPath: string;
}): Promise<FullProof> => {
  return await groth16.fullProve(witness, wasmFilePath, finalZKeyPath);
};
