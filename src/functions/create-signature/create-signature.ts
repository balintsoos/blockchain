import { createSign } from 'crypto';
import { Signature } from '../../types/signature';
import { Transaction } from '../../types/transaction';

export const createSignature = (transaction: Transaction, privateKey: string): Signature => {
  return createSign('SHA256').update(transaction.toString()).sign(privateKey);
};
