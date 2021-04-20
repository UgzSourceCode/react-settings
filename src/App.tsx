import React from 'react';
import './App.css';
import settingsJson from "./data/settings.json";

function App() {
  return (
    <div className="App" style={{textAlign: 'left'}}>
        <div>
          <h1>In this place you can see values from custom enviroment variables</h1>
          <p>For set this value you can set this values before run node server or create ".env" file</p>
          <p>REACT_APP_NAME:</p>
          {process.env.REACT_APP_NAME? (
            <p>{process.env.REACT_APP_NAME}</p>
          ) : (
            <div style={{color: "red"}}>NONE</div>
          )}
          <p>REACT_APP_API:</p>
          {process.env.REACT_APP_API? (
            <p>{process.env.REACT_APP_API}</p>
          ) : (
            <div style={{color: "red"}}>NONE</div>
          )}
          <h1>It's place where you can see value of settings from json file</h1>
          <p>GitHub address: <a href={settingsJson.GITHUB_ADDRESS}>{settingsJson.GITHUB_ADDRESS}</a></p>
        </div>
    </div>
  );
}

export default App;
