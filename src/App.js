import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.jsx';
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
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log(box);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
          <Particles  className="particles"
          params={{particlesOptions}} />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
      </div>
    )
  }
}

export default App;
