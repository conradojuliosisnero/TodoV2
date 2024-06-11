import { useState } from "react";
import Tags from "./Tags";
import DropDown from "./DropDown";

const Filter = () => {
  const [todoSearch, setTodoSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false)

  const getTodo = (event)=> {
    setTodoSearch(event.target.value);
  }

  const handlerOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  return (
    <div className=" [grid-area:filter] sm:col-span-2 flex-wrap rounded-lg dark:bg-gray-700 border-2 dark:border-slate-800 mx-3 mt-3">
      {/* INPUT SEARCH  */}
      <div className="relative flex-wrap sm:w-full sm:flex-nowrap flex flex-grow md:justify-start items-center px-4 py-3 w-full">
        <input
          type="text"
          value={todoSearch}
          onChange={getTodo}
          name="search"
          autoComplete="off"
          placeholder="Search Task..."
          className=" h-10 flex border-none rounded-lg p-3 outline-none bg-slate-200 dark:bg-slate-800 dark:text-white"
        />
        {/* SEARCH ICON  */}
        <div className="ml-4 flex justify-around items-center">
          <svg
            className="w-5 h-5 cursor-pointer stroke-slate-500 hover:stroke-slate-400 transition-200"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* FILTER ICON  */}
        <div
          className="relative ml-3  p-3 flex justify-end items-center sm:justify-start"
          onClick={handlerOpenFilter}
        >
          <svg
            className={`${
              openFilter ? "rotate-90" : ""
            } transition-transform sm:w-[40px] h-[40px] cursor-pointer stroke-slate-500 hover:stroke-slate-400 transition-200`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 7H20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 12L17 12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 17H13"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {openFilter ? <DropDown /> : ""}
      </div>
      {/* FILTER TAGS  */}
      <div className="flex w-full sm:fle">
        <Tags />
      </div>
    </div>
  );
};

export default Filter;
