import { addBlock } from './functions/add-block';
import { createChain } from './functions/create-chain';
import { createSignature } from './functions/create-signature';
import { createWallet } from './functions/create-wallet/create-wallet';

const satoshi = createWallet();
const bob = createWallet();

let chain = createChain({
  sender: 'genesis',
  receiver: satoshi.publicKey,
  amount: 100,
});

const transaction = {
  sender: satoshi.publicKey,
  receiver: bob.publicKey,
  amount: 5,
};

const signature = createSignature(transaction, satoshi.privateKey);

chain = addBlock(chain, transaction, signature);

console.log(chain);
