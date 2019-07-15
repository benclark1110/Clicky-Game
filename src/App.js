import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/Cards";
import friends from "./images.json";

function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <ImageCard
        image={friends[0].image}
      />
      <ImageCard
        image={friends[1].image}
      />
      <ImageCard
        image={friends[2].image}
      />
    </div>
  );
}

export default App;
