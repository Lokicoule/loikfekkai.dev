import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./Theme";

const ThemeMode = () => {
  const { themeMode, setThemeMode } = useTheme();

  const handleToggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <button
      className="bg-white w-[40px] hover:text-white hidden  h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-sky-to-blue transition-all duration-300 ease-in-out cursor-pointer ml-2 "
      onClick={handleToggleTheme}
    >
      {themeMode === "light" ? (
        <FiMoon className="text-2xl dark-mode-light dark:hidden" />
      ) : (
        <FiSun className="text-2xl dark-mode-dark hidden  fill-jacarta-700  group-hover:fill-white group-focus:fill-white dark:block dark:fill-white " />
      )}
    </button>
  );
};

export default ThemeMode;