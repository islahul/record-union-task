import React, { Component, PropTypes } from 'react';
import format from 'date-fns/format';
import './small-note.css';

export default class SmallNote extends Component {
  static propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func
  }

  renderTimestamp(timestamp) {
    const date = new Date(timestamp);
    return format(date, 'DD/MM/YY h:mma');
  }

  render() {
    const { data } = this.props;
    return (
      <div className='small-note'>
        <div className='small-note-header'>{this.renderTimestamp(data.timestamp)}</div>
        <div className='small-note-content'>{data.content}</div>
      </div>
    );
  }
}
