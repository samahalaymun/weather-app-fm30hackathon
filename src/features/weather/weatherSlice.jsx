import { createSlice } from "@reduxjs/toolkit";

const initState = {
  currentWeather: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default weatherSlice.reducer;
