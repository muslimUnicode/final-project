import { IFood } from "./IFood"

export interface IDish extends IFood {
    count: number
}

export type BasketState = {
    dishes: IDish[]
}