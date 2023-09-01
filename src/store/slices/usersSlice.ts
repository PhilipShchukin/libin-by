import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  users: {},
  isLogIn: localStorage.getItem("isLogIn") === "true" ,
  userName: localStorage.getItem("userName"),
  userPassword: localStorage.getItem("userPassword"),
  userEmail: localStorage.getItem("userEmail"),
  
};


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<string>) {
      state.users = action.payload;
    },
    setIsLogIn(state, action: PayloadAction<boolean>) {
      state.isLogIn = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    }, 
    setUserPassword(state, action: PayloadAction<string>) {
      state.userPassword = action.payload;
    },
    setUserEmail(state, action: PayloadAction<string>) {
      state.userEmail = action.payload;
    },    
  },
});

export const {  setUsers, setIsLogIn, setUserName,setUserPassword,setUserEmail } =
usersSlice.actions;

export default usersSlice.reducer;