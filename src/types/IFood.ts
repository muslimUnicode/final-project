export interface IFood {
    _id: string,
    name: string,
    image: string,
    info: string,
    categoryId: string,
    price: number,
    cafeId: string,
    count: number,
}

export type FoodsState = {
    foods: IFood[],
    isLoading: boolean,
}