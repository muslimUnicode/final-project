import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodsState, IFood } from "../../../types/IFood";
import { getFood } from "./foodsAction";

const initialState: FoodsState = {
    foods: [],
    isLoading: false,
}

export const foodsSlice = createSlice({
    name: "foods",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFood.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getFood.fulfilled, (state, action: PayloadAction<IFood[]>) => {
            state.foods = action.payload
            state.isLoading = false
        })
    }
})

export default foodsSlice.reducer