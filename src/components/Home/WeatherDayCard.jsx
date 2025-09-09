import React from 'react'

function WeatherDayCard({day,low,high,icon}) {
  return (
    <div className="bg-neutral-800 border gap-3 h-[165px] border-neutral-600 flex flex-col items-center justify-between px-2.5 py-4 rounded-xl">
      <p className="font-medium">{day}</p>
      {icon&&<img src={icon} className="w-[60px] h-[60px]" alt="day-weather-icon" />}
      <div className="flex justify-between w-full">
        <p className="text-[16px] font-medium leading-[120%]">{high}</p>
        <p className="text-[16px] font-medium  leading-[120%]">{low}</p>
      </div>
    </div>
  );
}

export default WeatherDayCard
