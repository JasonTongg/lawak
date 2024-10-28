import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  twitter: "",
  telegram: "",
};

const datas = createSlice({
  name: "Datas",
  initialState,
});

export const getUniswap = (state) => {
  return `https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=${state.data.address}`;
};

export const getDextools = (state) => {
  return `https://www.dextools.io/app/en/ether/pair-explorer/${state.data.address}`;
};

export const getDexscreener = (state) => {
  return `https://dexscreener.com/ethereum/${state.data.address}`;
};

export default datas.reducer;
