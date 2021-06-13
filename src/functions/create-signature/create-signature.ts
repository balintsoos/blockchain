import { createSign } from 'crypto';
import { Signature, Transaction } from '../../types';

export const createSignature = (transaction: Transaction, privateKey: string): Signature => {
  return createSign('SHA256').update(transaction.toString()).sign(privateKey);
};
