import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form/Form';

import './index.css';
class ContactPage extends Component {
  state = {
    formFields: [
      {
        textarea: false,
        title: 'Name',
        required: true
      },
      {
        textarea: false,
        title: 'Email Address',
        required: true
      },
      {
        textarea: false,
        title: 'Phone Number',
        required: false
      },
      {
        textarea: true,
        title: 'Comment',
        required: true
      }
    ]
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    //validate fields
    //make api call with this.state
  };

  render() {
    return (
      <div className="contactpage__wrapper">
        <Navbar />
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ContactPage;
