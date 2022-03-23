import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Notes.css';

const formatTime = 'YYYY-MM-DD HH:mm:ss';

class Notes extends Component {
  constructor() {
    super();

    // Guarde la fecha en la que los datos se renderizan por primera vez
    this.state = {
      lastUpdate: moment().format(formatTime).toString(),
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    // Si el prop de notes ha cambiado...
    if (nextProps.notes !== state.notes) {
      return {
        lastUpdate: moment().format(formatTime).toString(),
      };
    }
    return {
      lastUpdate: state.lastUpdate,
    };
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('Hasta la vista baby!');
    document.body.style = 'background: black';
    document.getElementById('unmountMessage').style.color = 'white';
  }

  render() {
    const { notes } = this.props;
    const { lastUpdate } = this.state;

    return (
      <div className="Notes">
        <h1>Notes:</h1>

        <ul>
          {notes.map((note) => (
            <li key={note.title}>
              {note.title} - {note.content}
            </li>
          ))}
        </ul>

        <p>
          Last Update: <strong>{lastUpdate}</strong>
        </p>
      </div>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    map: PropTypes.func
  })),
};

export default Notes;
