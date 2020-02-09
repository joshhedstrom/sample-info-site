import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Paragraph from '../../components/Paragraph';
import Form from '../../components/Form';

import './index.css';
class ContactPage extends Component {
  state = {
    formFields: [
      {
        textArea: false,
        title: 'Name',
        name: 'name',
      },
      {
        textArea: false,
        title: 'Email Address',
        name: 'email',
      },
      {
        textArea: false,
        title: 'Phone Number',
        name: 'number',
      },
      {
        textArea: true,
        title: 'Comment',
        name: 'comment',
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
      <>
      <div className='contactpage__wrapper'>
            <Navbar />
        <div className='contactpage__banner'>
          <Banner image='/assets/cloud-banner.jpg'>
          </Banner>
        </div>
        <div className='contactpage__content__wrapper'>
          <Paragraph />
          <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
      </>
    );
  }
}

export default ContactPage;
