import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tiers: [],
};

const tierSlice = createSlice({
  name: 'tier',
  initialState,
  reducers: {},
});

export const {} = tierSlice.actions;
export default tierSlice.reducer;
