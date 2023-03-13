export interface IClient {
    _id: string,
    name: string,
    phone: string,
    city: string,
    address: string,
    mail: string,
    password: string,
    role: string,
}

export type ClientState = {
    user: IClient,
    token: string,
    id: string,
    isLoading: boolean,
    isAuth: boolean,
}