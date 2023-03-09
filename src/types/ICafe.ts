import { IFood } from "./IFood";

export interface ICafe {
    _id: string,
    name: string,
    image: string,
    phone: string,
    city: string,
    address: string,
    mail: string,
    password:string,
    role: string,
    menu: IFood[],
}