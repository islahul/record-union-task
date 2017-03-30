import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notebook from './modules/notebook/';
import NotebookWidget from './modules/notebook-widget';

class App extends Component {
  render() {
    return (
      <div className='page'>
        <div className='page-header'>
          <img src={logo} className='page-header-logo' alt='logo' />
        </div>
        <section className='page-content'>
          <h1 className='page-title'>Notes</h1>
          <Notebook />
          <NotebookWidget />
        </section>
      </div>
    );
  }
}

export default App;
