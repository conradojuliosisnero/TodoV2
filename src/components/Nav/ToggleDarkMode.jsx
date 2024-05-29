import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-row justify-between toggle mx-5">
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="checkbox hidden"
            checked={darkMode}
            onChange={handleToggle}
          />
          <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition transform ${
              darkMode ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
