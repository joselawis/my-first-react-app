import React, { Component } from "react";

import "./Home.css";

class Home extends Component {
  render() {
    const buttonStyle = {
      backgroundColor: "gray",
      border: "1px solid black",
    };

    return (
      <div className="Home">
        <h1>Welcome to Codejobs</h1>
        <p>
          In this recipe bla bla bla <a href="http://www.twitch.tv/lawis">Enlace</a>
        </p>
        <p>
          <button style={buttonStyle}>Click me!!!</button>
        </p>
      </div>
    );
  }
}

export default Home;
