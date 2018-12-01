import React, { Component } from 'react';
import MainPage from './mainPage';
import './App.css';
import './index.css';

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
        <main>
          <header>
            <nav>
              <ol>
                <li className="liheader" key="navHeader" >
                  <a href="http://paulstandley.com" rel="noopener noreferrer" target="_blank">
                    <h1 className="h1header">Paul Standley <strong>Website Developer</strong></h1>
                  </a>
                </li>
              </ol>
            </nav>
          </header>
          <MainPage data={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
