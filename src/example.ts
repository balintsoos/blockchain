import { addBlock } from './functions/add-block';
import { createChain } from './functions/create-chain';
import { createSignature } from './functions/create-signature';
import { createWallet } from './functions/create-wallet/create-wallet';

const chain = createChain();

const satoshi = createWallet();
const bob = createWallet();

const transaction = {
  sender: satoshi.publicKey,
  receiver: bob.publicKey,
  amount: 10,
};

const signature = createSignature(transaction, satoshi.privateKey);

addBlock(chain, transaction, signature);
