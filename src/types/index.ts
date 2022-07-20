// From https://github.com/semaphore-protocol/semaphore.js/blob/main/packages/proof/src/types/index.ts
export type BigNumberish = string | bigint;

export type Proof = {
  pi_a: BigNumberish[];
  pi_b: BigNumberish[][];
  pi_c: BigNumberish[];
  protocol: string;
  curve: string;
};

export type SolidityProof = [
  BigNumberish,
  BigNumberish,
  BigNumberish,
  BigNumberish,
  BigNumberish,
  BigNumberish,
  BigNumberish,
  BigNumberish,
];

export type PublicSignals = BigNumberish[];
export type FullProof = {
  proof: Proof;
  publicSignals: PublicSignals;
};

export type Witness = {
  values: string[];
  nonces: string[];
  commits: string[];
};
