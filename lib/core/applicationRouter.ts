import AuthRoute from "../features/auth/router/auth.route";
import { Router, RouterSettings } from "../framework/classes";

class ApplicationRouter extends Router {
    settings: RouterSettings = {
        routes: [
            AuthRoute,
        ]
    }
}

export default new ApplicationRouter;