import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CafeState } from "../../../types/ICafe";
import { IClient, ClientState } from "../../../types/IClient";
import { clientSignIn, clientSignUp, getClientById } from "./clientsAction";


const initialState: ClientState | CafeState = {
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
        builder.addCase(clientSignUp.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(clientSignUp.fulfilled, (state) => {
            state.isLoading = false
            window.location.href = "/sign-in"
        })
        builder.addCase(clientSignUp.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(clientSignIn.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(clientSignIn.fulfilled, (state, action) => {
            state.user.role = action.payload.role
            state.isLoading = false
        })
        builder.addCase(clientSignIn.rejected, (state) => {
            state.isLoading = false
        })
        // builder.addCase(getClientById.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(getClientById.fulfilled, (state, action: PayloadAction<IClient>) => {
            //     state.user._id = action.payload._id
            //     state.user.address = action.payload.address
            //     state.user.city = action.payload.city
            //     state.user.mail = action.payload.mail
            //     state.user.name = action.payload.name
            //     state.user.password = action.payload.password
            //     state.user.phone = action.payload.phone
            //     state.user.role = action.payload.role
            //     state.isLoading = false
            // })
        // builder.addCase(getClientById.rejected, (state) => {
        //     state.isLoading = false
        // })
        }
    });

export default userSlice.reducer

// export const { logoutReducer } = userSlice.actions