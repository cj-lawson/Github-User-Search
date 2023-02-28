import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [colorTheme, setColorTheme]: any = useDarkMode();
  const [darkMode, setDarkMode]: any = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    if (colorTheme === "light") {
      setColorTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setColorTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button className="flex flex-row space-x-3" onClick={toggleDarkMode}>
        {colorTheme === "light" ? (
          <>
            <h1 className="uppercase">Light</h1>
            <SunIcon className="w-5 text-slate-900" />
          </>
        ) : (
          <>
            <h1 className="uppercase">Dark</h1>
            <MoonIcon className="w-5 text-slate-900" />
          </>
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
