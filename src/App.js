import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/index";
import Jumbotron from "./components/Jumbotron/index";
import ImageCard from "./components/Cards/index";
import characters from "./characters.json";

let clickedArr = []

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    language: "Click an image to begin!"
  };

  clickCount = (id) => {
    if (!clickedArr.includes(id)) {
      clickedArr.push(id);
      this.setState({ language: "You guessed correctly!"});
      console.log(clickedArr);
      this.setState({ currentScore: this.state.currentScore + 1 });
      this.state.characters.sort(() => Math.random() - 0.5);
    } else {
      this.setState({ language: "You guessed incorrectly!"});
      if (this.state.currentScore >= this.state.topScore) {
        this.setState({ topScore: this.state.currentScore});
      }
      this.setState({ currentScore: 0 });
      clickedArr = []
      this.state.characters.sort(() => Math.random() - 0.5);
    }
  };

  render() {
    return (
      <div>
        <NavBar 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          language={this.state.language}
        />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => 
              <ImageCard
                clickCount={this.clickCount}
                image={character.image}
                id={character.id}
                key={character.id}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
