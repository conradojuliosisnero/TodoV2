import { THEMES } from "../../data/themes";

export default function ThemeConfig() {
  return (
    <div className="w-full sm:w-[550px] flex flex-wrap gap-3 p-3">
      {THEMES.map((theme, index) => (
        <div
          className={`w-32 h-32 flex justify-center items-center transition-transform 
              hover:scale-105 hover:font-semibold hover:text-white border-2 rounded-lg ${theme.bg} ${theme.text} ${theme.styles}`}
          key={index}
        >
          {theme.name}
        </div>
      ))}
    </div>
  );
}
