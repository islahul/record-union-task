import React from 'react';
import ReactDOM from 'react-dom';
import Notebook from './index';
import Store from '../../store';
import { Provider } from 'react-redux';
import Note from './components/note';
import ReactTestUtils from 'react-addons-test-utils';

function setup(initialState) {
  const storeInstance = Store(initialState);

  return {
    storeInstance
  };
}

describe('Notebook widget test', () => {
  it('renders independently without crashing', () => {
    const div = document.createElement('div');
    const {storeInstance} = setup();
    ReactDOM.render((
      <Provider store={storeInstance}>
        <Notebook />
      </Provider>
    ), div);
  });

  it('renders with empty data without crashing', () => {
    const div = document.createElement('div');
    const {storeInstance} = setup({
      notebook: {notes: []}
    });
    const rendered = ReactDOM.render((
      <Provider store={storeInstance}>
        <Notebook />
      </Provider>
    ), div);
    const notes = ReactTestUtils.scryRenderedComponentsWithType(
      rendered,
      Note
    );
    expect(notes.length).toBe(0);
  });

  it('renders with notes data without crashing', () => {
    const div = document.createElement('div');
    const startTimestamp = +new Date();
    const {storeInstance} = setup({
      notebook: {
        notes: [{
          timestamp: startTimestamp,
          content: 'Hello! this is a note',
          page_visible: true
        }, {
          timestamp: startTimestamp + 100,
          content: 'Hello! this is a note',
          page_visible: true
        }, {
          timestamp: startTimestamp + 200,
          content: 'Hello! this is a note',
          page_visible: false
        }]
      }
    });
    const rendered = ReactDOM.render((
      <Provider store={storeInstance}>
        <Notebook />
      </Provider>
    ), div);

    const notes = ReactTestUtils.scryRenderedComponentsWithType(
      rendered,
      Note
    );
    expect(notes.length).toBe(3);

    const visibleNotes = ReactTestUtils.scryRenderedDOMComponentsWithClass(
      rendered,
      'note'
    );
    expect(visibleNotes.length).toBe(2);
  });
});
