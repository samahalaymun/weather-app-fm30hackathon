import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather, setLocation } from "../../features/weather/weatherSlice";

function SearchResult({ cities, setQuery }) {
  const {  units } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const setSelectedLocation = (location) => {
    dispatch(setLocation(location));
    dispatch(getWeather({ lat: location.lat, lon: location.lon, units }));
    setQuery(location.displayName);
  };
  return (
    <div className="min-w-full  z-50 border border-neutral-700  absolute left-0 top-16 flex flex-col gap-1 items-center  lg:min-w-[526px] rounded-xl bg-neutral-800 p-2">
      {cities.map((city, index) => (
        <p
          key={`${index}-${city.name}-${city.country}`}
          onClick={() => {
            setSelectedLocation({
              lat: city?.latitude,
              lon: city?.longitude,
              displayName: `${city?.name}, ${city?.country ?? ""}`.trim(),
            });
          }}
          className="rounded-lg cursor-pointer px-2 py-2.5 hover:bg-neutral-700 hover:border hover:border-neutral-600 w-full"
        >
          {`${city?.name}, ${
            city?.country  ?? ""
          }`.trim()}
        </p>
      ))}
    </div>
  );
}

export default SearchResult;
