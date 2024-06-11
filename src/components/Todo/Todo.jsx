import "./todo.css";
import { WRAPPER } from "../../data/wrapperTask";
import Wrapper from "./WrapperTask/Wrapper";
import Filter from "./Filter/Filter";
import SideBar from "../SideBar/SideBar";
import Nav from "../Nav/Nav";
import { useState } from "react";
import { TASK } from "../../data/wrapperTask";

export default function Todo() {
  const [task, setTask] = useState(TASK);

  return (
    <div className="dark:bg-slate-700">
      <div className="sm:hidden">
        <Nav />
      </div>
      <div className="gridContainer w-full h-full sm:h-auto md:h-auto lg:h-screen">
        {/* ASIDE  */}
        <div className="hidden sm:flex justify-center items-center [grid-area:dashboard] bg-slate-200 dark:bg-gray-700 relative row-span-2 flex-col overflow-y-auto p-4 border-r-2 border-slate-800">
          <SideBar />
        </div>
        {/* FILTER - SEARCH */}
        <Filter />
        {/* MAIN TODO   */}
        <main className="[grid-area:main] sm:col-span-2 mt-7 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4 mx-3">
          {/* NEW TAKS  */}
          <Wrapper
            wrapper={{ name: "New", color: "border-green-500" }}
            task={task}
            set={setTask}
          />
          {/* PROGRESS TASK  */}
          <Wrapper
            wrapper={{ name: "Progress", color: "border-orange-500" }}
            task={[]}
            set={()=>{}}
          />
          {/* DONE TASK  */}
          <Wrapper
            wrapper={{ name: "Done", color: "border-violet-500" }}
            task={[]}
            set={() => {}}
          />
        </main>
      </div>
    </div>
  );
}
