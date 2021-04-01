import React, {Component} from 'react';
import Roster from './components/Roster';
import PetterssonStats from './components/PetterssonStats';
import Intro from './components/Intro';
import NextGame from './components/NextGame';
import LiveGame from './components/LiveGame';
import CanucksStats from './components/CanucksStats';
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        {/* <Teams /> */ }
        <Intro />
        <NextGame />
        <LiveGame />
        <CanucksStats />
        <PetterssonStats />
        <Roster />
      </div>
    );
  }
}

export default App;
