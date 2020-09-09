import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

import Home from './views/Home';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ color: 'red' }}>
        <Routes />
      </header>
    </div>
  );
}

export default App;
