import { generateNonce, generateTimestamp, hashBlock } from '..';
import { Block, Transaction } from '../../types';

export const createBlock = (transaction: Transaction, previousHash: string): Block => {
  const nonce = generateNonce();
  const timestamp = generateTimestamp();
  return {
    previousHash,
    transaction,
    nonce,
    timestamp,
    hash: hashBlock(previousHash, transaction, nonce, timestamp),
  };
};
