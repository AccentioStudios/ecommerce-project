import { Controller, expressRequestAndResponseType } from "../../../framework/classes";

class StoreController implements Controller {
    getMethods: expressRequestAndResponseType[] = [
        function login(req, res) {
            res.send('hello world');
        },
    ];
    postMethods: expressRequestAndResponseType[] = [];

}

export default new StoreController;