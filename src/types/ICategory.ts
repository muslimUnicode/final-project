export interface ICategory {
    _id: string,
    name: string,
}

export type CategoryState = {
    categories: ICategory[],
    isLoading: boolean,
}