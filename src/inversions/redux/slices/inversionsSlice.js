import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inversionsDataArr: [],
}
const inversionsSlice = createSlice({
  name: 'INVERSIONS',
  initialState,
  reducers: {
    SET_DATA_INVERSIONS: (state, action) => {
        console.log('SET_DATA_INVERSIONS', action.payload);
        state.inversionsDataArr = action.payload;
        }
    },
});

export const { SET_DATA_INVERSIONS } = inversionsSlice.actions;
export default inversionsSlice.reducer;