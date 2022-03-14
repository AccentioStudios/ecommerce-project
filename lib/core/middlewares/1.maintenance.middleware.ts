import { expressMiddlewareRequestAndResponseType, Middleware } from "../../framework/classes";
import { getAsset } from "../../framework/utils/getAsset";

const fs = require('fs');
const path = require('path');

class MaintenanceMiddleware implements Middleware {
    path = null;
    funcs: expressMiddlewareRequestAndResponseType[] = [
        (req, res, next) => {
            if (!req.app.get('maintenance')) {
                return next();
            }
            res.set({
                'Cache-Control': 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
            });
            res.writeHead(503, { 'content-type': 'text/html' });
            fs.createReadStream(getAsset('maintenance.html')).pipe(res);
        }
    ];
}

export default new MaintenanceMiddleware();