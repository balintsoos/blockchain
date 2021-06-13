import { hashBlock } from '..';
import { Block, Transaction } from '../../types';

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
