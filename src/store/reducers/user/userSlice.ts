import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "../../../types/IUser";
import { userSignUp, getCafeById, getClientById } from "./userAction";


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

// export const { logoutReducer } = userSlice.actions