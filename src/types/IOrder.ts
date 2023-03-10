import { IFood } from "./IFood";

export interface IOrder {
    _id: string,
    foods: IFood[],
    cafeId: string,
    clientId: string,
    total: number,
    from: string,
    to: string,
}

export type OrderState = {
    orders: IOrder[],
    isLoading: boolean,
}