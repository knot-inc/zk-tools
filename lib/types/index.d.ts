export declare type BigNumberish = string | bigint;
export declare type Proof = {
    pi_a: BigNumberish[];
    pi_b: BigNumberish[][];
    pi_c: BigNumberish[];
    protocol: string;
    curve: string;
};
export declare type SolidityProof = [
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
    BigNumberish
];
export declare type PublicSignals = BigNumberish[];
export declare type FullProof = {
    proof: Proof;
    publicSignals: PublicSignals;
};
export declare type Witness = {
    values: string[];
    nonces: string[];
    commits: string[];
};
