import { IFood } from "./IFood"

export interface IDishes extends IFood {
    count: number
}

export type BasketState = {
    dishes: IDishes[]
}