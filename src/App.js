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
import TransitionUp from './components/TransitionUp';

const myBackgroundPortfolio = 'Problem Solver at heart! Web development, Blockchain and Deep Learning enthusiast!';
const myNamePortfolio = 'Alex  Lizarraga '
const projects = ["What The Fork!", "Katenna", "CodeListener", "Multiverse", "GifTastic", "Fun", "Full Stack App", "Blockchain", "Jupyter Books"];
const projectDescriptions = ["How many times have you wondered what could you cook with that ingredient\
you saw at the super market\? or what is the name of that fruit or food you saw\? well\
don\'t worry, we have created \'What the fork\', just open the camera, take the picture of all\
the ingredients you have, and in matter of seconds the app will tell you all the meals you can cook. Easy!", "Never again!!, yes, You don't need to train the new hire!, with Katenna the continuity manual and the training expenses are a thing of the past, this app is the tool the managers use to train their new employees. Katenna works by keeping all the knowledge the current employee has about its position, and when an employee quits, the new hire can take the new position right away with katenna as the inexpensive trainer",
  "A project in progress that uses voice and language recognition to create and interact with website elements and display the code html code of such elements, all these without typing a word. The code listener will be the tool to create full websites with one voice command,  will help people with mobility impairement to code html, will help instructors to teach and see code changes in real time, children and adults will be able to code as long as there is a voice to do it.",
  "The war of the universes, a multiplayer online game (currently supports only two players) where you have to bomb your multiverse enemy planet, taking advantage of that moment where all the multiverse planets phase in.",
  "Search a set of gifs and click to play or click again to stop playing, who doesn't love gifs anyways?"]
const demoProject = ["https://whatthefork.herokuapp.com/", "http://www.katenna.com", "https://thecodelistener.herokuapp.com/", "https://buddyeorl.github.io/ggj2018/", "https://buddyeorl.github.io/GifTastic/"];
const listOfSkills =
  [
    "JavaScript",
    "Firebase",
    "NodeJS",
    "HTML",
    "CSS",
    "ReactJS",
    "IBM Watson API: Visual Recognition",
    "Imgur API: Image Upload Service",
    "Yummly API: Recipe Finder Service",
    "Wikipedia API: Food Information",
    "Passport.js: Authentication library",
    "Jsonwebtoken: Interaction between Authenticated client and server",
    "Bcryptjs: Data Encription",
    "MongoDB",
    "IBM Watson API: Voice Recognition",
    "Giphy API: Gif online service",
    "WebPack"
  ]
// IMPORTANT ==============>
// projectSkills array should have the same size as projects Array!!!======================> 
let projectSkills = [[0, 1, 2, 3, 4, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 10, 13, 16], [0, 1, 3, 4, 14, 16], [0, 1, 2, 3, 4,], [0, 2, 3, 4, 15], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]];

let putSkillsInArray = () => {
  console.log(projectSkills);
  for (let i = 0; i < projectSkills.length; i++) {
    for (let j = 0; j < projectSkills[i].length; j++) {
      projectSkills[i][j] = listOfSkills[projectSkills[i][j]];
      console.log(projectSkills[i][j]);
    }
  }
  console.log(projectSkills);
}


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
  componentWillMount() {
    putSkillsInArray();
  }
  render() {

    return (
      <div className={this.state.backgroundClass}>

        <About myBackground={myBackgroundPortfolio} myName={myNamePortfolio} />
        <TransitionUp message=
          {
            <Home />
          }
        />
        {
          projects.map((project, index) =>
            <Portfolio key={index + "Portfolio"} receiveBackground={this.communicationChild} portfolioIndex={index} number={"0" + (index + 1)} projectName={project} demoUrl={demoProject[index]} imgProject={"0" + (index + 1) + ".png"} projectDesc={projectDescriptions[index]} mySkills={projectSkills[index]} />
          )
        }
        <TransitionUp message=
          {
            <Sn />
          }
        />
      </div>
    );
  }
}

export default App;
