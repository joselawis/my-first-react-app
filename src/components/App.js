import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

import "./App.css";
import Todo from "./Todo/Todo";
import Timer from "./Pomodoro/Timer";
import Coins from "./Coins/Coins";
import NotesApp from "./Notes/NotesApp";
import ChartApp from "./Chart/ChartApp";
import Animation from "./Animation/Animation";
import Numbers from "./Numbers/Numbers";

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Lawis React App" />
      <Content>
        <Numbers />
        <Animation />
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
