import { configureStore } from '@reduxjs/toolkit';
import tiersReducer from '../Slicers/TiersSlicer';

const store = configureStore({
  reducer: {
    tier: tiersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
