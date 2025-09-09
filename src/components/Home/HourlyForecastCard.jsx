import React from 'react'

function HourlyForecastCard({time,temp,icon}) {
  return (
    <div className="rounded-lg gap-2 w-full flex justify-between items-center border border-neutral-600 shadow pl-3 py-2.5 pr-4 bg-neutral-700">
      <img
        src={icon}
        alt="hourly-weather"
        className="w-10 h-10"
      />
      <p className="text-xl font-medium leading-[120%] flex-1">{time}</p>

      <p className="text-[16px] font-regular text-neutral-200">{temp}°</p>
    </div>
  );
}

export default HourlyForecastCard
