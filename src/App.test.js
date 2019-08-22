import React from 'react';
import ReactDOM from 'react-dom';
import App, { coverageTest } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('partially tests coverage', () => {
  expect(coverageTest(true)).toBe(true);
  expect(coverageTest(false)).toBe(false);
});