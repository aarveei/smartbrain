import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.jsx';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './Components/Rank/Rank.jsx';
import Particles from 'react-particles-js';


const particlesOptions = {
particles: {
    number: 30,
    density: {
      enable: true,
      value_area: 800
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
                  <Particles  className="particles"
                params={{particlesOptions}} />
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {/* 
        <FaceRecognition />  */}
      </div>
    )
  }
}

export default App;
