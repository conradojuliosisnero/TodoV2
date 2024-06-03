import HeaderNav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { UserIcon } from "../pages/Settings/User";
import { Link } from "react-router-dom";


export default function LayoutConfig() {
  return (
    <div>
      <HeaderNav />
      <div className="w-full h-screen settingsLayout">
        {/* MENU SEETINGS  */}
        <aside className="order-2 sm:[grid-area: aside] sm:border-r-1 border-gray-400 sm:row-span-3 sm:flex sm:items-center justify-center p-3 border-t-1 sm:border-t-0">
          {/* OPTIONE SETTINGS  */}
          <ul className="flex flex-col">
            <li className="cursor-pointer mb-8 transition-colors dark:hover:text-blue-500 text-gray-500 dark:text-white">
              <Link to="/settings">Config Theme</Link>
            </li>
            <li className="mb-8 transition-colors dark:hover:text-blue-500 text-gray-500 dark:text-white">
              <Link to="/settings/theme">Config Theme</Link>
            </li>
            <li className="mb-3 text-red-400 dark:text-white">
              <Button
                color="danger"
                variant="bordered"
                startContent={<UserIcon />}
              >
                Delete Acount
              </Button>
            </li>
          </ul>
        </aside>
        {/* SETTINGS BOX  */}
        <div className="sm:order-2 [grid-area: main] row-span-3 flex items-center justify-center cursor-pointer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
