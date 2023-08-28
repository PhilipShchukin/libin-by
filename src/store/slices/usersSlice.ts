import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface SearchSliceState {
//     searchValue: string;
//   }
const initialState = {
  users: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<string>) {
      state.users = action.payload;
    },  
  },
});

export const {  setUsers } =
usersSlice.actions;

export default usersSlice.reducer;