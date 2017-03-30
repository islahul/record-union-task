import React from 'react';
import ReactDOM from 'react-dom';
import Notebook from './index';
import Store from '../../../store';

function setup(initialState) {
  const storeInstance = Store(initialState);

  return {
    storeInstance
  };
}

describe('Notebook actions test', () => {
  it('renders independently without crashing', () => {
    const {storeInstance} = setup();
  });
});
