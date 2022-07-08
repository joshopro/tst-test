import { createSlice } from "@reduxjs/toolkit";

export const SignUpSlice = createSlice({
  name: "signup",
  initialState: {
    signup: {
      userName: "",
      password: "",
      confirmPassword: "",
    },
    hiddenPassword: true,
    hiddenConfirmPassword: true,
  },
  reducers: {
    load: (state, action) => {
      state.signup = action.payload.signup
      state.hiddenConfirmPassword = true
      state.hiddenPassword = true
    },
    setHiddenPassword: (state, action) => {
        state.hiddenPassword = action.payload.hiddenPassword
    },
    setHiddenConfirmPassword: (state, action) => {
        state.hiddenConfirmPassword = action.payload.hiddenConfirmPassword
    }
  },
});

export const { load, setHiddenPassword, setHiddenConfirmPassword} = SignUpSlice.actions;

export default SignUpSlice.reducer;
