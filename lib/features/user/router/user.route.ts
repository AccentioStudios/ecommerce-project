import { Route } from '../../../framework/classes';
import userController from '../controller/user.controller';

class UserRoute implements Route {
    path = 'user';
    version = 'v1';
    handle = userController;
}

export default new UserRoute;
