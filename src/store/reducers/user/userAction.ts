import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api"
import { IAuth, IReg, IUser } from "../../../types/IUser";

export const userSignUp = createAsyncThunk<string, {userData: IReg, role: string}>(
    "user/sign-up",
    async ({userData, role}) => {
        const res = await baseService.post(`/${role}/signup`, userData)
        return res.data
    }
)

export const userSignIn = createAsyncThunk<{token: string, id: string, role: string}, IAuth>(
    "user/sign-in",
    async (userData) => {
        const res = await baseService.post("/signin", userData)
        return res.data
    }
)

export const getUser = createAsyncThunk(
    "user/get",
    async () => {
        const res = await baseService.get("/client/profile/user")
        return res.data
    }
)

export const getCafes = createAsyncThunk(
    "cafe/get",
    async () => {
        const res = await baseService.get<IUser[]>("/cafe")
        return res.data
    }
)
    
export const getCafeById = createAsyncThunk(
    "cafe/get/all",
    async (id) => {
        const res = await baseService.get<IUser>(`/cafe/${id}`)
        return res.data
    }
)

export const getClientById = createAsyncThunk(
    "client/get",
    async (id) => {
        const res = await baseService.get<IUser>(`/client/${id}`)
        return res.data
    }
)

export const deleteClient = createAsyncThunk(
    "client/delete",
    async (id) => {
        const res = await baseService.delete<string>(`/client/${id}`)
        return res.data
    }
)