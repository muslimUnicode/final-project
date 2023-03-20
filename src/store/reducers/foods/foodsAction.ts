import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api";
import { IFood } from "../../../types/IFood";

export const getFood = createAsyncThunk(
    "food/get/all",
    async () => {
        const res = await baseService.get<IFood[]>("/food")
        return res.data
    }
)

export const getFoodById = createAsyncThunk(
    "food/get",
    async (id) => {
        const res = await baseService.get<IFood>(`/food/${id}`)
        return res.data
    }
)