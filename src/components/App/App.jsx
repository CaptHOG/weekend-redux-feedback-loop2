import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/* First Page */}
      <h2>How are you feeling today?</h2>
      <input type="number"/>
      <button>Next</button>

      {/* Last Page */}
    </div>
  );
}

export default App;
