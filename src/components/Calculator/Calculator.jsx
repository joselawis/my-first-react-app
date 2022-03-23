import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
    };
  }

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: Number(value),
    });
  };

  handleResult = () => {
    this.setState((prevState) => ({
      result: prevState.number1 + prevState.number2,
    }));
  };

  render() {
    const { number1, number2, result } = this.state;
    return (
      <div className="Calculator">
        <input
          onChange={this.handleOnChange}
          name="number1"
          type="text"
          value={number1}
        />
        {' + '}
        <input
          onChange={this.handleOnChange}
          name="number2"
          type="text"
          value={number2}
        />
        <p>
          <button type="button" onClick={this.handleResult}>
            =
          </button>
        </p>
        <p className="result">{result}</p>
      </div>
    );
  }
}

export default Calculator;
