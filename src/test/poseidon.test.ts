import { createPoseidonHash } from '../poseidon';
import { buildPoseidon } from '../';
import { buf2Bigint } from '../buf2Bigint';

describe('poseidon', () => {
  it('should hash ', async () => {
    const start = Date.now();
    const poseidonWasModule = await buildPoseidon();
    const wasmInitTime = Date.now();
    console.log('Instantiate wasm poseidon time', wasmInitTime - start);
    const hash = createPoseidonHash(poseidonWasModule, [1, 2]);
    const v = buf2Bigint(
      poseidonWasModule.F.e(
        '0x115cc0f5e7d690413df64c6b9662e9cf2a3617f2743245519e19607a4417189a',
      ),
    ).toString();
    console.log(v);
    expect(hash).toBe(
      buf2Bigint(
        poseidonWasModule.F.e(
          '0x115cc0f5e7d690413df64c6b9662e9cf2a3617f2743245519e19607a4417189a',
        ),
      ).toString(),
    );
  });
});
