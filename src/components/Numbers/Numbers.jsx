import React, { Component } from 'react';
import './Numbers.css';

import Result from './Result';

class Numbers extends Component {
  constructor() {
    super();
    this.state = { numbers: '', results: [] };
  }

  handleNumberChange = (e) => {
    const {
      target: { value },
    } = e;

    const numbers = Array.from(value);

    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    this.setState((prevState) => ({
      numbers: value,
      results: [...prevState.results, result],
    }));
  };

  render() {
    const { numbers, results } = this.state;

    return (
      <div className="Numbers">
        <input
          type="number"
          value={numbers}
          onChange={this.handleNumberChange}
        />
        <ul>
          {results.map((result) => (
            <Result key={result.id} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Numbers;
