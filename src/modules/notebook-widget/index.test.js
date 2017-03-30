import React from 'react';
import ReactDOM from 'react-dom';
import NotebookWidget from './index';
import SmallNote from './components/small-note';
import Store from '../../store';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-addons-test-utils'

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
        <NotebookWidget />
      </Provider>
    ), div);
  });

  it('renders with empty data without crashing', () => {
    const div = document.createElement('div');
    const {storeInstance} = setup({
      notebook: {notes: []}
    });
    ReactDOM.render((
      <Provider store={storeInstance}>
        <NotebookWidget />
      </Provider>
    ), div);
  });

  it('renders with notes data without crashing', () => {
    const div = document.createElement('div');
    const startTimestamp = +new Date();
    const {storeInstance} = setup({
      notebook: {
        notes: [{
          timestamp: startTimestamp,
          content: 'Hello! this is a note'
        }, {
          timestamp: startTimestamp + 100,
          content: 'Hello! this is a note'
        }, {
          timestamp: startTimestamp + 200,
          content: 'Hello! this is a note'
        }]
      }
    });

    const rendered = ReactDOM.render((
      <Provider store={storeInstance}>
        <NotebookWidget />
      </Provider>
    ), div);
    let notes = ReactTestUtils.scryRenderedComponentsWithType(
      rendered,
      SmallNote
    );
    expect(notes.length).toBe(0); // Because widget minimized
  });
});
