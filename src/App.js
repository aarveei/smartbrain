import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.jsx';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './Components/Rank/Rank.jsx';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.jsx';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '950e017536eb432a95a3bad53bd70552'
});


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
  constructor() {
    super();
    this.state= {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://samples.clarifai.com/face-det.jpg"
    ).then(
      function(response) {
        console.log(response);
      },
      function(err) {

      }
    );
  }

  render() {
    return (
      <div className="App">
          <Particles  className="particles"
          params={{particlesOptions}} />
        <Navigation />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition /> 
      </div>
    )
  }
}

export default App;
