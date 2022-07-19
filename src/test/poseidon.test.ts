import { createPoseidonHash } from '../poseidon';
import { buildPoseidon } from '../';

describe('poseidon', () => {
  it('should hash ', async () => {
    const start = Date.now();
    const poseidonWasModule = await buildPoseidon();
    const wasmInitTime = Date.now();
    console.log('Instantiate wasm poseidon time', wasmInitTime - start);
    const hash = createPoseidonHash(poseidonWasModule, [1, 2]);
    const v = poseidonWasModule.F.toString(
      poseidonWasModule.F.e(
        '0x115cc0f5e7d690413df64c6b9662e9cf2a3617f2743245519e19607a4417189a',
      ),
    );
    console.log(hash);
    expect(hash).toBe(
      v,
      //   '7853200120776062878684798364095072458815029376092732009249414926327459813530',
    );
  });
});
