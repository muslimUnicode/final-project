import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api";
import { ICategory } from "../../../types/ICategory";

export const getCategories = createAsyncThunk(
    "category/get/all",
    async () => {
        const res = await baseService.get<ICategory[]>("/categories")
        return res.data
    }
)

export const getCategoryById = createAsyncThunk(
    "category/get",
    async (id) => {
        const res = await baseService.get<ICategory>(`/categories/${id}`)
        return res.data
    }
)