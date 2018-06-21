import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import DisplayItems from './components/DisplayItems';
import DisplayInfo from './components/DisplayInfo';
import SnItem from './components/SnItem';
import Sn from './components/Sn';
import Parallax from 'react-springy-parallax'

class App extends Component {
  render() {
    const styles = {
      color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
    return (
      <div>
        <About />
        <Home />
        <DisplayInfo />
        <DisplayItems />
        <Sn />
      </div>
      // Pages determines the total height of the inner content container
      // Each page takes 100% height of the visible outer container by default
      // <Parallax ref="parallax" pages={4}>

      //   {/* <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'rgba(228, 218, 215, 0);' }} /> */}
      //   {/*<Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'rgb(228, 220, 220)' }} />
      //   <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: 'rgb(220, 227, 228)' }} />
      //   <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: 'rgb(220, 227, 228)' }} /> */}

      //   <Parallax.Layer
      //     offset={0}
      //     speed={0}
      //     style={styles}
      //     onClick={() => this.refs.parallax.scrollTo(1)}>
      //     <About />
      //   </Parallax.Layer>

      //   <Parallax.Layer
      //     offset={1}
      //     speed={0}
      //     style={styles}
      //     onClick={() => this.refs.parallax.scrollTo(2)}>
      //     <Home />
      //   </Parallax.Layer>

      //   <Parallax.Layer
      //     offset={2}
      //     speed={0}
      //     style={styles}
      //     onClick={() => this.refs.parallax.scrollTo(0)}>
      //     <DisplayItems />
      //   </Parallax.Layer>

      // </Parallax>
    );
  }
}

export default App;
