import { createSlice } from "@reduxjs/toolkit";
import { UserLoginViewModel } from "../api/generated/generatedApiAuth";

export interface UserStateProps {
  user: UserLoginViewModel | null;
  isAuthenticated: boolean;
}
const initialState: UserStateProps = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
