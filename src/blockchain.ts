import * as modules from './modules';

export type AppStrategy = {
  hashSecret: string;
};

export type App = {
  hashModule: modules.HashModule;
  blockModule: modules.BlockModule;
};

export const createApp = (strategy: AppStrategy): App => {
  const hashModule = modules.createHashModule({
    hashSecret: strategy.hashSecret,
  });
  const blockModule = modules.createBlockModule({ hashModule });

  return {
    hashModule,
    blockModule,
  };
};
