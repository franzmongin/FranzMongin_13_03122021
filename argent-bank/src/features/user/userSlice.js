import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    connected: false,
    userInfos: {},
    requestStatus: "",
  },
  reducers: {
    connection: (state, action) => {
      state.connected = true;
    },
    disconnection: (state) => {
      state.connected = false;
      state.token = null;
    },
    chargeUserInfos: (state, action) => {
      state.userInfos = action.payload;
    },
    changeRequestStatus: (state, action) => {
      state.requestStatus = action.payload;
    },
    logOut: (state) => {
      state.connected = false;
    },
  },
});
export default userSlice.reducer;
export const {
  connection,
  disconnection,
  chargeUserInfos,
  changeRequestStatus,
  logOut,
} = userSlice.actions;
