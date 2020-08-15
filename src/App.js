import React from 'react';
import Feed from './feed/Feed.js';
import './App.css';

function App() {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <a href="#" className="header item">
            Gauchadas
          </a>
        </div>
      </div>
      <Feed />
    </div>
  );
}

export default App;
