import { useState } from "react";
import UnitGroup from "./UnitGroup";

const unitsOptions = [
  {
    label: "Temperature",
    key: "temperature",
    options: ["Celsius (°C)", "Fahrenheit (°F)"],
  },
  {
    label: "Wind Speed",
    key: "windSpeed",
    options: ["km/h", "mph"],
  },
  {
    label: "Precipitation",
    key: "precipitation",
    options: ["Millimeters (mm)", "Inches (in)"],
  },
];

export default function UnitsDropdown() {
  const [open, setOpen] = useState(false);
  const [isImperial, setIsImperial] = useState(false);
  const [selected, setSelected] = useState({
    temperature: "Celsius (°C)",
    windSpeed: "km/h",
    precipitation: "Millimeters (mm)",
  });

  const handleMeasurementUnitChange = (event) => {
    setIsImperial(event.target.checked);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-neutral-200 hover:border-2 hover:border-neutral-0"
      >
        <img src="/assets/images/icon-units.svg" alt="units" />
        Units
        <img src="/assets/images/icon-dropdown.svg" alt="dropdown" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-neutral-800 shadow-lg ring-1 ring-neutral-700 z-50">
          <div className="p-3 space-y-3">
            <div className="px-3 py-3 hover:border hover:border-neutral-0 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                name="measurementUnit"
                id="measurementUnit"
                className="hidden"
                checked={isImperial}
                onChange={handleMeasurementUnitChange}
              />
              <label htmlFor="measurementUnit">
                Switch to {isImperial === false ? "Imperial" : "Metric"}
              </label>
            </div>

            {unitsOptions.map((group) => (
              <UnitGroup
                key={group.key}
                group={group}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
