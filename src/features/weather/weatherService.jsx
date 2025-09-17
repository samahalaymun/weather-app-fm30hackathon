import axios from "axios";

const fetchLocation = async (searchQuery) => {
  let result = [];
  if (searchQuery.length >= 2) {
    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=5&language=en&format=json`);

    const json = await response.data;
    result = json.results;
    if (!result) {
      throw new Error("No search result found!");
    }
  } else {
    result = [];
  }

  return result;
};

const fetchWeather = async (weatherInfo) => {
  const params = {
    latitude: weatherInfo.lat,
    longitude: weatherInfo.lon,
    timezone: "auto",
    forecast_days: 7,
    current: [
      "temperature_2m",
      "apparent_temperature",
      "weathercode",
      "relative_humidity_2m",
      "windspeed_10m",
      "precipitation",
    ].join(","),
    hourly: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "windspeed_10m",
      "precipitation",
      "weathercode",
    ].join(","),
    daily: [
      "weathercode",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
    ].join(","),
    temperature_unit: weatherInfo.units.temp,
    windspeed_unit: weatherInfo.units.wind,
    precipitation_unit: weatherInfo.units.precip,
  };
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const response = await axios.get(url);
  return response.data;
};

const weatherService = {
  fetchLocation,
  fetchWeather,
};

export default weatherService;
