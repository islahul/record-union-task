import React, { Component, PropTypes } from 'react';
import format from 'date-fns/format';
import './note.css';

export default class Note extends Component {
  static propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func
  }

  renderTimestamp(timestamp) {
    const date = new Date(timestamp);
    return format(date, 'MMMM D, YYYY h:mma');
  }

  handleDeleteNote = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.data);
  }

  render() {
    const { data } = this.props;

    if (!data.page_visible) {
      return null;
    }

    return (
      <div className='note'>
        <div className='note-header'>{this.renderTimestamp(data.timestamp)} ·
          {' '}
          <a className='note-header-delete'
            onClick={this.handleDeleteNote}>delete</a>
        </div>
        <div className='note-content'>{data.content}</div>
      </div>
    );
  }
}
