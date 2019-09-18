import { createHmac } from 'crypto';

export type CalculateHashStrategy = {
  hashSecret: string;
};

export type CalculateHash = (payload: string) => string;

export const createCalculateHash = (strategy: CalculateHashStrategy): CalculateHash => payload =>
  createHmac('sha256', strategy.hashSecret)
    .update(payload)
    .digest('hex');
