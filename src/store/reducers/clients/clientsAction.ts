import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api"
import { IClient } from "../../../types/IClient";
import Cookies from "js-cookie";
import { IReg } from "../../../types/IReg";
import { IAuth } from "../../../types/IAuth";

export const clientSignUp = createAsyncThunk<string, IReg>(
    "client/sign-up",
    async function (userData) {
        const res = await baseService.post("/client/signup", userData)
        return res.data
    }
)

export const clientSignIn = createAsyncThunk<{token: string, id: string, role: string}, IAuth>(
    "/sign-in",
    async function (userData) {
        const res = await baseService.post("/signin", userData)
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