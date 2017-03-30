import React from 'react';
import ReactDOM from 'react-dom';
import SmallNote from './small-note';
import ReactTestUtils from 'react-addons-test-utils';

describe('Small Note component test', () => {
  it('renders independently without crash', () => {
    const div = document.createElement('div');
    const rendered = ReactDOM.render((
      <SmallNote data={{
        timestamp: +new Date,
        content: 'hello'
      }} />
    ), div);
    const contentDOM = ReactTestUtils.findRenderedDOMComponentWithClass(
      rendered,
      'small-note-content'
    );

    expect(contentDOM.innerHTML).toBe('hello');
  });
});
