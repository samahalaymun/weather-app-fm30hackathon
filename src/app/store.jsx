import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice"
import themeReducer from "../features/weather/themeSlice";


export const store = configureStore({
  reducer: {
   weather:weatherReducer,
   theme:themeReducer
  },
});
