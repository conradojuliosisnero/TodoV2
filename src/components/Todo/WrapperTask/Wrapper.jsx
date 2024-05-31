import PropTypes from "prop-types";
import Task from "../Task/Task";

function Wrapper({ wrapper }) {
  return (
    <div
      className={`relative bg-white text-gray-600 border-2 dark:border-slate-800 dark:bg-gray-700 dark:text-white p-4 flex flex-col items-center w-full rounded-lg mb-3`}
    >
      {/* TITLE WRAPPER  */}
      <div className="flex w-full place-content-start place-items-center">
        <div
          className={`w-5 h-5 rounded-full border-2 ${wrapper.borderColor}`}
        ></div>
        <span className={` relative font-semibold text-lg rounded-md px-1 m-1`}>
          {wrapper.name}
        </span>
      </div>
      {/* TASK VIEWS  */}
      <Task />
      {/* ADD ITEMS  */}
      <div className="flex py-2 place-content-start w-full h-8 left-2 bottom-2 hover:bg-slate-100 dark:bg-slate-700 rounded-lg dark:hover:bg-slate-600 transition cursor-pointer place-items-center">
        {/* ADD ICONS */}
        <svg
          className="w-full h-full stroke-slate-500 dark:stroke-slate-400"
          viewBox="0 0 24 24"
        >
          <title />

          <g id="Complete">
            <g data-name="add" id="add-2">
              <g>
                <line
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12"
                  x2="12"
                  y1="19"
                  y2="5"
                />

                <line
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="5"
                  x2="19"
                  y1="12"
                  y2="12"
                />
              </g>
            </g>
          </g>
        </svg>
        {/* title add  */}
        {/* <span className="flex font-normal w-full flex-grow dark:text-slate-400">
          Add Items
        </span> */}
      </div>
    </div>
  );
}

Wrapper.propTypes = {
  wrapper: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    darkMode: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Wrapper;
