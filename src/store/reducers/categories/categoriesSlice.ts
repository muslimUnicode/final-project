import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryState, ICategory } from "../../../types/ICategory";
import { getCategories } from "./categoriesAction";

const initialState: CategoryState = {
    categories: [],
    isLoading: false,
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload
            state.isLoading = false
        })
    }
})

export default categoriesSlice.reducer