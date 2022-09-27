import EmptyCellImage from 'Images/empty-tile.png';
import RobotCellImage from 'Images/robot-tile.png';
import PropTypes from 'prop-types';
import "./index.css";

const CellComponent = ({ isRobot, onClickHandler }) => {
  return (
    <td onClick={onClickHandler}>
      <img className='tile-image' src={isRobot ? RobotCellImage : EmptyCellImage} />
    </td>
  )
};

CellComponent.defaultProps = {
  isRobot: false,
}

CellComponent.propTypes = {
  isRobot: PropTypes.bool,
  onClickHandler: PropTypes.func
}

export default CellComponent