import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Paragraph from '../../components/Paragraph';

import './index.css';
class ContactPage extends Component {
  state = {
    formFields: [
      {
        textArea: false,
        title: 'Name',
        name: 'name',
        required: true
      },
      {
        textArea: false,
        title: 'Email Address',
        name: 'email',
        required: true
      },
      {
        textArea: false,
        title: 'Phone Number',
        name: 'number',
        required: false
      },
      {
        textArea: true,
        title: 'Comment',
        name: 'comment',
        required: true
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
    }

    console.log(formObject)
    //validate fields
    //make api call with this.state
  };

  render() {
    return (
      <div className='contactpage__wrapper'>
        <Navbar />
        <div className='contactpage__paragraph'>
          <Paragraph />
        </div>
        <div className='contactpage__content__wrapper'>
          <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
