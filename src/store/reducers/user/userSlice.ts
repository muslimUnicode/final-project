import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { IUser, UserState } from "../../../types/IUser";
import { userSignUp, getCafeById, getClientById, userSignIn, getUser } from "./userAction";


const initialState: UserState = {
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
    },
    isLoading: false,
    isAuth: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutReducer: (state) => {
            Cookies.remove("token")
            Cookies.remove("role")
            state.isLoading = false
            state.isAuth = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isAuth = true
            state.isLoading = false
        })
        builder.addCase(userSignIn.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(userSignIn.fulfilled, (state, action: PayloadAction<{token: string, id: string, role: string}>) => {
            Cookies.set("role", action.payload.role)
            Cookies.set("token", action.payload.token)
            state.isLoading = false
            state.isAuth = true
        });
        builder.addCase(getCafeById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCafeById.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
        })
        builder.addCase(getClientById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getClientById.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
        })
        builder.addCase(getCafeById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(userSignUp.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(userSignUp.fulfilled, (state, action) => {
            state.isLoading = false
            window.location.href = "/sign-in"
        })
        builder.addCase(userSignUp.rejected, (state, action) => {
            state.isLoading = false
        })
    }
});

export default userSlice.reducer

export const { logoutReducer } = userSlice.actions