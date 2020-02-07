import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import './index.css';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Paragraph from '../../components/Paragraph/Paragraph';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className='homepage__wrapper'>
        <div className='landing__page__wrapper scroll__child'>
          <Navbar />
          <div className='homepage__jumbotron'>
            <Jumbotron text='classic clothing' />
          </div>
        </div>
        <div className='mission_statement_wrapper scroll__child'>
          <div className='paragraph__wrapper'>
            <Paragraph />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
