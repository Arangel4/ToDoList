import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import Toggle from './Toggle';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle/>
        <h2>To Do List</h2>
        <Todo/>
        
      </header>
    </div>
  );
}

export default App;
