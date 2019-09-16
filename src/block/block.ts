import { createHash } from "../hash";
import { Block } from "../interface";

const HASH_SECRET = "test";

export const createPayload = (
  data: object,
  previousHash: string,
  timestamp: string
) => {
  return `${timestamp}${previousHash}${JSON.stringify(data)}`;
};

export const createBlock = (data: object, previousHash: string): Block => {
  const timestamp = new Date().toISOString();
  const payload = createPayload(data, previousHash, timestamp);
  const hash = createHash(payload, HASH_SECRET);

  return {
    timestamp,
    data,
    hash,
    previousHash
  };
};
