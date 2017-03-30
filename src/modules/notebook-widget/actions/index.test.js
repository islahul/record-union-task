import React from 'react';
import ReactDOM from 'react-dom';
import Notebook from './index';
import Store from '../../../store';
import { addNote } from './index';

function setup(initialState) {
  const storeInstance = Store(initialState);

  return {
    storeInstance
  };
}

jest.useFakeTimers();

describe('Notebook actions test', () => {
  it('Adds note successfully', () => {
    const { storeInstance } = setup();
    storeInstance.dispatch(addNote({
      timestamp: +new Date(),
      content: 'Hello there'
    }));

    // Two timers should start
    expect(setTimeout.mock.calls.length).toBe(2);
    let currentState = storeInstance.getState();
    expect(currentState.notebook.notes.length).toBe(0);

    // Let first timer end -> note added but page_visible is false
    jest.runTimersToTime(1050);
    currentState = storeInstance.getState();
    expect(currentState.notebook.notes.length).toBe(1);
    expect(currentState.notebook.notes[0].content).toBe('Hello there');
    expect(currentState.notebook.notes[0].page_visible).toBe(false);

    // Let second timer end -> page_visible becomes true
    jest.runTimersToTime(2050);
    currentState = storeInstance.getState();
    expect(currentState.notebook.notes.length).toBe(1);
    expect(currentState.notebook.notes[0].page_visible).toBe(true);
  });
});
