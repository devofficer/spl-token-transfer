import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  address: "",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    connected: (state, action) => {
      state.isConnected = action.payload.connected;
      state.address = action.payload.address;
    },
  },
});

export const { connected } = walletSlice.actions;
export default walletSlice.reducer;
