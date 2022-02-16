import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

import "./App.css";
import Todo from "./Todo/Todo";
import Timer from "./Pomodoro/Timer";
import Coins from "./Coins/Coins";
import NotesApp from "./Notes/NotesApp";
import ChartApp from "./Chart/ChartApp";

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Lawis React App" />
      <Content>
        <ChartApp />
        <NotesApp />
        <Coins />
        <Timer />
        <Todo />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
