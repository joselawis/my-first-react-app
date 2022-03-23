import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  constructor() {
    super(); // Necesario para poder utilizar el 'this'
    this.state = {
      name: 'Jose',
    };
  }

  componentDidMount() {
    // Se ejecuta una vez que se ha montado.
    setTimeout(() => {
      this.setState({
        name: 'Lawis',
      });
    }, 1000);
  }

  render() {
    const { name } = this.state;

    // eslint-disable-next-line no-console
    console.log('Name: ', name);

    return (
      <div className="Home">
        <h1>Hi, my name is {name}</h1>
        <p>
          This is my <a href="http://www.twitch.tv/lawis">Twitch</a> channel
        </p>
      </div>
    );
  }
}

export default Home;
