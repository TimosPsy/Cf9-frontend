import { IRole } from "./user-login.interface";

export interface IGoogleUser {
    userId : string;
    email: string;
    name: string;
    photoUrl: string;
    roles: IRole[];
}