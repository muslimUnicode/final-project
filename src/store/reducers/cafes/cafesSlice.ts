import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CafesState, ICafe } from "../../../types/ICafe"
import { getCafes } from "./cafesAction"

const initialState: CafesState = {
    cafes: [],
    isLoading: false,
}

export const cafesSlice = createSlice({
    name: "cafes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCafes.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCafes.fulfilled, (state, action: PayloadAction<ICafe[]>) => {
            state.cafes = action.payload
            state.isLoading = false
        })
    }
})

export default cafesSlice.reducer