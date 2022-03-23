import React, { Component } from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';
import './Chart.css';

class Chart extends Component {
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const { columns, chartType } = this.props;

    c3.generate({
      bindto: '#chart',
      data: {
        columns,
        type: chartType,
      },
    });
  }

  render() {
    return <div id="chart" />;
  }
}

Chart.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
  chartType: PropTypes.string,
};

export default Chart;
