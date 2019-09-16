import { createBlock } from "./block";

const data = {
  sender: "user1",
  receiver: "user2",
  currency: "BTC",
  amount: 0.0069,
  message: "pizza time"
};

const previousHash =
  "144daefa0814aae0368c2d165bdceb2a27c058017a9f480b9208bba8880c8faa";

console.log(createBlock(data, previousHash));
