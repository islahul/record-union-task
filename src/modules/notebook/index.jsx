import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Note from './components/note';
import { deleteNote } from './actions/index.js';
import './notebook.css';

class Notebook extends Component {
  static propTypes = {
    notebook: PropTypes.object,
    deleteNote: PropTypes.func
  };

  handleDeleteNote = (note) => {
    this.props.deleteNote(note);
  }

  render() {
    const { notebook } = this.props;
    return (
      <section className='notebook'>
        {notebook && notebook.notes.map((note, index) => (
          <Note
            key={index}
            data={note}
            onDelete={this.handleDeleteNote}
          />
        ))}
      </section>
    )
  }
}

export default connect(
  (state) => ({
    notebook: state.notebook
  }),
  (dispatch) => (bindActionCreators({
    deleteNote
  }, dispatch))
)(Notebook);
