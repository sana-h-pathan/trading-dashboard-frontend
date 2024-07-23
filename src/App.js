import React from 'react';
import './App.css';
import User from './components/User';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trading Dashboard</h1>
      </header>
      <User />
      <Watchlist />
    </div>
  );
}

export default App;
