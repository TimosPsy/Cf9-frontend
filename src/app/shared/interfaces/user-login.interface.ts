export interface IRole {
  _id:string;
  role: string;
  description: string;
  active: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface LoggedInUser {
  username: string;
  email: string;
  roles: IRole[]
}