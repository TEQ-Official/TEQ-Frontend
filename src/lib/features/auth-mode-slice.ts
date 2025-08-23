import { AuthModeState, IAuthMode } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthModeState = {
  mode: "Learner",
};

const authModeSlice = createSlice({
  name: "authMode",
  initialState,
  reducers: {
    setAuthMode(state, action: PayloadAction<IAuthMode>) {
      state.mode = action.payload;
    },
  },
});

export const { setAuthMode } = authModeSlice.actions;
export const authModeReducer = authModeSlice.reducer;
