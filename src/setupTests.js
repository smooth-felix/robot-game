// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CellComponent from 'Components/GameBoard/CellComponent';

test("Renders Correctly", () => {
  const { debug } = render(<CellComponent />);
  debug();
})