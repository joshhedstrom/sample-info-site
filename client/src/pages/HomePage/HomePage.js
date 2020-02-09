import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import './index.css';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Paragraph from '../../components/Paragraph/Paragraph';
import Form from '../../components/Form';

class HomePage extends Component {
  state = {
    formFields: [
      {
        textArea: false,
        title: 'Name',
        name: 'name'
      },
      {
        textArea: false,
        title: 'Email Address',
        name: 'email'
      },
      {
        textArea: false,
        title: 'Phone Number',
        name: 'number'
      },
      {
        textArea: true,
        title: 'Comment',
        name: 'comment'
      }
    ]
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    let formObject = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      comment: this.state.comment
    };

    console.log(formObject);
    //validate fields
    //make api call with this.state
  };

  render() {
    return (
      <div className='homepage__wrapper'>
        <div className='logo__wrapper scroll__child'>
          <Navbar />
          <div className='homepage__jumbotron'>
            <Jumbotron text='classic clothing' />
          </div>
        </div>
        <div className='center__wrapper scroll__child'>
          <div className='frosted__glass__wrapper'>
            <Paragraph />
          </div>
        </div>
        <div className='center__wrapper scroll__child'>
          <div className='frosted__glass__wrapper'>
            <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
