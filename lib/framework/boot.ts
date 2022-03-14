
import { ExpressApp } from "../framework/server/express";
require('./integrations/database');

const expressApp = new ExpressApp();

async function boot() {
  const app = await expressApp.init();
  await expressApp.registerCoreMiddlewares();
}

boot();