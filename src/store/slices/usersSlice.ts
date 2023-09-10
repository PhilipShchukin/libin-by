import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  email: null  
};


const usersSlice = createSlice({
  name: 'user',
  initialState:initialUserState,
  reducers: {

    setLogin(state, action) {
      if (action.payload?.error) {
        state = initialUserState;
      } else {
        state.email = action.payload;
      }
    },

    setSignup(state, action) {
      if (action.payload?.error) {
        state = initialUserState;
      } else {
        state.email = action.payload;
      }
    },

    setLogout(state) {
      state = initialUserState;
    },

    setGetSavedUser(state, action) {
      state = action.payload;
    },   
  },
});

export const {  setLogin, setSignup, setLogout,setGetSavedUser } =
usersSlice.actions;

export default usersSlice.reducer;