import React, { Component } from 'react';
import './Animation.css';

class Animation extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  componentDidUpdate(newProps, newState) {
    if (!newState.show) {
      document.getElementById('fade').style = 'opacity: 0;';
    } else {
      document.getElementById('fade').style = 'opacity: 1;';
    }
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { show } = this.state;
    return (
      <div className="Animation">
        <button type="button" onClick={this.toggleCollapse}>
          {show ? 'Collapse' : 'Expand'}
        </button>
        <div id="fade" className={show ? 'transition show' : 'transition'}>
          This text will disappear
        </div>
      </div>
    );
  }
}

export default Animation;
