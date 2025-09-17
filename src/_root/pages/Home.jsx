import SearchBar from "../../components/Home/SearchBar";
import WeatherInfo from "../../components/Home/WeatherInfo";
import LoadingWeatherState from "../../components/Home/LoadingWeatherState";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../features/weather/weatherSlice";
import { useEffect } from "react";
import ErrorPage from "../../components/ErrorPage";

function Home() {
  const { location, units, isLoading, error, fetchWeatherError } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather({ lat: location.lat, lon: location.lon, units }));
  }, []);
  if (fetchWeatherError || error === "Network Error") {
    return <ErrorPage />;
  }

  return (
    <div className="mt-14">
      <h1 className="font-grotesque text-[52px] text-center leading-base">
        How's the sky looking today?
      </h1>
      <SearchBar />
      {isLoading ? <LoadingWeatherState /> : !error && <WeatherInfo />}
    </div>
  );
}

export default Home;
