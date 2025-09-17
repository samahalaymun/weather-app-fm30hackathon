import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "./weatherService";

const initState = {
  location: {
    lat: 52.52437,
    lon: 13.41053,
    displayName: "Berlin, Germany",
  },
  searchResult: [],
  weather: null,
  units: { temp: "celsius", wind: "kmh", precip: "mm" },
  system: "metric",
  status: "idle",
  error: null,
  isLoading: false,
  searchLoding: false,
  fetchWeatherError:null
};

export const getLocation = createAsyncThunk(
  "weather/fetchLocation",
  async (cityName, thunkAPI) => {
    try {
      return await weatherService.fetchLocation(cityName);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "API Error");
    }
  }
);
export const getWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (info, thunkAPI) => {
    try {
      return await weatherService.fetchWeather(info);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "API Error");
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initState,
  reducers: {
    setUnits: (state, action) => {
      state.units = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      state.searchResult = [];
    },
    setSystem: (state, action) => {
      state.system = action.payload;
      if (action.payload === "metric") {
        state.units = { temp: "celsius", wind: "kmh", precip: "mm" };
      } else {
        state.units = { temp: "fahrenheit", wind: "mph", precip: "inch" };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.pending, (state, action) => {
        state.searchLoding = true;
      })
      .addCase(getLocation.fulfilled, (state, action) => {
        state.searchResult = action.payload;
        state.searchLoding = false;
        state.error = null;
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.searchLoding = false;
        state.searchResult = [];
        state.error = action.payload;
      })
      .addCase(getWeather.pending, (state, action) => {
         state.fetchWeatherError = null;
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.isLoading = false;
      })
      .addCase(getWeather.rejected, (state, action) => {
         state.fetchWeatherError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setUnits, setSystem, setLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
