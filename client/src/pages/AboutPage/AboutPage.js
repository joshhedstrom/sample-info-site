import React, { Component } from 'react';

import Navbar from '../../components/Navbar';

import './index.css';
class AboutPage extends Component {
  
    componentDidMount() {
      window.addEventListener('scroll', this.incrementActiveProfile);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.incrementActiveProfile);
    }


  state = {
    activeProfile: 1,
    teamMembers: [
      {
        name: 'Sally',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      },
      {
        name: 'Sam',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      },
      {
        name: 'Steve',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      },
      {
        name: 'Susie',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      },
      {
        name: 'Savannah',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      },
      {
        name: 'Sebastian',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      },
      {
        name: 'Silas',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      },
      {
        name: 'Stella',
        bio:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere atque culpa repellendus voluptatum nemo, deserunt praesentium quisquam laborum, aut excepturi odio nam? Hic eveniet nisi nulla culpa nihil voluptate quisquam.'
      }
    ]
  };

  handleScroll = event => {
    if(event.deltaY < 0) {
      this.decrementActiveProfile(event)
    } else if(event.deltaY > 0) {
      this.incrementActiveProfile(event)
    }
  }

  incrementActiveProfile = event => {
    if (this.state.activeProfile < 8) {
      this.setState({ activeProfile: this.state.activeProfile + 1 });
    } else if (this.state.activeProfile >= 8) {
      this.setState({ activeProfile: 8 });
    }
  };

  decrementActiveProfile = event => {
    if (this.state.activeProfile <= 8) {
      this.setState({ activeProfile: this.state.activeProfile - 1 });
    } else if (this.state.activeProfile >= 1) {
      this.setState({ activeProfile: 1 });
    }
  };

  render() {
    return (
      <div className='aboutpage__wrapper' onWheel={this.handleScroll}>
        <Navbar />
        <div className='team__image'>
          <div className='profile__circle' id={`user${this.state.activeProfile}`}></div>
        </div>
        <h2>{this.state.teamMembers[this.state.activeProfile - 1].name}</h2>
        <p>{this.state.teamMembers[this.state.activeProfile - 1].bio}</p>
      </div>
    );
  }
}

export default AboutPage;
