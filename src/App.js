import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calc/>
      </header>
    </div>
  );
}

export default App;
