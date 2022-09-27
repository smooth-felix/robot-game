import { useState } from "react";
import useGameBoard from "utils/customHooks";
import GameBoardInner from "./GameBoardInner";
import Controllers from "./Partials/controllers";
import { BounceLetterLoaderOverlay } from "react-spinner-overlay";
import "./index.css"

const GameBoard = () => {
  const [boardSize, setBoardSize] = useState(5);
  const { handleOnClick, robotCell, handleMouseClick, teleporting } = useGameBoard(boardSize);

  return (
    <div id="gameboard">
      <h2 id="game-title">Robot Mania!</h2>
      <BounceLetterLoaderOverlay loading={teleporting} color="#FF9800" letters="Teleporting in progress" />
      <GameBoardInner handleMouseClick={handleMouseClick} robotCell={robotCell} />
      <Controllers handleOnClick={handleOnClick} />
    </div>
  );
}

export default GameBoard;