import React, { Component } from 'react';

import Navbar from '../../components/Navbar';

import './index.css';
class AboutPage extends Component {
  state = {};

  render() {
    return (
      <div className='aboutpage__wrapper'>
        <Navbar />
        <div className='team__image'>
          <div className='profile__circle'></div>
          <div id='user1' />
          <div id='user2' />
          <div id='user3' />
          <div id='user4' />
          <div id='user5' />
          <div id='user6' />
          <div id='user7' />
          <div id='user8' />
        </div>
      </div>
    );
  }
}

export default AboutPage;
