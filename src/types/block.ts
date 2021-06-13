import { Transaction } from './transaction';

export type Block = {
  previousHash: string;
  transaction: Transaction;
  timestamp: string;
  hash: string;
};
