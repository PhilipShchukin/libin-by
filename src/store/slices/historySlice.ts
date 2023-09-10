import { createSlice } from '@reduxjs/toolkit';

export type HistoryType = {
  search: string;
}[];

const initialHistoryState: HistoryType | undefined = [];

const historySlice = createSlice({
  name: 'history',
  initialState: initialHistoryState,
  reducers: {
    setDeleteAll(state) {
      state = [];
    },
    setAdd(state, action) {
      state.unshift(action.payload);
    },
    setReplaceAll(state, action) {
      state = action.payload;
    },
  },
});

export const { setDeleteAll, setAdd,setReplaceAll } = historySlice.actions


export default historySlice.reducer;
