import { Controller, expressRequestAndResponseType } from "../../../framework/classes";

class AuthController implements Controller {
    getMethods: expressRequestAndResponseType[] = [
        function login(req, res) {
            res.send('hello world');
        },
    ];
    postMethods: expressRequestAndResponseType[] = [];

}

export default new AuthController;