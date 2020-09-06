import React, {Component} from 'react';
import Teams from './components/Teams';
import Roster from './components/Roster';
import Pettersson from './components/Pettersson';
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
          {/*<Intro / >*/}
        {/* <Teams /> */ }
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
