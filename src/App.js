import React from 'react';
import './App.css';

function uncoveredFunction() {
  console.log('Blah');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a demo app to show code coverage tools.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
