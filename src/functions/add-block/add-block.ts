import { Chain } from '../../types/chain';
import { Signature } from '../../types/signature';
import { Transaction } from '../../types/transaction';
import { verifySignature } from '../verify-signature';

export const addBlock = (chain: Chain, transaction: Transaction, signature: Signature): void => {
  if (verifySignature(transaction, signature)) {
    chain.push({});
  }
};
