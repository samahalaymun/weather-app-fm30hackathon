import React from 'react'
import SearchInProgress from './SearchInProgress';
import SearchResult from './SearchResult';

function SearchBar() {
  return (
    <>
      <div className="mt-12 flex gap-4 md:flex-row flex-col  items-center justify-center">
        <div className="relative  w-full  lg:w-[526px]">
          <input
            className="rounded-xl bg-neutral-800 px-[62px] py-4 w-full tracking-wider"
            placeholder="Search for a place..."
          />
          <img
            src="/assets/images/icon-search.svg"
            alt="search"
            className="absolute left-6 top-[35%]"
          />
          {false &&<SearchInProgress />}
          {false &&<SearchResult />}

        </div>
        <button className="rounded-xl bg-blue-500 text-xl font-medium w-full md:h-[56px] px-6 py-4 md:w-[114px]">
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar
