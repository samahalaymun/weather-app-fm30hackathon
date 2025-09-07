import React from 'react'

function SearchBar() {
  return (
    <div className="mt-12 flex gap-5 md:flex-row flex-col  items-center justify-center">
      <div className="relative min-w-full  md:min-w-[518px]">
        <input
          className="rounded-lg bg-neutral-800  pl-14 px-5 py-3   w-full"
          placeholder="Search for a place..."
        />
        <img
          src="/assets/images/icon-search.svg"
          alt="search"
          className="absolute left-5 top-[35%]"
        />
      </div>
      <button className="rounded-lg bg-blue-500 w-full p-3.5 md:w-[116px]">
        Search
      </button>
    </div>
  );
}

export default SearchBar
