import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  // Lee el estado inicial desde localStorage o usa el valor predeterminado basado en la preferencia del sistema.
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      return savedMode;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    // Actualiza la clase del HTML y guarda el estado en localStorage.
    if (darkMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex flex-row justify-between toggle">
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="checkbox hidden"
            checked={darkMode === "dark"}
            onChange={handleToggle}
          />
          <div className="block border-[1px] dark:border-white border-gray-500 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 dark:bg-white bg-gray-500 w-6 h-6 rounded-full transition transform ${
              darkMode === "dark" ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
