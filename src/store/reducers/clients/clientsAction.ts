import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api"
import { IClient } from "../../../types/IClient";
import Cookies from "js-cookie";
import { IAuth } from "../../../types/IAuth";

// export const clientSignIn = createAsyncThunk(
//     "client/sign-in",
//     async function (userData: {male: string, password: string}) {
//         const res = await baseService.post<IClient>("/signin", userData)
//         Cookies.set("token", res.data.token)
//         return res.data
//     }
// )

export const clientSignUp = createAsyncThunk<string, IAuth>(
    "client/sign-up",
    async function (userData) {
        const res = await baseService.post("/clients/signup", userData)
        return res.data
    }
)

export const getClientById = createAsyncThunk(
    "client/get",
    async function (id) {
        const res = await baseService.get<IClient>(`/client/${id}`)
        return res.data
    }
)