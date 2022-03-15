import { ExpressApp } from "../framework/server/express";
import ApplicationRouter from "./applicationRouter";

require('../framework/integrations/database');

const expressApp = new ExpressApp();

async function boot() {
  const app = await expressApp.init();
  await expressApp.registerCoreMiddlewares();
  await expressApp.registerRouter(await ApplicationRouter.toExpressRouter());
}

boot();