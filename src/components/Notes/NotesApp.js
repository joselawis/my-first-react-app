import React, { Component } from "react";
import Notes from "./Notes";

import { notes1, notes2 } from "./data";

class NotesApp extends Component {
  constructor() {
    super();

    this.state = {
      notes: notes1,
    };
  }

  componentDidMount() {
    // Despues de 10 segundos concatena con los datos de notes2
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2],
      });
    }, 10000);
  }

  render() {
    return <Notes notes={this.state.notes} />;
  }
}

export default NotesApp;
