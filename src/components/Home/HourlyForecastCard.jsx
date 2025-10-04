function HourlyForecastCard({ time, temp, icon }) {
  const url = import.meta.env.BASE_URL;
  return (
    <div className="rounded-lg gap-2 w-full flex justify-between items-center border border-neutral-150 dark:border-neutral-600 shadow pl-3 py-2.5 pr-4 bg-neutral-100 dark:bg-neutral-700">
      <img src={url + icon} alt="hourly-weather" className="w-10 h-10" />
      <p className="text-xl font-medium leading-[120%] flex-1">{time}</p>

      <p className="text-[16px] font-regular text-neutral-600 dark:text-neutral-200">{temp}°</p>
    </div>
  );
}

export default HourlyForecastCard;
