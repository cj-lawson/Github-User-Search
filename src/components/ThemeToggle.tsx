import useDarkMode from "../hooks/useDarkMode";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [colorTheme, setColorTheme]: any = useDarkMode();

  return (
    <>
      <button
        className="flex flex-row space-x-3 items-center"
        onClick={() => setColorTheme(colorTheme)}
      >
        {colorTheme === "light" ? (
          <>
            <h1 className="text-xs font-bold uppercase text-slate-100">
              Light
            </h1>
            <SunIcon className="w-5 text-slate-100" />
          </>
        ) : (
          <>
            <h1 className="text-xs font-bold uppercase text-gray-tertiary">
              Dark
            </h1>
            <MoonIcon className="w-5 text-gray-tertiary" />
          </>
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
