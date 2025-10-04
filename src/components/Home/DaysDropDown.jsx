import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

function DaysDropDown({ selectedDay, setSelectedDay }) {
  const url = import.meta.env.BASE_URL;
  const [open, setOpen] = useState(false);
  const { weather } = useSelector((state) => state.weather);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer gap-3 text-[16px] rounded-lg  bg-neutral-100 dark:bg-neutral-600 px-4 py-2 dark:text-neutral-0 hover:border-2 dark:hover:border-neutral-0"
      >
        {moment(selectedDay).format("dddd")}
        <img src={url + "/assets/images/icon-dropdown.svg"} alt="dropdown" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-54 z-50 flex flex-col gap-1 border border-neutral-300 dark:border-neutral-600 shadow-lg r bg-neutral-150 dark:bg-neutral-800 rounded-lg p-2">
          {weather?.daily?.time?.map((day, i) => (
            <p
              key={`daus-drop-${i}`}
              onClick={() => {
                setSelectedDay(day);
                setOpen(false);
              }}
              className={`px-2 py-2.5 rounded-lg cursor-pointer dark:hover:bg-neutral-700 ${
                selectedDay === day
                  ? "dark:bg-neutral-700 bg-neutral-200"
                  : ""
              }`}
            >
              {moment(day).format("dddd")}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DaysDropDown;
