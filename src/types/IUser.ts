import { IFood } from "./IFood";

export interface IReg {
    name: string;
    phone: string;
    city: string; 
    address: string;
    mail: string;
    password: string;
}

export interface IAuth {
    mail: string,
    password: string,
}

export interface IUser {
    _id: string,
    name: string,
    image: string,
    phone: string,
    city: string,
    address: string,
    mail: string,
    password:string,
    role: string,
    menu?: IFood[],
}


export type UserState = {
    user: IUser,
    isLoading: boolean,
    isAuth: boolean,
}