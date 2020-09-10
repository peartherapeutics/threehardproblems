import React from 'react';
import ReactDOM from 'react-dom';
import App, { coverageTest } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('partially tests coverage', () => {
  expect(coverageTest(true)).toBe(true);
});