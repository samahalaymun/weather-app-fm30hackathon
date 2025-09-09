import { useEffect, useState } from "react";

function CurrentWeatherCard() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative">
      <img
        src={
          screenWidth > 1024
            ? "/assets/images/bg-today-large.svg"
            : "/assets/images/bg-today-small.svg"
        }
        alt="bg-today"
        className="w-full h-full rounded-xl   transition-all duration-700 ease-in-out"
      />
      <div className="absolute  w-full h-full z-20 top-0 left-0 flex flex-col gap-4 justify-center md:flex-row md:justify-between items-center p-6 ">
        <div className="">
          <h2 className="text-[28px] font-bold leading-[120%] mb-3 text-center md:text-left">
            Berlin, Germany
          </h2>
          <p className="text-neutral-0 font-medium text-center md:text-left">
            Tuesday, Aug 5, 2025
          </p>
        </div>
        <div className="flex justify-between items-center md:gap-5">
          <img
            src="/assets/images/icon-sunny.webp"
            alt="weather-status"
            className="w-30 h-30"
          />
          <span className="text-8xl md:text-[96px] font-semibold -tracking-[2%] font-sans">20°</span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
