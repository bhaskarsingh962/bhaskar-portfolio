import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  return (
    <button
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
      <FaMoon />
    </button>
  );
};

export default ThemeToggle;