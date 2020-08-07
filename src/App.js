import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game/Game'
import raccoonLogo from './assets/images/raccoon.png'
import bunnyLogo from './assets/images/bunny.png'
import houndLogo from './assets/images/hound.png'
import squirrelLogo from './assets/images/squirrel.png'


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonLogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelLogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunnyLogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndLogo
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}


export default App;
