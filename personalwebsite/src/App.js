import React from 'react';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Home />
      </div>
    
    </div>
  );
}

export default App;
