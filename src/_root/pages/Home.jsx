import SearchBar from '../../components/Home/SearchBar';
import WeatherInfo from '../../components/Home/WeatherInfo';
import LoadingWeatherState from '../../components/Home/LoadingWeatherState';

function Home() {
  return (
    <div className="mt-14">
      <h1 className="font-grotesque text-[52px] text-center leading-base">
        How's the sky looking today?
      </h1>
     <SearchBar/>
     {true&&<WeatherInfo />}
     {false&&<LoadingWeatherState />}
    </div>
  );
}

export default Home
