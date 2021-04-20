import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>In this place you can see values from custom enviroment variables</p>
          <p>For set this value you can set this values before run node server or create ".env" file</p>
          <p>REACT_APP_NAME:</p>
          <p>{process.env.REACT_APP_NAME}</p>
          <p>REACT_APP_API:</p>
          {process.env.REACT_APP_API? (
            <p>{process.env.REACT_APP_API}</p>
          ) : (
            <div style={{color: "red"}}>NONE</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
