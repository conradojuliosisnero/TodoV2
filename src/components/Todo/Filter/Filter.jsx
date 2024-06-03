import { useState } from "react";

const Filter = () => {
  const [todoSearch, setTodoSearch] = useState("");
  function getTodo(event) {
    setTodoSearch(event.target.value);
  }

  return (
    <div className="[grid-area:filter] sm:col-span-2 flex-wrap rounded-lg dark:bg-gray-700 border-2 dark:border-slate-800 mx-3 mt-3">
      {/* INPUT SEARCH  */}
      <div className="flex-wrap sm:w-full sm:flex-nowrap flex flex-grow md:justify-start items-center px-4 py-3 w-full">
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
        <div className="ml-3  p-3 flex justify-end items-center sm:justify-start">
          <svg
            className="w-7 h-7 sm:w-[40px] h-[40px] cursor-pointer stroke-slate-500 hover:stroke-slate-400 transition-200"
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
      </div>
      {/* FILTER TAGS  */}
      <div className=" mb-2 text-gray-500 flex items-center justify-start px-3 font-semibold">
        {/* TAG ELEMENT  */}
        <div className="flex hover:bg-slate-300/30 dark:hover:bg-slate-400/30 cursor-pointer border-2 dark:border-slate-600 rounded-lg px-2">
          <span className="mr-3">Tag</span>
          {/* icon delete tag  */}
          <div>
            <svg
              className="stroke-slate-300  dark:stroke-slate-500 w-[25px] h-[25px]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0004 9.5L17.0004 14.5M17.0004 9.5L12.0004 14.5M4.50823 13.9546L7.43966 17.7546C7.79218 18.2115 7.96843 18.44 8.18975 18.6047C8.38579 18.7505 8.6069 18.8592 8.84212 18.9253C9.10766 19 9.39623 19 9.97336 19H17.8004C18.9205 19 19.4806 19 19.9084 18.782C20.2847 18.5903 20.5907 18.2843 20.7824 17.908C21.0004 17.4802 21.0004 16.9201 21.0004 15.8V8.2C21.0004 7.0799 21.0004 6.51984 20.7824 6.09202C20.5907 5.71569 20.2847 5.40973 19.9084 5.21799C19.4806 5 18.9205 5 17.8004 5H9.97336C9.39623 5 9.10766 5 8.84212 5.07467C8.6069 5.14081 8.38579 5.2495 8.18975 5.39534C7.96843 5.55998 7.79218 5.78846 7.43966 6.24543L4.50823 10.0454C3.96863 10.7449 3.69883 11.0947 3.59505 11.4804C3.50347 11.8207 3.50347 12.1793 3.59505 12.5196C3.69883 12.9053 3.96863 13.2551 4.50823 13.9546Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
