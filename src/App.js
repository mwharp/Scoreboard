import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
// A simple app that updates the scoreboard of an american football game.
// Max Harper
function App() {

  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  const AwayTouchdownIncrement = () => {

    setAwayScore(awayScore + 6);

  }

  const AwayFieldGoalIncrement = () => {

    setAwayScore(awayScore + 3);

  }

  const AwayExtraPointIncrement = () => {

    setAwayScore(awayScore + 1);

  }
  const HomeTouchdownIncrement = () => {

    setHomeScore(homeScore + 6);

  }

  const HomeFieldGoalIncrement = () => {

    setHomeScore(homeScore + 3);

  }

  const HomeExtraPointIncrement = () => {

    setHomeScore(homeScore + 1);

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="board">
          <div className="away">
            <h1>Away</h1>
            <p>Red</p>
            <p>{awayScore}</p>
            <button onClick={AwayTouchdownIncrement}>Touchdown</button>
            <button onClick={AwayFieldGoalIncrement}>Field Goal</button>
            <button onClick={AwayExtraPointIncrement}>EX</button>

          </div>
          <div className="home">
            <h1>Home</h1>
            <p>Blue</p>
            <p>{homeScore}</p>
            <button onClick={HomeTouchdownIncrement}>Touchdown</button> 
            <button onClick={HomeFieldGoalIncrement}>Field Goal</button>
            <button onClick={HomeExtraPointIncrement}>EX</button>
          </div>
        </div>
        <p>
          Score
        </p>
      </header>
    </div>
  );
}

export default App;
