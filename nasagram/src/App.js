import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <section className="app">
        <p>Is this working?</p>
      </section>
    );
  }
}

export default App;
