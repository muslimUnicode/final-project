import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import basketSlice from './reducers/basket/basketSlice';
import userSlice from './reducers/user/userSlice';

const rootReducer = combineReducers({
  user: userSlice,
  basket: basketSlice,
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
