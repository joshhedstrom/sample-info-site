import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import './index.css';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Paragraph from '../../components/Paragraph/Paragraph';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="homepage__wrapper">
        <div className="landing__page__wrapper">
          <Navbar />
          <Jumbotron text="country church" />
        </div>
        <div>
        </div>
        {/* <div className="mission_statement__wrapper"> */}
          <Paragraph />
        {/* </div> */}
            
      </div>
    );
  }
}

export default HomePage;
