import { Route } from '../../../framework/classes';
import helloWorldController from '../controller/helloWorld.controller';

class HelloWorldRoute implements Route {
    path = 'hello';
    version = 'v1';
    handle = helloWorldController;
}

export default new HelloWorldRoute;
