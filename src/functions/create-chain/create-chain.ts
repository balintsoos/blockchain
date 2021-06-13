import { Chain } from '../../types/chain';
import { Transaction } from '../../types/transaction';
import { createBlock } from '../create-block';

export const createChain = (genesisTransaction: Transaction): Chain => [createBlock(genesisTransaction, '')];
