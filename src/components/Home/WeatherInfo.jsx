import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import DaysDropDown from "./DaysDropDown";
import ExtraInfoCard from "./ExtraInfoCard";
import HourlyForecastCard from "./HourlyForecastCard";
import WeatherDayCard from "./WeatherDayCard";
import moment from "moment";
import { weatherIcons } from "../../utils/utils";

function WeatherInfo() {
  const url = import.meta.env.BASE_URL;
  const { weather, units } = useSelector((state) => state.weather);
  const [selected, setSelected] = useState(null);

  const setCurrentDay = (day) => {
    setSelected(day);
  };

  useEffect(() => {
    if (weather?.daily && !selected) {
      setSelected(weather.daily.time[0]);
    }
  }, [weather, selected]);

  let hourlyData = [];
  if (selected) {
    hourlyData = weather?.hourly.time
      .map((t, i) => ({
        time: t,
        temp: weather?.hourly.temperature_2m[i],
        code: weather?.hourly.weathercode[i],
      }))
      .filter((h) => h.time.startsWith(selected));
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 lg:mt-[48px] gap-8 w-full text-white">
      {/* weather info / left side */}
      <div className="lg:col-span-2 flex flex-col gap-5 md:gap-8">
        <CurrentWeatherCard />

        {/* weather extra info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ExtraInfoCard
            label="Feels Like"
            value={`${Math.round(weather?.current.apparent_temperature)}°`}
          />
          <ExtraInfoCard
            label="Humidity"
            value={`${Math.round(weather?.current.relative_humidity_2m)}%`}
          />
          <ExtraInfoCard
            label="Wind"
            value={`${Math.round(weather?.current.windspeed_10m)} ${
              units.wind === "kmh" ? "km/h" : "mph"
            }`}
          />
          <ExtraInfoCard
            label="Precipitation"
            value={`${weather?.current.precipitation} ${
              units.precip === "mm" ? "mm" : "in"
            }`}
          />
        </div>
        {/* weather 7 days info */}
        <div className="lg:mt-4">
          <h3 className="text-xl mb-5 -tracking-[2%]  leading-[120%]">
            Daily forecast
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {weather?.daily?.time?.map((day, i) => (
              <WeatherDayCard
                key={`daily-${i}`}
                day={moment(day).format("ddd")}
                icon={weatherIcons[weather?.daily?.weathercode[i]]}
                high={`${Math.round(weather?.daily?.temperature_2m_max[i])}°`}
                low={`${Math.round(weather?.daily?.temperature_2m_min[i])}°`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hourly forecast / right side */}
      <div className=" relative bg-neutral-800  flex flex-col gap-3 rounded-[20px] max-h-[693px] ">
        <div className="flex justify-between bg-neutral-800 rounded-[20px] px-6 pt-6  items-center sticky top-0">
          <h2 className="text-xl font-semibold leading-[120%]">
            Hourly forecast
          </h2>
          <DaysDropDown selectedDay={selected} setSelectedDay={setCurrentDay} />
        </div>

        <div className="flex-1  flex flex-col gap-4 pl-6 pb-6 pr-[18px] overflow-y-auto">
          {hourlyData.map((hour, index) => (
            <HourlyForecastCard
              key={`hourly-${index}`}
              time={moment(hour.time).format("hA")}
              temp={`${Math.round(hour.temp)}°`}
              icon={weatherIcons[hour.code]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
