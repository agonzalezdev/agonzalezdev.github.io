import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import slideReducer from '../redux/slide/slideReducer';

export const store = configureStore({
  reducer: {
    slide: slideReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
