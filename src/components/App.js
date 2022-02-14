import Todo from "./Todo/Todo";
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

import "./App.css";
import Timer from "./Pomodoro/Timer";

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Lawis React App" />
      <Content>
        <Timer />
        <Todo />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
