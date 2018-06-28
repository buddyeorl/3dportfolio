import React, { Component } from 'react';
import './App.css';
import { putSkillsInArray, myBackgroundPortfolio, myNamePortfolio, projects, demoProject, projectDescriptions, projectSkills } from './variables/Variables.js';
import Home from './components/Home';
import About from './components/About';
import Sn from './components/Sn';
import Portfolio from './components/Portfolio';
import TransitionUp from './components/TransitionUp';
console.log(putSkillsInArray);

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
        <a name="homeStart" />
        <About myBackground={myBackgroundPortfolio} myName={myNamePortfolio} />
        <a name="portfolioStart" />
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
        <a name="contactStart" />
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
