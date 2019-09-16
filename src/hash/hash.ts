import { createHmac } from "crypto";

export const createHash = (payload: string, secret: string): string =>
  createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
