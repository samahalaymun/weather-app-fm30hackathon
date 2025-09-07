import { useState } from "react";

export default function UnitsDropdown() {
  const [open, setOpen] = useState(false);
//   const [selectedTemperature, setSelectedTemperature] = useState("Celsius");
//   const [selectedWindSpeed, setSelectedWindSpeed] = useState("km/h");
//   const [selectedPrecipitation, setSelectedPrecipitation] = useState("mm");
  const [isImperial, setIsImperial] = useState(false);

    const [selected, setSelected] = useState({
      temperature: "Celsius (°C)",
      windSpeed: "km/h",
      precipitation: "Millimeters (mm)",
    });


  const handleMeasurementUnitChange = (event) => {
    setIsImperial(event.target.checked);
  };

  const handleTemperatureChange = (event) => {
    setSelectedTemperature(event.target.value);
  };

  const handleWindSpeedChange = (event) => {
    setSelectedWindSpeed(event.target.value);
  };

  const handlePrecipitationChange = (event) => {
    setSelectedPrecipitation(event.target.value);
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

            {/* Temperature */}
            <div className="space-y-1">
              <p className="text-sm text-neutral-300 px-3">Temperature</p>
              <div className="flex flex-col gap-1  border-b border-b-neutral-500">
                <div>
                  <input
                    id="temperature-Celsius"
                    type="radio"
                    value="Celsius"
                    name="temperature"
                    className="hidden"
                    onChange={handleTemperatureChange}
                  />
                  <label
                    htmlFor="temperature-Celsius"
                    className={`flex justify-between rounded-md px-3 py-2 text-sm  ${
                      selectedTemperature === "Celsius"
                        ? "bg-neutral-700 text-neutral-0"
                        : "hover:bg-neutral-700"
                    }`}
                  >
                    Celsius (°C)
                    {selectedTemperature === "Celsius" && (
                      <span className="text-neutral-0">✔</span>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    id="temperature-Fahrenheit"
                    type="radio"
                    value="Fahrenheit"
                    name="temperature"
                    className="hidden"
                    onChange={handleTemperatureChange}
                  />
                  <label
                    htmlFor="temperature-Fahrenheit"
                    className={`flex justify-between rounded-md px-3 py-2 text-sm  ${
                      selectedTemperature === "Fahrenheit"
                        ? "bg-neutral-700 text-neutral-0"
                        : "hover:bg-neutral-700"
                    }`}
                  >
                    Fahrenheit (°F)
                    {selectedTemperature === "Fahrenheit" && (
                      <span className="text-neutral-0">✔</span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            {/* Wind Speed */}
            <div className="space-y-1">
              <p className="text-sm text-neutral-300 px-3">Wind Speed</p>
              <div className="flex flex-col gap-1  border-b border-b-neutral-500">
                <div>
                  <input
                    id="windSpeed-km/h"
                    type="radio"
                    value="km/h"
                    name="windSpeed"
                    className="hidden"
                    onChange={handleWindSpeedChange}
                  />
                  <label
                    htmlFor="windSpeed-km/h"
                    className={`flex justify-between rounded-md px-3 py-2 text-sm  ${
                      selectedWindSpeed === "km/h"
                        ? "bg-neutral-700 text-neutral-0"
                        : "hover:bg-neutral-700"
                    }`}
                  >
                    km/h
                    {selectedWindSpeed === "km/h" && (
                      <span className="text-neutral-0">✔</span>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    id="windSpeed-mph"
                    type="radio"
                    value="mph"
                    name="windSpeed"
                    className="hidden"
                    onChange={handleWindSpeedChange}
                  />
                  <label
                    htmlFor="windSpeed-mph"
                    className={`flex justify-between rounded-md px-3 py-2 text-sm  ${
                      selectedWindSpeed === "mph"
                        ? "bg-neutral-700 text-neutral-0"
                        : "hover:bg-neutral-700"
                    }`}
                  >
                    mph
                    {selectedWindSpeed === "mph" && (
                      <span className="text-neutral-0">✔</span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            {/* "Precipitation"*/}
            <div className="space-y-1">
              <p className="text-sm text-neutral-300 px-3">Precipitation</p>
              <div className="flex flex-col gap-1">
                <div>
                  <input
                    id="precipitation-mm"
                    type="radio"
                    value="mm"
                    name="precipitation"
                    className="hidden"
                    onChange={handlePrecipitationChange}
                  />
                  <label
                    htmlFor="precipitation-mm"
                    className={`flex justify-between rounded-md px-3 py-2 text-sm  ${
                      selectedPrecipitation === "mm"
                        ? "bg-neutral-700 text-neutral-0"
                        : "hover:bg-neutral-700"
                    }`}
                  >
                    Millimeters (mm)
                    {selectedPrecipitation === "mm" && (
                      <span className="text-neutral-0">✔</span>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    id="precipitation-in"
                    type="radio"
                    value="in"
                    name="precipitation"
                    className="hidden"
                    onChange={handlePrecipitationChange}
                  />
                  <label
                    htmlFor="precipitation-in"
                    className={`flex justify-between rounded-md px-3 py-2 text-sm  ${
                      selectedPrecipitation === "in"
                        ? "bg-neutral-700 text-neutral-0"
                        : "hover:bg-neutral-700"
                    }`}
                  >
                    Inches (in)
                    {selectedPrecipitation === "in" && (
                      <span className="text-neutral-0">✔</span>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
