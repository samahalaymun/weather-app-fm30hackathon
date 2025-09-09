import React from 'react'

function SearchResult() {
  return (
    <div className="min-w-full z-50 border border-neutral-700  absolute left-0 top-16 flex flex-col gap-1 items-center  lg:min-w-[526px] rounded-xl bg-neutral-800 p-2">
      <p className='rounded-lg cursor-pointer px-2 py-2.5 hover:bg-neutral-700 hover:border hover:border-neutral-600 w-full'>Nablus</p>
      <p className='rounded-lg cursor-pointer px-2 py-2.5 hover:bg-neutral-700 hover:border hover:border-neutral-600 w-full'>Nablus</p>
      <p className='rounded-lg cursor-pointer px-2 py-2.5 hover:bg-neutral-700 hover:border hover:border-neutral-600 w-full'>Nablus</p>
      <p className='rounded-lg cursor-pointer px-2 py-2.5 hover:bg-neutral-700 hover:border hover:border-neutral-600 w-full'>Nablus</p>
    </div>
  );
}

export default SearchResult
