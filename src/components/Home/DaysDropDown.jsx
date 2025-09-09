import { useState } from "react";
import { days } from "../../utils/utils";


function DaysDropDown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Tuesday");
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer gap-3 text-[16px] rounded-lg bg-neutral-600 px-4 py-2 text-neutral-0 hover:border-2 hover:border-neutral-0"
      >
        {selected}
        <img src="/assets/images/icon-dropdown.svg" alt="dropdown" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-54 z-50 flex flex-col gap-1 border border-neutral-600 shadow-lg r bg-neutral-800 rounded-lg p-2">
          {days.map((day) => (
            <p
              onClick={() => {setSelected(day);setOpen(false)}}
              className={`px-2 py-2.5 rounded-lg hover:bg-neutral-700 ${
                selected === day ? "bg-neutral-700" : ""
              }`}
            >
              {day}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DaysDropDown;
