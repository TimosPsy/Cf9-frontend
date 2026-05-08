export interface IUser {
  username: string
  firstname?: string
  lastname?: string
  email?: string
  password: string
  confirmPassword: string
  address?: IAddress
  phone?: IPhone[]
}

export interface IAddress {
  area: string
  street: string
}

export interface IPhone {
  number: string
}