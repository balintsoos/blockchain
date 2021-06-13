import { Block } from '../../types/block';
import { Transaction } from '../../types/transaction';
import { hashBlock } from '../hash-block';

export const createBlock = (transaction: Transaction, previousHash: string): Block => {
  const timestamp = new Date().toISOString();
  const hash = hashBlock(previousHash, transaction, timestamp);
  return {
    previousHash,
    transaction,
    timestamp,
    hash,
  };
};
