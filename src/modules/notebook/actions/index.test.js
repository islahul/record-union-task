import React from 'react';
import ReactDOM from 'react-dom';
import Notebook from './index';
import Store from '../../../store';
import { deleteNote } from './index';

function setup(initialState) {
  const storeInstance = Store(initialState);

  return {
    storeInstance
  };
}

jest.useFakeTimers();

describe('Notebook actions test', () => {
  it('Deletes note successfully', () => {
    const { storeInstance } = setup({
      notebook: {
        notes: [
          {
            timestamp: 1111111,
            content: 'Hello there'
          },
          {
            timestamp: 1111112,
            content: 'Hello there'
          },
          {
            timestamp: 1111113,
            content: 'Hello there'
          }
        ]
      }
    });
    let currentState = storeInstance.getState();
    expect(currentState.notebook.notes.length).toBe(3);
    storeInstance.dispatch(deleteNote({
      timestamp: 1111111,
      content: 'Hello there'
    }));

    currentState = storeInstance.getState();
    expect(currentState.notebook.notes.length).toBe(2);
    const remaining = currentState.notebook.notes.map((n) => n.timestamp);
    expect(remaining).toEqual([1111112, 1111113]);
  });
});
