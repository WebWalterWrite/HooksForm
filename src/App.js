import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Form } from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            introduction à React Hooks.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Hooks
          </a>
        </header>
        <main>
          <Form/>
        </main>
      </div>
    );
  }
}

export default App;
