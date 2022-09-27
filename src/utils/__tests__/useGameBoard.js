import { cleanup, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useGameBoard from "utils/customHooks";
import cases from "jest-in-case";

const GameBoard = ({ children, ...rest }) => children(useGameBoard(rest));

function setup(props) {
  let returnVal = {};
  render(<GameBoard {...props}>
    {val => {
      Object.assign(returnVal, val);
      return null;
    }}
  </GameBoard>)
  return returnVal;
}


afterEach(cleanup);

cases('useGameBoard one step',
  ({ boardSize, direction, origin, output }) => {
    const returnValues = setup(boardSize);
    act(() => {
      returnValues.handleOnClick(direction);
    })

    expect(returnValues.robotCell).toStrictEqual(output);
  }, {
  'basic': {
    boardSize: 5,
    direction: "LEFT",
    output: { row: 0, column: 0 }
  },
  'right': {
    boardSize: 5,
    direction: "RIGHT",
    output: { row: 0, column: 1 }
  },
  'up': {
    boardSize: 5,
    direction: "UP",
    output: { row: 0, column: 0 }
  },
  'down': {
    boardSize: 5,
    direction: "DOWN",
    output: { row: 1, column: 0 }
  }
})

test("Teleportation from initial tile to 3 tiles away", () => {
  const returnValues = setup(5);

  jest.useFakeTimers();
  act(() => {
    returnValues.handleMouseClick({ row: 0, column: 3 });
    jest.advanceTimersByTime(750);
  })
  expect(returnValues.robotCell).toStrictEqual({ row: 0, column: 3 });
});

test("Teleportation from initial tile to the same tile", () => {
  const returnValues = setup(5);

  jest.useFakeTimers();
  act(() => {
    returnValues.handleOnClick("RIGHT");
    returnValues.handleOnClick("RIGHT");
    returnValues.handleOnClick("RIGHT");
    returnValues.handleMouseClick({ row: 0, column: 3 });
    jest.advanceTimersByTime(750);
  })
  expect(returnValues.robotCell).toStrictEqual({ row: 0, column: 3 });
});