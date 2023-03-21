import { createSlice } from "@reduxjs/toolkit";
import { BasketState } from "../../../types/IBasket";

const initialState: BasketState = {
    dishes: [
        {
            _id: "64070f71c2dc881593408313",
            name: "Гамбургер c говядиной",
            image: "https://unicodebootcamp.s3.amazonaws.com/burger.jpeg",
            info: "Постная говядина, cливочное масло, молотый сушеный лук, вода",
            categoryId: "6406dc77f101efd78c8102bc",
            price: 150,
            cafeId: "6406e2afd93a08984a6133ee",
            count: 1,
        },
        {
            _id: "64070f71c2dc881593408313",
            name: "Гамбургер c говядиной",
            image: "https://unicodebootcamp.s3.amazonaws.com/burger.jpeg",
            info: "Постная говядина, cливочное масло, молотый сушеный лук, вода",
            categoryId: "6406dc77f101efd78c8102bc",
            price: 150,
            cafeId: "6406e2afd93a08984a6133ee",
            count: 1,
        }
    ],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addDishReducer: (state, action) => {
            state.dishes.push({...action.payload, count: 1})
        },
    },
    extraReducers: (builder) => {}
})

export default basketSlice.reducer