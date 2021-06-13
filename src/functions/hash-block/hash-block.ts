import { createHash } from 'crypto';
import { Transaction } from '../../types/transaction';

export const hashBlock = (previousHash: string, transaction: Transaction, nonce: number, timestamp: string): string => {
  const payload = `${previousHash}#${transaction.toString()}#${nonce}#${timestamp}`;
  return createHash('SHA256').update(payload).digest('hex');
};
