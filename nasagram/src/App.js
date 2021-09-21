import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=qYMkhKNzouHj0LwWEqREsgVmVgZ2EmZ3JbfrPBC2")
    .then(response => {
        if (!response.ok) {
          throw Error('Error fetching the photos');
        }
        return response.json()
    .then(allData => {
      this.setState({ photos: allData });
       })
    .catch(err => {
      throw Error(err.message);
        });
      }
    );
  }

  render() {
    return (
      <section className="app">
        <p>Is this working?</p>
      </section>
    );
  }
}

export default App;
