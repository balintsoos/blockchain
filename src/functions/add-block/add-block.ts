import { createBlock, last, mine, verifySignature } from '..';
import { Chain, Signature, Transaction } from '../../types';

export const addBlock = (chain: Chain, transaction: Transaction, signature: Signature): Chain => {
  if (!verifySignature(transaction, signature)) {
    return chain;
  }
  const nextBlock = createBlock(transaction, last(chain).hash);
  mine(nextBlock.nonce);
  return [...chain, nextBlock];
};
