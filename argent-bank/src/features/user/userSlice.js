import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { connected: false, token: null, userInfos: {} },
  reducers: {
    connection: (state, action) => {
      state.connected = true;
      state.token = action.payload;
    },
    disconnection: (state) => {
      state.connected = false;
      state.token = null;
    },
    chargeUserInfos: (state, action) => {
      state.userInfos = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { connection, disconnection, chargeUserInfos } = userSlice.actions;
