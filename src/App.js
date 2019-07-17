import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/index";
import Jumbotron from "./components/Jumbotron/index";
import ImageCard from "./components/Cards/index";
import friends from "./images.json";

class App extends Component {

  state = {
    friends: friends,
    currentScore: 0,
    topScore: 0
  };

  testChange(event) {
    event.preventDefault();
    alert("it worked");
  }

  render() {
    return (
      <div>
        <NavBar 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
        <Jumbotron />
        <ImageCard
          image={friends[0].image}
          onChange={this.testChange}
        />
        <ImageCard
          image={friends[1].image}
          onClick={this.testChange}
        />
        <ImageCard
          image={friends[2].image}
          testChange={this.testChange}
        />
      </div>
    );
  }
}

export default App;
