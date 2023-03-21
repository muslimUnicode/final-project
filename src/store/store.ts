import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import basketSlice from './reducers/basket/basketSlice';
import cafesSlice from './reducers/cafes/cafesSlice';
import categoriesSlice from './reducers/categories/categoriesSlice';
import foodsSlice from './reducers/foods/foodsSlice';
import userSlice from './reducers/user/userSlice';

const rootReducer = combineReducers({
    user: userSlice,
    basket: basketSlice,
    categories: categoriesSlice,
    foods: foodsSlice,
    cafes: cafesSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
