import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { connected: false, userInfos: {} },
  reducers: {
    connection: (state) => {
      state.connected = true;
    },
    disconnection: (state) => {
      state.connected = false;
    },
  },
});
export default userSlice.reducer;
export const { connection, disconnection } = userSlice.actions;
