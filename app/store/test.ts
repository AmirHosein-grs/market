import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import type { PayloadAction } from "@reduxjs/toolkit";
import Coin from "../models/coins";

interface TestState {
  coin?: Coin;
}

const initialState: TestState = {
  coin: undefined,
};

export const testSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    testAction: (state, action: PayloadAction<string>) => {},
  },
});
export const { testAction } = testSlice.actions;
export const getCoin = (state: RootState) => state.coin;

export default testSlice.reducer;
