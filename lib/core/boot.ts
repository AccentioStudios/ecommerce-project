import { Database } from "../framework/integrations/database";
import { ExpressApp } from "../framework/server/express";
import { ApplicationRouter } from "./applicationRouter";

require('../framework/integrations/database');

const expressApp = new ExpressApp();
const database = new Database();
const applicationRouter = new ApplicationRouter();

async function boot() {
  await expressApp.init();
  await expressApp.registerCoreMiddlewares();
  await expressApp.registerRouter(await applicationRouter.toExpressRouter());
  await database.init();

  await expressApp.maintenanceMode(false);
}

boot();