import PropTypes from "prop-types";
import Task from '../Task/Task'

function Wrapper({ wrapper }) {
  return <div className={`${wrapper.bg} p-4 text-white rounded-lg mb-3`}>
    {wrapper.name}
  <Task/>
  </div>;
}

Wrapper.propTypes = {
  wrapper: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
  }).isRequired,
};

export default Wrapper;
