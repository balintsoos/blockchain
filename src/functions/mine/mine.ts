import { createHash } from 'crypto';

export const mine = (nonce: number): void => {
  let solution = 1;
  console.log('⛏️  mining...');

  while (true) {
    const attempt = createHash('MD5')
      .update((nonce + solution).toString())
      .digest('hex');

    if (attempt.startsWith('0000')) {
      console.log(`⛏️  mined: ${solution}`);
      return;
    }

    solution += 1;
  }
};
