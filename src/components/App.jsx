import Popup from 'react-popup';
import React from 'react';
import Helmet from 'react-helmet';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';
import './Popup.css';
import Todo from './Todo/Todo';
import Timer from './Pomodoro/Timer';
import Coins from './Coins/Coins';
import NotesApp from './Notes/NotesApp';
import ChartApp from './Chart/ChartApp';
import Animation from './Animation/Animation';
import Numbers from './Numbers/Numbers';
import Xss from './Xss/Xss';
import Calculator from './Calculator/Calculator';
import Person from './Person/Person';

function App() {
  const chapter = 3;

  return (
    <div className="App">
      <Helmet
        title="Person Information"
        meta={[
          { name: 'title', content: 'Person Information' },
          {
            name: 'description',
            content: 'This recipe talks about React Helmet',
          },
        ]}
      />
      <Header title="Welcome to Lawis React App" />
      <Content>
        {chapter === 3 && (
          <div>
            <Popup />
            <Person />
            <Calculator />
          </div>
        )}
        {chapter === 2 && (
          <div>
            <Xss />
            <Numbers />
            <Animation />
            <ChartApp />
            <NotesApp />
            <Coins />
            <Timer />
            <Todo />
          </div>
        )}
      </Content>
      <Footer />
    </div>
  );
}

export default App;
