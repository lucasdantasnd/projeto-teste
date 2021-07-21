import { UserModel } from "../user.model";

export class CreateUserModel {

    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}