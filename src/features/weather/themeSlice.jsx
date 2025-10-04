import { createSlice } from "@reduxjs/toolkit";

const initState = {
  lightMode: localStorage.getItem("theme") === "light",
  fill: localStorage.getItem("theme") === "light" ? "#03012d" : "#ffffff",
};


export const themeSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    setLightMode: (state, action) => {
      state.lightMode = action.payload;
      state.fill = state.lightMode ? "#03012d" : "#ffffff";
    },
  },
}); 
export const { setLightMode } = themeSlice.actions;

export default themeSlice.reducer;
