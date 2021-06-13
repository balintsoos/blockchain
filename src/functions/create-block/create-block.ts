import { Block } from '../../types/block';
import { Transaction } from '../../types/transaction';
import { hashBlock } from '../hash-block';

export const createBlock = (transaction: Transaction, previousHash: string): Block => {
  const nonce = Math.round(Math.random() * 999999999);
  const timestamp = new Date().toISOString();
  const hash = hashBlock(previousHash, transaction, nonce, timestamp);
  return {
    previousHash,
    transaction,
    nonce,
    timestamp,
    hash,
  };
};
