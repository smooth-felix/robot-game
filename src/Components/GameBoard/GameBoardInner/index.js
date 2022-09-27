import PropTypes from 'prop-types';
import CellComponent from '../CellComponent/CellComponent';

const GameBoardInner = ({ handleMouseClick, robotCell, boardSize }) => {

  const iterateArray = Array.from(Array(5).keys());

  return (
    <table>
      <tbody>
        {iterateArray.map(rowIndex => <tr key={`row-${rowIndex}`}>
          {iterateArray.map(columnIndex => <CellComponent key={`tile-${rowIndex}${columnIndex}`} onClickHandler={() => handleMouseClick({ row: rowIndex, column: columnIndex })} isRobot={rowIndex === robotCell.row && columnIndex === robotCell.column} />)}
        </tr>)}
      </tbody>
    </table>
  );
}

GameBoardInner.propTypes = {
  handleMouseClick: PropTypes.func.isRequired,
  robotCell: PropTypes.object.isRequired
}

export default GameBoardInner;