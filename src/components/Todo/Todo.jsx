import "./todo.css";
import { WRAPPER } from "../../data/wrapperTask";
import Wrapper from "./WrapperTask/Wrapper";
import SideBar from "../SideBar/SideBar";

export default function Todo() {
  return (
    <div className="gridContainer h-screen gap-4">
      {/* ASIDE  */}
      <div className="[grid-area: dashboard] bg-slate-200 dark:bg-gray-700 relative row-span-2 flex flex-col overflow-y-auto p-4 ">
        ASIDE
        <SideBar />
      </div>
      {/* FILTER - SEARCH */}
      <div className="[grid-area:filter] bg-slate-200 dark:bg-gray-600 pt-3 pr-3 mr-3 mt-3 flex place-content-center">
        Filter
      </div>
      {/* MAIN TODO   */}
      <main className="[grid-area:main] grid grid-cols-3 gap-4 mr-3">
        {WRAPPER?.map((wrapper) => (
          <Wrapper key={wrapper.id} wrapper={wrapper} />
        ))}
      </main>
    </div>
  );
}
