import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';
import { Provider } from 'react-redux';

function setup() {
  const storeInstance = Store();

  return {
    storeInstance
  };
}

describe('Root test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const {storeInstance} = setup();
    ReactDOM.render((
      <Provider store={storeInstance}>
        <App />
      </Provider>
    ), div);
  });
});
