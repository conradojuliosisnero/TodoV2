import "./todo.css";
import { WRAPPER } from "../../data/wrapperTask";
import Wrapper from "./WrapperTask/Wrapper";
import Filter from "./Filter/Filter";
import Nav from "../Nav/Nav";

export default function Todo() {
  return (
    <div className="dark:bg-slate-700">
      <Nav/>
      <div className="gridContainer w-full h-full sm:h-auto md:h-auto lg:h-screen">
        {/* ASIDE 
        <div className="hidden sm:flex [grid-area:dashboard] bg-slate-200 dark:bg-gray-700 relative row-span-2 flex flex-col overflow-y-auto p-4">
          <SideBar />
        </div> */}
        {/* FILTER - SEARCH */}
        <Filter />
        {/* MAIN TODO   */}
        <main className="[grid-area:main] mt-7 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4 mx-3">
          {WRAPPER?.map((wrapper) => (
            <Wrapper key={wrapper.id} wrapper={wrapper} />
          ))}
        </main>
      </div>
    </div>
  );
}
