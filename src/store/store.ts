import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import clientsSlice from './reducers/clients/clientsSlice';

const rootReducer = combineReducers({
  client: clientsSlice,
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
