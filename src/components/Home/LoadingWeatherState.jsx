import ExtraInfoCard from "./ExtraInfoCard";
import WeatherDayCard from "./WeatherDayCard";
import { days } from "../../utils/utils";
import DropDown from "../Svgs/DropDown";
import { useSelector } from "react-redux";

function LoadingWeatherState() {
  const { fill} = useSelector((state) => state.theme);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-[48px] gap-8 w-full text-neutral-900 dark:text-white">
      {/* weather info / left side */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        <div className="w-full h-[286px] bg-neutral-150 dark:bg-neutral-800 flex justify-center items-center px-6 py-20 rounded-[20px]">
          <div className="flex flex-col gap-[14px]  justify-center items-center">
            <div className="flex flex-row gap-2.5">
              <div className="w-3 h-3 rounded-full bg-neutral-600 dark:bg-neutral-0"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-600 dark:bg-neutral-0 -translate-y-1"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-600 dark:bg-neutral-0"></div>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-200 leading-[120%] font-medium">
              Loading...
            </p>
          </div>
        </div>

        {/* weather extra info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ExtraInfoCard label="Feels Like" value="–" />
          <ExtraInfoCard label="Humidity" value="–" />
          <ExtraInfoCard label="Wind" value="–" />
          <ExtraInfoCard label="Precipitation" value="–" />
        </div>
        {/* weather 7 days info */}
        <div className="mt-4">
          <h3 className="text-xl mb-5 -tracking-[2%]  leading-[120%]">
            Daily forecast
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {days.map((num) => (
              <WeatherDayCard key={num} />
            ))}
          </div>
        </div>
      </div>

      {/* Hourly forecast / right side */}
      <div className="p-6 bg-neutral-150 dark:bg-neutral-800 flex flex-col gap-4 rounded-[20px] overflow-hidden scroll-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-[120%]">
            Hourly forecast
          </h2>
          <div className="flex gap-3 items-center px-4 py-2 rounded-lg   bg-neutral-100 dark:bg-neutral-600">
            –
            <DropDown fill={fill} />
          </div>
        </div>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`${index}-hour`}
            className="rounded-lg gap-2 h-15 w-full flex justify-between items-center border border-neutral-50 dark:border-neutral-600 shadow pl-3 py-2.5 pr-4 bg-neutral-100 dark:bg-neutral-700"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default LoadingWeatherState;
