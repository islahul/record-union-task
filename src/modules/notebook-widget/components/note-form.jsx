import React, { Component, PropTypes } from 'react';
import throttle from 'lodash.throttle';
import './note-form.css';

export default class NoteForm extends Component {
  static propTypes = {
    onAddNote: PropTypes.func
  }

  state = {
    inputValue: ''
  }

  submitForm = throttle(() => {
    if (!this.state.inputValue) {
      this.setState({
        errorMessage: 'Can\'t add an empty note'
      });
      return;
    }

    this.props.onAddNote(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }, 100, { leading: true });

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
      errorMessage: null
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.submitForm();
  };

  render() {
    const {inputValue} = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} className='note-form'>
        <input
          className='note-form-input'
          placeholder='Enter note here'
          type='text'
          value={inputValue}
          autoFocus
          onChange={this.handleInputChange} />
        <button
          className='note-form-submit'
          type='submit'
          onClick={this.handleFormSubmit}>Add</button>
      </form>
    )
  }
}
