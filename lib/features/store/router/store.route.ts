import { Route } from '../../../framework/classes';
import storeController from '../controller/store.controller';

class StoreRoute implements Route {
    path = 'store';
    version = 'v1';
    handle = storeController;
}

export default new StoreRoute;
