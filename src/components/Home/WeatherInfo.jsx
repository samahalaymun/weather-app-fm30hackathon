import CurrentWeatherCard from "./CurrentWeatherCard";
import DaysDropDown from "./DaysDropDown";
import ExtraInfoCard from "./ExtraInfoCard";
import HourlyForecastCard from "./HourlyForecastCard";
import WeatherDayCard from "./WeatherDayCard";

function WeatherInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-[48px] gap-8 w-full text-white">
      {/* weather info / left side */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        <CurrentWeatherCard />

        {/* weather extra info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ExtraInfoCard label="Feels Like" value="18°" />
          <ExtraInfoCard label="Humidity" value="46%" />
          <ExtraInfoCard label="Wind" value="14 km/h" />
          <ExtraInfoCard label="Precipitation" value="0 mm" />
        </div>
        {/* weather 7 days info */}
        <div className="mt-4">
          <h3 className="text-xl mb-5 -tracking-[2%]  leading-[120%]">
            Daily forecast
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            <WeatherDayCard
              day="Tue"
              icon="/assets/images/icon-rain.webp"
              high="20°"
              low="14°"
            />
            <WeatherDayCard
              day="Wed"
              icon="/assets/images/icon-rain.webp"
              low="15°"
              high="21°"
            />
            <WeatherDayCard
              day="Thu"
              icon="/assets/images/icon-rain.webp"
              low="14°"
              high="24°"
            />
            <WeatherDayCard
              day="Fri"
              icon="/assets/images/icon-rain.webp"
              low="13°"
              high="25°"
            />
            <WeatherDayCard
              day="Sat"
              icon="/assets/images/icon-rain.webp"
              low="15°"
              high="21°"
            />
            <WeatherDayCard
              day="Sun"
              icon="/assets/images/icon-rain.webp"
              low="16°"
              high="25°"
            />
            <WeatherDayCard
              day="Mon"
              icon="/assets/images/icon-rain.webp"
              low="15°"
              high="24°"
            />
          </div>
        </div>
      </div>

      {/* Hourly forecast / right side */}
      <div className=" relative bg-neutral-800  flex flex-col gap-3 rounded-[20px] max-h-[693px] ">
        <div className="flex justify-between bg-neutral-800 rounded-[20px] px-6 pt-6  items-center sticky top-0">
          <h2 className="text-xl font-semibold leading-[120%]">
            Hourly forecast
          </h2>
          <DaysDropDown />
        </div>

        <div className="flex-1  flex flex-col gap-4 pl-6 pb-6 pr-[18px] overflow-y-auto">
          {Array.from({ length: 24 }).map((_, index) => (
            <HourlyForecastCard
              time="3 PM"
              temp="20"
              icon="/assets/images/icon-overcast.webp"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
