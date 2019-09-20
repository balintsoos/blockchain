export type CreateHashPayload = (data: object, previousHash: string, timestamp: string) => string;

export const createCreateHashPayload = (): CreateHashPayload => (data, previousHash, timestamp) => {
  return `${timestamp}#${previousHash}#${JSON.stringify(data)}`;
};
