import React, { Component } from 'react';

import { UserCreate } from './components/form/UserCreate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Front React Hooks with Back Nodemailer Nodemailer Gmail API.
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
          <UserCreate/>
        </main>
      </div>
    );
  }
}

export default App;
