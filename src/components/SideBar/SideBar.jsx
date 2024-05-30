import { Link } from "react-router-dom";
import home from "../../assets/icon-home.svg";
import profile from "../../assets/use-icon.svg";
import iconsettings from "../../assets/icon-settings.svg";

export default function SideBar() {
  return (
    <div className="relative bg-gray-50 dark:bg-slate-900 pattern">
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        <Link
          href="/profile"
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50"
        >
          {/* <!-- HeroIcon - User --> */}
          <img src={profile} alt="icon-profile" />

          <small className="text-center text-xs font-medium"> Profile </small>
        </Link>

        <Link
          to={"/settings"}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
        >
          {/* <!-- HeroIcon - Cog-6-tooth --> */}
          <img src={iconsettings} alt="icon-settings" />

          <small className="text-center text-xs font-medium"> Settings </small>
        </Link>

        <hr className="dark:border-gray-700/60" />

        <Link
          href="/"
          className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400"
        >
          {/* <!-- HeroIcon - Home Modern --> */}
          <img src={home} alt="icon-home" />
          <small className="text-xs font-medium">Home</small>
        </Link>
      </nav>
    </div>
  );
}
