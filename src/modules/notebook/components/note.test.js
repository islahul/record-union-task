import React from 'react';
import ReactDOM from 'react-dom';
import Note from './note';
import ReactTestUtils from 'react-addons-test-utils';

describe('Note component test', () => {
  it('renders independently without crash', () => {
    const div = document.createElement('div');
    const rendered = ReactDOM.render((
      <Note data={{
        timestamp: +new Date,
        content: 'hello',
        page_visible: true
      }} />
    ), div);
    const contentDOM = ReactTestUtils.findRenderedDOMComponentWithClass(
      rendered,
      'note-content'
    );

    expect(contentDOM.innerHTML).toBe('hello');
  });

  it('does not display note on page_visible=false', () => {
    const div = document.createElement('div');
    const rendered = ReactDOM.render((
      <Note data={{
        timestamp: +new Date,
        content: 'hello',
        page_visible: false
      }} />
    ), div);
    const noteDOM = ReactTestUtils.scryRenderedDOMComponentsWithClass(
      rendered,
      'note'
    );
    expect(noteDOM.length).toBe(0);
  });
});
