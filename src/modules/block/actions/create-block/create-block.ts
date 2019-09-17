export type Block = {
  timestamp: string;
  data: object;
  hash: string;
  previousHash: string;
};

export type CreateBlockStrategy = {
  createHash: (data: object, previousHash: string, timestamp: string) => string;
};

export type CreateBlock = (data: object, previousHash: string) => Block;

export const createCreateBlock = (
  strategy: CreateBlockStrategy
): CreateBlock => (data, previousHash) => {
  const timestamp = new Date().toISOString();
  const hash = strategy.createHash(data, previousHash, timestamp);

  return {
    timestamp,
    data,
    hash,
    previousHash
  };
};
