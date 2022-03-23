import React, { Component } from 'react';
import Notes from './Notes';

import { notes1, notes2 } from './data';

class NotesApp extends Component {
  constructor() {
    super();

    this.state = {
      notes: notes1,
    };
  }

  componentDidMount() {
    const { notes } = this.state;

    // Después de 10 segundos concatena con los datos de notes2
    setTimeout(() => {
      this.setState({
        notes: [...notes, ...notes2],
      });
    }, 10000);
  }

  render() {
    const { notes } = this.state;

    return <Notes notes={notes} />;
  }
}

export default NotesApp;
