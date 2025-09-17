import { useEffect, useState } from "react";
import SearchInProgress from "./SearchInProgress";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, getWeather } from "../../features/weather/weatherSlice";
import { deboune } from "../../utils/utils";

function SearchBar() {
  const url = import.meta.env.BASE_URL;

  const { units, searchLoding, error, searchResult, location } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = deboune((value) => {
    setSearchQuery(value);
  }, 500);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (location && !error)
      dispatch(getWeather({ lat: location.lat, lon: location.lon, units }));
  };
  useEffect(() => {
    dispatch(getLocation(searchQuery)).unwrap();
  }, [searchQuery]);
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="mt-12 flex gap-3 md:gap-4 md:flex-row flex-col  items-center justify-center"
      >
        <div className="relative  w-full  lg:w-[526px]">
          <input
            className="rounded-xl bg-neutral-800 px-[62px] py-4 w-full tracking-wider"
            placeholder="Search for a place..."
            onChange={(e) => {
              setCity(e.target.value);
              handleSearchInput(e.target.value);
            }}
            value={city}
            type="text"
            name="searchCity"
          />
          <img
            src={url+"/assets/images/icon-search.svg"}
            alt="search"
            className="absolute left-6 top-[35%]"
          />
          {searchLoding && <SearchInProgress />}
          {searchResult.length > 0 && searchQuery && (
            <SearchResult setQuery={setCity} cities={searchResult} />
          )}
        </div>
        <button
          disabled={!city}
          className="rounded-xl disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-xl font-medium w-full md:h-[56px] px-6 py-4 md:w-[114px]"
        >
          Search
        </button>
      </form>
      {error && (
        <p className="text-[28px] font-bold text-center w-full mt-12">
          {error}
        </p>
      )}
    </>
  );
}

export default SearchBar;
