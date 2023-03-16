import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api"
import { ICafe } from "../../../types/ICafe";
import { IReg } from "../../../types/IReg";

export const cafeSignUp = createAsyncThunk<string, IReg>(
    "cafe/sign-up",
    async function (userData) {
        const res = await baseService.post("/cafe/signup", userData)
        return res.data
    }
)

export const getCafeById = createAsyncThunk(
    "cafe/get/all",
    async function (id) {
        const res = await baseService.get<ICafe>(`/cafe/${id}`)
        return res.data
    }
)

export const getCafes = createAsyncThunk(
    "cafe/get",
    async function () {
        const res = await baseService.get<ICafe[]>("/cafe")
        return res.data
    }
)