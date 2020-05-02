import React, { Component } from 'react';

export default class BuyBook extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: '',
        email: '',
        confirmEmail: '',
      },
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    alert('Your request has been made!');
    // controlled form component reset
    this.setState({
      form: { name: '', email: '', confirm: '', confirmEmail: '' },
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ form: { [name]: value } });
  };

  render() {
    const { name, email, confirmEmail } = this.state.form;
    return (
      <section id='buy-book'>
        <div className='want-to-purchase'>
          <h1>Want to see more of the book before purchasing?</h1>
          <p>
            Fill in the form to request an insightful selection of chapters from
            the full book.
          </p>
        </div>
        <form onSubmit={this.handleSubmit} id='buy-book-form'>
          <label htmlFor='name'>Name:</label>
          <input
            className='input'
            type='text'
            placeholder='Please enter your name...'
            name='name'
            value={name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            className='input'
            type='email'
            placeholder='Please enter your email...'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor='confirmEmail'>Confirm Email</label>
          <input
            className='input'
            type='email'
            placeholder='Please confirm your email...'
            name='confirmEmail'
            value={confirmEmail}
            onChange={this.handleChange}
            required
          />
          <button className='btn'>Request Form</button>
        </form>
      </section>
    );
  }
}
