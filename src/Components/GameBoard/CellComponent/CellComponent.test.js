import { render } from '@testing-library/react';
import CellComponent from './CellComponent';

test('debug', () => {
  const { debug } = render(<CellComponent index={"23"} />);
  debug();
});
