import PropTypes from 'prop-types';
import { directions } from 'utils/constants';
import "./controllers.css"

const Controllers = ({ handleOnClick }) => {
  return (
    <div className='controllers-wrapper'>
      {Object.keys(directions).map(item => <button key={item} id={item} onClick={() => handleOnClick(directions[item])}></button>)}
    </div>
  )
}

Controllers.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
}

export default Controllers;
