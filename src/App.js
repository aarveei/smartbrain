import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.jsx';
import Logo from './Components/Logo/Logo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/* 
        <ImageLinkForm />
        <FaceRecognition />  */}
      </div>
    )
  }
}

export default App;
