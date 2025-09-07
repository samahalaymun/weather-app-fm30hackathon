import React from 'react'
import SearchBar from '../../components/Home/SearchBar';

function Home() {
  return (
    <div className="mt-14">
      <h1 className="font-grotesque text-[52px] text-center leading-base">
        How's the sky looking today?
      </h1>
     <SearchBar/>
    </div>
  );
}

export default Home
