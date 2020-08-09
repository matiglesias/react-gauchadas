import React from 'react';
import Feed from './feed/Feed.js';

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gauchadas</h1>
      </header>
      <h1>Feed</h1>
      <Feed />
    </div>
  );
}

export default App;
