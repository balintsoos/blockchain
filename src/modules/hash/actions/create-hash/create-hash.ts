export type CreateHashStrategy = {
  createHashPayload: (
    data: object,
    previousHash: string,
    timestamp: string
  ) => string;
  calculateHash: (payload: string) => string;
};

export type CreateHash = (
  data: object,
  previousHash: string,
  timestamp: string
) => string;

export const createCreateHash = (strategy: CreateHashStrategy): CreateHash => (
  data,
  previousHash,
  timestamp
) => {
  const payload = strategy.createHashPayload(data, previousHash, timestamp);
  return strategy.calculateHash(payload);
};
