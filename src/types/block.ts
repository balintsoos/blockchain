import { Transaction } from './transaction';

export type Block = {
  previousHash: string;
  transaction: Transaction;
  nonce: number;
  timestamp: string;
  hash: string;
};
