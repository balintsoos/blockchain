import * as actions from './actions';
import { HashModule } from '../hash';

export type BlockModule = {
  createBlock: actions.CreateBlock;
};

export type BlockModuleStrategy = {
  hashModule: HashModule;
};

export const createBlockModule = (strategy: BlockModuleStrategy): BlockModule => ({
  createBlock: actions.createCreateBlock({
    createHash: strategy.hashModule.createHash,
  }),
});
