import SearchBar from "../../components/Home/SearchBar";
import WeatherInfo from "../../components/Home/WeatherInfo";
import LoadingWeatherState from "../../components/Home/LoadingWeatherState";
import { useSelector } from "react-redux";

function Home() {
  const weatherState = useSelector((state) => state.weather);

  return (
    <div className="mt-14">
      <h1 className="font-grotesque text-[52px] text-center leading-base">
        How's the sky looking today?
      </h1>
      <SearchBar />
      {true && <WeatherInfo />}
      {false && <LoadingWeatherState />}
    </div>
  );
}

export default Home;
