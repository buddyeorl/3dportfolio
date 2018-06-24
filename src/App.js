import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import DisplayItems from './components/DisplayItems';
import DisplayInfo from './components/DisplayInfo';
import SnItem from './components/SnItem';
import Sn from './components/Sn';
import Portfolio from './components/Portfolio';
import Parallax from 'react-springy-parallax'
const projects = ["What The Fork!", "Katenna", "CodeListener", "Multiverse", "GifTastic", "Fun", "Full Stack App", "Blockchain", "Jupyter Books"];
const demoProject = ["https://buddyeorl.github.io/WhatTheFork/", "http://www.katenna.com", "https://thecodelistener.herokuapp.com/", "https://buddyeorl.github.io/ggj2018/", "https://buddyeorl.github.io/GifTastic/"]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundClass: "portfolioBackground" };

    this.communicationChild = this.communicationChild.bind(this);
  }
  communicationChild(indexReceived) {
    // console.log(indexReceived);
    this.setState(prevState => ({
      backgroundClass: "portfolioBackground" + indexReceived
    }));
  }
  render() {
    return (
      <div className={this.state.backgroundClass}>
        <About />
        <Home />
        {
          projects.map((project, index) =>
            <Portfolio key={index + "Portfolio"} receiveBackground={this.communicationChild} portfolioIndex={index} number={"0" + (index + 1)} projectName={project} demoUrl={demoProject[index]} imgProject={"0" + (index + 1) + ".png"} />
          )
        }
        <DisplayInfo />
        <Sn />
      </div>
    );
  }
}

export default App;
