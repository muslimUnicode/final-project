import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClient, ClientState } from "../../../types/IClient";
import { clientSignUp, getClientById } from "./clientsAction";


const initialState: ClientState = {
    user: {
        _id: "",
        name: "",
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
        // builder.addCase(clientSignIn.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(clientSignIn.fulfilled, (state, action: PayloadAction<IClient>) => {
        //     state.user = action.payload
        //     state.isLoading = false
        //     state.isAuth = true
        // });
        builder.addCase(getClientById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getClientById.fulfilled, (state, action: PayloadAction<IClient>) => {
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
        builder.addCase(getClientById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(clientSignUp.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(clientSignUp.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false
        })
        builder.addCase(clientSignUp.rejected, (state, action) => {
            console.log(action.meta.arg)
            state.isLoading = false
        })
    }
});

export default userSlice.reducer

// export const { logoutReducer } = userSlice.actions