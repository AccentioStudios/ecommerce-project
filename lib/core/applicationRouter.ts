import HelloWorldRoute from "../features/auth/router/hello_world.route";
import { Router, RouterSettings } from "../framework/classes";

class ApplicationRouter extends Router {
    settings: RouterSettings = {
        routes: [
            HelloWorldRoute,
        ]
    }
}

export default new ApplicationRouter;