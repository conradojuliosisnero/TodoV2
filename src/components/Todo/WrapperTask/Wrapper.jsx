import PropTypes from "prop-types";
import Task from "../Task/Task";

function Wrapper({ wrapper }) {
  return (
    <div
      className={`bg-gray-700 p-4 flex flex-col items-center w-full rounded-lg mb-3`}
    >
      <div className="flex w-full place-content-start">
        <span
          className={`${wrapper.bg} ${wrapper.textColor} ${wrapper.borderColor} border-2 relative font-semibold text-lg rounded-md px-1 m-1`}
        >
          {wrapper.name}
        </span>
      </div>
      <Task />
    </div>
  );
}

Wrapper.propTypes = {
  wrapper: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Wrapper;
