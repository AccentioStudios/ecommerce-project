import express = require('express');
import { Middleware } from '../classes';
import { getFilesFolder } from '../utils/getFilesFolder';
import path = require('path');

export class ExpressApp {
  private app: express.Express;
  constructor() {
    this.app = express();
  }

  init(): Promise<express.Express> {
    return new Promise((resolve, reject) => {
      this.app.set('maintenance', true);
      this.app.listen(process.env.PORT || 5000, () => {
        console.log(`💻 - Running in port ${process.env.PORT || 5000}`);
        console.log();
      });
      resolve(this.app);
    });
  }

  registerCoreMiddlewares(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const middlewaresFiles = await getFilesFolder(path.resolve(process.cwd(), './lib/core/middlewares'), 'ts', ['index']);
      console.log('🐵 - Registering middlewares...');
      console.log();
      await middlewaresFiles.forEach(async (middlewaresFile) => {
        const middleware = Middleware.fromFileGetted(middlewaresFile);
        if (middleware) {
          if (middleware.path !== null && middleware.path !== '' && middleware.path !== undefined) {
            this.app.use(middleware.path, await middleware.funcs);
          } else {
            this.app.use(await middleware.funcs);
          }
        }
      });
      resolve();
    });
  }
}

