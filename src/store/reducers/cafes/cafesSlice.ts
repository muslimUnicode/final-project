import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICafe, CafeState } from "../../../types/ICafe";
import { cafeSignUp, getCafeById } from "./cafesAction";


const initialState: CafeState = {
    user: {
        _id: "",
        name: "",
        image: "",
        phone: "",
        city: "",
        address: "",
        mail: "",
        password: "",
        role: "",
        menu: [],
    },
    isLoading: false,
    isAuth: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // logoutReducer: (state) => {
        //     state.user.token = ""
        //     state.user._id = ""
        //     state.user.avatar = ""
        //     state.user.username = ""
        //     state.isLoading = false
        // }
    },
    extraReducers: (builder) => {
        // builder.addCase(CafeSignIn.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(CafeSignIn.fulfilled, (state, action: PayloadAction<ICafe>) => {
        //     state.user = action.payload
        //     state.isLoading = false
        //     state.isAuth = true
        // });
        builder.addCase(getCafeById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCafeById.fulfilled, (state, action: PayloadAction<ICafe>) => {
            state.user._id = action.payload._id
            state.user.address = action.payload.address
            state.user.city = action.payload.city
            state.user.mail = action.payload.mail
            state.user.name = action.payload.name
            state.user.password = action.payload.password
            state.user.phone = action.payload.phone
            state.user.role = action.payload.role
            state.isLoading = false
        })
        builder.addCase(getCafeById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(cafeSignUp.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(cafeSignUp.fulfilled, (state, action) => {
            state.isLoading = false
            window.location.href = "/sign-in"
        })
        builder.addCase(cafeSignUp.rejected, (state, action) => {
            state.isLoading = false
        })
    }
});

export default userSlice.reducer

// export const { logoutReducer } = userSlice.actions