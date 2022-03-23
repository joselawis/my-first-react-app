import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Result extends PureComponent {
  render() {
    const { result } = this.props;
    return <li>{result}</li>;
  }
}

Result.propTypes = { result: PropTypes.string };

export default Result;
