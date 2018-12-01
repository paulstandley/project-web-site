import React, { Component } from 'react';
import './App.css';
import './index.css';

class displayList extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div>
        <h2 className="h2displaylist">Projects</h2>
        <div className="displaylist">
          <section className="imgsection">
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1540143138/thankYou.png" alt="Thank You Google" width="400" height="300"/>
          </section>
          <section className="imgsection">
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1526402515/gameStart.png" alt="Desktop Game" width="400" height="300"/>
          </section>
          <section className="imgsection">
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1522766741/paulstandleyPro3-1.png" alt="Memory Game" width="400" height="300"/>
          </section>
          <section className="imgsection">
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1543691132/quote.png" alt="Random Quote" width="400" height="300"/>
          </section>
          <section className="imgsection">
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1543694204/wolfpick.png" alt="Wolf" width="400" height="300"/>
          </section>
          <section className="imgsection">
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1543694956/pixelart.png" alt="pixel art maker" width="400" height="300"/> 
          </section>  
        </div>
      </div>
     );
  }
}
 
export default displayList;