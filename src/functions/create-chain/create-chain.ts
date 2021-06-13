import { createBlock } from '..';
import { Chain, Transaction } from '../../types';

export const createChain = (genesisTransaction: Transaction): Chain => [createBlock(genesisTransaction, '')];
