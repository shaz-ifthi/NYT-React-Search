import React, { Component } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">New York Times Article Scrubber</h1>
          <p className="App-intro">
        Search for and annotate articles of interest.
        </p>
        </header>
        
      </div>
    );
  }
}

export default App;
