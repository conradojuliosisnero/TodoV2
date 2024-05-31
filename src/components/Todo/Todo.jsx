import "./todo.css";
import { WRAPPER } from "../../data/wrapperTask";
import Wrapper from "./WrapperTask/Wrapper";
import SideBar from "../SideBar/SideBar";
import Filter from "./Filter/Filter";

export default function Todo() {
  return (
    <div className="gridContainer h-screen gap-4">
      {/* ASIDE  */}
      <div className="hidden sm:flex [grid-area:dashboard] bg-slate-200 dark:bg-gray-700 relative row-span-2 flex flex-col overflow-y-auto p-4">
        <SideBar />
      </div>
      {/* FILTER - SEARCH */}
      <Filter />
      {/* MAIN TODO   */}
      <main className="[grid-area:main] lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4 mr-3">
        {WRAPPER?.map((wrapper) => (
          <Wrapper key={wrapper.id} wrapper={wrapper} />
        ))}
      </main>
    </div>
  );
}
