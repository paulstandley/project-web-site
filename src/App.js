import React, { Component } from 'react';
import MainPage from './mainPage';
import './App.css';

class App extends Component {

  state = {
    proj0: false,
    proj1: false,
    proj2: false,
    proj3: false,
    proj4: false,
    proj5: false,
    proj6: false,
    proj7: false
  }

  clickHander = (evt) => {
    alert(evt.target.innerText);
  }

  render() {
    return (
      <div className="App" onClick={this.clickHander} >
        <h1>yo</h1>
        <MainPage data={this.state} />
      </div>
    );
  }
}

export default App;
