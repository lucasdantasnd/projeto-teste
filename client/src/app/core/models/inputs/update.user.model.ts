import { UserModel } from "../user.model";

export class UpdateUserModel {

    id!: string;

    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}