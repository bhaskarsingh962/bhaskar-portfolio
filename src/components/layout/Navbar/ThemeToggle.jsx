import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        rounded-xl
        border
        border-slate-700
        p-3
        text-white
        transition
        hover:border-blue-500
      "
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;