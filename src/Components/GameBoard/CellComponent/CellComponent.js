import EmptyCellImage from 'Images/empty-tile.png';
import RobotCellImage from 'Images/robot-tile.png';
import PropTypes from 'prop-types';
import { memo } from 'react';
import "./index.css";

const CellComponent = memo(({ isRobot, onClickHandler }) => {
  return (
    <td onClick={onClickHandler}>
      <img className='tile-image' src={isRobot ? RobotCellImage : EmptyCellImage} />
    </td>
  )
});

CellComponent.defaultProps = {
  isRobot: false,
}

CellComponent.propTypes = {
  isRobot: PropTypes.bool,
  onClickHandler: PropTypes.func
}

export default CellComponent