import { UserModel } from "./user.model";

export class resultModel {
    success!: string;
    message!: string;
    data!: Array<UserModel>;
}