import { createSlice } from "@reduxjs/toolkit";
import { BasketState } from "../../../types/IBasket";

const initialState: BasketState = {
    dishes: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addDishReducer: (state, action) => {
            state.dishes.push({...action.payload, count: 1})
        },
        deleteDishReducer: (state, action) => {
            state.dishes = state.dishes.filter(dish => dish._id !== action.payload)
        },
        increaseCountDishReducer: (state, action) => {
            state.dishes = state.dishes.map(dish => {
                if(dish._id === action.payload) {
                    return{...dish, count: dish.count + 1}
                }
                return dish
            })
        },
        decreaseCountDishReducer: (state, action) => {
            state.dishes = state.dishes.map(dish => {
                if(dish._id === action.payload && dish.count > 1) {
                    return{...dish, count: dish.count - 1}
                }
                return dish
            })
        }
    },
    extraReducers: (builder) => {}
})

export default basketSlice.reducer

export const {addDishReducer, deleteDishReducer, increaseCountDishReducer, decreaseCountDishReducer} = basketSlice.actions