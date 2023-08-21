import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { LuSunDim } from "react-icons/lu";

const Navbar = () => {
      //dark theme
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //dark theme closed
  return (
    <div className="font-poppins bg:white dark:bg-slate-900">
      <div className="flex items-center justify-center z-10 top-2">
        <button
          type="button"
          onClick={handleThemeSwitcher}
          className="mt-4 text-lg p-1 rounded-md dark:text-gray-50"
        >
          {theme === "dark" ? <MdDarkMode /> : <LuSunDim />}
        </button>
      </div>
    </div>
  )
}

export default Navbar