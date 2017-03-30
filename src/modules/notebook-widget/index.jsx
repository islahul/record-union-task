import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SmallNote from './components/small-note';
import { addNote } from './actions/index.js';
import NoteForm from './components/note-form';
import './notebook-widget.css';

class NotebookWidget extends Component {
  static propTypes = {
    className: PropTypes.string,
    notebook: PropTypes.object,
    addNote: PropTypes.func
  };

  state = {
    minimized: true
  }

  handleAddNote = (noteContent) => {
    this.props.addNote({
      timestamp: +new Date(),
      content: noteContent
    });
  }

  handleWidgetIconClick = (e) => {
    this.setState({
      minimized: !this.state.minimized
    });
  }

  renderIcon = () => ((
    <div className='notebook-widget-icon-container' onClick={this.handleWidgetIconClick}>
      <div className='notebook-widget-icon' />
    </div>
  ));

  render() {
    const { notebook, className } = this.props;
    const { minimized } = this.state;

    if (minimized) {
      return (
        <div className={`${className || ''} notebook-widget`}>
          {this.renderIcon()}
        </div>
      );
    } else {
      return (
        <div className={`${className || ''} notebook-widget`}>
          <section className='notebook-widget-popup'>
            <header><h3>Add notes</h3></header>
            <section className='notebook-widget-list-container'>
              {notebook.notes.length === 0 ? (
                <div className='notebook-widget-empty-list-message'>
                  Add a note below to begin
                </div>
              ) : null}
              {notebook.notes.map((note, index) => (
                <SmallNote
                  key={index}
                  data={note}
                />
              ))}
            </section>
            <footer>
              <NoteForm onAddNote={this.handleAddNote} />
            </footer>
          </section>
          {this.renderIcon()}
        </div>
      )
    }
  }
}

export default connect(
  (state) => ({
    notebook: state.notebook
  }),
  (dispatch) => (bindActionCreators({
    addNote
  }, dispatch))
)(NotebookWidget);
