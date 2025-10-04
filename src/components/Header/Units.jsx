import { useEffect, useState } from "react";
import UnitGroup from "./UnitGroup";
import { unitsOptions } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  getWeather,
  setSystem,
  setUnits,
} from "../../features/weather/weatherSlice";
import DropDown from "../Svgs/DropDown";
import UnitsIcon from "../Svgs/UnitsIcon";

export default function UnitsDropdown() {
  const { units, location, system } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { fill } = useSelector((state) => state.theme);

  const handleMeasurementUnitChange = (event) => {
    const newSystem = event.target.checked ? "imperial" : "metric";
    dispatch(setSystem(newSystem));
  };

  const handleChangeUnits = (key, value) => {
    const newUnits = { ...units, [key]: value };
    dispatch(setUnits(newUnits));
  };
  useEffect(() => {
    if (location) {
      dispatch(getWeather({ lat: location.lat, lon: location.lon, units }));
    }
  }, [units]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer gap-2 rounded-lg bg-neutral-150 dark:bg-neutral-800 px-4 py-2 text-neutral-600 dark:text-neutral-200 hover:border-2 dark:hover:border-neutral-0"
      >
        <UnitsIcon fill={fill} />
        Units
        <DropDown fill={fill} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl  bg-neutral-150 dark:bg-neutral-800 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 z-50">
          <div className="p-3 space-y-3">
            <div className="px-3 py-3 hover:border dark:hover:border-neutral-0 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                name="measurementUnit"
                id="measurementUnit"
                className="hidden"
                checked={system === "imperial"}
                onChange={handleMeasurementUnitChange}
              />
              <label htmlFor="measurementUnit">
                Switch to {system !== "imperial" ? "Imperial" : "Metric"}
              </label>
            </div>

            {unitsOptions.map((group,index) => (
              <UnitGroup
                key={group.key}
                group={group}
                selected={units}
                setSelected={handleChangeUnits}
                isLast={index===unitsOptions.length-1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
