import { useEffect, useState } from "react";
import UnitsDropdown from "./Units";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { setLightMode } from "../../features/weather/themeSlice";

function Header() {
  const { lightMode } = useSelector((state) => state.theme);
  const url = import.meta.env.BASE_URL;
  const dispatch = useDispatch();
  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);
  const changeMode = (mode) => {
    dispatch(setLightMode(mode));
  };
  return (
    <header className="flex justify-between ">
      <Logo fill={!lightMode ? "#ffffff" : "	#03012d"} />
      <div className="flex gap-2 items-center">
        <button
          onClick={() => changeMode(!lightMode)}
          className="px-4 py-2 rounded-lg cursor-pointer "
        >
          {lightMode && <img src={url + "/assets/images/icon-moon.svg"} />}
          {!lightMode && <img src={url + "/assets/images/icon-sun.svg"} />}
        </button>
        <UnitsDropdown />
      </div>
    </header>
  );
}

export default Header;
