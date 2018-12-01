import React, { Component } from 'react';
import './App.css';
import './index.css';
import DisplayList from './displayList';
import DisplayItem from './displayItem';
import './App.css';

class mainPage extends Component {
  state = {  }
  render() { 
    return ( 
        <div className="mainPage">
          {this.props.data.proj0 === true ? <DisplayItem /> : <DisplayList />}
        </div>
     );
  }
}
 
export default mainPage;