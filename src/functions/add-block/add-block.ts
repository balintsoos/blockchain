import { Chain } from '../../types/chain';
import { Signature } from '../../types/signature';
import { Transaction } from '../../types/transaction';
import { createBlock } from '../create-block';
import { last } from '../last';
import { verifySignature } from '../verify-signature';

export const addBlock = (chain: Chain, transaction: Transaction, signature: Signature): Chain => {
  if (!verifySignature(transaction, signature)) {
    return chain;
  }
  const nextBlock = createBlock(transaction, last(chain).hash);
  return [...chain, nextBlock];
};
