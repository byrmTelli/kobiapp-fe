import { useEffect, useState } from "react";
import { IoCloudyNightSharp, IoSunnySharp } from "react-icons/io5";

export default function ThemeToggleButton() {
  // States
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Effects
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handlers
  const handleThemeToggleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={handleThemeToggleClick}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 
      dark:hover:bg-gray-700 text-black dark:text-white transition-colors duration-500"
    >
      {theme !== "dark" ? <IoCloudyNightSharp /> : <IoSunnySharp />}
    </button>
  );
}
