import * as actions from "./actions";

export type HashModuleStrategy = {
  hashSecret: string;
};

export type HashModule = {
  createHash: actions.CreateHash;
};

export const createHashModule = (strategy: HashModuleStrategy): HashModule => ({
  createHash: actions.createCreateHash({
    createHashPayload: actions.createCreateHashPayload(),
    calculateHash: actions.createCalculateHash({
      hashSecret: strategy.hashSecret
    })
  })
});
