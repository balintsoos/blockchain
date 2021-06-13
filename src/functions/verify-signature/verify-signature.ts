import { createVerify } from 'crypto';
import { Signature, Transaction } from '../../types';

export const verifySignature = (transaction: Transaction, signature: Signature): boolean => {
  return createVerify('SHA256').update(transaction.toString()).verify(transaction.sender, signature);
};
