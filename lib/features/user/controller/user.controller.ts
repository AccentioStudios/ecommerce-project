import { Controller, expressRequestAndResponseType } from "../../../framework/classes";
import UserEntity, { userEntityToDto } from "../models/user.model";

class UserController implements Controller {
    getMethods: expressRequestAndResponseType[] = [
        function world(req, res) {
            res.send('hello world');
        },
        async function testDB(req, res) {
            let user: UserEntity | null = await UserEntity.findOne();
            let userDto = userEntityToDto(user);
            res.send(JSON.stringify(userDto));
        }
    ];
    postMethods: expressRequestAndResponseType[] = [];

}

export default new UserController;