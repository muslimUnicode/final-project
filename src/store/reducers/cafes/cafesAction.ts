import { createAsyncThunk } from "@reduxjs/toolkit"
import baseService from "../../../api/api"
import { ICafe } from "../../../types/ICafe"

export const getCafes = createAsyncThunk(
    "cafe/get/all",
    async () => {
        const res = await baseService.get<ICafe[]>("/cafe")
        return res.data
    }
)

export const getCafeById = createAsyncThunk(
    "cafe/get",
    async (id) => {
        const res = await baseService.get<ICafe>(`/cafe/${id}`)
        return res.data
    }
)