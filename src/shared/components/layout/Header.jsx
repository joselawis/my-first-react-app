import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

function Header(props) {
  const {
    title = 'Welcome to Lawis React App',
    url = 'http://www.twitch.tv/lawis',
  } = props;

  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Header;
