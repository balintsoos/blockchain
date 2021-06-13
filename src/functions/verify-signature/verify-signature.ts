import { createVerify } from 'crypto';
import { Signature } from '../../types/signature';
import { Transaction } from '../../types/transaction';

export const verifySignature = (transaction: Transaction, signature: Signature): boolean => {
  return createVerify('SHA256').update(transaction.toString()).verify(transaction.sender, signature);
};
