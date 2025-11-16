import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

type ThemeModeSwitcherComponent = React.FC;

const ThemeModeSwitcher: ThemeModeSwitcherComponent = () => {
  const { mode, toggleThemeMode } = useTheme();

  return (
    <button
      className="w-10 h-10 rounded-full flex justify-center cursor-pointer items-center text-white text-xl font-bold lg:hover:text-white hover:text-2xl hover:bg-sky-to-blue transition-all duration-300 ease-in-out"
      onClick={toggleThemeMode}
    >
      {mode === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeModeSwitcher;
