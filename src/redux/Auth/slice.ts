import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserLoginForm } from "types/types";

type TinitState = {
  email: string;
};
const initialState: TinitState = {
  email: "",
};
const commonSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<IUserLoginForm>) => {},
    loginUser: (state, action: PayloadAction<IUserLoginForm>) => {},
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});
export const { registerUser, loginUser, setEmail } = commonSlice.actions;

export default commonSlice.reducer;
