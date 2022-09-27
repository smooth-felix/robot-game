import { useState } from "react";
import { directions } from "./constants";

const useGameBoard = (boardSize) => {
  const [robotCell, setRobotCell] = useState({ row: 0, column: 0 });
  const [teleporting, setTeleporting] = useState(false);

  const handleOnClick = (direction) => {
    if (direction === directions.right && robotCell.column !== boardSize - 1) {
      setRobotCell({ ...robotCell, column: robotCell.column + 1 })
    }
    if (direction === directions.left && robotCell.column !== 0) {
      setRobotCell({ ...robotCell, column: robotCell.column - 1 })
    }
    if (direction === directions.up && robotCell.row !== 0) {
      setRobotCell({ ...robotCell, row: robotCell.row - 1 })
    }
    if (direction === directions.down && robotCell.row !== boardSize - 1) {
      setRobotCell({ ...robotCell, row: robotCell.row + 1 })
    }
  }

  const handleMouseClick = ({ row, column }) => {
    const distance = Math.abs(row - robotCell.row) + Math.abs(column - robotCell.column);
    if (distance !== 0) {
      setTeleporting(true);
      setTimeout(() => {
        setRobotCell({ row, column });
        setTeleporting(false);
      }, distance * 250);
    }

  }


  return { robotCell, handleOnClick, handleMouseClick, teleporting }

}

export default useGameBoard;