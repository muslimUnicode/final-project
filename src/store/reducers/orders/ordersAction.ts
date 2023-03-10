import { createAsyncThunk } from "@reduxjs/toolkit"
import baseService from "../../../api/api"
import { IOrder } from "../../../types/IOrder"

export const getOrders = createAsyncThunk(
    "order/get/all",
    async function () {
        const res = await baseService.get<IOrder[]>("/orders")
        return res.data
    }
)

export const getOrderById = createAsyncThunk(
    "order/get",
    async function (id) {
        const res = await baseService.get<IOrder>(`/orders/${id}`)
        return res.data
    }
)