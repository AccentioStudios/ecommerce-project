import { Controller, expressRequestAndResponseType } from "../../../framework/classes";

class HelloWorldController implements Controller {
    getMethods: expressRequestAndResponseType[] = [
        function world(req, res) {
            res.send('hello world');
        },
    ];
    postMethods: expressRequestAndResponseType[] = [];

}

export default new HelloWorldController;