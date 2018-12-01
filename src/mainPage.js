import React, { Component } from 'react';
import './App.css';
import './index.css';
import DisplayList from './displayList';
import DisplayItem from './displayItem';
import './App.css';

class mainPage extends Component {
  state = {  }
  render() { 
    var data = this.props.data;
    return ( 
        <div className="mainPage">
          {data.proj0 === true ? <DisplayItem data={data} /> : <DisplayList  data={data} />}
        </div>
     );
  }
}
 
export default mainPage;