import React from 'react';
import './App.css';
import { MainContainer } from "./containers";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Todo list</h2>
        <MainContainer/>
      </header>
    </div>
  );
}

export default App;
